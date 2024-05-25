import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Step.css";

const VehiclesDashboard = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const response = await axios.get("http://localhost:3300/api/vehicles");
      setVehicles(response.data);
    };

    fetchVehicles();
  }, []);

  return (
    <div className="vehicles-dashboard">
      <h2>Vehicles Available</h2>
      <>
        {vehicles.map((vehicle) => (
          <div className="vehicle-item" key={vehicle._id}>
            <span>{vehicle.type}</span> - <span>{vehicle.model}</span>
          </div>
        ))}
      </>
    </div>
  );
};

export default VehiclesDashboard;
