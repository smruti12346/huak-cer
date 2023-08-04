"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useEffect } from "react";
import { api_url } from "@/Auth";
import { useState } from "react";
import Link from "next/link";
import { url } from "@/Auth";
function LabIntroduction() {
  // Custom Next Arrow component
  const [fetchData, setFetchData] = useState([]);
  const NextArrow = ({ onClick }) => {
    return (
      <button
        className="slick-arrow1 "
        onClick={onClick}
      >
        {/* <FontAwesomeIcon icon={faChevronRight} className='right-arrow' /> */}
      </button>
    );
  };

  // Custom Previous Arrow component
  const PrevArrow = ({ onClick }) => {
    return (
      <button
        className="slick-arrow1 slick-prev1"
        onClick={onClick}
      >
        {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
      </button>
    );
  };

  useEffect(() => {
    async function get_data() {
      let data = await fetch(`${api_url}/pages?categories=12`, {
        next: { revalidate: 20 },
      });
      let res = await data.json();
      return res;
    }
    get_data().then((data) => {
      setFetchData(data);
    });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: "30px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <>
      {console.log(fetchData)}
      {/*===========================
        Start CounterUp
      ===========================*/}
      <section className="counterup_area text-center section_padding">
        <div className="container">
          <div className="hero-section-title text-center">
            <h1>Lab Introduction</h1>
          </div>
          <Slider {...settings}>
            {fetchData.length > 0 &&
              fetchData.map((item) => (
                <div>
                  <div className="counter_box1">
                    <Image
                      width={400}
                      height={400}
                      src={`${url}/${item.acf.img_url}`}
                      className="number_img_shape"
                      alt="Shape"
                      style={{ padding: "4px" }}
                      // Add margin to create distance between images
                    />
                    <div className="service_details1">
                      <a href="#">
                        <h3>{item.title.rendered}</h3>
                      </a>
                      <p>{item.acf.sort_desc.substring(0, 120)}</p>
                      <Link
                        href={`/lab/${item.slug}`}
                        className="btn-yellow"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
          {/* end .row */}
        </div>
        {/* end .container */}
      </section>
      {/* end .counterup_area */}
    </>
  );
}

export default LabIntroduction;
