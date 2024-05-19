import React, { useState } from "react";
import BookingBottomBar from "./BookingBottomBar";
import SlotButton from "./common/SlotButton";
import SlotDropdown from "./SlotDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentBooking = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div className="main-booking-appointment-component">
        {/* calender */}
        <div className="booking-appointment">
          <div className="appointment-calender">
            <DatePicker
              inline
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <div className="time-slot">
            <SlotDropdown />
            <div className="divider"></div>
            <div className="available-slot-text">
              Thursday, DEC 2 - AVAILABLE SLOTS
            </div>
            <SlotButton />
          </div>
        </div>
        {/* Bottom bar */}
        <BookingBottomBar />
      </div>
    </div>
  );
};

export default AppointmentBooking;
