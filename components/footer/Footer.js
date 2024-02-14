import React from "react";
import "./footer.css";
import Image from "next/image";
import Link from "next/link";
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
                    <a href="mailto:patty@cer-mark.com">patty@cer-mark.com</a>
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
              <div className="col-md-5 col-sm-6">
                <div className="footer_textwidget textwidget">
                  <h2>About Shenzhen HUAK </h2>
                  <p>
                    Shenzhen HUAK Testing Technology Co., Ltd (short name HUAK)
                    is mainly engaged in product electromagnetic compatibility
                    test, radio frequency test, SAR, safety, batteries, harmful
                    substances, and finished products analysis tests (such as
                    RoHS) and environmental reliability specialized third-party
                    testing institutions for testing.
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
              <div className="col-md-1 col-sm-3">
                <h2>Quick Links</h2>
                <ul className="footer_link">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="services">Services</Link>
                  </li>
                  <li>
                    <Link href="contactus">Contact</Link>
                  </li>
                </ul>
                {/*end .footer_link*/}
              </div>
              {/*end .col-md-2*/}
              <div className="col-md-3 col-sm-3">
              <h2>Services</h2>
                <ul className="footer_link extra_mt">
                  <li>
                    <a href="https://huak-cer.com/services/american-certification/">American Certification</a>
                  </li>
                  <li>
                    <a href="https://huak-cer.com/services/australian-certification-project/">Australian Certification Project</a>
                  </li>
                  <li>
                    <a href="https://huak-cer.com/services/certification-project-of-asian/">Certification Project of Asian</a>
                  </li>
                  
                </ul>
                {/*end .footer_link*/}
              </div>
              {/*end .col-md-2*/}
              <div className="col-md-3 col-sm-6">
              <ul className="footer_link extra_mt">
                  
                  <li>
                    <a href="https://huak-cer.com/services/certification-project-of-china/">Certification Project of China</a>
                  </li>
                  <li>
                    <a href="https://huak-cer.com/services/eu-certification-project/">EU Certification Project</a>
                  </li>
                  <li>
                    <a href="https://huak-cer.com/services/other-certification-projects/">Other Certification Projects</a>
                  </li>
                </ul>
                {/*end .newslatter*/}
              </div>
              {/*end .col-md-4*/}
            </div>
            {/*end .row*/}
            <div className="copyright_area">
              <div className="row">
      <div className="col-md-4 col-sm-6">
        <p className="foot">© 2023 Huak-cer</p>
                </div>
      <div className="col-md-4 col-sm-6 text-center">
        <p className="developed-by dark-text">Developed by <a href="https://digitalvate.com/" target="blank"> Digitalvate</a></p>
      </div>
      <div className="col-md-4 col-sm-6 social-icons text-right">
                  <ul>
                    <li>
                      <a href="https://twitter.com/HuakShenzh18054" target="blank">
              <i className="fa fa-twitter dark-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/shenzhenhuak" target="blank">
              <i className="fa fa-facebook dark-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/shenzhen-huak/"  target="blank">
              <i className="fa fa-linkedin dark-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@ShenzhenHUAK" target="blank">
              <i className="fa fa-youtube-play dark-icon" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/shenzhenhuak/"  target="blank">
                      <i class="fa fa-instagram dark-icon"></i>
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
        </div>
      </footer>
    </>
  );
}

export default Footer;
