import Contactus from "@/components/contactus/Contactus";
import React from "react";
export const metadata = {
  title: "Contact Us - Shenzhen HUAK",
  openGraph: {
    title: "Contact Us - Shenzhen HUAK",
    description:
      "Contact Shenzhen HUAK for all your certification needs. Our expert team will guide you through the compliance and quality assurance process.",
  },
};
const Page = (props) => {
  return (
    <div>
      {/* hello world */}
      <Contactus name={props.name} />
    </div>
  );
};

export default Page;
