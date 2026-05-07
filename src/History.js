import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function History() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/history")

      .then((res) => res.json())

      .then((data) => {
        setHistory(data.reverse());
      });

  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="p-6 max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Estimation History
        </h1>

        {
          history.length === 0 ? (

            <div className="text-gray-400">
              No records found
            </div>

          ) : (

            <div className="grid gap-5">

              {
                history.map((item, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-gray-800 p-6 rounded-2xl backdrop-blur-lg"
                  >

                    <div className="flex justify-between items-center">

                      <div>

                        <h2 className="text-2xl font-semibold text-cyan-400">
                          {item.product}
                        </h2>

                        <p className="text-gray-400 mt-2">
                          Selling Price:
                          <span className="text-white">
                            {" "}₹{item.price}
                          </span>
                        </p>

                        <p className="text-gray-400">
                          Estimated Market Price:
                          <span className="text-green-400">
                            {" "}₹{item.estimatedMarketPrice}
                          </span>
                        </p>

                      </div>

                      <div>

                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            item.status === "Cheap"
                              ? "bg-green-500/20 text-green-400"
                              : item.status === "Fair Price"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {item.status}
                        </span>

                      </div>

                    </div>

                  </div>

                ))
              }

            </div>

          )
        }

      </div>

    </div>
  );
}

export default History;