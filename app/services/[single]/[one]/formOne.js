"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

async function handleSubmit(values, { resetForm }) {
  try {
    const response = await axios.post(
      "https://api.huak-cer.com/wp-json/contact-form-7/v1/contact-forms/749/feedback",
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
  const handleChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  //let route = useRouter();
  const handleSubmit = (values) => {
    //console.log(values);
    setLoader(true);
    setMessage("");
    let formData = new FormData();
    formData.append("first", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("service", name);
    formData.append("message", values.message);
    //console.log(formData);

    axios
      .post(
        "https://api.huak-cer.com/wp-json/contact-form-7/v1/contact-forms/749/feedback",
        formData
      )
      .then((data) => {
        setLoader(false);
        if (data.data.status === "mail_sent") {
          //window.location.href = `/thank-you?service=${name}`;
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
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form>
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-danger"
                          style={{ textAlign: "left" }}
                        />
                        <Field
                          className="half_width input_m_right"
                          type="text"
                          name="name"
                          placeholder="Your name"
                        />

                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                          style={{ textAlign: "left", marginTop: "-19px" }}
                        />
                        <Field
                          className="half_width"
                          type="email"
                          name="email"
                          placeholder="Email address"
                        />

                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-danger"
                          style={{ textAlign: "left" }}
                        />
                        <Field
                          type="tel"
                          name="phone"
                          placeholder="Phone number"
                        />

                        <ErrorMessage
                          name="message"
                          component="div"
                          className="text-danger"
                          style={{ textAlign: "left" }}
                        />
                        <Field
                          as="textarea"
                          name="message"
                          id="content"
                          cols={20}
                          rows={5}
                          placeholder="Write message"
                        />

                        <h4
                          className={success ? "text-success" : "text-danger"}
                        >
                          {message}
                        </h4>
                        <button
                          className="btn-yellow"
                          type="submit"
                          disabled={loader || isSubmitting}
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
                      </Form>
                    )}
                  </Formik>
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
