import React from "react";
import { Input, Textarea } from "@material-tailwind/react";
import './InputField.css';

function InputField({ type, placeholder, name, value, onChange, className, customeClass }) {
  return (
    <div className={`w-full relative custom-border ${className}`}>
      {type === "textarea" ? (
        <Textarea
          type="text"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="!border !border-gray-300 !bg-purple-50 placeholder:italic text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 rounded-none border-none"
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      ) : (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className={`!border !border-gray-300 !bg-purple-50 placeholder:italic text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 rounded-none border-none` + customeClass}
          labelProps={{
            className: "hidden",
          }}
          containerProps={{ className: "min-w-[100px]" }}
        />
      )}
    </div>
  );
}

export default InputField;