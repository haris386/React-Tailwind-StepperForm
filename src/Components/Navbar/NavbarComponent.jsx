import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function NavbarComponent({ onGoBack, activeStep }) {
  const handleGoBack = () => {
    if (activeStep > 0) {
      onGoBack(); // Call the onGoBack function only if not on the first step
    }
  };

  return (
    <Navbar className="w-full bg-white rounded-none max-w-full pt-2 pl-0 pr-0">
      <div className="flex items-center justify-between text-blue-gray-900 w-full px-6 py-0">
        <div className="flex items-center">
        <i className="fa fa-arrow-left mx-2" />

          <Typography
            as="a"
            href="#"
            variant="h6"
            className="cursor-pointer py-1"
            onClick={handleGoBack}
          >
            Go Back
          </Typography>
        </div>
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1"
        >
          Exit
        </Typography>
      </div>
    </Navbar>
  );
}
