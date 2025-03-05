import React from "react";
import "./AppButton.css";

function AppButton({ title, onClick, className }) {
  return (
    <div>
      <button
        className={`bg-[#5A2360] text-white h-10 text-center relative custom-border shadow-lg shadow-gray-900/5 cursor-pointer ${className}`}
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}

export default AppButton;