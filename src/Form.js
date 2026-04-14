import Navbar from "./Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();

  const [product, setProduct] = useState("");
  const [material, setMaterial] = useState("");
  const [labor, setLabor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = () => {

    // 🔥 Validation
    if (!product || !material || !labor || !category) {
      alert("Please fill all fields");
      return;
    }

    let base = Number(material) + Number(labor);
    let finalPrice = base;

    if (category.toLowerCase() === "luxury") {
      finalPrice = base + base * 0.3;
    }

    navigate(
      `/result?price=${finalPrice}&material=${material}&labor=${labor}`
    );
  };

  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      <Navbar />

      <div
        style={{
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "35px",
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            width: "360px",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "25px", color: "#333" }}>
            Price Estimation
          </h2>

          {/* 🔥 PRODUCT DROPDOWN */}
          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            style={inputStyle}
          >
            <option value="">Select Product</option>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="furniture">Furniture</option>
            <option value="clothes">Clothes</option>
            <option value="electronics">Electronics</option>
          </select>

          <input
            type="number"
            placeholder="Material Cost"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Labor Cost"
            value={labor}
            onChange={(e) => setLabor(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Category (normal / luxury)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleSubmit} style={buttonStyle}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "12px",
  margin: "10px 0",
  width: "100%",
  borderRadius: "6px",
  border: "1px solid #ddd",
};

const buttonStyle = {
  padding: "12px",
  width: "100%",
  backgroundColor: "#6c5ce7",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginTop: "15px",
};

export default Form;