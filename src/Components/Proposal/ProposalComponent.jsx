import React, { useEffect } from "react";

export const ProposalComponent = ({ formData, onReturnHome }) => {
  useEffect(() => {
    if (formData) {
      console.log("Form Data:", formData);
    }
  }, [formData]);

  return (
    <div className="flex flex-col items-center justify-center h-full mt-20 w-4/12 m-auto text-center">
      <div className="bg-gray-200 w-20 h-20 mb-4"></div>
      <h1 className="text-2xl font-bold my-4">
        Your Request for a Proposal Has Been Submitted!
      </h1>
      <h5 className="text-1xl text-center my-4 text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, tempora!
        Voluptatibus eius voluptatum molestias? Aliquam veritatis repellat illum
        quis dolorem et assumenda error asperiores officiis est nulla, accusamus
        tempore eum!
      </h5>
      <button
        className="bg-green-600 text-white px-4 py-2 mb-10"
        onClick={onReturnHome} // Call the onReturnHome callback function
      >
        Return Home
      </button>
    </div>
  );
};
