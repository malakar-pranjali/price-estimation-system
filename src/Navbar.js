import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-[#020617] border-b border-gray-800">

      <h1 className="text-xl font-bold text-white">
        Price Estimator
      </h1>

      <div className="flex gap-6 text-gray-300">

        <button 
          onClick={() => window.location.href="/home"} 
          className="hover:text-cyan-400 transition"
        >
          Home
        </button>

        <button 
          onClick={() => window.location.href="/form"} 
          className="hover:text-cyan-400 transition"
        >
          Estimate
        </button>

        <button 
          onClick={() => window.location.href="/history"} 
          className="hover:text-cyan-400 transition"
        >
          History
        </button>

      </div>

    </div>
  );
}

export default Navbar;