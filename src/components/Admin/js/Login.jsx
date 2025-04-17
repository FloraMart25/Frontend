import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../asstes/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy credentials (Replace with actual authentication logic)
    const adminUser = "admin";
    const adminPassword = "admin123";

    const vendorUser = "tshering@gmail.com";
    const vendorPassword = "tshering123";

    if (username === adminUser && password === adminPassword) {
      navigate("/admindashboard"); // Redirect to admin dashboard
    } else if (username === vendorUser && password === vendorPassword) {
      navigate("/vendordashboard"); // Redirect to vendor dashboard
    } else {
      setError("Invalid user");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f9f5f3",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "400px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Left Side - Form */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              fontSize: "22px",
              color: "#744f41",
              fontWeight: "bold",
            }}
          >
            LOG IN
          </h2>
          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            <div
              style={{
                width: "100%",
                position: "relative",
                marginBottom: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "2px solid #d4a6a6",
                  outline: "none",
                  background: "transparent",
                  fontSize: "16px",
                  ...(error && { borderBottom: "2px solid red" }),
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                position: "relative",
                marginBottom: "10px",
              }}
            >
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  borderBottom: "2px solid #d4a6a6",
                  outline: "none",
                  background: "transparent",
                  fontSize: "16px",
                  ...(error && { borderBottom: "2px solid red" }),
                }}
              />
            </div>
            {error && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
                {error}
              </p>
            )}

            {/* Forgot Password Link */}
            <p
              style={{
                fontSize: "12px",
                color: "#744f41",
                marginTop: "10px",
                cursor: "pointer",
                marginLeft: "200px",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/forgot-password")}
            >
              Forgot password?
            </p>

            <button
              type="submit"
              style={{
                marginTop: "20px",
                backgroundColor: "#d4a6a6",
                border: "none",
                padding: "10px 20px",
                color: "white",
                fontSize: "14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </form>
        </div>

        {/* Right Side - Logo */}
        <div
          style={{
            flex: 1,
            background: "#f3dedb",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src={logo}
            alt="FloraMart Logo"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <h2 style={{ fontSize: "18px", color: "#744f41", fontWeight: "bold" }}>
            Welcome to FloraMart
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
