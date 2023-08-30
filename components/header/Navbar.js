"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// import "./Header.css";
import Image from "next/image";
import { api_url } from "@/Auth";
function Navbar() {
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const handleMenu = () => {
    setToggle(!toggle);
  };
  const handleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };
  const handleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };
  useEffect(() => {
    fetch(`${api_url}/categories?parent=2`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {/*===========================
        Start Main Menu
      ===========================*/}
      <div className="main_menu_area sticky">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
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
              <div style={{ display: "flex" }}>
                <Link
                  href="/"
                  className="logo py-3"
                >
                  <Image
                    src="/assets/images/logo.png"
                    alt="Logo"
                    style={{ width: "90px", height: "90px" }}
                    width={90}
                    height={90}
                  />
                </Link>
                <a
                  href="#"
                  className="logo py-3"
                >
                  <Image
                    src="/assets/images/news3.png"
                    alt="Logo"
                    style={{ width: "auto", height: "90px", marginLeft: "8px" }}
                    width={400}
                    height={400}
                  />
                </a>
              </div>
            </div>
            {/*end .col-md-2*/}
            <div className="col-md-8 col-sm-9 collapse_responsive">
              <div
                className="collapse navbar-collapse remove_padding"
                id="myNavbar"
              >
                <ul className="nav navbar-nav text-center">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li style={{ position: "relative" }}>
                    <li
                      className={`services-dropdown ${
                        servicesDropdownOpen ? "open" : ""
                      }`}
                      onMouseEnter={handleServicesDropdown}
                      onMouseLeave={handleServicesDropdown}
                    >
                      <Link href="/services">Services</Link>
                      <ul className="dropdown-menu">
                        {data?.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link href={`/services/${item.slug}`}>
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </li>
                  {/* <li>
                    <Link href="/labintroduction">Lab Introduction</Link>
                  </li> */}
                  <li>
                    <Link href="/blog">News</Link>
                    {/* <ul className="dropdown-menu">
                    <li>
                    <Link href="">Blog</Link>
                  </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link href="/contactus">Contact Us</Link>
                  </li>
                  <li className="header_right_btn">
                    <Link
                      className="btn-yellow"
                      href="/contactus"
                    >
                      Get a Quote
                    </Link>
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
            <Link
              href="/"
              onClick={handleMenu}
            >
              Home
            </Link>
          </p>
          <p className="text-center">
            <Link
              href="/about"
              onClick={handleMenu}
            >
              About Us
            </Link>
          </p>
          <p
            className="text-center"
            onMouseEnter={handleServicesDropdown}
            onMouseLeave={handleServicesDropdown}
          >
            <Link
              href="/services"
              onClick={handleMenu}
            >
              Services
            </Link>
            <i
              className="fa fa-angle-down ml-5"
              style={{
                display: "inline-block",
                marginLeft: "20px",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={handleMobileDropdown}
            ></i>
            {mobileDropdownOpen && (
              <ul>
                {data?.map((item) => {
                  return (
                    <li
                      key={item.id}
                      style={{ margin: "20px auto" }}
                      onClick={handleMenu}
                    >
                      <Link href={`/services/${item.slug}`}>{item.name}</Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </p>
          <p className="text-center">
            <Link
              href="/news"
              onClick={handleMenu}
            >
              News
            </Link>
          </p>
          <p className="text-center">
            <Link
              href="/contactus"
              onClick={handleMenu}
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
