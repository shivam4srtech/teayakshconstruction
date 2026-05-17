import BlogJournalWithSidebar from "@/components/BlogJournalWithSidebar";
import BlogListHero from "@/components/BlogListHero";
import GlobalCta from "@/components/GlobalCta";


export default function AllBlogs(){
    return(
        <>
            <BlogListHero/>
            <BlogJournalWithSidebar/>
            <GlobalCta/>
        </>
    )
}