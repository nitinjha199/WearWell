
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

function Nav() {
  const navigate = useNavigate()
  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)

  const logOut = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true })
      console.log(result.data)
      toast.success("LogOut Successfully")
      getAdmin()
      navigate("/login")
    } catch (error) {
      console.log(error)
      toast.error("LogOut Failed")
    }
  }

  return (
    <div className='w-full h-16 md:h-20 bg-gray-900 z-10 fixed top-0 flex items-center justify-between px-6 md:px-12 shadow-lg backdrop-blur-sm'>

      {/* Logo */}
      <div className='flex items-center gap-3 cursor-pointer' onClick={() => navigate("/")}>
        <img src={logo} alt="WearWell" className='w-14' />
        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.9rem",
          fontWeight: "700",
          background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 15px rgba(251,191,36,0.6)",
          letterSpacing: "1px"
        }}>
          WearWell
        </h1>
      </div>


      {/* Logout Button */}
      <button
        className="px-5 py-2 rounded-2xl font-semibold text-gray-900 
             bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 
             hover:scale-105 transform transition-all duration-300 
             shadow-lg shadow-purple-800/50 
             backdrop-blur-md border border-gray-700"
        onClick={logOut}
      >
        LogOut
      </button>

    </div>
  )
}

export default Nav
