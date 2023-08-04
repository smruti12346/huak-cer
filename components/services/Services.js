import React from "react";
import "./services.css";
import Link from "next/link";
import { api_url, url } from "@/Auth";
import Image from "next/image";
const getData = async () => {
  const res = await fetch(`${api_url}/categories?parent=2`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};
async function Services() {
  let data = await getData();
  console.log(data);
  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li> Services</li>
        </ul>
        <h1>Our services</h1>
      </section>

      {/*===========================
        Start Service Style 2
===========================*/}
      <div className="service_style_3_area text-center section_padding">
        <div className="container">
          <div className="row">
            <div className="col-2 col-sm-2">
              <div
                style={{
                  width: "30px",
                  height: "4px",
                  marginLeft: "3px",
                  marginBottom: "5px",
                  backgroundColor: "#D8B14B",
                }}
              ></div>
              <h3 style={{ textAlign: "left", color: "#000" }}>
                Our <br />
                Services
              </h3>
            </div>
            <div className="col-10 col-sm-10">
              {/* <div className="service_img_info_box">
                
              </div> */}
              {/*end .service_img_info_box*/}
              <p style={{ textAlign: "left", fontWeight: "400" }}>
                {" "}
                Manufacturers and importers of children's products must certify,
                in a written Children's Product Certificate (CPC) based on test
                results from a CPSC-accepted laboratory, that their children's
                products comply with applicable children's product safety rules.
                The CPC and supporting test reports must be in English. HUAK is
                one of the CPSC accredited laboratories,The laboratory
                registration number is: 1710. It is the first testing laboratory
                accredited by CPSC for the whole Scope in China, which can
                provide customers with compliant children's product testing and
                assist customers in drafting CPC certificates.
              </p>
            </div>
            {/*end .col-md-12*/}
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
      </div>

      <section className="container">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div
                className="col-md-3"
                key={index}
              >
                <Link href={`/services/${item.slug}`}>
                  <div
                    className="card"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-body">
                      <Image
                        src={`${url}/${item.acf.img_url}`}
                        height={100}
                        width={100}
                        alt="image"
                        style={{
                          height: "60px",
                          width: "auto",
                        }}
                      />
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/*===========================
        End Service
===========================*/}

      {/*===========================
        Start Service Benefits
===========================*/}
      <section className="service_benefits_area text-center section_border section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-section-title">
                <h1>Our benefits</h1>
              </div>
              {/*end .hero-section-title*/}
            </div>
            {/*end .col-md-12*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-big_clock" />
                <h3 className="benifitsheading">Emergency Service</h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-wallet" />
                <h3 className="benifitsheading">
                  {" "}
                  ISO <br /> 17025
                </h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-diploma" />
                <h3 className="benifitsheading">Satisfaction Guarantee</h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
            <div className="col-md-3 col-sm-6">
              <div className="service_benefits_box">
                <i className="icon-mechanic" />
                <h3 className="benifitsheading">12 Years Experience</h3>
              </div>
              {/*end .service_benefits_box*/}
            </div>
            {/*end col-md-3*/}
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
      </section>
      {/*end .service_benefits_area*/}
      {/*===========================
        End Service Benefits
===========================*/}
    </>
  );
}

export default Services;
