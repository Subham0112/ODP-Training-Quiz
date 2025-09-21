import React from 'react'

function Navbar() {
     const handleClick = () => {
    
    document.getElementById('mySidebar').classList.add('visibleNav');
  }
  return (
    <div>
    {/* <nav className="navbar ">
  <div className="container-fluid">
    <button className='breadcrumb'><i className="fa-solid fa-bars"></i></button>
  </div>
</nav> */}
<nav className="navbar ">
  <div className="container-fluid">
    <button onClick={handleClick} className='menu-btn'><i className="fa-solid fa-bars"></i></button>
  </div>
</nav>
    </div>
  )

 
}

export default Navbar
