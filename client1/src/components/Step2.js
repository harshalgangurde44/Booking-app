import React from "react";
import { RadioGroup, FormControlLabel, Radio, Button } from "@material-ui/core";

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, numberOfWheels: e.target.value });
  };

  const handleNext = () => {
    if (formData.numberOfWheels) {
      nextStep();
    } else {
      alert("Please select the number of wheels");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Number of wheels?</h2>
      <RadioGroup value={formData.numberOfWheels} onChange={handleChange}>
        <FormControlLabel value="2" control={<Radio />} label="2" />
        <FormControlLabel value="4" control={<Radio />} label="4" />
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

export default Step2;
