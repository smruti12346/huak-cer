import React from "react";

function TopNavbar() {
  return (
    <>
      <div>
        {/*===========================
        Start Header
===========================*/}

        <header className="header_area top-nav-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-sm-8 col-xs-12">
                <div className="header_contact text-left">
                  <ul className="hd_contact">
                    <li>
                      <i className="icon-placeholder" />{" "}
                      <a href="#"> 1-2F, B2 Building, Shenzhen, China</a>
                    </li>
                    <li>
                      <i className="icon-phone-call" />{" "}
                      <a href="#"> +86 13528437881</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o"></i>{" "}
                      <i className="icon-envelope"></i>{" "}
                      <a href="mailTo: patty@cer-mark.com">
                        {" "}
                        patty@cer-mark.com
                      </a>
                    </li>
                  </ul>
                </div>
                {/*end .header_contact*/}
              </div>
              {/*end .col-md-9*/}
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="header_social text-right">
                  <ul className="hd_social_icons">
                    <li>
                      <a href="https://twitter.com/HuakShenzh18054" target="blank">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/shenzhenhuak" target="blank">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/shenzhen-huak/" target="blank">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@ShenzhenHUAK" target="blank">
                        <i className="fa fa-youtube-play" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/shenzhenhuak/" target="blank">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    
                  </ul>
                </div>
                {/*end .header_social*/}
              </div>
              {/*end .col-md-3*/}
            </div>
            {/*end .row*/}
          </div>
          {/*end .container*/}
        </header>
        {/*end .header_area*/}
        {/*===========================
        End Header
===========================*/}
      </div>
    </>
  );
}

export default TopNavbar;
