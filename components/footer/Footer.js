import React from "react";
import "./footer.css";
import Image from "next/image";
function Footer() {
  return (
    <>
      {/*===========================
        Start Footer
===========================*/}
      <footer className="footer_area">
        <div className="footer_contact text-center">
          <div className="container">
            <div className="col-md-4 col-sm-4">
              <div className="footer_contact_width text-left">
                <p>
                  <i className="icon-placeholder" /> Address{" "}
                  <span>
                    1-2F, B2 Building, Junfeng Zhongcheng Zhizao Innovation
                    Park, Heping Community, Fuhai Street, Baoan District,
                    Shenzhen, China.{" "}
                  </span>
                </p>
              </div>
              {/*end .footer_contact_width*/}
            </div>
            {/*end .col-md-4*/}
            <div className="col-md-4 col-sm-4">
              <div className="footer_contact_width">
                <p>
                  <i className="icon-contact" /> Email{" "}
                  <span>
                    <a href="mailto:service@cer-mark.com">
                      service@cer-mark.com
                    </a>
                  </span>
                </p>
              </div>
              {/*end .footer_contact_width*/}
            </div>
            {/*end .col-md-4*/}
            <div className="col-md-4 col-sm-4">
              <div className="footer_contact_width text-right">
                <p>
                  <i className="icon-phone-call" /> Phone{" "}
                  <span>
                    <a href>+86 13528437881</a>
                  </span>
                </p>
              </div>
              {/*end .footer_contact_width*/}
            </div>
            {/*end .col-md-4*/}
          </div>
          {/*end .container*/}
        </div>
        {/*end .footer_contact*/}
        <div className="footer_content section_padding1">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="footer_textwidget textwidget">
                  <h2>About Shenzhen HUAK </h2>
                  <p>
                    At Shenzhen HUAK , We don’t just provide resi-dential and
                    commercial heating and air conditioning services; we make
                    people’s lives easier. Better.
                  </p>
                  <Image
                    src="/assets/images/news3.png"
                    width="150"
                    height="60"
                    alt="footer"
                  />
                </div>
                {/*end .footer_textwidget .textwidget*/}
              </div>
              {/*end .col-md-4*/}
              <div className="col-md-2 col-sm-3">
                <h2>Quick Links</h2>
                <ul className="footer_link">
                  <li>
                    <a href>Home</a>
                  </li>
                  <li>
                    <a href>About Us</a>
                  </li>
                  <li>
                    <a href>Services</a>
                  </li>
                  <li>
                    <a href>Contact Us</a>
                  </li>
                </ul>
                {/*end .footer_link*/}
              </div>
              {/*end .col-md-2*/}
              <div className="col-md-2 col-sm-3">
                <ul className="footer_link extra_mt">
                  <li>
                    <a href>Careers</a>
                  </li>
                  <li>
                    <a href>Privacy Policy</a>
                  </li>
                  <li>
                    <a href>Change Location</a>
                  </li>
                  <li>
                    <a href>Expert Tips</a>
                  </li>
                  <li>
                    <a href>Terms &amp; Conditions</a>
                  </li>
                </ul>
                {/*end .footer_link*/}
              </div>
              {/*end .col-md-2*/}
              <div className="col-md-4 col-sm-6">
                <div className="newslatter">
                  <h2>Newsletter</h2>
                  <input
                    type="EMAIL"
                    placeholder="Enter your email"
                  />
                  <button
                    className="btn-yellow"
                    value="SUBMIT NOW"
                  >
                    SUBSCRIBE
                  </button>
                </div>
                {/*end .newslatter*/}
              </div>
              {/*end .col-md-4*/}
            </div>
            {/*end .row*/}
            <div className="copyright_area">
              <div className="row">
                <div className="col-md-8 col-sm-6 copyright_text">
                  <p>© copyright 2023 by The Digitalvate</p>
                </div>
                {/*end .col-md-8*/}
                <div className="col-md-4 col-sm-6 copyright_social text-right">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*end .col-md-4*/}
              </div>
              {/*end .row*/}
            </div>
            {/*end .copyright_area*/}
          </div>
          {/*end .container*/}
        </div>
        {/*end .footer_content*/}
      </footer>
      {/*end .footer_area*/}
      {/*===========================
        End Footer
===========================*/}
    </>
  );
}

export default Footer;
