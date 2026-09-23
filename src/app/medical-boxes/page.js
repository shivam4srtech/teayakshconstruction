import MedicalBoxHero from "@/components/MedicalBoxHero";
import MedicalBoxGrid from "@/components/MedicalBoxGrid";

export const metadata = {
  title: "100% Medical-Grade Plastic Storage Boxes | Divyamrit Industries",
  description: "Direct factory manufacturer of 100% medical-grade plastic storage boxes for pharmacies, hospital cleanrooms, and healthcare clinics. Specialized dust-repellent technology with distributor margins up to 63% off MRP.",
  keywords: [
    "medical storage boxes",
    "plastic pharmacy boxes",
    "divyamrit industries",
    "dust repellent medical boxes",
    "hospital medicine storage",
    "pharmacy rack organizers",
    "medical grade plastic containers",
    "pharmacy setup storage",
    "distributor medical boxes india"
  ],
  openGraph: {
    title: "100% Medical-Grade Plastic Storage Boxes | Divyamrit Industries",
    description: "Dust-repellent clinical storage boxes for pharmacies and hospitals. Available in 6 standard sizes with modular dividers and protective caps.",
    images: ["/images/divyamrit-logo.wepb"],
  },
};

export default function MedicalBoxesPage() {
  return (
    <main className="min-h-screen bg-white">
      <MedicalBoxHero />
      <MedicalBoxGrid />
    </main>
  );
}