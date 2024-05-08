import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import InputModal from "@/components/InputModal";
import styles from "../styles/modal.module.css";
import WeatherDetails from "@/components/WeatherDetails";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [openModal, setOpenModal] = useState("hidden");
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

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
      setWeatherData(data); // Store fetched weather data in state
      setOpenModal("hidden"); // Hide the modal from user's view again
      setError(null);
    } catch (error) {
      setError(
        "Oops! There was an error fetching your weather deatils. Please Try again"
      );
    }
  };

  return (
    <main className=" w-screen flex flex-col items-center">
      <Navbar />
      <div className={`flex min-h-screen flex-col   ${inter.className}`}>
        <WeatherDetails 
         error={error}
         weatherData={weatherData}
        />
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
