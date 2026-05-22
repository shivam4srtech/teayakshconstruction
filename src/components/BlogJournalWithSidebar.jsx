import { getBlogs } from "@/lib/trayakshApi";
import BlogJournalWithSidebarClient from "./BlogJournalWithSidebarClient";

export default async function BlogJournalWithSidebar() {
  let blogs = [];

  try {
    blogs = await getBlogs();
  } catch (error) {
    console.error("Unable to load blog journal posts", error);
  }

  return <BlogJournalWithSidebarClient blogs={blogs} />;
}
