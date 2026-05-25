import GlobalCta from "@/components/GlobalCta";
import LoanCalculatorContent from "@/components/LoanCalculatorContent";
import LoanCalculatorFAQs from "@/components/LoanCalculatorFAQs";
import LoanCalculatorHero from "@/components/LoanCalculatorHero";

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