import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali"; // for date-fns-jalali v2.x

const Step5 = ({ formData, setFormData, prevStep, resetForm }) => {
  const [dates, setDates] = useState([null, null]);

  const handleDateChange = (newDates) => {
    setDates(newDates);
    setFormData({
      ...formData,
      startDate: newDates[0],
      endDate: newDates[1],
    });
  };

  const handleSubmit = async () => {
    if (dates[0] && dates[1]) {
      try {
        const response = await axios.post(
          "http://localhost:3300/api/bookings",
          {
            vehicleId: formData.vehicleModel,
            startDate: formData.startDate,
            endDate: formData.endDate,
            userName: `${formData.firstName} ${formData.lastName}`,
          }
        );
        alert("Booking Successful!");
        resetForm(); // Navigate to Step 1 after successful booking
      } catch (error) {
        alert("Booking Failed: " + error.response.data.message);
      }
    } else {
      alert("Please select a date range");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Select Date Range</h2>
      <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
        <DateRangePicker
          startText="Start Date"
          endText="End Date"
          value={dates}
          onChange={handleDateChange}
          renderInput={(startProps, endProps) => (
            <div className="date-range-picker">
              <TextField {...startProps} />
              <span> to </span>
              <TextField {...endProps} />
            </div>
          )}
        />
      </LocalizationProvider>
      <div className="actions">
        <Button variant="contained" onClick={prevStep}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Step5;
