import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function Result() {

  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);

  const price = Number(params.get("price"));
  const material = Number(params.get("material"));
  const labor = Number(params.get("labor"));
  const product = params.get("product");

  const [showGraph, setShowGraph] = useState(false);

  const estimatedMarketPrice = material + labor + (0.3 * (material + labor));
  const difference = price - estimatedMarketPrice;

  let status = "";
  let color = "";
  let message = "";

  if (difference < -500) {
    status = "Underpriced";
    color = "text-green-400";
    message = "Your price is lower than market value.";
  } 
  else if (difference <= 500) {
    status = "Fair Price";
    color = "text-yellow-400";
    message = "Your price matches market value.";
  } 
  else {
    status = "Overpriced";
    color = "text-red-400";
    message = "Your price is higher than market.";
  }

  // SAVE HISTORY
  useEffect(() => {
    const old = JSON.parse(localStorage.getItem("history")) || [];
    const newEntry = { product, price, market: estimatedMarketPrice, status };
    localStorage.setItem("history", JSON.stringify([newEntry, ...old]));
  }, []);

  // 🔥 PDF FUNCTION
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Price Estimation Report", 20, 20);

    doc.setFontSize(12);
    doc.text(`Product: ${product}`, 20, 40);
    doc.text(`Your Price: ₹${price}`, 20, 50);
    doc.text(`Market Price: ₹${estimatedMarketPrice.toFixed(0)}`, 20, 60);
    doc.text(`Status: ${status}`, 20, 70);
    doc.text(`Analysis: ${message}`, 20, 80);

    doc.save(`${product}_report.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      
      <Navbar />

      <div className="flex justify-center items-center min-h-screen px-6">

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-5xl">

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT */}
            <div>
              <h2 className="text-2xl font-semibold mb-2">{product}</h2>

              <h1 className="text-4xl font-bold mb-2">₹{price}</h1>

              <p className="text-gray-400 mb-2">
                Market Estimate: ₹{estimatedMarketPrice.toFixed(0)}
              </p>

              <h3 className={`${color} font-semibold text-lg`}>
                {status}
              </h3>

              <p className="text-gray-400 mt-2">{message}</p>

              <button
                onClick={() => setShowGraph(!showGraph)}
                className="mt-6 bg-cyan-500 px-5 py-2 rounded-lg text-black hover:scale-105 transition"
              >
                {showGraph ? "Hide Analysis" : "Show Analysis"}
              </button>

              <button
                onClick={downloadPDF}
                className="ml-3 mt-6 bg-green-500 px-5 py-2 rounded-lg text-black hover:scale-105 transition"
              >
                Download Report
              </button>

              <button
                onClick={() => navigate("/home")}
                className="ml-3 mt-6 bg-purple-600 px-5 py-2 rounded-lg hover:scale-105 transition"
              >
                Back
              </button>
            </div>

            {/* RIGHT */}
            <div>

              {showGraph && (
                <div className="mt-4 bg-black/30 p-4 rounded-lg">

                  <p className="mb-4">Price Comparison</p>

                  <div className="mb-3">
                    <p className="text-sm">Your Price</p>
                    <div className="w-full bg-gray-700 h-3 rounded">
                      <div className="bg-cyan-400 h-3 rounded w-full"></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm">Market Price</p>
                    <div className="w-full bg-gray-700 h-3 rounded">
                      <div
                        className="bg-yellow-400 h-3 rounded"
                        style={{
                          width: `${(estimatedMarketPrice / price) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Result;