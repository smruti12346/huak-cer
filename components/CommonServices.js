"use client";
import React, { useEffect, useState, memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { api_url, url } from "../Auth";
import Certificate from "./dialog/Certificate";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

async function CommonServices() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [open1, setOpen1] = React.useState(false);
  const [count, setCOunt] = useState(0);
  const [url1, setUrl1] = useState("");
  useEffect(() => {
    fetch(`${api_url}/pages?categories=11`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  const carouselConfig = {
    responsive: {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 40,
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 20,
      },
    },
    swipeable: true,
    draggable: true,
    infinite: true,
    keyBoardControl: true,
    customTransition: "all 1s linear",
    transitionDuration: 1000,
    containerClass: "carousel-container",
    dotListClass: "custom-dot-list-style",
    itemClass: "carousel-item-padding-40-px",
  };

  const handlePdf = (url) => {
    setUrl1(url);
    setOpen1(true);
    setCOunt(count + 1);
  };
  const handleClose = () => {
    setOpen1(false);
  };
  return (
    <>
      <Certificate
        count={count}
        url={url1}
      />
      <section className="service_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-section-title text-center">
                <h2 style={{ color: "#2c347c" }}>
                  Qualification & Certificate
                </h2>
              </div>
              {/*end .hero-section-title*/}
            </div>
            {/*end .col-md-12*/}
          </div>
          <div className="row">
            <div className="col">
              <Carousel
                {...carouselConfig}
                autoPlay={true}
                autoPlaySpeed={2000}
              >
                {data?.map((item, index) => {
                  return (
                    <div
                      className="service_box"
                      key={index}
                    >
                      <div className="service_img">
                        <img
                          src={`${url}/${item.acf.img_url}`}
                          alt="service 1"
                          style={{
                            width: "50%",
                            height: "auto",
                            margin: "auto",
                          }}
                        />
                      </div>
                      <div className="service_details">
                        <a href="#">
                          <h2>{item.title.rendered}</h2>
                        </a>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.excerpt.rendered.substring(0, 70),
                          }}
                        ></p>
                        <a className="btn-yellow">LEARN MORE</a>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
              {/* <button
                type="button"
                onClick={() => setOpen(true)}
              >
                Open Lightbox
              </button>

              <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                  { src: "/image1.jpg" },
                  { src: "/image2.jpg" },
                  { src: "/image3.jpg" },
                ]}
              /> */}
            </div>
          </div>
        </div>
      </section>
      {/*===========================
        End Service
      ===========================*/}
    </>
  );
}

export default memo(CommonServices);
