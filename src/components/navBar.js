import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className='fixed w-full bg-[#0077b6]'>
      <div className='flex items-center justify-between p-4'>
        <span className='text-3xl text-[#caf0f8]'>
          Drink Water
        </span>
        <Link href="#informational-ref" className="text-[#caf0f8] bg-[#0162D1] hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-3 text-center">
          Como funciona
        </Link>
      </div>
    </nav >
  )
}
