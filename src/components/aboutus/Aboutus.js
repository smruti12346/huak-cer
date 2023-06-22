import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './aboutus.css';

function Aboutus() {
  return (
    <>
      <Header/>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li> About</li>
        </ul>
        <h1>About us</h1>
      </section>


      <section className="bg-light pt-5 pb-5">
      <div className="container">
        <h2 className="text-center text-yellow">About Us</h2>
        <div className="row parasection">
          <div className="col-md-5">
            <img src="/assets/images/about-2-1.jpg" alt="Company Image" className="img-fluid" />
          </div>
          <div className="col-md-7">
            <p className='para'>Shenzhen HUAK Testing Technology Co., Ltd (short name HUAK) Located on 1-2F, B2 Building, Junfeng Zhongcheng Zhizao Innovation Park, Heping Community, Fuhai Street, Bao'an District, Shenzhen, China. It is mainly engaged in product electromagnetic compatibility test, radio frequency test, SAR, safety, batteries, harmful substances, and finished products analysis tests (such as RoHS) and environmental reliability specialized third-party testing institutions for testing.</p>
            <p className='para'>HUAK currently has fully equipped test equipment such as Safe, EMC, RF, SAR, battery, etc. The laboratory is strictly established in accordance with ISO/IEC 17025, ISO Guide 25, and EN 45001 international laboratory management regulations. And follow the "fair, scientific, accurate, and efficient" quality policy, with "quality first, service with heart" as the service purpose, based on China, serving the world.</p>
          </div>
        </div>
        <p className="mt-5 para">HUAK, as the third party testing laboratory of the National CNAS Accreditation (CNAS L9589), has been recognized by many international certification bodies, such as Germany Phoenix, the United States FCC/Microm, and maintains close cooperation with the Chinese government inspection and quarantine agencies. These include the Shenzhen Institute of Metrological Quality Inspection, the Shenzhen Electronics Testing Center, and the China Quality Certification Center.</p>
        <p className='para'>★ Our commitment: quality first, hard service, professional fast!</p>
            <p className='para'>★ Our strengths:</p>
            <ul>
              <li> <p className='para'><span className="aboutheading">Professional:</span> &nbsp; The laboratory operates strictly in accordance with the ISO/IEC 17025 international laboratory management system. All testing and certification operations follow the product standards of the International Electrotechnical Commission(IEC) and internationally recognized operating practices.</p></li>
              <li><p className='para'><span className="aboutheading">Fast:</span> &nbsp; Review the data within one day, complete the pre-test within three days, obtain the certificate within one week, and help the customer complete the collection, sorting, and sample modification of the data and components.</p></li>
              <li><p className='para'><span className="aboutheading">Economical:</span> &nbsp; Choose a qualified laboratory as close to the plant as possible, making testing shorter and less expensive.</p></li>
              <li><p className='para'><span className="aboutheading">Authority:</span> &nbsp; The laboratory has been recognized by many international certification agencies. The certificate issued by HUAK is a guarantee of your confidence.</p></li>
              <li><p className='para b'><span className="aboutheading">Thoughtful:</span> &nbsp; Provide you with "one-stop" services such as standard consultation, component selection, application documentation, product testing, factory review, countermeasures, and certification.</p></li>
            </ul>
      </div>
    </section>



  
            
      <Footer/>
    </>
  )
}

export default Aboutus
