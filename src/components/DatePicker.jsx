import React from 'react';

function DatePicker({ onClick, label, date, className }) {
  return (
    <div className={className} onClick={onClick}>
      <h3 className="text-sm font-semibold">{label}</h3>
      <div className="mt-2">{"Select Date"}</div>
    </div>
  );
}

export default DatePicker;
