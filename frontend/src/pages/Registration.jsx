
import React, { useState, useContext } from 'react'
import Logo from "../assets/logo.png"
import google from '../assets/google.png'
import { IoEyeOutline, IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import { authDataContext } from '../context/AuthContext';
import { userDataContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Loading from '../component/Loading';

function Registration() {
  const [show, setShow] = useState(false)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)

  const { serverUrl } = useContext(authDataContext)
  const { getCurrentUser } = useContext(userDataContext)
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await axios.post(serverUrl + '/api/auth/registration',{name,email,password},{withCredentials:true})
      getCurrentUser()
      navigate("/")
      toast.success("User Registration Successful")
    } catch (error) {
      toast.error("User Registration Failed")
    } finally {
      setLoading(false)
    }
  }

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth , provider)
      let user = response.user
      let name = user.displayName;
      let email = user.email

      await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
      getCurrentUser()
      navigate("/")
      toast.success("User Registration Successful")
    } catch (error) {
      toast.error("User Registration Failed")
    }
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black from-gray-900 via-black to-gray-800 flex flex-col items-center overflow-hidden">
      
      {/* Navbar */}
      <div className="w-full h-[80px] flex items-center px-8 cursor-pointer" onClick={()=>navigate("/")}>
        <img className="w-20" src={Logo} alt="Logo" />
        <h1
  style={{
    fontFamily: "'Cinzel', serif",
    fontSize: "2.5rem",
    fontWeight: "700",
    background: "linear-gradient(90deg, #fbbf24, #f59e0b, #fcd34d)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 15px rgba(251,191,36,0.6)",
    letterSpacing: "2px"
  }}
>
  WearWell
</h1>
      </div>

      {/* Title */}
      <div className="text-center mt-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">Create an Account</h2>
        <p className="text-gray-400 text-sm mt-2">Welcome to OneCart, join us and start shopping</p>
      </div>

      {/* Card */}
      <div className="max-w-md w-[90%] mt-8 bg-gray-900/80 border border-gray-700 backdrop-blur-xl rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSignup} className="flex flex-col gap-5">
          
          {/* Google Signup */}
          <div 
            className="w-full flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 transition rounded-full py-3 px-4 cursor-pointer font-medium text-gray-100"
            onClick={googleSignup}
          >
            <img src={google} alt="google" className="w-5" />
            Sign up with Google
          </div>

          {/* Divider */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="flex-1 h-px bg-gray-700"></span>
            OR
            <span className="flex-1 h-px bg-gray-700"></span>
          </div>

          {/* Inputs */}
          <input 
            type="text" 
            placeholder="Username"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-500"
            value={name} onChange={(e)=>setName(e.target.value)} required
          />
          <input 
            type="email" 
            placeholder="Email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-500"
            value={email} onChange={(e)=>setEmail(e.target.value)} required
          />
          <div className="relative w-full">
            <input 
              type={show ? "text" : "password"} 
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-full focus:ring-2 focus:ring-indigo-500 focus:outline-none text-gray-100 placeholder-gray-500"
              value={password} onChange={(e)=>setPassword(e.target.value)} required
            />
            {!show 
              ? <IoEyeOutline className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 cursor-pointer" onClick={()=>setShow(prev=>!prev)}/> 
              : <IoEye className="absolute right-4 top-3.5 w-5 h-5 text-gray-400 cursor-pointer" onClick={()=>setShow(prev=>!prev)}/>
            }
          </div>

          {/* Submit */}
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:opacity-90 transition text-white font-semibold py-3 rounded-full shadow-md"
          >
            {loading ? <Loading/> : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <span 
              className="text-yellow-400 font-semibold cursor-pointer hover:underline"
              onClick={()=>navigate("/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Registration
