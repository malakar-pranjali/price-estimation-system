import React from "react";

function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 0px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <input
          type="text"
          placeholder="Username"
          style={{
            padding: "10px",
            margin: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          style={{
            padding: "10px",
            margin: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <br />

        <button
  style={{
    padding: "10px 20px",
    backgroundColor: "#4facfe",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  }}
  onClick={() => (window.location.href = "/home")}
>
  Login
</button>
        {/* Register Text */}
        <p style={{ marginTop: "15px" }}>
          Don't have an account?{" "}
          <span
  style={{ color: "blue", cursor: "pointer" }}
  onClick={() => (window.location.href = "/register")}
>
  Register
</span>
        </p>
      </div>
    </div>
  );
}

export default Login;