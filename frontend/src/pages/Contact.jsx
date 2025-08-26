

import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import Footer from '../component/Footer'

function Contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col bg-gray-900 text-gray-200 gap-[60px] pt-[80px]'>

      {/* Title */}
      <Title text1={'CONTACT'} text2={'US'} />

      {/* Card */}
      <div className='w-[95%] lg:w-[80%] flex flex-col lg:flex-row gap-[40px] bg-gray-800 border border-gray-700 rounded-2xl shadow-xl p-6'>

        {/* Left Image */}
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center'>
          <img 
            src={contact} 
            alt="contact"  
            className='lg:w-[75%] w-[90%] rounded-xl shadow-md'
          />
        </div>

        {/* Right Info */}
        <div className='lg:w-[50%] w-[100%] flex flex-col gap-[16px]'>
          <h3 className='text-pink-400 font-bold lg:text-[20px] text-[16px]'>Our Store</h3>
          <div className='text-gray-300 md:text-[15px] text-[13px] leading-relaxed'>
            <p>Khegaon Housing Complex</p>
            <p>Ranchi,jharkhand,India</p>
          </div>

          <div className='text-gray-300 md:text-[15px] text-[13px] leading-relaxed'>
            <p>Tel: +91-6299201540</p>
            <p>Email: nitinkumarjha199@gmail.com</p>
          </div>

          <h3 className='text-pink-400 font-bold lg:text-[20px] text-[16px] mt-[10px]'>Careers at WearWell</h3>
          <p className='text-gray-300 md:text-[15px] text-[13px]'>
            Learn more about our teams and job openings
          </p>

          <button className='px-[25px] py-[12px] text-white bg-pink-500 hover:bg-pink-600 rounded-full transition-all duration-300 active:scale-95 w-fit'>
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
