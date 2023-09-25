import { api_url, url } from "@/Auth";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
  const res = await fetch(`${api_url}/categories?slug=${slug}`);
  const data = await res.json();
  const id = await data[0].id;

  const res1 = await fetch(
    `${api_url}/pages?categories=${await id}&order=asc`,
    {
      next: { revalidate: 10 },
    }
  );
  const data1 = await res1.json();
  return data1;
};

export async function generateMetadata({ params, searchParams }, parent) {
  const product = await fetch(`${api_url}/categories?slug=${params.single}`, {
    next: { revalidate: 10 },
  }).then((data) => data.json());
  return {
    title: product[0].acf?.meta_title,
    openGraph: {
      title: product[0].acf?.meta_title,
      description: product[0].acf?.meta_description,
    },
  };
}

const Page = async (props) => {
  let slug = props.params.single;
  let show = props.searchParams.show ? props.searchParams.show : 3;
  let data = await getData(slug);
  console.log(data);
  return (
    <div>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li> Services</li>
        </ul>
        <h1>Our services</h1>
      </section>
      <section
        className="blog_share_area"
        style={{ margin: "30px 0px" }}
      >
        <div className="container">
          <div className="row">
            {data
              .filter((it) =>
                show == "other"
                  ? it.content.rendered.length < 2
                  : it.content.rendered.length > 2
              )
              .map((item, index) => {
                return (
                  <div
                    className="col-md-6"
                    key={index}
                  >
                    <Link
                      href={
                        item.content.rendered.length < 10
                          ? `/contactus?name=${item.slug}`
                          : `/services/${slug}/${item.slug}`
                      }
                    >
                      <div className="blog_share_box">
                        <div className="row">
                          <div
                            className="col-md-4"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div className="bl_share_img">
                              {item.acf.img_url !== "" ? (
                                <Image
                                  src={`${url}/${item.acf.img_url}`}
                                  alt="blog 1"
                                  width={80}
                                  height={80}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                          <div
                            className="col-md-8"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <div className="blog_share_details">
                              <h1>
                                <Link
                                  href={
                                    item.content.rendered.length < 10
                                      ? `/contactus?name=${item.slug}`
                                      : `/services/${slug}/${item.slug}`
                                  }
                                >
                                  {item.title.rendered}
                                </Link>
                              </h1>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: item.acf.short_desc.substring(0, 80),
                                }}
                              ></p>
                              {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            {show != "other" ? (
              <div className="col-md-6">
                <Link href={`/services/${slug}?show=other`}>
                  <div className="blog_share_box">
                    <div
                      className="row"
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <div className="col-md-12">
                        <div
                          className="blog_share_details"
                          style={{ width: "100%" }}
                        >
                          <h1 style={{ margin: "10px" }}>
                            Get A Quote For Other Certification{" "}
                            {slug == "american-certification"
                              ? "of America"
                              : ""}
                            {slug == "australian-certification-project"
                              ? "of Australia"
                              : ""}
                            {slug == "certification-project-of-asian"
                              ? "of Asia"
                              : ""}
                            {slug == "certification-project-of-china"
                              ? "of China"
                              : ""}
                            {slug == "eu-certification-project"
                              ? "of Europe"
                              : ""}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
    
      </section>
    </div>
  );
};

export default Page;
