import React from "react";
import { api_url } from "@/Auth";

const getData = async (slug) => {
  console.log(slug);
  const data = await fetch(`${api_url}/pages?slug=${slug}`, {
    next: { revalidate: 1 },
  }).then((res) => res.json());
  return data;
};
const Page = async (props) => {
  const data = await getData(props.params.certificate);
  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
        </ul>
        <h1 style={{ fontSize: "19px" }}>{data[0]?.title?.rendered}</h1>
      </section>
      <div className="service_style_3_area text-center section_padding">
        <div className="container">
          <div className="row">
            <div
              dangerouslySetInnerHTML={{
                __html: `${data[0]?.content?.rendered}`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
