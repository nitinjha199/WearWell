

import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpeg'
import Footer from '../component/Footer'

function About() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col 
                    bg-gray-900 text-gray-200
                    gap-[50px] pt-[80px]'>

      {/* About Us */}
      <Title text1={'ABOUT'} text2={'US'} />
      <div className='w-full flex items-center justify-center flex-col lg:flex-row gap-10 px-5'>

        {/* Image */}
        <div className='lg:w-[45%] w-full flex items-center justify-center'>
          <img src={about} alt="About" 
               className='lg:w-[70%] w-[85%] shadow-lg rounded-xl' />
        </div>

        {/* Text */}
        <div className='lg:w-[50%] w-[90%] flex flex-col gap-5 text-gray-200'>
          <p className='lg:w-[90%] text-[14px] md:text-[16px] leading-relaxed'>
            WearWell was born for smart, seamless shopping—created to deliver quality products, trending styles, and everyday essentials in one place. With reliable service, fast delivery, and great value, OneCart makes your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p className='lg:w-[90%] text-[14px] md:text-[16px] leading-relaxed'>
            Built for modern shoppers—combining style, convenience, and affordability. Whether it’s fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you’ll love.
          </p>
          <h2 className='text-lg md:text-xl font-bold text-pink-400 mt-2'>Our Mission</h2>
          <p className='lg:w-[90%] text-[14px] md:text-[16px] leading-relaxed'>
            Our mission is to redefine online shopping by delivering quality, affordability, and convenience. WearWell connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and fits every lifestyle and need.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='w-full flex flex-col items-center gap-[20px] mt-10'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
        <div className='w-[90%] flex items-center justify-center lg:flex-row flex-col gap-6 py-6'>
          
          <div className='lg:w-[30%] w-[90%] h-[220px] bg-gray-800 
                          border border-gray-700 rounded-xl shadow-md flex flex-col 
                          items-center justify-center gap-4 px-6 py-4 text-center hover:shadow-lg transition-all'>
            <b className='text-lg font-semibold text-pink-400'>Quality Assurance</b>
            <p className='text-gray-300 text-sm'>
              We guarantee quality through strict checks, reliable sourcing, and a commitment to customer satisfaction always.
            </p>
          </div>

          <div className='lg:w-[30%] w-[90%] h-[220px] bg-gray-800 
                          border border-gray-700 rounded-xl shadow-md flex flex-col 
                          items-center justify-center gap-4 px-6 py-4 text-center hover:shadow-lg transition-all'>
            <b className='text-lg font-semibold text-pink-400'>Convenience</b>
            <p className='text-gray-300 text-sm'>
              Shop easily with fast delivery, simple navigation, secure checkout, and everything you need in one place.
            </p>
          </div>

          <div className='lg:w-[30%] w-[90%] h-[220px] bg-gray-800 
                          border border-gray-700 rounded-xl shadow-md flex flex-col 
                          items-center justify-center gap-4 px-6 py-4 text-center hover:shadow-lg transition-all'>
            <b className='text-lg font-semibold text-pink-400'>Exceptional Service</b>
            <p className='text-gray-300 text-sm'>
              Our dedicated support team ensures quick responses, helpful solutions, and a smooth shopping experience every time.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      
    </div>
  )
}

export default About
