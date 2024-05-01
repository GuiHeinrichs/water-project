"use client";
import React, { useState } from "react";

function calculateWaterNeeded(weigth) {
  let calcResult = weigth * 0.035;
  return calcResult.toFixed(1);
}

export default function Content() {
  let [inputValue, setInputValue] = useState("");
  let [result, setResult] = useState("");
  const textVariables = {
    firstMessage: "Você precisa ingerir",
    lastMessage: "por dia.",
    unitMeasurement: " litros"
  }

  function handleChange(value) {
    if (!isNaN(value) && value >= 0) setInputValue(value)
  }

  function handleClick() {
    let calculatedValue = calculateWaterNeeded(Number(inputValue));
    setResult(calculatedValue);
  }

  return (
    <section className="flex justify-between flex-wrap w-screen h-auto">
      <form className="max-w-sm mx-auto flex justify-center items-center flex-col">
        <label
          htmlFor="number-input"
          className="block mb-5 text-4xl md:text-5xl font-normal text-[#caf0f8] self-start"
        >
          Digite seu peso
        </label>
        <div className="flex justify-start items-start">
          <input
            type="number"
            id="number-input"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
            className="bg-[#caf0f8] border border-gray-300 text-[#0b1011] text-sm rounded-lg w-full p-2.5"
            placeholder="Seu peso em KG"
          />
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-[#caf0f8] bg-[#0162D1] rounded-lg border hover:bg-blue-800 "
          >
            Calcular
          </button>
        </div>
      </form>
      {
        result ? (
          <div className="flex justify-center items-center flex-col w-full h-60 text-[#caf0f8] gap-1">
            <p className="text-2xl">{textVariables.firstMessage}</p>
            <div className="flex gap-2">
              <p className="text-6xl text-[#90e0ef]"><strong> {result} </strong></p>
              <p className="text-xl self-end text-[#90e0ef]">{textVariables.unitMeasurement}</p>
            </div>
            <p className="text-2xl">{textVariables.lastMessage}</p>
          </div>
        ) : <></>
      }
    </section>
  );
}
