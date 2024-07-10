import React from 'react'
import Form from './Form'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export default function Contact() {
  return (
    <section>
      <NavBar />
      <div className='flex flex-col mt-10 mb-2 items-center'>
        <div>
          <div>
            <h1 className='font-bold text-[64px]'>Send Us A Message</h1>
          </div>
          <div>
            <p className='text-[#000000]'>You can reach out to us via our official email<br /> <span className='text-[#FFA500]'>gartekcloude@gmail.com</span></p>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </section>
  )
}
