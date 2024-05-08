import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
            <>
            <Navbar/>
                 <div className="w-screen bg-red-500 flex flex-col items-center">
                     <h1 className="font-semibold text-center text-3xl">About Forecastify</h1>
                 </div>
            </>
  );
};

export default about;
