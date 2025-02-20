import React, { useState, useRef, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Card, CardBody } from "@material-tailwind/react";
import "./BookingTabs.css";
import DatePicker from "./DatePicker";
import DropDownSelector from "./DropDownSelector";

function BookingTabs() {
    const [checkInDate, setCheckInDate] = useState(new Date());
    const [checkOutDate, setCheckOutDate] = useState(new Date());
    const [isCheckInOpen, setIsCheckInOpen] = useState(false);
    const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
    const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedRooms, setSelectedRooms] = useState("");
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


    const addOneDay = (date) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 1);
        return newDate;
    };


    const handleDateChange = (newDate, isCheckIn) => {
        let adjustedDate;


        if (newDate.toDateString() === new Date().toDateString()) {
            adjustedDate = new Date(newDate);
        } else {
            adjustedDate = addOneDay(newDate);
        }

        if (isCheckIn) {
            setCheckInDate(adjustedDate);
            setIsCheckInOpen(false);
        } else {
            setCheckOutDate(adjustedDate);
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

    function submitData() {
        alert("Data successfully sent");
    }

    return (
        <div className="flex justify-center p-4">

            <Card className="w-full max-w-5xl bg-[#320D36] text-white shadow-lg rounded-xl p-6 relative">
                <CardBody className="flex flex-col md:flex-row items-center justify-between gap-4">

                    <DatePicker onClick={(e)=> toggleCalendar(e, true)} label="CHECK-IN" date={checkInDate} className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer"
                    />
                    <DatePicker onClick={(e)=> toggleCalendar(e, false)} label="CHECK-IN" date={checkOutDate} className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer"
                    />


                  <DropDownSelector label="ROOMS" value={selectedRooms} onChange={(e)=> setSelectedRooms(e.target.value)} label1="--select rooms --" options={["1", "2", "3", "4", "5"]} className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer" />

                  <DropDownSelector label="LOCATION" value={selectedCity} onChange={(e)=> setSelectedCity(e.target.value)} label1="--select city--" options={["NASHIK", "CHH. SAMBHAJINAGAR", "JALGAON", "THANE"]} className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer" />

             

                    <div onClick={submitData}
                        className="w-full md:w-1/3 bg-[#5A2360] text-white p-4 rounded-lg text-center cursor-pointer">
                        <button type="submit" className="py-3 cursor-pointer">BOOK</button>
                    </div>
                </CardBody>
            </Card>


            {(isCheckInOpen || isCheckOutOpen) && (
                <div
                    ref={calendarRef}
                    style={{ position: "absolute", top: calendarPosition.top, left: calendarPosition.left }}
                    className=" border rounded-sm shadow-lg z-50"
                >
                    <Calendar
                        onChange={(newDate) => handleDateChange(newDate, isCheckInOpen)}
                        value={isCheckInOpen ? checkInDate : checkOutDate}
                        minDate={new Date()}
                        className="react-calendar" />
                </div>
            )}
        </div>
    );
}

export default BookingTabs;