import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import logo from "../../../asstes/logo.png";
import "../css/style.css";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/");
  };

  // Function to check active link
  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="FloraMart Logo" className="logo" />
      </div>

      <div className="sidebar-links">
        <Link
          to="/vendordashboard"
          className={`link ${isActive("/vendordashboard")}`}
        >
          <FaHome className="icon" /> Dashboard
        </Link>
        <Link to="/order-page" className={`link ${isActive("/order-page")}`}>
          <FaShoppingCart className="icon" /> Orders
        </Link>
        <Link to="/product" className={`link ${isActive("/product")}`}>
          <FaBoxOpen className="icon" /> Products
        </Link>
        <Link to="/setting" className={`link ${isActive("/setting")}`}>
          <FaCog className="icon" /> Settings
        </Link>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="icon" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
