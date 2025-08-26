// import React from 'react'
// import Logo from "../assets/logo.png"
// import { useNavigate } from 'react-router-dom'
// import google from '../assets/google.png'
// import { IoEyeOutline } from "react-icons/io5";
// import { IoEye } from "react-icons/io5";
// import { useState } from 'react';
// import { useContext } from 'react';
// import { authDataContext } from '../context/authContext';
// import axios from 'axios'
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../../utils/Firebase';
// import { userDataContext } from '../context/UserContext';
// import { toast } from 'react-toastify';
// import Loading from '../component/Loading';

// function Registration() {
//     let [show,setShow] = useState(false)
//     let {serverUrl} = useContext(authDataContext)
//     let [name,setName] = useState("")
//     let [email,setEmail] = useState("")
//     let [password,setPassword] = useState("")
//     let {userdata , getCurrentUser} = useContext(userDataContext)
//     let [loading,setLoading] = useState(false)

//     let navigate = useNavigate()

//     const handleSignup = async (e) => {
//         setLoading(true)
//         e.preventDefault()
//         try {
//          const result = await axios.post(serverUrl + '/api/auth/registration',{
//             name,email,password
//          },{withCredentials:true})
//             getCurrentUser()
//             navigate("/")
//             toast.success("User Registration Successful")
//             console.log(result.data)
//             setLoading(false)

//         } catch (error) {
//             console.log(error)
//             toast.error("User Registration Failed")
//         }
//     }

//     const googleSignup = async () => {
//         try {
//             const response = await signInWithPopup(auth , provider)
//             let user = response.user
//             let name = user.displayName;
//             let email = user.email

//             const result = await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
//             console.log(result.data)
//             getCurrentUser()
//             navigate("/")
//             toast.success("User Registration Successful")

//         } catch (error) {
//             console.log(error)
//             toast.error("User Registration Failed")
//         }
        
//     }
  
//   return (
//     <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start'>
//     <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer' onClick={()=>navigate("/")}>
//     <img className='w-[40px]' src={Logo} alt="" />
//     <h1 className='text-[22px] font-sans '>OneCart</h1>
//     </div>

//     <div className='w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
//         <span className='text-[25px] font-semibold'>Registration Page</span>
//         <span className='text-[16px]'>Welcome to OneCart, Place your order</span>

//     </div>
//     <div className='max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center '>
//         <form action="" onSubmit={handleSignup} className='w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
//             <div className='w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup} >
//                 <img src={google}  alt="" className='w-[20px]'/> Registration with Google
//             </div>
//             <div className='w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
//              <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
//             </div>
//             <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]  relative'>
//                 <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='UserName' required onChange={(e)=>setName(e.target.value)} value={name}/>
//                  <input type="text" className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} value={email}/>
//                   <input type={show?"text":"password"} className='w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold' placeholder='Password' required onChange={(e)=>setPassword(e.target.value)} value={password}/>
//                   {!show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
//                   {show && <IoEye className='w-[20px] h-[20px] cursor-pointer absolute right-[5%]' onClick={()=>setShow(prev => !prev)}/>}
//                   <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>{loading? <Loading/> :"Create Account"}</button>
//                   <p className='flex gap-[10px]'>You have any account? <span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
//             </div>
//         </form>
//     </div>
//     </div>
//   )
// }

// export default Registration

//////////////ui2./////////////////////////////////

// import React, { useState, useContext } from 'react'
// import Logo from "../assets/logo.png"
// import google from '../assets/google.png'
// import { IoEyeOutline, IoEye } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../../utils/Firebase';
// import { authDataContext } from '../context/authContext';
// import { userDataContext } from '../context/UserContext';
// import { toast } from 'react-toastify';
// import Loading from '../component/Loading';

// function Registration() {
//   const [show, setShow] = useState(false)
//   const [name,setName] = useState("")
//   const [email,setEmail] = useState("")
//   const [password,setPassword] = useState("")
//   const [loading,setLoading] = useState(false)

