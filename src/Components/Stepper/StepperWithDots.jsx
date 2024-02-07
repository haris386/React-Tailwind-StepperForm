import React, { useState } from "react";
import { BudgetComponent } from "../Budget/BudgetComponent";
import { FormComponent } from "../Form/FormComponent";
import { ProposalComponent } from "../Proposal/ProposalComponent";
import { NavbarComponent } from "../Navbar/NavbarComponent";

export function StepperWithDots() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleBudgetSelection = (selectedBudget) => {
    setActiveStep(1);
    setFormData((prevData) => ({ ...prevData, budget: selectedBudget }));
  };

  const handleFormCompletion = (formValues) => {
    setActiveStep(2);
    setFormData((prevData) => ({ ...prevData, ...formValues }));
  };

  const handleGoBack = () => {
    setActiveStep((prevStep) => Math.max(0, prevStep - 1)); // Ensure step does not go below 0
  };

  const handleReturnHome = () => {
    setActiveStep(0); // Resetting to Step 1
  };

  return (
    <div className="w-full">
      <NavbarComponent onGoBack={handleReturnHome} activeStep={activeStep} />
      <div className="flex justify-between items-center">
        <div
          className={`w-1/3 ${
            activeStep >= 0 ? "bg-green-600" : "bg-gray-300"
          } h-2 rounded-none`}
        ></div>{" "}
        {/* Step 1 */}
        <div
          className={`w-1/3 ${
            activeStep >= 1 ? "bg-green-600" : "bg-gray-300"
          } h-2 rounded-none`}
        ></div>{" "}
        {/* Step 2 */}
        <div
          className={`w-1/3 ${
            activeStep >= 2 ? "bg-green-600" : "bg-gray-300"
          } h-2 rounded-none`}
        ></div>{" "}
        {/* Step 3 */}
        {/* Add more steps as needed */}
      </div>
      {activeStep === 0 && (
        <BudgetComponent onBudgetSelect={handleBudgetSelection} />
      )}
      {activeStep === 1 && (
        <FormComponent
          onCompletion={handleFormCompletion}
          moveToStep3={() => setActiveStep(2)}
        />
      )}{" "}
      {/* Render FormComponent for Step 2 */}
      {activeStep === 2 && (
        <ProposalComponent
          formData={formData}
          onReturnHome={handleReturnHome} // Pass the callback function
        />
      )}{" "}
      {/* Render ProposalComponent for Step 3 */}
      {/* Add more components for additional steps */}
    </div>
  );
}
