import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [labor, setLabor] = useState("");

  const handleSubmit = () => {
    navigate(`/result?product=${product}&price=${price}&material=${material}&labor=${labor}`);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="flex justify-center items-center min-h-screen">

        <div className="bg-white/5 backdrop-blur-lg border border-gray-800 p-8 rounded-2xl w-[400px] shadow-xl">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Enter Product Details
          </h2>

          <input
            placeholder="Product Name"
            className="w-full mb-4 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
            onChange={(e)=>setProduct(e.target.value)}
          />

          <input
            placeholder="Price"
            type="number"
            className="w-full mb-4 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
            onChange={(e)=>setPrice(e.target.value)}
          />

          <input
            placeholder="Material Cost"
            type="number"
            className="w-full mb-4 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
            onChange={(e)=>setMaterial(e.target.value)}
          />

          <input
            placeholder="Labor Cost"
            type="number"
            className="w-full mb-6 p-3 bg-transparent border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
            onChange={(e)=>setLabor(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:scale-105 transition-all duration-300"
          >
            Calculate
          </button>

        </div>
      </div>
    </div>
  );
}

export default Form;