import React from 'react'
import Image from 'next/image'

import NavBar from '../components/navBar'
import Content from '@/components/content'
import Informational from '@/components/informational'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <NavBar />
      <section className='flex justify-center py-20'>
        <Image
          src="/images/principal-woman-img.png"
          width={300}
          height={300}
          alt="Drinking water picture"
        />
      </section>
      <Content />
      <Informational />
      <Footer />
    </>
  )
}
