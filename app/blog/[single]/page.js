import { api_url } from "@/Auth";

const getData = async (slug) => {
  const res = await fetch(`${api_url}/posts?slug=${slug}`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const product = await getData(params.single);
  return {
    title: product[0]?.acf?.meta_title || "Default Title",
    openGraph: {
      title: product[0]?.acf?.meta_title || "Default Title",
      description: product[0]?.acf?.meta_description || "",
      locale: "en_US",
      type: "website",
      url: `https://huak-cer.com/blog/${params.single}`,
      site_name: "Huak-cer",
    },
    alternates: {
      canonical: `https://huak-cer.com/blog/${params.single}`,
    },
  };
}

async function Page(props) {
  let data = await getData(props.params.single);
  const product = data[0];

  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blogs</a>
          </li>
        </ul>
        <h1>{data[0].title?.rendered}</h1>
      </section>
      <section className="blog_share_area section_padding">
        <div className="container">
          <div className="row">
            <h1>{data[0].title?.rendered}</h1>

            <div
              dangerouslySetInnerHTML={{ __html: product.content?.rendered }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
