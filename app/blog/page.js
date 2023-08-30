import { api_url } from "@/Auth";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(`${api_url}/posts`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};

async function Page() {
  const data = await getData();
  console.log(data);
  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="index.html">Home</a>
          </li>
        </ul>
        <h1>Blogs</h1>
      </section>
      <section className="blog_share_area section_padding">
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div
                className="col-md-6 col-sm-12"
                key={index}
              >
                <Link href={`/blog/${item.slug}`}>
                  <div>
                    <div className="bl_share_img">
                      <img
                        src={`${item.x_featured_media_large}`}
                        alt={`blog ${index}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="blog_share_details">
                      <h1>
                        <a href="#">{item.title.rendered}</a>
                      </h1>
                      <span className="blog_date">{item.x_date}</span>
                      {/* <span
                        className="comment_author"
                        style={{ paddingBottom: "5px", paddingTop: "0" }}
                      >
                        by <a href="#">{item.x_author}</a> -{" "}
                        <a href="#">3 Comments</a>
                      </span> */}

                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.excerpt.rendered,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
