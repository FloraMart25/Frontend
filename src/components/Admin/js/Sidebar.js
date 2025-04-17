import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaUserCog, FaFileInvoice, FaSignOutAlt } from "react-icons/fa";
import logo from "../../../asstes/logo.png";
import "../css/styles.css";

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
          to="/admindashboard"
          className={`link ${isActive("/admindashboard")}`}
        >
          <FaHome className="icon" /> Dashboard
        </Link>
        <Link
          to="/user-management"
          className={`link ${isActive("/user-management")}`}
        >
          <FaUserCog className="icon" /> User Management
        </Link>
        <Link
          to="/vendor-application"
          className={`link ${isActive("/vendor-application")}`}
        >
          <FaFileInvoice className="icon" /> Vendor Application
        </Link>
      </div>

      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt className="icon" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
