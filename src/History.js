import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  // 🔥 CLEAR HISTORY
  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">
            History
          </h2>

          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-400 transition"
            >
              Clear All
            </button>
          )}
        </div>

        {/* EMPTY */}
        {history.length === 0 ? (
          <div className="text-center mt-20 text-gray-400">
            No records found
          </div>
        ) : (

          <div className="grid md:grid-cols-2 gap-6">

            {history.map((item, index) => (

              <div
                key={index}
                className="bg-white/5 border border-gray-800 p-5 rounded-2xl hover:scale-105 hover:shadow-xl transition-all duration-300"
              >

                <h3 className="text-lg font-semibold mb-2">
                  {item.product}
                </h3>

                <p className="text-gray-300">
                  Price: ₹{item.price}
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    item.status === "Cheap"
                      ? "text-green-400"
                      : item.status === "Fair Price"
                      ? "text-yellow-400"
                      : "text-red-400"
                  }`}
                >
                  {item.status}
                </p>

              </div>

            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default History;