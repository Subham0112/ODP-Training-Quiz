import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../styles/Sidebar.css';

function Sidebar() {
  const location = useLocation();
  const sidebarRef = useRef(null);
  const isActive = (path) => location.pathname === path;
  const handleClick = () => {
    document.getElementById('mySidebar').classList.remove('visibleNav');
 
  }

  // Click outside functionality
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = sidebarRef.current;
      const menuBtn = document.querySelector('.menu-btn'); // Your actual menu button
      
      // Check if sidebar exists and is visible
      if (sidebar && sidebar.classList.contains('visibleNav')) {
        // Check if click is outside sidebar and not on the menu button
        if (!sidebar.contains(event.target) && !menuBtn?.contains(event.target)) {
          sidebar.classList.remove('visibleNav');
        }
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="sidebar" id="mySidebar" ref={sidebarRef}>
      <button  onClick={handleClick}  className='cancel-btn mt-3'><i className="fa-solid fa-xmark"></i></button>
      <div className="sidebar-brand">
        <Link to="/odp" className="brand-link">
          ODP System
        </Link>
      </div>
      <nav className="nav flex-column pt-3">
        <Link 
          onClick={handleClick}
          to="/odp"
          className={`nav-link ${isActive('/odp') || location.pathname.includes('/training') || location.pathname.includes('/quiz') ? 'active' : ''}`}
        >
          📋 ODP
        </Link>
      </nav>

      <button  onClick={handleClick} style={{width:"50px"}}  className=' position-absolute  closebtn-2 mt-3'> <i class="fa-solid fa-arrow-left"></i></button>
    </div>
  );
};

export default Sidebar;