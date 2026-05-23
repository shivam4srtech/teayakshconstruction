import "server-only";

const API_BASE_URL = "https://backend.trayakshconstruction.com/api";
const STORAGE_BASE_URL = "https://backend.trayakshconstruction.com/storage/";
const NO_IMAGE_PATH = "/images/no-image.jpg";

function getApiHeaders() {
  const secret = process.env.API_SECRET_KEY;

  return {
    Accept: "application/json",
    ...(secret
      ? {
          "X-API-KEY": secret,
          Authorization: `Bearer ${secret}`,
        }
      : {}),
  };
}

async function fetchApi(path, { allowNotFound = false } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: getApiHeaders(),
    next: { revalidate: 3600 },
  });

  if (allowNotFound && response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Trayaksh API request failed: ${path}`);
  }

  return response.json();
}

function unwrapList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.value)) return payload.value;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
}

function unwrapObject(payload) {
  if (!payload || Array.isArray(payload) || typeof payload !== "object") return {};
  if (payload.data && !Array.isArray(payload.data) && typeof payload.data === "object") {
    return payload.data;
  }
  if (payload.value && !Array.isArray(payload.value) && typeof payload.value === "object") {
    return payload.value;
  }
  return payload;
}

function formatBlogDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function resolveBlogImage(value) {
  if (!value) return NO_IMAGE_PATH;
  if (typeof value !== "string") return NO_IMAGE_PATH;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("/storage/")) {
    return `https://backend.trayakshconstruction.com${value}`;
  }
  if (value.startsWith("storage/")) {
    return `https://backend.trayakshconstruction.com/${value}`;
  }
  if (value.startsWith("/")) return value;

  return `${STORAGE_BASE_URL}${value}`;
}

function normalizeBlog(blog) {
  const rawSlug = blog?.slug || "";
  const slug = rawSlug ? `/blog/${rawSlug}` : "/blogs";
  const title = blog?.title || "Untitled article";
  const publishedAt = blog?.published_at || blog?.created_at || blog?.updated_at || "";

  return {
    id: blog?.id || blog?.slug || title,
    rawSlug,
    title,
    excerpt: blog?.short_description || blog?.excerpt || blog?.description || "",
    category: blog?.category?.name || "Journal",
    categorySlug: blog?.category?.slug || "",
    date: formatBlogDate(publishedAt),
    publishedAt,
    readTime: blog?.reading_time || blog?.readTime || "",
    thumbnail: resolveBlogImage(blog?.featured_image),
    imageAlt: blog?.featured_image_alt || title,
    slug,
    author: blog?.author?.name || "",
  };
}

function slugifyHeading(value) {
  return value
    .replace(/<[^>]*>/g, "")
    .toLowerCase()
    .trim()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function enrichBlogHtml(description = "") {
  const usedIds = new Map();
  const toc = [];
  const html = description.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, content) => {
    const existingId = attrs.match(/\sid=["']([^"']+)["']/i)?.[1];
    const baseId = existingId || slugifyHeading(content) || `section-${toc.length + 1}`;
    const count = usedIds.get(baseId) || 0;
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

    usedIds.set(baseId, count + 1);
    toc.push({
      id,
      label: decodeHtml(content.replace(/<[^>]*>/g, "").trim()),
      level: Number(level),
    });

    const cleanAttrs = attrs.replace(/\sid=["'][^"']+["']/i, "");
    return `<h${level}${cleanAttrs} id="${id}">${content}</h${level}>`;
  });

  return { html, toc };
}

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeBlogDetail(blog) {
  const baseBlog = normalizeBlog(blog);
  const { html, toc } = enrichBlogHtml(blog?.description || "");

  return {
    ...baseBlog,
    description: html,
    shortDescription: blog?.short_description || "",
    featuredImage: resolveBlogImage(blog?.featured_image),
    authorBio: blog?.author?.bio || "",
    authorAvatar: resolveBlogImage(blog?.author?.avatar),
    categoryDescription: blog?.category?.description || "",
    seo: blog?.seo || {},
    faqs: Array.isArray(blog?.faqs) ? blog.faqs : [],
    toc,
    plainText: stripHtml(blog?.description || blog?.short_description || ""),
    relatedBlogs: Array.isArray(blog?.related_blogs)
      ? sortRecentBlogs(blog.related_blogs.map(normalizeBlog))
      : [],
  };
}

