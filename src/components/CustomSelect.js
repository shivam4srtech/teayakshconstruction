"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({ options, placeholder, name, className, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const selectRef = useRef(null); // Reference to the whole select component
  const selectedValue = value ?? selected;
  const selectedOption = options.find((option) => {
    const optionValue = typeof option === "string" ? option : option.value;
    return optionValue === selectedValue;
  });
  const selectedLabel =
    typeof selectedOption === "string" ? selectedOption : selectedOption?.label;

  // Close dropdown when clicking anywhere outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    if (onChange) {
      onChange(value);
    } else {
      setSelected(value);
    }
    setOpen(false);
  };

  // The "Stunning" default classes from your Hero section
  const defaultStyles = "w-full bg-[#F8F5F2] border-2 border-transparent rounded-2xl px-5 py-4 flex justify-between items-center cursor-pointer transition-all";

  return (
    <div className="relative w-full text-sm" ref={selectRef}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selectedValue} />

      {/* Select box */}
      <div
        onClick={() => setOpen(!open)}
        className={className || defaultStyles}
      >
        <span className={selectedValue ? "text-[#2D2926] font-medium" : "text-gray-300"}>
          {selectedLabel || selectedValue || placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`text-gray-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
        />
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute z-[100] w-full bg-white border border-gray-100 mt-2 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          <div className="max-h-60 overflow-y-auto no-scrollbar">
            {options.map((option, index) => {
              const optionValue = typeof option === "string" ? option : option.value;
              const optionLabel = typeof option === "string" ? option : option.label;

              return (
              <div
                key={index}
                onClick={() => handleSelect(optionValue)}
                className="px-5 py-4 hover:bg-[#F8F5F2] hover:text-[#A67153] cursor-pointer transition-colors font-medium text-[#2D2926] border-b border-gray-50 last:border-none"
              >
                {optionLabel}
              </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
