import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './banner.css';


function Banner() {
  const NextArrow = ({ onClick }) => {
    return (
      <button className="slick-arrow1 " onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight}  />
      </button>
    );
  };

  // Custom Previous Arrow component
  const PrevArrow = ({ onClick }) => {
    return (
      <button className="slick-arrow2 " onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="header_slider_area">
      <Slider {...settings}>
        <div className="header_slider_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p><span className="subtitle_number">01</span> Australian Certification Project</p>
                <h1> Quality Wins Customers, Reputation Creates Benefits!</h1>
                <div className="slide_button">
                  <a href="#" className="btn-yellow">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_slider_bg slider_bg2">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p><span className="subtitle_number">02</span> Certification Project of Asian</p>
                <h1>Faimess, Rigorous, Authority, Effciency.</h1>
                <div className="slide_button">
                  <a href="#" className="btn-yellow">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header_slider_bg slider_bg3">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p><span className="subtitle_number">03</span> EU Certification Project</p>
                <h1>Honesty-Based, Professional Service, Innovation, Strive For Excellence,
Win The World.
                 </h1>
                <div className="slide_button">
                  <a href="#" className="btn-yellow">GET A FREE QUOTE</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Banner;


// import React from "react";

// function CommonServices() {
//   return (
//     <>
//       {/*===========================
//         Start Service
//       ===========================*/}
//       <section className="service_area section_padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="hero-section-title text-center">
//                 <h2 style={{ color: "#2c347c" }}>
//                   Qualification & Certificate
//                 </h2>
//               </div>
//               {/*end .hero-section-title*/}
//             </div>
//             {/*end .col-md-12*/}
//           </div>     
//               <div className="service_box">
//                 <div className="service_img">
//                   <img src="/assets/images/blog/news-1.jpg" alt="service 1" style={{ width: "50%", height: "auto" }}/>
//                   <div className="icon-box">
//                     <i className="icon-snow" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>
//                       HUAK Testing Lab. Approved FCC Authorized Laboratory
//                     </h2>
//                   </a>
//                   <p>
//                     From now on, the FCC will no longer accept test reports from
//                     accredited laboratories (Accredited Laboratory), and such
//                     laboratories will not ...
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}   
//             {/* <div className="col-md-3 col-sm-6"> */}
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="/assets/images/blog/news-2.jpg"
//                     alt="service 2"
//                     style={{ width: "50%", height: "auto" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-fire" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>
//                       SASO Authorized (HUAK) Registration Certificate of
//                       Laboratory
//                     </h2>
//                   </a>
//                   <p>
//                     SASO Authorized (HUAK) Registration Certificate of
//                     Laboratory, HUAK Testing SASO Approved Scope: SASO 2870,
//                     SASO 2902, SASO 2927.
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
           
         
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="/assets/images/blog/news-3.jpg"
//                     alt="service 3"
//                     style={{ width: "50%", height: "auto" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-ac" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>
//                       HUAK Testing Lab. was successfully recognized by the A2LA
//                     </h2>
//                   </a>
//                   <p>
//                     Shenzhen HUAK Testing Technology Co., Ltd. (EMC/RF Lab)
//                     successfully passed the on-site review conducted by senior
//                     A2LA review experts ...
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
          
          
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="/assets/images/202104291137064751.png"
//                     alt="service 4"
//                     style={{ width: "52%", height: "99px" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-fire" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>
//                       HUAK Successfully Joined Amazon Service Provider Network
//                     </h2>
//                   </a>
//                   <p>
//                     HUAK Testing Lab. Became Amazons Official Testing and
//                     Certification Service Provider
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
          
          
          
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="/assets/images/news6.jpg"
//                     alt="service 5"
//                     style={{ width: "50%", height: "auto" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-fire" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>SASO Certification Authorization</h2>
//                   </a>
//                   <p>
//                     SASO Certification Authorization. On May 21, 2018, HUAK
//                     signed an accreditation cooperation agreement with the Saudi
//                     Standards, Metrology and Quality (SASO)
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
           
           
           
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="assets/images/services/cpc-service.png"
//                     alt="service 6"
//                     style={{ width: "50%", height: "auto" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-fire" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>
//                       Good news: HUAK has Completed the Full Expansion of CPSC
//                       Scope
//                     </h2>
//                   </a>
//                   <p>
//                     Good news: HUAK has Completed the Full Expansion of CPSC
//                     Scope
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
            
          
            
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="assets/images/services/rcm-service.png"
//                     alt="service 7"
//                     style={{ width: "50%", height: "auto" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-fire" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>HUAK Successfully Recognized by CNAS</h2>
//                   </a>
//                   <p>
//                     HUAK Testing Lab. (Safety Laboratory/Optical
//                     Laboratory/EMC/RF Lab) successfully passed the on-site
//                     review conducted by China CNAS senior review experts.
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
          
       
//               <div className="service_box">
//                 <div className="service_img">
//                   <img
//                     src="/assets/images/news5.png"
//                     alt="service 8"
//                     style={{ width: "50%", height: "auto" }}
//                   />
//                   <div className="icon-box">
//                     <i className="icon-fire" />
//                   </div>
//                   {/* /.icon-box */}
//                 </div>
//                 {/*end .service_img*/}
//                 <div className="service_details">
//                   <a href="#">
//                     <h2>HUAK 5G NR, Sub 6G Automated Test System Was Built</h2>
//                   </a>
//                   <p>
//                     HUAK 5G NR, Sub 6G Automated Test System Was Built5G NR SUB
//                     6G、FCC、CE、SRRC test
//                   </p>
//                   <a
//                     href="#"
//                     className="btn-yellow"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//                 {/*end .service_details*/}
//               </div>
//               {/*end .service_box*/}
       
//         </div>
//         {/*end .container*/}
//       </section>
//       {/*end .service_area*/}
//       {/*===========================
//         End Service
//       ===========================*/}
//     </>
//   );
// }

// export default CommonServices;
