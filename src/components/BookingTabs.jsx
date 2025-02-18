import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingTabs.css';

function BookingTabs() {
    const [date, setDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [calendarPosition, setCalendarPosition] = useState(null);
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setIsCalendarOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        setIsCalendarOpen(false);
    };

    const toggleCalendar = (e, field) => {
        const rect = e.target.getBoundingClientRect();
        setCalendarPosition({
            left: rect.left,
            top: rect.bottom,
        });
        setIsCalendarOpen(field);
    };

    return (
        <div className="flex justify-center">
            <div className="bg-[#320D36] text-white block max-w-[1000px] p-6">
                <div className="flex flex-row items-center gap-8">

                    <div
                        className="block max-w-lg bg-[#5A2360] text-white w-[500px] h-[50px] text-center">
                        <h3>CHECK IN</h3>
                        <div
                            onClick={(e) => toggleCalendar(e, 'checkIn')}
                            className="bg-[#5A2360] cursor-pointer mt-2 font-bold">
                            {date.toLocaleDateString()}
                        </div>
                    </div>

                    <div
                        className="block max-w-lg bg-[#5A2360] text-white w-[500px] h-[50px] text-center">
                        <h3>CHECK OUT</h3>
                        <div
                            onClick={(e) => toggleCalendar(e, 'checkOut')}
                            className="bg-[#5A2360] cursor-pointer mt-2 font-bold">
                            {date.toLocaleDateString()}
                        </div>
                    </div>

                    {/* City Selection */}

                    {isCalendarOpen && (
                        <div
                            ref={calendarRef}
                            style={{
                                position: "absolute",
                                top: calendarPosition?.top,
                                left: calendarPosition?.left,
                            }}
                            className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                            <Calendar
                                onChange={handleDateChange}
                                value={date}
                                minDate={new Date()}
                                className="react-calendar" />
                        </div>
                    )}
                    <div
                        className="block max-w-lg mt-2 bg-[#5A2360] text-white w-[500px] h-[58px] text-center">
                        <h3 className="mb-2">SELECT CITY</h3>
                        <select name="cars" id="cars" className="bg-[#5A2360]">
                            <option value="nashik">NASHIK</option>
                            <option value="chh_sambhajinagar">CHH. SAMBHAJINAGAR</option>
                            <option value="JALGOAN">JALGOAN</option>
                            <option value="thane">THANE</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingTabs;
