import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Card, CardBody } from "@material-tailwind/react";
import "./BookingTabs.css";

function BookingTabs() {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });
  const [selectedCity, setSelectedCity] = useState(""); 
  const calendarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setIsCheckInOpen(false);
        setIsCheckOutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDateChange = (newDate, isCheckIn) => {
    if (isCheckIn) {
      setCheckInDate(newDate);
      setIsCheckInOpen(false);
    } else {
      setCheckOutDate(newDate);
      setIsCheckOutOpen(false);
    }
  };

  const toggleCalendar = (e, isCheckIn) => {
    const rect = e.target.getBoundingClientRect();
    setCalendarPosition({
      top: rect.bottom + window.scrollY + 10,
      left: rect.left + window.scrollX,
    });

    if (isCheckIn) {
      setIsCheckInOpen(true);
      setIsCheckOutOpen(false);
    } else {
      setIsCheckOutOpen(true);
      setIsCheckInOpen(false);
    }
  };

  function submitData(){
    alert("Data successfullly send")
  }

  return (
    <div className="flex justify-center p-4">
      {/* Main Card */}
      <Card className="w-full max-w-5xl bg-[#320D36] text-white shadow-lg rounded-xl p-6 relative">
        <CardBody className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* CHECK-IN */}
          <div
            className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer"
            onClick={(e) => toggleCalendar(e, true)}>
            <h3 className="text-sm font-semibold">CHECK-IN</h3>
            <div className="mt-2 font-bold">{checkInDate.toISOString().split("T")[0]}</div>
          </div>

          {/* CHECK-OUT */}
          <div
            className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer"
            onClick={(e) => toggleCalendar(e, false)}
          >
            <h3 className="text-sm font-semibold">CHECK-OUT</h3>
            <div className="mt-2 font-bold">{checkInDate.toISOString().split("T")[0]}</div>
          </div>

          {/* SELECT CITY */}
          <div className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer">
            <h3 className="text-sm font-semibold">LOACTION</h3>
            <select
              name="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-center bg-[#5A2360] text-white rounded-md px-2 py-1 cursor-pointer"
            >
              <option value="" disabled>-- Select City --</option>
              <option value="nashik">NASHIK</option>
              <option value="chh_sambhajinagar">CHH. SAMBHAJINAGAR</option>
              <option value="jalgaon">JALGAON</option>
              <option value="thane">THANE</option>
            </select>
          </div>

          <div onClick={submitData}
            className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer">
          <button type="submit" className="py-3 cursor-pointer">BOOK</button>
            
          </div>
        </CardBody>
      </Card>

      {/* Calendar Component */}
      {(isCheckInOpen || isCheckOutOpen) && (
        <div
          ref={calendarRef}
          style={{ position: "absolute", top: calendarPosition.top, left: calendarPosition.left }}
          className="p-4 bg-[#320D36] text-white border border-[#5A2360] rounded-lg shadow-lg z-50"
        >
          <Calendar
            onChange={(newDate) => handleDateChange(newDate, isCheckInOpen)}
            value={isCheckInOpen ? checkInDate : checkOutDate}
            minDate={new Date()}
            className="react-calendar"  />
        </div>
      )}
    </div>
  );
}

export default BookingTabs;
