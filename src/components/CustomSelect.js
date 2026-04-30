"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({ options, placeholder, name }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className="relative w-full text-sm">
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selected} />

      {/* Select box */}
      <div
        onClick={() => setOpen(!open)}
        className="w-full bg-gray-50 border border-gray-200 p-2 flex justify-between items-center cursor-pointer"
      >
        <span className={selected ? "text-black" : "text-gray-400"}>
          {selected || placeholder}
        </span>
        <ChevronDown size={16} />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 w-full bg-white border border-gray-200 mt-1 shadow-md">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;