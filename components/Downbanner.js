import React from "react";

function Downbanner() {
  return (
    <>
      <header className="header_areaa banner-bottom-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-8 col-xs-12">
              <div className="header_contact text-left">
                <ul className="hd_contact">
                  <div className="col-sm-4">
                    <li>
                      <i className="icon-placeholder" /> Address
                      <a href="#"> 1-2F, B2 Building, Shenzhen, China</a>
                    </li>
                  </div>
                  <div className="col-sm-4">
                    <li>
                      <i className="fa fa-clock-o" />
                      Anytime You're Available, We're Available<a href="#"> </a>
                    </li>
                  </div>
                  <div className="col-sm-4">
                    <li>
                      <i className="fa fa-envelope" />
                      <a href="mailTo: patty@cer-mark.com">
                        {" "}
                        patty@cer-mark.com
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
              {/*end .header_contact*/}
            </div>
            {/*end .col-md-9*/}
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="header_social text-right"></div>
              {/*end .header_social*/}
            </div>
            {/*end .col-md-3*/}
          </div>
          {/*end .row*/}
        </div>
        {/*end .container*/}
      </header>
      {/*end .header_area*/}
    </>
  );
}

export default Downbanner;