function toTitleCase(value = "") {
  return value
    .toString()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatFloorCount(value) {
  const count = Number(value);
  if (!Number.isFinite(count)) return value || "";
  if (count === 1) return "Ground Floor Only";

  return `G+${count - 1}`;
}

function normalizeFloorPlan(plan) {
  const rawSlug = plan?.slug || "";
  const plotSize = plan?.plot_size || plan?.plot_area_sqft || "";
  const facing = plan?.facing_direction ? `${toTitleCase(plan.facing_direction)} Facing` : "";
  const propertyType = toTitleCase(plan?.property_type || "Floor Plan");
  const floors = formatFloorCount(plan?.total_floors);
  const title = plan?.title || "Untitled floor plan";

  return {
    id: plan?.id || rawSlug || title,
    rawSlug,
    slug: rawSlug ? `/floor-plan/${rawSlug}` : "/floor-plan",
    title,
    excerpt: plan?.short_description || "",
    description: plan?.description || "",
    planCode: plan?.plan_code || "",
    type: propertyType,
    dimensions: plotSize ? `${plotSize} sq.ft` : "",
    plotSize,
    facing,
    facingDirection: plan?.facing_direction || "",
    floors,
    totalFloors: plan?.total_floors || "",
    bhk: plan?.bhk_type || (plan?.bedrooms_count ? `${plan.bedrooms_count} BHK` : ""),
    bedrooms: plan?.bedrooms_count || "",
    bathrooms: plan?.bathrooms_count || "",
    kitchens: plan?.kitchens_count || "",
    balconies: plan?.balconies_count || "",
    parking: plan?.parking_count || "",
    budget: plan?.house_budget || "",
    vastuCompliant: Boolean(plan?.vastu_compliant),
    vastuLabel: plan?.vastu_compliant ? "Yes" : "No",
    gardenAvailable: Boolean(plan?.garden_available),
    specialRequirements: Array.isArray(plan?.special_requirements) ? plan.special_requirements : [],
    likes: plan?.likes_count || 0,
    views: plan?.views_count || 0,
    featuredImage: resolveBlogImage(plan?.featured_image),
    image: resolveBlogImage(plan?.featured_image),
    imageAlt: plan?.featured_image_alt || title,
    threeDImage: resolveBlogImage(plan?.["3d_image"]),
    blueprintPdf: plan?.plan_blueprint_pdf || "",
    drawingImages: Array.isArray(plan?.drawing_image)
      ? plan.drawing_image.map((image) => ({
          caption: image?.caption || "Drawing",
          url: resolveBlogImage(image?.urn),
        }))
      : [],
    floorLayout: Array.isArray(plan?.floor_layout) ? plan.floor_layout : [],
    faqs: Array.isArray(plan?.faqs) ? plan.faqs : [],
    seo: plan?.seo || {},
  };
}

function sortRecentBlogs(blogs) {
  return [...blogs].sort((a, b) => {
    const aTime = new Date(a.publishedAt || 0).getTime();
    const bTime = new Date(b.publishedAt || 0).getTime();

    return (Number.isNaN(bTime) ? 0 : bTime) - (Number.isNaN(aTime) ? 0 : aTime);
  });
}

export async function getEstimatorCatalog() {
  const [citiesPayload, packageRatesPayload, pricingTiersPayload] =
    await Promise.all([
      fetchApi("/cities"),
      fetchApi("/packages"),
      fetchApi("/pricing-tiers"),
    ]);

  return {
    cities: unwrapList(citiesPayload),
    packageRates: unwrapObject(packageRatesPayload),
    pricingTiers: unwrapList(pricingTiersPayload),
  };
}

export async function getProjects() {
  const projectsPayload = await fetchApi("/projects");

  return unwrapList(projectsPayload);
}

export async function getCities() {
  const citiesPayload = await fetchApi("/cities");

  return unwrapList(citiesPayload);
}

export async function getTestimonials() {
  const testimonialsPayload = await fetchApi("/testimonials");

  return unwrapList(testimonialsPayload);
}

export async function getBlogs() {
  const blogsPayload = await fetchApi("/blogs");

  return sortRecentBlogs(unwrapList(blogsPayload).map(normalizeBlog));
}

export async function getBlogsByCategory(categorySlug) {
  if (!categorySlug) return [];

  const encodedCategorySlug = encodeURIComponent(categorySlug);
  const blogsPayload = await fetchApi(`/blogs/category/${encodedCategorySlug}`);

  return sortRecentBlogs(unwrapList(blogsPayload).map(normalizeBlog));
}

export async function getBlogBySlug(slug) {
  if (!slug) return null;

  const encodedSlug = encodeURIComponent(slug);
  const blogPayload = await fetchApi(`/blog/${encodedSlug}`, { allowNotFound: true });
  const blog = unwrapObject(blogPayload);

  if (!blog || Object.keys(blog).length === 0) return null;

  return normalizeBlogDetail(blog);
}

export async function getFloorPlans() {
  const floorPlansPayload = await fetchApi("/floor-plans");

  const floorPlans = unwrapList(floorPlansPayload).map(normalizeFloorPlan);

  const detailedFloorPlans = await Promise.all(
    floorPlans.map(async (floorPlan) => {
      if (!floorPlan.rawSlug) return floorPlan;

      try {
        const detailPayload = await fetchApi(`/floor-plans/${encodeURIComponent(floorPlan.rawSlug)}`, {
          allowNotFound: true,
        });
        const detail = unwrapObject(detailPayload);

        return detail && Object.keys(detail).length > 0 ? normalizeFloorPlan(detail) : floorPlan;
      } catch (error) {
        console.error(`Unable to load floor plan detail: ${floorPlan.rawSlug}`, error);
        return floorPlan;
      }
    })
  );

  return detailedFloorPlans;
}

export async function getFloorPlanBySlug(slug) {
  if (!slug) return null;

  const encodedSlug = encodeURIComponent(slug);
  const floorPlanPayload = await fetchApi(`/floor-plans/${encodedSlug}`, { allowNotFound: true });
  const floorPlan = unwrapObject(floorPlanPayload);

  if (!floorPlan || Object.keys(floorPlan).length === 0) return null;

  return normalizeFloorPlan(floorPlan);
}

export async function getProjectByUrl(projectUrl) {
  if (!projectUrl) return null;

  const encodedProjectUrl = encodeURIComponent(projectUrl);

  const project = await fetchApi(`/project/${encodedProjectUrl}`, { allowNotFound: true });

  return project || fetchApi(`/${encodedProjectUrl}`, { allowNotFound: true });
}
