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
        propertyId="64c0d6a994cf5d49dc668082"
        widgetId="1h68kd1q9"
      />
    </>
  );
}

export default Header;
