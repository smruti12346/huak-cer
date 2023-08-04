"use client";
import TopNavbar from "./TopNavbar";
import Navbar from "./Navbar";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
function Header() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <TawkMessengerReact
        propertyId="64b6b2d894cf5d49dc6460c2"
        widgetId="1h5kql8rc"
      />
    </>
  );
}

export default Header;
