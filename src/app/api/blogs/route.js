import { getBlogs } from "@/lib/trayakshApi";

export async function GET() {
  try {
    const blogs = await getBlogs();

    return Response.json({ blogs });
  } catch (error) {
    console.error("Blogs API Error:", error);

    return Response.json({ blogs: [] }, { status: 500 });
  }
}
