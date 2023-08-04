import React from "react";

function ContactForm() {
  return (
    <>
      {/*===========================
        Start Contact Form
===========================*/}
      <section className="contact_form_area">
        <div className="contact_form_width">
          <h1 className="contact_map_title text-center">
            We're not putting on airs - our work is guaranteed to satisfy.
          </h1>
          <div id="map1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.761992184063!2d114.04120973345576!3d22.543901595350235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f40fb24c3d9d%3A0x53547bd0b60f2da6!2sFutian%20District%2C%20Shenzhen%2C%20China%2C%20518000!5e0!3m2!1sen!2sin!4v1690445972410!5m2!1sen!2sin"
              width="100%"
              height={600}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        {/*end .contact_form_width*/}
        <div className="contact_form_width contact-right">
          <div className="hero-title-with-shape">
            <h4 className="heading_with_border">Get a free quote</h4>
            <h1>To request a service call, please fill out the form below</h1>
          </div>
          {/*end .hero-title-width-shape*/}
          <form
            action="#"
            method="post"
          >
            <input
              className="half_width input_m_right"
              type="text"
              name="fname"
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
              name="tell"
              placeholder="Phone number"
            />
            <span className="select_icon">
              <select
                name="select"
                id="select"
              >
                <option value="option0">Select Service</option>
                <option value="option1">Service 1</option>
                <option value="option2">Service 2</option>
                <option value="option3">Service 3</option>
                <option value="option4">Service 4</option>
              </select>
            </span>
            <button
              className="btn-yellow"
              value="SUBMIT NOW"
            >
              SUBMIT NOW
            </button>
          </form>
        </div>
        {/*end .contact_form_width*/}
      </section>
      {/*end .contact_form_area*/}
      {/*===========================
        End Contact Form
===========================*/}
    </>
  );
}

export default ContactForm;
