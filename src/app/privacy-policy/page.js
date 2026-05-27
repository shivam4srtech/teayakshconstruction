import PrivacyPolicyView from "@/components/PrivacyPolicyView";
export const metadata = {
  title: 'Privacy Policy | TRAYAKSH Construction',
  description: 'Read the privacy policy of TRAYAKSH Construction to understand how we collect, use, protect, and manage your personal data and information on our website.',
  keywords: ['privacy policy', 'trayaksh construction privacy', 'data protection policy', 'website terms and privacy'],
};
export default function PrivacyPolicyPage(){
    return(
        <>
            <PrivacyPolicyView/>
        </>
    )
}