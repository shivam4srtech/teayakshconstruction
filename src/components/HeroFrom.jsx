"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { IoMdSend } from "react-icons/io";
import { sendConsultationLead } from "@/app/actions/sendConsultationLead";
import { useCityOptions } from "@/hooks/useCityOptions";
import CustomSelect from "./CustomSelect";

const INITIAL_FORM = {
  name: "",
  phone: "",
  city: "",
  projectType: "",
};

const PROJECT_TYPES = [
  "Commercial Construction",
  "Residential Construction",
  "Residential Renovation",
  "Architecture Planning",
  "Interior Design",
  "Pharmacy Setup",
];

function FieldError({ message }) {
  if (!message) return null;

  return <p className="text-[10px] font-bold uppercase tracking-wider text-red-500">{message}</p>;
}

export default function HeroFrom() {
  const { cityOptions, isLoadingCities } = useCityOptions();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [fieldErrors, setFieldErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setFieldErrors((prev) => ({ ...prev, [field]: "" }));
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const result = await sendConsultationLead({
      ...formData,
      requireProjectType: true,
      source: "Landing Page",
    });

    setIsSubmitting(false);
    setFieldErrors(result.fieldErrors || {});
    setMessage(result.message || "");

    if (result.ok) {
      setIsSuccess(true);
      setFormData(INITIAL_FORM);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-6 text-center">
        <CheckCircle2 className="mx-auto mb-3 text-green-600" size={34} />
        <h3 className="text-xl font-bold text-brand-dark">Enquiry Sent</h3>
        <p className="mt-2 text-sm text-gray-500">{message}</p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setMessage("");
          }}
          className="mt-5 text-[10px] font-black uppercase tracking-widest text-brand"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-1.5">
          <input
            type="text"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={`w-full bg-gray-50 border p-2 outline-none focus:border-brand transition-colors text-sm ${fieldErrors.name ? "border-red-300" : "border-gray-200"}`}
            placeholder="Name"
          />
          <FieldError message={fieldErrors.name} />
        </div>

        <div className="space-y-1.5">
          <input
            type="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={`w-full bg-gray-50 border p-2 outline-none focus:border-brand transition-colors text-sm ${fieldErrors.phone ? "border-red-300" : "border-gray-200"}`}
            placeholder="Phone No."
          />
          <FieldError message={fieldErrors.phone} />
        </div>

        
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-1.5">
          <CustomSelect
            name="city"
            aria-label='select city'
            value={formData.city}
            onChange={(value) => updateField("city", value)}
            className={`w-full bg-gray-50 border p-2 flex justify-between items-center cursor-pointer ${fieldErrors.city ? "border-red-300" : "border-gray-200"}`}
            placeholder={isLoadingCities ? "---Loading Cities---" : "---Select City---"}
            options={cityOptions}
          />
          <FieldError message={fieldErrors.city} />
        </div>

        <div className="space-y-1.5">
          <CustomSelect
            name="project_type"
            aria-label='select project type'
            value={formData.projectType}
            onChange={(value) => updateField("projectType", value)}
            className={`w-full bg-gray-50 border p-2 flex justify-between items-center cursor-pointer ${fieldErrors.projectType ? "border-red-300" : "border-gray-200"}`}
            placeholder="---Project Type---"
            options={PROJECT_TYPES}
          />
          <FieldError message={fieldErrors.projectType} />
        </div>
      </div>

      {message && <p className="text-center text-xs font-bold text-red-500">{message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand-dark text-white py-4 flex items-center justify-center gap-3 group/btn hover:bg-brand transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="font-sans font-bold text-[11px] uppercase tracking-[0.2em]">
          {isSubmitting ? "Submitting" : "Submit Enquiry"}
        </span>
        {isSubmitting ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <IoMdSend size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        )}
      </button>

      <p className="text-[10px] text-gray-400 leading-relaxed border-t border-gray-100 pt-3">
        By submitting this form, you consent to sharing your details with TRAYAKSH Construction.
        We respect your privacy and never share your information with third parties.
      </p>
    </form>
  );
}
