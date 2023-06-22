import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/*===========================
        Start Main Menu
      ===========================*/}
      <div className="main_menu_area sticky">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <button type="button" className="navbar-toggles">
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
              </button>
              <a href="#" className="logo">
                <img src="assets/images/logo.png" alt="Logo" />
              </a>
            </div>{/*end .col-md-2*/}
            <div className="col-md-10 col-sm-9 collapse_responsive">
              <div className="collapse navbar-collapse remove_padding" id="myNavbar">
                <ul className="nav navbar-nav text-center">
                  <li>
                    <NavLink to="/">Home </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/services">Services</NavLink>
                  </li>                        
                  <li>
                    <NavLink to="/contactus">Contact Us</NavLink>
                  </li>
                  <li className="header_right_btn">
                    <a className="btn-yellow" href="#">Get a Quote</a>
                  </li>
                </ul>
              </div>{/*end .collapse*/}
            </div>{/*end .col-md-10*/}
          </div>{/*end .row*/}
        </div>{/*end .container*/}
      </div>{/*end .main_menu_area*/}
      {/*===========================
        End Main Menu
      ===========================*/}
    </>
  );
}

export default Navbar;
