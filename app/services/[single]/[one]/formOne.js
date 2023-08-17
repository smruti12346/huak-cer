"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
async function handleSubmit(values, { resetForm }) {
  try {
    const response = await axios.post(
      "https://huak-api.thecbdworld.org/wp-json/contact-form-7/v1/contact-forms/749/feedback",
      values,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      console.log("Form data sent successfully!");
    } else {
      console.error("Failed to send form data.");
    }
    resetForm();
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

const validationSchema = Yup.object().shape({
  // first: Yup.string().trim().required('*Name is required').min(3, '*Name must be at least 3 characters').max(50, '*Name can be at most 50 characters'),
  // email: Yup.string().trim().required('*Email is required').email('*Invalid email format').max(100, '*Email can be at most 100 characters'),
  // phone: Yup.string().trim().required('*Mobile number is required').matches(/^[0-9]+$/, '*Mobile number must contain only digits').min(10, '*Mobile number must be at least 10 digits').max(15, '*Mobile number can be at most 15 digits'),
});
const FormOne = ({ name }) => {
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
  //let route = useRouter();
  const handleSubmit = () => {
    setLoader(true);
    setMessage("");
    let formData = new FormData();
    formData.append("first", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("service", name);
    formData.append("message", form.message);
    console.log(formData);

    axios
      .post(
        "https://huak-api.thecbdworld.org/wp-json/contact-form-7/v1/contact-forms/749/feedback",
        formData
      )
      .then((data) => {
        setLoader(false);
        window.location.href = `/thank-you?service=${name}`;
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
      <div className="col-12 col-sm-12">
        <section className="contact_form_area contact_us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="contact-right contact_details">
                  <div className="hero-title-with-shape">
                    <Link href="#scr">
                      <h4 className="btn-yellow">Contact with us</h4>
                    </Link>
                    <h1>
                      We offer 24/7 emergency service to all of our customers
                    </h1>
                  </div>
                  {/*end .hero-title-with-shape*/}
                  <p>
                    There are many variations of passages of new lorem ipsum
                    available, but the majority have suffered.
                  </p>
                </div>
              </div>
              <div
                className="col-md-12"
                id="scr"
              >
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
                    <h4 className={success ? "text-success" : "text-danger"}>
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
    </>
  );
};

export default FormOne;
