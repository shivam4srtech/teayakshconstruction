import { notFound } from "next/navigation";
import DetailedFloorPlanHero from "@/components/DetailedFloorPlanHero";
import FloorPlanDocumentation from "@/components/FloorPlanDocumentation";
import GlobalCta from "@/components/GlobalCta";
import PopularFloorPlans from "@/components/PopularFloorPlans";
import { getFloorPlanBySlug, getFloorPlans } from "@/lib/trayakshApi";

const NO_IMAGE = "/images/no-image.jpg";

export async function generateStaticParams() {
  const floorPlans = await getFloorPlans();

  return floorPlans
    .filter((plan) => plan.rawSlug)
    .map((plan) => ({ slug: plan.rawSlug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const floorPlan = await getFloorPlanBySlug(slug);

  if (!floorPlan) {
    return {
      title: "Floor Plan Not Found | TRAYAKSH Construction",
    };
  }

  return {
    title: floorPlan.seo?.meta_title || `${floorPlan.title} | TRAYAKSH Construction`,
    description: floorPlan.seo?.meta_description || floorPlan.excerpt,
    keywords: floorPlan.seo?.meta_keywords || undefined,
    alternates: floorPlan.seo?.canonical_url
      ? { canonical: floorPlan.seo.canonical_url }
      : undefined,
    openGraph: {
      title: floorPlan.seo?.meta_title || floorPlan.title,
      description: floorPlan.seo?.meta_description || floorPlan.excerpt,
      images: [floorPlan.featuredImage || floorPlan.image || NO_IMAGE],
    },
  };
}

export default async function FloorPlanDetailPage({ params }) {
  const { slug } = await params;
  const [floorPlan, floorPlans] = await Promise.all([
    getFloorPlanBySlug(slug),
    getFloorPlans(),
  ]);

  if (!floorPlan) notFound();

  const popularFloorPlans = floorPlans.filter((plan) => plan.rawSlug !== slug);

  return (
    <>
      <DetailedFloorPlanHero floorPlan={floorPlan} />
      <FloorPlanDocumentation floorPlan={floorPlan} />
      <PopularFloorPlans floorPlans={popularFloorPlans} />
      <GlobalCta />
    </>
  );
}
