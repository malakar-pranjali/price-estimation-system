import React, { useState } from "react";
import Navbar from "./Navbar";

function Form() {

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [labor, setLabor] = useState("");

  const handleSubmit = async () => {

    const estimatedMarketPrice =
      Number(material) + Number(labor) + 500;

    let status = "";

    if (price < estimatedMarketPrice) {
      status = "Cheap";
    }
    else if (price === estimatedMarketPrice) {
      status = "Fair Price";
    }
    else {
      status = "Expensive";
    }

    const data = {
      product,
      price: Number(price),
      estimatedMarketPrice,
      status,
    };

    // 🔥 SAVE TO BACKEND
    await fetch("http://localhost:5000/save", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),

    });

    window.location.href =
      `/result?product=${product}&price=${price}&estimated=${estimatedMarketPrice}&status=${status}`;

  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="flex justify-center items-center min-h-screen">

        <div className="bg-white/5 backdrop-blur-lg border border-gray-800 p-8 rounded-2xl w-[400px]">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Enter Product Details
          </h2>

          <input
            placeholder="Product Name"
            className="w-full mb-4 p-3 bg-transparent border border-gray-700 rounded-lg"
            onChange={(e)=>setProduct(e.target.value)}
          />

          <input
            placeholder="Selling Price"
            type="number"
            className="w-full mb-4 p-3 bg-transparent border border-gray-700 rounded-lg"
            onChange={(e)=>setPrice(e.target.value)}
          />

          <input
            placeholder="Material Cost"
            type="number"
            className="w-full mb-4 p-3 bg-transparent border border-gray-700 rounded-lg"
            onChange={(e)=>setMaterial(e.target.value)}
          />

          <input
            placeholder="Labor Cost"
            type="number"
            className="w-full mb-6 p-3 bg-transparent border border-gray-700 rounded-lg"
            onChange={(e)=>setLabor(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-500 text-black py-3 rounded-lg hover:bg-cyan-400 transition"
          >
            Calculate
          </button>

        </div>
      </div>
    </div>
  );
}

export default Form;