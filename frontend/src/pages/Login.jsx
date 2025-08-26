

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/Firebase";
import { authDataContext } from "../context/AuthContext";
import { userDataContext } from "../context/UserContext";
import Loading from "../component/Loading";
import { toast } from "react-toastify";

import Logo from "../assets/logo.png";
import google from "../assets/google.png";

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(authDataContext);
  const { getCurrentUser } = useContext(userDataContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let result = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      setLoading(false);
      getCurrentUser();
      navigate("/");
      toast.success("User Login Successful");
    } catch (error) {
      console.log(error);
      toast.error("User Login Failed");
    }
  };

  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;

      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex flex-col items-center justify-start text-gray-200">
      {/* Header */}
      <div
        className="w-full h-20 flex items-center justify-start px-8 gap-3 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img className="w-20 rounded-full shadow-lg" src={Logo} alt="" />
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

      {/* Welcome Section */}
      <div className="w-full text-center mt-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Login to Your Account
        </h2>
        <p className="text-gray-400 mt-1 text-sm">
          Step into style with WearWell
        </p>
      </div>

      {/* Card */}
      <div className="max-w-md w-[90%] mt-8 bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-8">
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-6"
        >
          {/* Google Login */}
          <div
            className="w-full h-12 bg-gray-800 text-gray-300 font-medium rounded-full flex items-center justify-center gap-3 shadow-md hover:bg-gray-700 transition cursor-pointer"
            onClick={googlelogin}
          >
            <img src={google} alt="Google" className="w-5" />
            Continue with Google
          </div>

          {/* OR Divider */}
          <div className="flex items-center w-full gap-3 text-gray-500 text-sm">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span>OR</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Inputs */}
          <div className="w-full relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-12 rounded-full border border-gray-700 bg-gray-800 px-5 font-medium placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="w-full relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full h-12 rounded-full border border-gray-700 bg-gray-800 px-5 font-medium placeholder-gray-500 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {!show ? (
              <IoEyeOutline
                className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            ) : (
              <IoEye
                className="absolute right-4 top-3.5 w-6 h-6 text-gray-400 cursor-pointer"
                onClick={() => setShow((prev) => !prev)}
              />
            )}
          </div>

          {/* Login Button */}
          <button className="w-full h-12 bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white rounded-full text-lg font-semibold shadow-lg transition">
            {loading ? <Loading /> : "Login"}
          </button>

          {/* Signup Link */}
          <p className="text-gray-400 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-yellow-400 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create one
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
