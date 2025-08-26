
import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from 'axios'
import { authDataContext } from '../context/AuthContext';
import { adminDataContext } from '../context/AdminContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { serverUrl } = useContext(authDataContext)
  const { getAdmin } = useContext(adminDataContext)
  const navigate = useNavigate()

  const AdminLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await axios.post(serverUrl + '/api/auth/adminlogin', { email, password }, { withCredentials: true })
      toast.success("Admin Login Successfully")
      getAdmin()
      navigate("/")
      setLoading(false)
    } catch (error) {
      console.log(error)
      toast.error("Admin Login Failed")
      setLoading(false)
    }
  }

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#374151] text-gray-100 flex flex-col items-center justify-start'>
      
      {/* Logo */}
      <div className='w-full h-[80px] flex items-center justify-start px-8 gap-3 cursor-pointer'>
        <img className='w-[50px]' src={logo} alt="WearWell" />
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

      {/* Page title */}
      <div className='w-full h-[100px] flex flex-col items-center justify-center gap-2'>
        <span style={{
          fontFamily: "'Cinzel', serif",
          fontSize: "1.8rem",
          fontWeight: "700",
          background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 10px rgba(251,191,36,0.5)"
        }}>
          Admin Login
        </span>
        <span className='text-gray-400 text-[16px]'>Welcome to WearWell, please login</span>
      </div>

      {/* Form container */}
      <div className='max-w-[600px] w-[90%] bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl shadow-lg flex items-center justify-center py-12'>
        <form className='w-[90%] flex flex-col gap-6' onSubmit={AdminLogin}>
          
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full h-[50px] px-5 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white font-semibold focus:ring-2 focus:ring-yellow-400 outline-none'
            required
          />

          <div className='relative w-full'>
            <input
              type={show ? "text" : "password"}
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              className='w-full h-[50px] px-5 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 text-white font-semibold focus:ring-2 focus:ring-yellow-400 outline-none'
              required
            />
            {!show && <IoEyeOutline onClick={() => setShow(true)} className='absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer text-gray-400' />}
            {show && <IoEye onClick={() => setShow(false)} className='absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 cursor-pointer text-gray-400' />}
          </div>

          <button
            type='submit'
            className='w-full h-[50px] bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg text-gray-900 font-semibold hover:scale-105 transition-transform'
          >
            {loading ? "Loading..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
