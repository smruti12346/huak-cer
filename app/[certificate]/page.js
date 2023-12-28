import React from "react";
import Link from "next/link";
import { api_url } from "@/Auth";
import FormOne from "./formOne";
import Image from "next/image";
import { url } from "@/Auth";

async function getData(slug) {
  const res = await fetch(`${api_url}/pages?slug=${slug}`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const product = await getData(params.certificate);
  return {
    title: product[0]?.acf?.meta_title || "Default Title",
    openGraph: {
      title: product[0]?.acf?.meta_title || "Default Title",
      description: product[0]?.acf?.meta_description || "",
      locale: "en_US",
      type: "website",
      site_name: "Huak-cer",
    },
    alternates: {
      canonical: `https://huak-cer.com/${params.certificate}/`,
    },
  };
}
function scrollToQuoteSection() {
  const quoteSection = document.getElementById("quoteSection");
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: "smooth" });
  }
}

async function Page(props) {
  let data = await getData(props.params.certificate);

  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <h1> {data[0].title?.rendered}</h1>
      </section>
      <div className="col-12 col-sm-12">
        <div className="service_style_3_area text-center section_padding one-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12">
                <div
                  style={{
                    width: "30px",
                    height: "4px",
                    marginLeft: "3px",
                    marginBottom: "5px",
                    backgroundColor: "#D8B14B",
                  }}
                ></div>
                <h3
                  style={{
                    textAlign: "left",
                    color: "#000",
                    marginBottom: "15px",
                  }}
                >
                  {data[0].title?.rendered}
                </h3>
              </div>

              <div class="row">
                <div class="col-md-4">
                  <Image
                    class="alignnone size-medium wp-image-251"
                    src={`${url}/${data?.[0]?.acf?.certificate_url}`}
                    alt=""
                    width="600"
                    height="600"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <section className="contact_form_area contact_us section_padding">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div
                            className="contact-right contact_details"
                            style={{
                              paddingRight: "0px",
                              border: "1px solid #eceaea",
                              boxShadow: "1px 1px 2px -2px",
                            }}
                          >
                            <div>
                              <div
                                className="contact_location_map col-12"
                                style={{
                                  width: "100%",
                                }}
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
                              <div className="contact_location_map contact_location_call col-12">
                                <span className="icon-contact_call" />
                                <p>
                                  patty@cer-mark.com
                                  <br />
                                  Phone: +86-135-28437881 <br />
                                  Whatsapp: +86-135-28437881
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div class="col-md-8">
                  <div
                    style={{ textAlign: "left", fontWeight: "400" }}
                    dangerouslySetInnerHTML={{
                      __html: data[0].content.rendered,
                    }}
                  ></div>
                  <div id="callform">
                    <FormOne name={props.params.one} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-button">
        <a href="#callform">
          <button className="get-quote-button">Get a Quote</button>
        </a>
      </div>
    </>
  );
}

export default Page;
