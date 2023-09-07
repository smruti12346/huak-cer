"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
function Contactus(props) {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleInput = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    setLoader(true);
    setMessage("");
    let formData = new FormData();
    formData.append("first", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("message", form.message);
    console.log(formData);

    axios
      .post(
        "https://api.huak-cer.com/wp-json/contact-form-7/v1/contact-forms/579/feedback",
        formData
      )
      .then((data) => {
        setLoader(false);
        if (data.data.status === "mail_sent") {
          window.location.href = `/thank-you?service=${name}`;
        }
        data.data.status === "mail_sent" ? setSuccess(true) : setSuccess(false);
        data.data.status === "mail_sent"
          ? setForm({
              name: "",
              email: "",
              phone: "",
              message: "",
            })
          : "";
        setMessage(data.data.message);
      });
  };
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
                        <div
                          className="contact_location_map"
                          style={{ width: "100%" }}
                        >
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
                            patty@cer-mark.com
                            <br />
                            Phone: +86-135-28437881 <br />
                            Whatsapp: +86-135-28437881
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
                          onChange={handleInput}
                          value={form.name}
                        />
                        <input
                          className="half_width"
                          type="email"
                          name="email"
                          placeholder="Email address"
                          onChange={handleInput}
                          value={form.email}
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                          onChange={handleInput}
                          value={form.phone}
                        />
                        <textarea
                          name="message"
                          id="content"
                          cols={20}
                          rows={5}
                          placeholder="Write message"
                          defaultValue={""}
                          onChange={handleInput}
                          value={form.message}
                        />
                        <h4
                          className={success ? "text-success" : "text-danger"}
                        >
                          {message}
                        </h4>
                        <button
                          className="btn-yellow"
                          value="SUBMIT NOW"
                          onClick={handleSubmit}
                          disabled={loader}
                        >
                          {loader ? (
                            <Image
                              src="/assets/images/loader6.gif"
                              width={30}
                              height={30}
                              alt="loader"
                              style={{ marginRight: "10px" }}
                            />
                          ) : (
                            ""
                          )}
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
