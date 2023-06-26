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
                  {/* <h1>Our commitment: quality first, hard service, professional fast!</h1> */}
                </div>{/*end .hero-title-with-shape*/}
                <p>Shenzhen Huake Testing Technology Co., LTD. (abbreviation: HUAK) is a third-party testing institution mainly engaged in product electromagnetic compatibility testing (EMC), radio frequency testing, 5G NR 5ub 6G, ISAR, safety testing,batteries , chemical hazardous substances analysis, food touchable materials analysis and testing. As a well-known third-party testing laboratory in China, HUAK has been recognized by many international organizations, including China National Accreditation Administration for Conformity Assessment and A2LA, etc. </p>
                <a href="#" className="btn-yellow">LEARN MORE</a>
              </div>{/*end .about_details*/}
            </div>{/*end .col-md-6*/}
            {/* <div className="col-md-6">
              <p>Huak is also the testing and certification service provider designated by Amazon. We also maintain close cooperation with international well-known bulletin agencies such as MICOM, TUV, element, MET and PHOENIX TESTLAB GmbH. The laboratory is in strict accordance with the ISO/IEC17025 international laboratory management standards organization established, and follow the "fair, rigorous, authoritative, efficient" quality policy, to "integrity-based, professional service, innovation for excellence, win-win world" for the purpose of service, based on China, service to the world.</p>
            </div> */}
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
