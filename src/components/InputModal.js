import { React, useState } from "react";
import styles from "../styles/modal.module.css";
import { X } from "lucide-react";

const InputModal = ({
  openModal,
  setOpenModal,
  handleSubmit,
  city,
  setCity,
  loading,
  error
}) => {
  return (
    <section className="">
      <div
        className={` px-5 md:px-10 py-6 backdrop-blur-lg bg-stone-50 flex flex-col top-[20%] w-[85vw] md:w-[30vw] space-y-5 ${openModal} rounded-xl border-2 mx-auto ${styles.modal}`}
      >
        <X
          strokeWidth={1.25}
          className="hover:opacity-70 absolute right-[5%] top-4"
          onClick={() => {
            setOpenModal("hidden");
          }}
        />
        <h1 className=" font-semibold text-lg">
          What is your current Location?
        </h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <label htmlFor="cityInput" className="text-left text-gray-400">
            Enter Your City Name{" "}
          </label>
          <input
            type="text"
            placeholder="e.g London..."
            id="cityInput"
            className={styles.modalInput}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="flex justify-between px-5">
            <button
              type="submit"
              className="text-sm mx-auto border-2  bg-gradient-to-r from-blue-200 to-blue-400 p-2 rounded-lg hover:opacity-80"
            >
              Check Weather
            </button>
            { loading && <div className="animate-spin border-4 rounded-full border-grey-400 w-[30px] h-[30px] border-t-red-400"></div>}
          </div>
          {error && (
            <p className="text-red-800 text-sm text-center text-wrap">{error}</p>
          )}
        </form>
      </div>
      {openModal == "block" ? (
        <div className="fixed inset-0 bg-black opacity-50"></div>
      ) : null}
    </section>
  );
};

export default InputModal;
