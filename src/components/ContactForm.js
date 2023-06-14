import React from 'react'

function ContactForm() {
  return (
    <>
    

      {/*===========================
        Start Contact Form
===========================*/}
      <section className="contact_form_area">
        <div className="contact_form_width">
          <h1 className="contact_map_title text-center">We're not putting on airs - our work is guaranteed to satisfy.</h1>
          <div id="map" />
          <div id="map1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.097315177138!2d121.58612631514251!3d31.190314981479947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b277835674d897%3A0xcff4927bfa4df745!2sZhangjiang%20Hi-Tech%20Park!5e0!3m2!1sen!2sin!4v1686564297399!5m2!1sen!2sin" width="100%" height={600} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>{/*end .contact_form_width*/}
        <div className="contact_form_width contact-right">
          <div className="hero-title-with-shape">
            <h4 className="heading_with_border">Get a free quote</h4>
            <h1>To request a service call, please fill out the form below</h1>
          </div>{/*end .hero-title-width-shape*/}
          <form action="#" method="post">
            <input className="half_width input_m_right" type="text" name="fname" placeholder="Your name" />
            <input className="half_width" type="EMAIL" name="email" placeholder="Email address" />
            <input type="tel" name="tell" placeholder="Phone number" />
            <span className="select_icon">
              <select name="select" id="select">
                <option value="option0">Select Service</option>
                <option value="option1">Service 1</option>
                <option value="option2">Service 2</option>
                <option value="option3">Service 3</option>
                <option value="option4">Service 4</option>
              </select>
            </span>
            <button className="btn-yellow" value="SUBMIT NOW">SUBMIT NOW</button>
          </form>
        </div>{/*end .contact_form_width*/}
      </section>{/*end .contact_form_area*/}
      {/*===========================
        End Contact Form
===========================*/}
  </>
  )
}

export default ContactForm
