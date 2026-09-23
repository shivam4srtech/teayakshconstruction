import MedicalBoxNavbar from '@/components/MedicalBoxNavbar';
import MedicalBoxFooter from '@/components/MedicalBoxFooter';
import MedicalBoxPageLoader from '@/components/MedicalBoxPageLoader';

export default function MedicalBoxesLayout({ children }) {
  return (
    <div id="medical-boxes-page" className="min-h-screen flex flex-col bg-white">
      <MedicalBoxPageLoader />
      <MedicalBoxNavbar />
      <div className="flex-1">
        {children}
      </div>
      <MedicalBoxFooter />
    </div>
  );
}
