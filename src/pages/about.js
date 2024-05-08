import Navbar from "@/components/Navbar";
import React from "react";

const about = () => {
  return (
            <>
            <Navbar/>
                 <div className="w-screen flex flex-col items-center py-5">
                     <h1 className="font-semibold text-center text-2xl">About Forecastify</h1>
                 </div>
            </>
  );
};

export default about;
