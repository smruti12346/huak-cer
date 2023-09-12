"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Link from "next/link";
import Select from "react-select";
import Image from 'next/image'; // Import the react-select component

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const FormOne = ({ name }) => {
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null); // Initialize selectedCountry state
  const countryOptions = [
    // Define countryOptions only once
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua-and-barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia-and-herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina-faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "cabo-verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central-african-republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo", label: "Congo" },
    { value: "costa-rica", label: "Costa Rica" },
    { value: "cote-d-ivoire", label: "Cote d'Ivoire" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czechia", label: "Czechia" },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican-republic", label: "Dominican Republic" },
    { value: "east-timor", label: "East Timor" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el-salvador", label: "El Salvador" },
    { value: "equatorial-guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea-bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "kosovo", label: "Kosovo" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "macedonia", label: "Macedonia" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall-islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar", label: "Myanmar" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new-zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "niger", label: "Niger" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north-korea", label: "North Korea" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "panama", label: "Panama" },
    { value: "papua-new-guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint-kitts-and-nevis", label: "Saint Kitts and Nevis" },
    { value: "saint-lucia", label: "Saint Lucia" },
    { value: "saint-vincent-and-the-grenadines", label: "Saint Vincent and the Grenadines" },
    { value: "samoa", label: "Samoa" },
    { value: "san-marino", label: "San Marino" },
    { value: "sao-tome-and-principe", label: "Sao Tome and Principe" },
    { value: "saudi-arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra-leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon-islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south-africa", label: "South Africa" },
    { value: "south-korea", label: "South Korea" },
    { value: "south-sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri-lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "swaziland", label: "Swaziland" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "syria", label: "Syria" },
    { value: "taiwan", label: "Taiwan" },
    { value: "tajikistan", label: "Tajikistan" },
    { value: "tanzania", label: "Tanzania" },
    { value: "thailand", label: "Thailand" },
    { value: "togo", label: "Togo" },
    { value: "tonga", label: "Tonga" },
    { value: "trinidad-and-tobago", label: "Trinidad and Tobago" },
    { value: "tunisia", label: "Tunisia" },
    { value: "turkey", label: "Turkey" },
    { value: "turkmenistan", label: "Turkmenistan" },
    { value: "tuvalu", label: "Tuvalu" },
    { value: "uganda", label: "Uganda" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united-arab-emirates", label: "United Arab Emirates" },
    { value: "united-kingdom", label: "United Kingdom" },
    { value: "united-states-of-america", label: "United States of America" },
    { value: "uruguay", label: "Uruguay" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "vanuatu", label: "Vanuatu" },
    { value: "vatican-city", label: "Vatican City" },
    { value: "venezuela", label: "Venezuela" },
    { value: "vietnam", label: "Vietnam" },
    { value: "yemen", label: "Yemen" },
    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" }
    // Add more countries as needed
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handleSubmit = async (values, { resetForm }) => {
    setLoader(true);
    setMessage("");
    
    try {
      const formData = new FormData();
      formData.append("first", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("country", selectedCountry ? selectedCountry.label : "");
      formData.append("service", name);
      formData.append("message", values.message);

      const response = await axios.post(
        "https://api.huak-cer.com/wp-json/contact-form-7/v1/contact-forms/749/feedback",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setLoader(false);
      if (response.status === 200 && response.data.status === "mail_sent") {
        setSuccess(true);
        resetForm(); // Reset the form on success
        window.location.href = `/thank-you?service=${name}`;
      } else {
        setSuccess(false);
        setMessage("Failed to send form data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setLoader(false);
      setSuccess(false);
      setMessage("An error occurred.");
    }
  };

  return (
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
                  <h1>We offer 24/7 emergency service to all of our customers</h1>
                </div>

                <p>
                  There are many variations of passages of new lorem ipsum available,
                  but the majority have suffered.
                </p>
              </div>
            </div>
            <div className="col-md-12" id="scr">
              <div className="contact-right contact-right-style-2 responsive_mt">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    country: null, // Initialize country with null
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
                        className="text-danger "
                        style={{ textAlign: "left" }}
                      />
                      <Field
                       
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                      />

                      {/* <div className="form-group"> */}
                        
                        <Select
                         
                          name="country"
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          options={countryOptions}
                          placeholder="Select a country"
                        />
                        
                      {/* </div> */}

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

                      <h4 className={success ? "text-success" : "text-danger"}>
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
  );
};

export default FormOne;
