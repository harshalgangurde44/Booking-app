import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./Step.css";

const Step0 = ({ formData, setFormData, nextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (formData.firstName && formData.lastName) {
      nextStep();
    } else {
      alert("Please enter both first and last name");
    }
  };

  return (
    <div className="container">
      <h2 className="title">What is your name?</h2>
      <div className="textFieldContainer">
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
      </div>
      <div className="actions">
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Step0;
