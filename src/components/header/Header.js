import React, { useEffect } from "react";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function Header() {
  const locate = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locate]);
  return (
    <>
      <TopNavbar />
      <Navbar />
    </>
  );
}

export default Header;
