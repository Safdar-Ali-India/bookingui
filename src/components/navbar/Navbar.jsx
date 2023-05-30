import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar" style={{ background: "linear-gradient(rgb(158, 69, 123), rgb(147, 53, 137))" }} >
      <div className="navContainer">
        <span className="logo">RoomyFinder</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar