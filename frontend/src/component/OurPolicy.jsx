
import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className="w-full py-16 flex flex-col items-center justify-start bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      
      {/* Title Section */}
      <div className="text-center mb-12">
        <Title text1="OUR" text2="POLICY" />
        <p className="mt-2 text-gray-300 text-sm md:text-lg">
          Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policies */}
      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
        
        {/* Card 1 */}
        <div className="w-[300px] p-6 bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center gap-4 hover:scale-[1.03] transition">
          <RiExchangeFundsLine className="w-12 h-12 text-pink-500" />
          <p className="font-semibold text-lg md:text-xl text-gray-100">
            Easy Exchange Policy
          </p>
          <p className="text-gray-400 text-center text-sm md:text-base">
            Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[300px] p-6 bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center gap-4 hover:scale-[1.03] transition">
          <TbRosetteDiscountCheckFilled className="w-12 h-12 text-pink-500" />
          <p className="font-semibold text-lg md:text-xl text-gray-100">
            7 Days Return Policy
          </p>
          <p className="text-gray-400 text-center text-sm md:text-base">
            Shop with Confidence – 7 Days Easy Return Guarantee.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-[300px] p-6 bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center gap-4 hover:scale-[1.03] transition">
          <BiSupport className="w-12 h-12 text-pink-500" />
          <p className="font-semibold text-lg md:text-xl text-gray-100">
            Best Customer Support
          </p>
          <p className="text-gray-400 text-center text-sm md:text-base">
            Trusted Customer Support – Your Satisfaction Is Our Priority.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
