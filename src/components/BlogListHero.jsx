import { getBlogs } from "@/lib/trayakshApi";
import BlogListHeroClient from "./BlogListHeroClient";

export default async function BlogListHero() {
  let blogs = [];

  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error("Unable to load blog hero posts", error);
  }

  return <BlogListHeroClient blogs={blogs.slice(0, 5)} />;
}