//   const { serverUrl } = useContext(authDataContext)
//   const { getCurrentUser } = useContext(userDataContext)
//   const navigate = useNavigate()

//   const handleSignup = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       const result = await axios.post(serverUrl + '/api/auth/registration',{name,email,password},{withCredentials:true})
//       getCurrentUser()
//       navigate("/")
//       toast.success("User Registration Successful")
//     } catch (error) {
//       toast.error("User Registration Failed")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const googleSignup = async () => {
//     try {
//       const response = await signInWithPopup(auth , provider)
//       let user = response.user
//       let name = user.displayName;
//       let email = user.email

//       await axios.post(serverUrl + "/api/auth/googlelogin" ,{name , email} , {withCredentials:true})
//       getCurrentUser()
//       navigate("/")
//       toast.success("User Registration Successful")
//     } catch (error) {
//       toast.error("User Registration Failed")
//     }
//   }

//   return (
//     <div className="w-screen h-screen bg-gradient-to-l from-[#fdfcfb] to-[#e2d1c3] flex flex-col items-center">
      
//       {/* Navbar */}
//       <div className="w-full h-[80px] flex items-center px-8 cursor-pointer" onClick={()=>navigate("/")}>
//         <img className="w-10" src={Logo} alt="Logo" />
//         <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//           OneCart
//         </h1>
//       </div>

//       {/* Title */}
//       <div className="text-center mt-6">
//         <h2 className="text-3xl font-semibold tracking-tight text-gray-800">Create an Account</h2>
//         <p className="text-gray-500 text-sm mt-2">Welcome to OneCart, join us and start shopping</p>
//       </div>

//       {/* Card */}
//       <div className="max-w-md w-[90%] mt-8 bg-white border border-gray-200 rounded-2xl shadow-xl p-8">
//         <form onSubmit={handleSignup} className="flex flex-col gap-5">
          
//           {/* Google Signup */}
//           <div 
//             className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 transition rounded-full py-3 px-4 cursor-pointer font-medium text-gray-700"
//             onClick={googleSignup}
//           >
//             <img src={google} alt="google" className="w-5" />
//             Sign up with Google
//           </div>

//           {/* Divider */}
//           <div className="flex items-center gap-2 text-gray-400 text-sm">
//             <span className="flex-1 h-px bg-gray-200"></span>
//             OR
//             <span className="flex-1 h-px bg-gray-200"></span>
//           </div>

//           {/* Inputs */}
//           <input 
//             type="text" 
//             placeholder="Username"
//             className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
//             value={name} onChange={(e)=>setName(e.target.value)} required
//           />
//           <input 
//             type="email" 
//             placeholder="Email"
//             className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
//             value={email} onChange={(e)=>setEmail(e.target.value)} required
//           />
//           <div className="relative w-full">
//             <input 
//               type={show ? "text" : "password"} 
//               placeholder="Password"
//               className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-400 focus:outline-none text-gray-800"
//               value={password} onChange={(e)=>setPassword(e.target.value)} required
//             />
//             {!show 
//               ? <IoEyeOutline className="absolute right-4 top-3.5 w-5 h-5 text-gray-500 cursor-pointer" onClick={()=>setShow(prev=>!prev)}/> 
//               : <IoEye className="absolute right-4 top-3.5 w-5 h-5 text-gray-500 cursor-pointer" onClick={()=>setShow(prev=>!prev)}/>
//             }
//           </div>

//           {/* Submit */}
//           <button 
//             type="submit" 
//             className="w-full bg-pink-500 hover:bg-pink-600 transition text-white font-semibold py-3 rounded-full shadow-md"
//           >
//             {loading ? <Loading/> : "Create Account"}
//           </button>

//           {/* Login Link */}
//           <p className="text-sm text-gray-600 text-center">
//             Already have an account?{" "}
//             <span 
//               className="text-pink-500 font-semibold cursor-pointer hover:underline"
//               onClick={()=>navigate("/login")}
//             >
//               Login
//             </span>
//           </p>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Registration
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
