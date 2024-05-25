import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Step0 from "./components/Step0";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [steps, setSteps] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    numberOfWheels: "",
    vehicleType: "",
    vehicleModel: "",
    startDate: null,
    endDate: null,
  });

  const nextStep = () => setSteps(steps + 1);
  const prevStep = () => setSteps(steps - 1);
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      numberOfWheels: "",
      vehicleType: "",
      vehicleModel: "",
      startDate: null,
      endDate: null,
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/form"
          element={
            <>
              {steps === 1 && (
                <Step0
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                />
              )}
              {steps === 2 && (
                <Step2
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {steps === 3 && (
                <Step3
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {steps === 4 && (
                <Step4
                  formData={formData}
                  setFormData={setFormData}
                  nextStep={nextStep}
                  prevStep={prevStep}
                />
              )}
              {steps === 5 && (
                <Step5
                  formData={formData}
                  setFormData={setFormData}
                  prevStep={prevStep}
                  resetForm={resetForm}
                />
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
