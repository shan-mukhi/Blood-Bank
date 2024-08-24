import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg"; // Add your logo image path here
import  "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img src={logo} alt="RedReserve Logo" style={{ width: "40px", height: "40px", marginRight: "10px" }} />
          <span>RedReserve</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Donate Blood</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/aboutus">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/volunteer">Volunteer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">contactus</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
