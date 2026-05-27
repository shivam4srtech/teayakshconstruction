import GlobalCta from "@/components/GlobalCta";
import LoanCalculatorContent from "@/components/LoanCalculatorContent";
import LoanCalculatorFAQs from "@/components/LoanCalculatorFAQs";
import LoanCalculatorHero from "@/components/LoanCalculatorHero";
export const metadata = {
  title: 'Home Loan EMI Calculator | TRAYAKSH Construction',
  description: 'Calculate your monthly home loan installments easily with our EMI calculator. Plan your finances, interest rates, and loan tenure for your dream luxury home.',
  keywords: ['home loan emi calculator', 'housing loan calculator', 'house loan emi', 'trayaksh construction emi calculator', 'mortgage calculator india'],
};
export default function HomeEmiPage(){
    return(
        <>
            <LoanCalculatorHero/>
            <LoanCalculatorContent/>
            <LoanCalculatorFAQs/>
            <GlobalCta/>
        </>
    )
}