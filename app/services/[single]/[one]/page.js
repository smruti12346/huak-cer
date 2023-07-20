import { api_url } from "@/Auth";
import Link from "next/link";
const getData = async (slug) => {
  const res = await fetch(`${api_url}/pages?slug=${slug}`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};
const Page = async (props) => {
  let data = await getData(props.params.one);
  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li> Services</li>
        </ul>
        <h1>Our services</h1>
      </section>

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
            <div className="col-12 col-sm-12">
              <div
                style={{ textAlign: "left", fontWeight: "400" }}
                dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
