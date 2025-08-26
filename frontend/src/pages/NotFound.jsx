
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    let navigate = useNavigate()
    return (
        <div className='w-[100vw] h-[100vh] 
                        bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] 
                        flex items-center justify-center flex-col gap-6 text-center px-4'>
            
            {/* 404 Text */}
            <h1 className='text-gray-800 font-extrabold md:text-7xl text-4xl'>
                404
            </h1>
            <p className='text-gray-600 md:text-2xl text-lg'>
                Oops! Page Not Found
            </p>

            {/* Button */}
            <button 
                onClick={() => navigate("/login")} 
                className='mt-4 px-6 py-3 rounded-full 
                           bg-pink-500 hover:bg-pink-600 text-white font-semibold 
                           shadow-md transition-all duration-300'>
                Go to Login
            </button>
        </div>
    )
}

export default NotFound

