import Navbar from "./Navbar";
import "./Home.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  return (
    <div style={{ backgroundColor: "#f4f6f9", minHeight: "100vh" }}>
      
      <Navbar />

      <div className="container mt-4">
        <h2 className="text-center mb-4">Dashboard</h2>

        <div className="row">

          {/* 🔥 Start Estimation */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 text-center">
              <h5>Start Estimation</h5>
              <p>Estimate product price</p>
              <button
                type="button"
                style={btnStyle}
                onClick={() => navigate("/form")}
              >
                Go
              </button>
            </div>
          </div>

          {/* 🔥 Reports */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 text-center">
              <h5>Reports</h5>
              <p>View previous reports</p>
              <button
                type="button"
                style={btnStyle}
                onClick={() => alert("Reports feature coming soon")}
              >
                Go
              </button>
            </div>
          </div>

          {/* 🔥 History */}
          <div className="col-md-4 mb-4">
            <div className="card p-4 text-center">
              <h5>History</h5>
              <p>Track past estimations</p>
              <button
                type="button"
                style={btnStyle}
                onClick={() => alert("History feature coming soon")}
              >
                Go
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

const btnStyle = {
  backgroundColor: "#6c5ce7",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Home;