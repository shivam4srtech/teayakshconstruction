import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Bath, BedDouble, Car, Compass, Layers, Maximize2, TreePine } from "lucide-react";
import GlobalCta from "@/components/GlobalCta";
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
      images: [floorPlan.image || NO_IMAGE],
    },
  };
}

export default async function FloorPlanDetailPage({ params }) {
  const { slug } = await params;
  const floorPlan = await getFloorPlanBySlug(slug);

  if (!floorPlan) notFound();

  const heroImage = floorPlan.threeDImage && floorPlan.threeDImage !== NO_IMAGE
    ? floorPlan.threeDImage
    : floorPlan.image;

  const specs = [
    { label: "Plot Size", value: floorPlan.dimensions, icon: Maximize2 },
    { label: "Facing", value: floorPlan.facing, icon: Compass },
    { label: "Floors", value: floorPlan.floors, icon: Layers },
    { label: "Bedrooms", value: floorPlan.bhk, icon: BedDouble },
    { label: "Bathrooms", value: floorPlan.bathrooms, icon: Bath },
    { label: "Parking", value: floorPlan.parking ? `${floorPlan.parking} Space` : "", icon: Car },
    { label: "Garden", value: floorPlan.gardenAvailable ? "Available" : "", icon: TreePine },
  ].filter((spec) => spec.value);

  return (
    <>
      <section className="pt-28 pb-16 bg-[#F8F5F2] text-[#2D2926]">
        <div className="max-w-7xl mx-auto px-5 lg:px-16 space-y-8">
          <Link href="/floor-plan" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-[#A67153]">
            <ArrowLeft size={14} /> Back to floor plans
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 bg-white rounded-[2rem] p-4 border border-gray-100 shadow-xl shadow-black/[0.005]">
              <div className="relative h-[320px] md:h-[520px] rounded-[1.5rem] overflow-hidden bg-gray-100">
                <Image
                  src={heroImage || NO_IMAGE}
                  alt={floorPlan.imageAlt || floorPlan.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-5">
              <div className="bg-white rounded-[2rem] p-7 border border-gray-100 shadow-xl shadow-black/[0.005] space-y-5">
                <span className="text-[10px] font-black uppercase tracking-[0.35em] text-[#A67153] block">
                  {floorPlan.type}
                </span>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                  {floorPlan.title}
                </h1>
                {floorPlan.excerpt && (
                  <p className="text-sm text-gray-500 leading-relaxed">{floorPlan.excerpt}</p>
                )}
                {floorPlan.planCode && (
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                    Plan Code: <span className="text-[#2D2926]">{floorPlan.planCode}</span>
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec) => {
                  const Icon = spec.icon;
                  return (
                    <div key={spec.label} className="bg-white rounded-2xl border border-gray-100 p-4">
                      <div className="flex items-center gap-2 text-[#A67153] mb-1">
                        <Icon size={14} />
                        <span className="text-[9px] uppercase tracking-widest text-gray-400 font-black">{spec.label}</span>
                      </div>
                      <p className="text-sm font-black text-[#2D2926]">{spec.value}</p>
                    </div>
                  );
                })}
              </div>
            </aside>
          </div>

          {floorPlan.description && (
            <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-gray-100 shadow-xl shadow-black/[0.005]">
              <div className="blog-rich-content" dangerouslySetInnerHTML={{ __html: floorPlan.description }} />
            </div>
          )}

          {floorPlan.drawingImages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Floor Drawings</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {floorPlan.drawingImages.map((drawing) => (
                  <div key={drawing.caption} className="bg-white rounded-[1.5rem] p-4 border border-gray-100">
                    <div className="relative h-72 rounded-[1rem] overflow-hidden bg-gray-100">
                      <Image src={drawing.url || NO_IMAGE} alt={drawing.caption} fill className="object-cover" />
                    </div>
                    <h3 className="mt-4 text-sm font-bold">{drawing.caption}</h3>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <GlobalCta />
    </>
  );
}
