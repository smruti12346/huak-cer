import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  const handleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <>
      {/*===========================
        Start Main Menu
      ===========================*/}
      <div className="main_menu_area sticky">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <button
                type="button"
                className="navbar-toggles"
                style={{ marginTop: "30px" }}
                onClick={handleMenu}
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a
                href="#"
                className="logo py-3"
              >
                <img
                  src="/assets/images/logo.png"
                  alt="Logo"
                  style={{ width: "90px", height: "90px" }}
                />
              </a>
            </div>
            {/*end .col-md-2*/}
            <div className="col-md-10 col-sm-9 collapse_responsive">
              <div
                className="collapse navbar-collapse remove_padding"
                id="myNavbar"
              >
                <ul className="nav navbar-nav text-center">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li style={{ position: "relative" }}>
                    <li
                      className={`services-dropdown ${
                        servicesDropdownOpen ? "open" : ""
                      }`}
                      onMouseEnter={handleServicesDropdown}
                      onMouseLeave={handleServicesDropdown}
                    >
                      <NavLink to="/services">Services</NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink to="/services/1">
                            Certification Project of China
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/2">
                            Certification Project of Asian{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/3">
                            EU Certification Project{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/4">
                            Australian Certification Project{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/5">
                            International Certification Project{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/6">
                            Other Certification Projects{" "}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/services/7">
                            Pressure Vessel Certification Project{" "}
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </li>
                  <li>
                    <NavLink to="/labintroduction">Lab Introduction</NavLink>
                  </li>
                  <li>
                    <NavLink to="/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contactus">Contact Us</NavLink>
                  </li>
                  <li className="header_right_btn">
                    <a
                      className="btn-yellow"
                      href="#"
                    >
                      Get a Quote
                    </a>
                  </li>
                </ul>
              </div>
              {/*end .collapse*/}
            </div>
            {/*end .col-md-10*/}
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
        <div className={`mobile-menu ${toggle ? "" : "d-none"}`}>
          <p className="text-center">
            <NavLink to="/">Home</NavLink>
          </p>
          <p className="text-center">
            <NavLink to="/about">About Us</NavLink>
          </p>
          <p
            className="text-center"
            onMouseEnter={handleServicesDropdown}
            onMouseLeave={handleServicesDropdown}
          >
            <NavLink to="/services">Services</NavLink>
            {servicesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/services/1">Service 1</NavLink>
                </li>
                <li>
                  <NavLink to="/services/2">Service 2</NavLink>
                </li>
                <li>
                  <NavLink to="/services/3">Service 3</NavLink>
                </li>
                <li>
                  <NavLink to="/services/4">Service 4</NavLink>
                </li>
                <li>
                  <NavLink to="/services/5">Service 5</NavLink>
                </li>
                <li>
                  <NavLink to="/services/6">Service 6</NavLink>
                </li>
                <li>
                  <NavLink to="/services/7">Service 7</NavLink>
                </li>
              </ul>
            )}
          </p>
          <p className="text-center">
            <NavLink to="/labintroduction">Lab Introduction</NavLink>
          </p>
          <p className="text-center">
            <NavLink to="/news">News</NavLink>
          </p>
          <p className="text-center">
            <NavLink to="/contactus">Contact Us</NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
