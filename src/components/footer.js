import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#0096c7] rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="flex justify-center text-sm text-[#caf0f8] sm:text-center">
          © 2024
          <a href="#" className="hover:underline"> @GuiHeinrichs</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-[#caf0f8] sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Sobre</a>
          </li>
          <li>
            <a href="https://gui-portfolio-seven.vercel.app/" className="hover:underline">Contato</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
