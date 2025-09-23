import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./EHH_Final_logo.png";
// import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const sidebarRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  // Check if ODP section is active (ODP page + its training/quiz pages)
  const isODPActive = () => {
    return (
      location.pathname === "/odp" ||
      // Check if we're in training/quiz for ODP (type = 'odp')
      (location.pathname.includes("/training") && location.pathname.includes("/odp/")) ||
      (location.pathname.includes("/quiz") && location.pathname.includes("/odp/")) ||
      // Alternative check using URL segments for /training/odp/* or /quiz/odp/*
      location.pathname.startsWith("/training/odp") ||
      location.pathname.startsWith("/quiz/odp")
    );
  };

  // Check if HOD section is active (HOD page + its training/quiz pages)
  const isHODActive = () => {
    return (
      location.pathname === "/hab" ||
      // Check if we're in training/quiz for HOD (type = 'hod')
      (location.pathname.includes("/training") && location.pathname.includes("/hab/")) ||
      (location.pathname.includes("/quiz") && location.pathname.includes("/hab/")) ||
      // Alternative check using URL segments for /training/hod/* or /quiz/hod/*
      location.pathname.startsWith("/training/hab") ||
      location.pathname.startsWith("/quiz/hab")
    );
  };

  const handleClick = () => {
    document.getElementById("mySidebar").classList.remove("visibleNav");
  };

  // Click outside functionality
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = sidebarRef.current;
      const menuBtn = document.querySelector(".menu-btn");

      if (sidebar && sidebar.classList.contains("visibleNav")) {
        if (
          !sidebar.contains(event.target) &&
          !menuBtn?.contains(event.target)
        ) {
          sidebar.classList.remove("visibleNav");
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar" id="mySidebar" ref={sidebarRef}>
      {/* Close button (X) */}
      <button onClick={handleClick} className="cancel-btn  mb-4 ">
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Sidebar brand */}
      <div className="sidebar-brand">
        <Link to="/odp" className="brand-link d-flex flex-column align-items-center">
        <img src={logo} height={110} width={110} alt="Everest Home Health Logo" className="sidebar-logo" />
        
        </Link>
      </div>

      {/* Navigation links */}
      <nav className="nav flex-column pt-3">
        {/* Navigation section header */}
        <div className="nav-section-header">
          <h6 className="nav-header">Learning Center</h6>
        </div>

        {/* ODP Navigation Link */}
        <Link
          onClick={handleClick}
          to="/odp"
          className={`nav-link ${isODPActive() ? "active" : ""}`}
        >
          📋 ODP Training
        </Link>

        {/* HOD Navigation Link */}
        <Link
          onClick={handleClick}
          to="/hab"
          className={`nav-link ${isHODActive() ? "active" : ""}`}
        >
          👨‍💼 HAB Training
        </Link>
      </nav>

      {/* Arrow back button */}
      <button
        onClick={handleClick}
        style={{ width: "50px" }}
        className="position-absolute closebtn-2 mt-3"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
    </div>
  );
}

export default Sidebar;