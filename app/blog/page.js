import { api_url } from '@/Auth';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch(`${api_url}/posts`, {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
};

async function Page() {
  const data = await getData();

  return (
    <section className="blog_share_area section_padding">
      <div className="container">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-6 col-sm-6" key={index}>
              <Link href={`/blog/${item.slug}`}>
                <div className={`blog_share_box mb-30`} style={{ height: '400px', padding:  '80px 0' }}>
                  <div className="bl_share_img">
                    <img src={item.acf.img_url} alt={`blog ${index}`} />
                    <span className="blog_date">{item.x_date}</span>
                  </div>
                  <div className="blog_share_details">
                    <span
                      className="comment_author"
                      style={{ paddingBottom: '5px', paddingTop: '0' }}
                    >
                      by <a href="#">{item.x_author}</a> - <a href="#">3 Comments</a>
                    </span>
                    <h1>
                      <a href="#">{item.title.rendered}</a>
                    </h1>
                    <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
