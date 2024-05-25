import React, { useEffect, useState } from "react";
import { RadioGroup, FormControlLabel, Radio, Button } from "@material-ui/core";
import axios from "axios";

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicleTypes, setVehicleTypes] = useState([]);

  useEffect(() => {
    const fetchVehicleTypes = async () => {
      const response = await axios.get(
        "http://localhost:3300/api/vehicles/types"
      );
      setVehicleTypes(response.data);
    };

    fetchVehicleTypes();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleType: e.target.value });
  };

  const handleNext = () => {
    if (formData.vehicleType) {
      nextStep();
    } else {
      alert("Please select a vehicle type");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Type of vehicle?</h2>
      <RadioGroup value={formData.vehicleType} onChange={handleChange}>
        {vehicleTypes.map((type) => (
          <FormControlLabel
            key={type}
            value={type}
            control={<Radio />}
            label={type}
          />
        ))}
      </RadioGroup>
      <div className="actions">
        <Button variant="contained" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step3;
