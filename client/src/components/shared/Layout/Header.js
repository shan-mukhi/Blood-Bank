
import React from "react";
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";




const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const location = useLocation();

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://cdn.vectorstock.com/i/500p/44/59/blood-drop-vector-32104459.jpg"
            alt="RedReserve Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <span>RedReserve</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <p className="nav-link">
                <BiUserCircle /> Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}
                &nbsp;
                <span className="badge bg-secondary">{user?.role}</span>
              </p>
            </li>
            {(location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital") && (
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/analytics">
                  Analytics
                </Link>
              </li>
            )}
            {!(location.pathname === "/" ||
              location.pathname === "/donar" ||
              location.pathname === "/hospital") && (
              <li className="nav-item mx-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/home">
                Why Donate Blood?
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/volunteer">
                Volunteer
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
