import { notFound } from "next/navigation";
import GlobalCta from "@/components/GlobalCta";
import SingleBlogDetail from "@/components/SingleBlogDetail";
import { getBlogBySlug, getBlogs } from "@/lib/trayakshApi";

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs
    .filter((blog) => blog.rawSlug)
    .map((blog) => ({
      slug: blog.rawSlug,
    }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | TRAYAKSH Construction",
    };
  }

  return {
    title: blog.seo?.meta_title || `${blog.title} | TRAYAKSH Construction`,
    description: blog.seo?.meta_description || blog.shortDescription || blog.excerpt,
    keywords: blog.seo?.meta_keywords || undefined,
    alternates: blog.seo?.canonical_url
      ? {
          canonical: blog.seo.canonical_url,
        }
      : undefined,
    openGraph: {
      title: blog.seo?.meta_title || blog.title,
      description: blog.seo?.meta_description || blog.shortDescription || blog.excerpt,
      images: [blog.featuredImage],
      type: "article",
      publishedTime: blog.publishedAt || undefined,
      authors: blog.author ? [blog.author] : undefined,
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const [blog, blogs] = await Promise.all([
    getBlogBySlug(slug),
    getBlogs(),
  ]);

  if (!blog) notFound();

  const recentBlogs = blogs.filter((item) => item.rawSlug !== slug);

  return (
    <>
      <SingleBlogDetail blog={blog} recentBlogs={recentBlogs} />
      <GlobalCta />
    </>
  );
}
