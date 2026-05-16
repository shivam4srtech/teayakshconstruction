import CustomSelect from "./CustomSelect"
import { IoMdSend } from "react-icons/io";
export default function HeroFrom(){
    return(
        <>
            <form className="space-y-5 " onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1.5">
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-2 outline-none focus:border-brand transition-colors text-sm" placeholder="Name" />
                </div>
                <div className="space-y-1.5">
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 p-2 outline-none focus:border-brand transition-colors text-sm" placeholder="Phone No." />
                </div>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div className="space-y-1.5">
                        <CustomSelect
                        name="city"
                        className={"w-full bg-gray-50 border border-gray-200 p-2 flex justify-between items-center cursor-pointer"}
                        placeholder="---Select City---"
                        options={["Hyderabad", "Lucknow", "Benglure", "Other"]}
                        />
                    </div>
                    <div className="space-y-1.5">
                        <CustomSelect
                        name="project_type"
                        className={"w-full bg-gray-50 border border-gray-200 p-2 flex justify-between items-center cursor-pointer"}
                        placeholder="---Project Type---"
                        options={[
                            "Commercial Construction",
                            "Residential Renovation",
                            "Architecture Planning",
                        
                        ]}
                        />
                    </div>
                </div>
            
                <button className="w-full bg-brand-dark text-white py-4 flex items-center justify-center gap-3 group/btn hover:bg-brand transition-all duration-300">
                <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em]">Submit Enquiry</span>
                <IoMdSend  size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
                <p className="text-[10px] text-gray-400 leading-relaxed  border-t border-gray-100 pt-3">
                    By submitting this form, you consent to sharing your details with TRAYAKSH Construction. 
                    We respect your privacy and never share your information with third parties.
                </p>
          </form>
        </>
    )
}