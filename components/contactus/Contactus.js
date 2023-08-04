function Contactus() {
  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li> Contact</li>
        </ul>
        <h1>Contact us</h1>
      </section>
      <div id="nymain">
        <div className="right">
          <div className="container">
            <h2 className="text-center text-yellow">Contact Us</h2>
            <section className="contact_form_area contact_us section_padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-right contact_details">
                      <div className="hero-title-with-shape">
                        <h4 className="heading_with_border">Contact with us</h4>
                        <h1>
                          We offer 24/7 emergency service to all of our
                          customers
                        </h1>
                      </div>
                      {/*end .hero-title-with-shape*/}
                      <p>
                        There are many variations of passages of new lorem ipsum
                        available, but the majority have suffered.
                      </p>
                      <div className="contact_location_box">
                        <div className="contact_location_map">
                          <span className="icon-location" />
                          <p>
                            Address：1-2F, B2 Building, Junfeng Zhongcheng
                            Zhizao Innovation Park,
                            <br /> Heping Community, Fuhai Street,Bao'an
                            District, Shenzhen, China{" "}
                          </p>
                        </div>
                        {/*end .contact_location_map*/}
                        <div className="contact_location_map contact_location_call">
                          <span className="icon-contact_call" />
                          <p>
                            service@cer-mark.com
                            <br />
                            +86-755-23029901 <br />
                            +86-755-23029901
                          </p>
                        </div>
                        {/*end .contact_location_map .contact_location_call*/}
                      </div>
                      {/*end .contact_location_box*/}
                    </div>
                    {/*end .contact-right .contact_details*/}
                  </div>
                  {/*end .col-md-6*/}
                  <div className="col-md-6">
                    <div className="contact-right contact-right-style-2 responsive_mt">
                      <form
                        action="#"
                        method="post"
                      >
                        <input
                          className="half_width input_m_right"
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />
                        <input
                          className="half_width"
                          type="EMAIL"
                          name="email"
                          placeholder="Email address"
                        />
                        <input
                          type="tel"
                          name="tel"
                          placeholder="Phone number"
                        />
                        <textarea
                          name="content"
                          id="content"
                          cols={20}
                          rows={5}
                          placeholder="Write message"
                          defaultValue={""}
                        />
                        <button
                          className="btn-yellow"
                          value="SUBMIT NOW"
                        >
                          SUBMIT NOW
                        </button>
                      </form>
                      <div style={{ marginTop: "20px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/*right*/}
      </div>
    </>
  );
}

export default Contactus;
