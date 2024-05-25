import React, { useEffect, useState } from "react";
import { RadioGroup, FormControlLabel, Radio, Button } from "@material-ui/core";
import axios from "axios";

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [vehicleModels, setVehicleModels] = useState([]);

  useEffect(() => {
    const fetchVehicleModels = async () => {
      const response = await axios.get(
        `http://localhost:3300/api/vehicles/models/${formData.vehicleType}`
      );
      setVehicleModels(response.data);
    };

    fetchVehicleModels();
  }, [formData.vehicleType]);

  const handleChange = (e) => {
    setFormData({ ...formData, vehicleModel: e.target.value });
  };

  const handleNext = () => {
    if (formData.vehicleModel) {
      nextStep();
    } else {
      alert("Please select a vehicle model");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Specific Model?</h2>
      <RadioGroup value={formData.vehicleModel} onChange={handleChange}>
        {vehicleModels.map((model) => (
          <FormControlLabel
            key={model._id}
            value={model._id}
            control={<Radio />}
            label={model.model}
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

export default Step4;
