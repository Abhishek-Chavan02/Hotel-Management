import React from 'react';

function DropDownSelector({ className, label, name, value, onChange, options, label1 }) {
  return (
    <div className={className}>
      <h3 className="text-sm font-semibold">{label}</h3>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full text-center bg-[#5A2360] text-white rounded-md px-2 py-1 cursor-pointer"
      ><option value="" disabled>{label1}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDownSelector;
