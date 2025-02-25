import React from 'react';

function DatePicker({ onClick, label, date, className }) {
  return (
    <div className={className} onClick={onClick}>
      <h3 className="text-sm font-semibold">{label}</h3>
      <div className="mt-2 font-bold">{date.toISOString().split("T")[0]}</div>
    </div>
  );
}

export default DatePicker;
