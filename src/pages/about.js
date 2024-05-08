import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen flex flex-col items-center py-5 space-y-5">
        <h1 className="font-semibold text-2xl">About Forecastify</h1>
        <p className="text-center w-[70vw]">
          Welcome to ForeCastify, your reliable source for accurate and
          up-to-date weather information.
        </p>
        <h1 className="font-semibold text-2xl">Our Mission</h1>
        <p className="text-center w-[60vw]">
          At ForeCastify, our mission is to provide users with convenient access
          to detailed weather forecasts and information. We aim to empower
          individuals and communities to make informed decisions about their
          daily activities and plans based on reliable weather data.
        </p>

       
      </div>
    </>
  );
};

export default about;
