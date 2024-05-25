import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Step.css";

const BookingsDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get("http://localhost:3300/api/bookings");
      setBookings(response.data);
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings-dashboard">
      <h2>Already Booked</h2>
      <>
        {bookings.map((booking) => (
          <div className="booking-item" key={booking._id}>
            <span>{booking.userName}</span> -{" "}
            <span>{booking.vehicleId.model}</span> from{" "}
            <span>{new Date(booking.startDate).toLocaleDateString()}</span> to{" "}
            <span>{new Date(booking.endDate).toLocaleDateString()}</span>
          </div>
        ))}
      </>
    </div>
  );
};

export default BookingsDashboard;
