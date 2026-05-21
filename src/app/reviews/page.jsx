import AllTestimonials from "@/components/AllTestimonials";
import GlobalCta from "@/components/GlobalCta";
import TestimonialHero from "@/components/TestimonialHero";
import { getTestimonials } from "@/lib/trayakshApi";

export default async function Testimonial(){
    const testimonials = await getTestimonials();

    return(
        <>
            <TestimonialHero/>
            <AllTestimonials testimonials={testimonials}/>
            <GlobalCta/>
        </>
    )
}
