import { api_url, url } from "@/Auth";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
  const res = await fetch(`${api_url}/categories?slug=${slug}`);
  const data = await res.json();
  const id = await data[0].id;

  const res1 = await fetch(`${api_url}/pages?categories=${await id}`, {
    next: { revalidate: 2 },
  });
  const data1 = await res1.json();
  return data1;
};
const Page = async (props) => {
  let slug = props.params.single;

  let data = await getData(slug);
  console.log(data);
  return (
    <div>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
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
            {data.map((item, index) => {
              return (
                <div
                  className="col-md-6"
                  key={index}
                >
                  <Link href={`/services/${slug}/${item.slug}`}>
                    <div className="blog_share_box">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="bl_share_img">
                            <Image
                              src={`${url}/${item.acf.img_url}`}
                              alt="blog 1"
                              width={80}
                              height={80}
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="blog_share_details">
                            <h1>
                              <Link href={`/services/${slug}/${item.slug}`}>
                                {item.title.rendered}
                              </Link>
                            </h1>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.excerpt.rendered.substring(0, 80),
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

            {slug == "american-certification" ||
            slug == "certification-project-of-china" ? (
              <div className="col-md-6">
                <Link href={`/contactus`}>
                  <div className="blog_share_box">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="bl_share_img">
                          {/* <Image
                          src={`${url}/${item.acf.img_url}`}
                          alt="blog 1"
                          width={80}
                          height={80}
                        /> */}
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="blog_share_details">
                          <h1>
                            <Link href={`/contactus`}>
                              Get A Quote For Other Certification In{" "}
                              {slug == "american-certification"
                                ? "America"
                                : "China"}
                            </Link>
                          </h1>
                          {/* <p
                          dangerouslySetInnerHTML={{
                            __html: item.excerpt.rendered.substring(0, 80),
                          }}
                        ></p> */}
                          {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
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
