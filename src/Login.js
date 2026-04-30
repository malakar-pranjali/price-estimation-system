import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#020617] text-white">

      <div className="bg-white/5 backdrop-blur-lg border border-gray-800 p-10 rounded-2xl shadow-xl w-[350px]">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
        />

        <button
          onClick={() => navigate("/home")}
          className="w-full bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:scale-105 transition"
        >
          Login
        </button>

        <p className="mt-5 text-gray-400 text-center">
          Don't have an account?{" "}
          <span
            className="text-cyan-400 cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default Login;