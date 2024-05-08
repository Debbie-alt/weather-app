import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import InputModal from "@/components/InputModal";
import styles from "../styles/modal.module.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openModal, setOpenModal] = useState("hidden");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleOpenModal = () => {
    openModal == "hidden" ? setOpenModal("block") : setOpenModal("hidden");
  };

  const API_KEY = "d909c9955626445ba48123536240805";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setWeatherData(data); // Store fetched weather data in state
      setOpenModal("hidden"); // Hide the modal from user's view again
    } catch (error) {}
  };

  return (
    <main className=" w-screen flex flex-col items-center">
      <Navbar />
      <div className={`flex min-h-screen flex-col  p-24 ${inter.className}`}>
        
        
        {weatherData && (
          <div className=" flex flex-col text-center items-center space-y-5 weather-details-container">
            <div className="flex">
                 <img
                    src={`https:${weatherData.current.condition.icon}`}                  
                     width={100}
                   height={50}
                 />
              <h1 className="text-3xl font-bold ">{weatherData.current.condition.text}</h1>
            </div>
               <div>
                  <p className="font-semibold text-4xl text-white">{weatherData.current.temp_c}&deg;C</p>
               </div>
            
             {weatherData.location && <p className="text-white">{weatherData.location.name}, {weatherData.location.country}</p>}
             <p>{weatherData.location.localtime}</p>
          </div>
        )}

        {weatherData ? (
          <button className={styles.button} onClick={handleOpenModal}>
            Check Another City
          </button>
        ) : (
          <button className={styles.button} onClick={handleOpenModal}>
            Check Weather Forecast
          </button>
        )}

        {/* THE MODAL COMPONENT */}
        <InputModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          handleSubmit={handleSubmit}
          city={city}
          setCity={setCity}
        />

      </div>
    </main>
  );
}
