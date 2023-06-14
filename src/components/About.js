import React from 'react'

function About() {
  return (
    <>
    

      {/*===========================
        Start About
===========================*/}
      <section className="about_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="about_image about-image__updated" />
            </div>{/*end .col-md-6*/}
            <div className="col-md-6">
              <div className="about_details">
                <div className="hero-title-with-shape">
                  <h4 className="heading_with_border">Welcome to Shenzhen HUAK Testing Technology</h4>
                  <h1>Our commitment: quality first, hard service, professional fast!</h1>
                </div>{/*end .hero-title-with-shape*/}
                <p>Shenzhen HUAK Testing Technology Co., Ltd( HUAK) Located on 1-2F, B2 Building, Junfeng Zhongcheng Zhizao Innovation Park, Heping Community, Fuhai Street, Baoan District, Shenzhen, China.</p>
                <a href="#" className="btn-yellow">LEARN MORE</a>
              </div>{/*end .about_details*/}
            </div>{/*end .col-md-6*/}
          </div>{/*end .row*/}
        </div>{/*end .container*/}
      </section>{/*end .about_area*/}
      {/*===========================
        End About
===========================*/}
  
    </>
  )
}

export default About
