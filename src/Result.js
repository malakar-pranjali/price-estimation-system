import Navbar from "./Navbar";
import React from "react";

function Result() {

  const params = new URLSearchParams(window.location.search);

  const price = Number(params.get("price"));
  const material = Number(params.get("material"));
  const labor = Number(params.get("labor"));

  // 🔥 percentage calculation
  const materialPercent = price ? ((material / price) * 100).toFixed(1) : 0;
  const laborPercent = price ? ((labor / price) * 100).toFixed(1) : 0;

  let status = "";
  let explanation = "";
  let recommendation = "";

  if (price < 1000) {
    status = "Cheap";
    explanation = "Cost is low, making it affordable.";
    recommendation = "You can consider increasing quality or price for better profit.";
  } 
  else if (price <= 5000) {
    status = "Fair Price";
    explanation = "Balanced cost, reasonable pricing.";
    recommendation = "Good pricing. Maintain this balance for better market performance.";
  } 
  else {
    status = "Expensive";
    explanation = "High cost due to premium materials or labor.";
    recommendation = "Consider reducing cost or targeting premium customers.";
  }

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
            padding: "40px",
            borderRadius: "12px",
            boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            textAlign: "center",
            width: "420px",
          }}
        >
          <h2 style={{ marginBottom: "15px" }}>Result</h2>

          <h3 style={{ marginBottom: "10px" }}>
            Estimated Price: ₹{price}
          </h3>

          <h4 style={{ color: "#6c5ce7" }}>
            Status: {status}
          </h4>

          <p style={{ marginTop: "10px", color: "#555" }}>
            {explanation}
          </p>

          <hr />

          {/* 🔥 Breakdown */}
          <h5>Cost Breakdown</h5>
          <p>Material: {materialPercent}%</p>
          <p>Labor: {laborPercent}%</p>

          <hr />

          {/* 🔥 Recommendation */}
          <h5>Recommendation</h5>
          <p style={{ color: "#555" }}>
            {recommendation}
          </p>

          {/* 🔥 Back Button */}
          <button
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#6c5ce7",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "/home")}
          >
            Back to Dashboard
          </button>

        </div>
      </div>
    </div>
  );
}

export default Result;