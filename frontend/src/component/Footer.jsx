
import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="WearWell Logo" className="w-10 h-10" />
            <h1 className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 text-transparent bg-clip-text drop-shadow-lg">
              WearWell
            </h1>
          </div>
          <p className="text-gray-300 text-sm md:text-base">
            WearWell is your premium fashion destination – curated collections, exclusive deals, and fast delivery designed to make your shopping effortless & stylish.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-start md:items-center">
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Company</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="cursor-pointer hover:text-pink-500">Home</li>
            <li className="cursor-pointer hover:text-pink-500">About Us</li>
            <li className="cursor-pointer hover:text-pink-500">Delivery</li>
            <li className="cursor-pointer hover:text-pink-500">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start md:items-end">
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Get in Touch</h2>
          <ul className="space-y-2 text-gray-400">
            <li>6299201540</li>
            <li>nitinkumarjha199@gmail.com</li>
            <li className="hidden md:block">6299201540</li>
            <li className="hidden md:block">nitinkumarjha199@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="w-full py-4 text-center text-gray-400 text-sm">
        © 2025 WearWell – All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
