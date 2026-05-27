import BlogJournalWithSidebar from "@/components/BlogJournalWithSidebar";
import BlogListHero from "@/components/BlogListHero";
import GlobalCta from "@/components/GlobalCta";

export const metadata = {
  title: 'Luxury Real Estate & Construction Blogs | TRAYAKSH Construction',
  description: 'Explore expert insights, building tips, home design trends, and architectural advice on luxury home construction and interior design from industry professionals.',
  keywords: ['construction blogs', 'luxury home building tips', 'architecture insights', 'home design trends', 'trayaksh construction updates', 'real estate blogs'],
};
export default function AllBlogs(){
    return(
        <>
            <BlogListHero/>
            <BlogJournalWithSidebar/>
            <GlobalCta/>
        </>
    )
}