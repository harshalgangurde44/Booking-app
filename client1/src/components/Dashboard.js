import React from "react";
import VehiclesDashboard from "./VehiclesDashboard";
import BookingsDashboard from "./BookingsDashboard";
import { Link } from "react-router-dom";
import "./Step.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Vehicle Booking App</h1>
      <VehiclesDashboard />
      <BookingsDashboard />
      <Link to="/form" className="link">
        New Vehicle Booking
      </Link>
    </div>
  );
};

export default Dashboard;
