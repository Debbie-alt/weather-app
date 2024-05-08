import Navbar from "@/components/Navbar";
import React from "react";

const services = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center py-5 space-y-5 ">
        <h1 className="font-semibold text-center text-2xl">Our services</h1>

        <h1 className="font-semibold text-2xl">Our Features</h1>
        <p className="text-center w-[60vw]">
          Real-Time Updates: Stay informed with real-time weather updates for
          your location and other areas of interest. Detailed Forecasts: Access
          detailed forecasts including temperature, precipitation, wind speed,
          and more for any location. Customizable Settings: Tailor the app to
          your preferences with customizable settings and notifications.
          Interactive Maps: Explore interactive maps to track weather patterns
          and conditions in your area. User-Friendly Interface: Enjoy a
          user-friendly interface designed for easy navigation and intuitive
          use.
        </p>
      </div>
    </>
  );
};

export default services;
