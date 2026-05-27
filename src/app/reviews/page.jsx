import AllTestimonials from "@/components/AllTestimonials";
import GlobalCta from "@/components/GlobalCta";
import TestimonialHero from "@/components/TestimonialHero";
import { getTestimonials } from "@/lib/trayakshApi";
export const metadata = {
  title: 'Client Reviews & Testimonials | TRAYAKSH Construction',
  description: 'Read reviews and testimonials from our clients. See what homeowners and businesses say about our luxury construction, design quality, and timely project delivery.',
  keywords: ['trayaksh construction reviews', 'trayaksh construction testimonials', 'luxury builders reviews', 'best construction company feedback', 'client reviews'],
};
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
