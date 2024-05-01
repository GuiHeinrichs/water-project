"use client"
import React from 'react'

export default function Informational() {
  return (
    <div id="informational-ref" className="flex flex-col font-semibold justify-center items-center text-center h-screen w-full">
      <p className="text-4xl self-start pl-4 text-[#90e0ef]">Como funciona</p>
      <p className="text-lg text-left px-5 text-[#caf0f8] mt-4">
        Para determinar a quantidade diária de água que você deve beber com base no seu peso,
        você pode usar a fórmula simples de multiplicar seu peso em quilogramas por 35 ml.
      </p>
    </div>
  )
}
