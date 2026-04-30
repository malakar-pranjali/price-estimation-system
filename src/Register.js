import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#020617] text-white">

      <div className="bg-white/5 backdrop-blur-lg border border-gray-800 p-10 rounded-2xl shadow-xl w-[350px]">

        <h2 className="text-3xl font-semibold mb-6 text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
        />

        <button
          onClick={() => navigate("/")}
          className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-400 hover:scale-105 transition"
        >
          Create Account
        </button>

        <p className="mt-5 text-gray-400 text-center">
          Already have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default Register;