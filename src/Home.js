import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="px-6 py-10">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Smart Price Intelligence
          </h1>

          <p className="text-gray-400 mt-3">
            Analyze pricing and track your decisions
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => (window.location.href = "/form")}
              className="bg-cyan-500 px-6 py-2 rounded-lg text-black hover:scale-105 transition"
            >
              Start Estimation
            </button>

            <button
              onClick={() => (window.location.href = "/history")}
              className="border border-cyan-500 px-6 py-2 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-black transition"
            >
              View History
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">

          <div className="bg-white/5 p-6 rounded-xl text-center">
            <h2 className="text-3xl text-cyan-400">
              {history.length}
            </h2>
            <p className="text-gray-400">Total Records</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl text-center">
            <h2 className="text-3xl text-green-400">
              ₹{history.reduce((a, b) => a + b.price, 0)}
            </h2>
            <p className="text-gray-400">Total Value</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl text-center">
            <h2 className="text-3xl text-blue-400">
              {history.filter(i => i.status === "Fair Price").length}
            </h2>
            <p className="text-gray-400">Fair Products</p>
          </div>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div
            onClick={() => (window.location.href = "/form")}
            className="bg-white/5 p-6 rounded-xl hover:scale-105 cursor-pointer transition"
          >
            <h2 className="text-xl text-cyan-400 mb-2">
              Start Estimation
            </h2>
            <p className="text-gray-400">
              Calculate product price
            </p>
          </div>

          <div
            onClick={() => (window.location.href = "/history")}
            className="bg-white/5 p-6 rounded-xl hover:scale-105 cursor-pointer transition"
          >
            <h2 className="text-xl mb-2">
              History
            </h2>
            <p className="text-gray-400">
              View saved results
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h2 className="text-xl text-blue-400 mb-2">
              Reports
            </h2>
            <p className="text-gray-400">
              Coming soon
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;