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
  const slug = blog?.slug ? `/blog/${blog.slug}` : "/blogs";
  const title = blog?.title || "Untitled article";
  const publishedAt = blog?.published_at || blog?.created_at || blog?.updated_at || "";

  return {
    id: blog?.id || blog?.slug || title,
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

export async function getProjectByUrl(projectUrl) {
  if (!projectUrl) return null;

  const encodedProjectUrl = encodeURIComponent(projectUrl);

  const project = await fetchApi(`/project/${encodedProjectUrl}`, { allowNotFound: true });

  return project || fetchApi(`/${encodedProjectUrl}`, { allowNotFound: true });
}
