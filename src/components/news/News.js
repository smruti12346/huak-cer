import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

function News() {
  return (
    <>
      <Header/>
      {/*===========================
        Start Breadcrumb
===========================*/}
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li><a href="index.html">Home</a></li>
          <li> News</li>
        </ul>
        <h1>News</h1>
      </section>{/*end .breadcrumb_section*/}
      {/*===========================
        End Breadcrumb
===========================*/}



      {/*===========================
        Start Blog
===========================*/}
      <section className="blog_share_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box mb-30">
                <div className="bl_share_img">
                  <img src="/assets/images/news1.png" alt="blog 1" />
                  <span className="blog_date">07 Nov</span>
                </div>{/*end .blog_date*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="blog-details.html">How does a ductless heat pump work?</a></h1>
                  <p>Sep., 01, 2022, HUAK Testing Lab. passed the audit of AliExpress, the worlds famous e-commerce service platform, and became its officially recognized </p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box mb-30">
                <div className="bl_share_img">
                  <img src="/assets/images/news2.jpg" alt="blog 2" />
                  <span className="blog_date">26 Oct</span>
                </div>{/*end .blog_date*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="blog-details.html">Simple hack to improve A/C efficiency</a></h1>
                  <p>Good news: HUAK has Completed the Full Expansion of CPSC Scope  At present, the consumer group in the toy </p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box mb-30">
                <div className="bl_share_img">
                  <img src="/assets/images/news3.png" alt="blog 3" />
                  <span className="blog_date">20 Oct</span>
                </div>{/*end .blog_date*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="blog-details.html">Preparing your home before vacation</a></h1>
                  <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box">
                <div className="bl_share_img">
                  <img src="/assets/images/news5.png" alt="blog 4" />
                  <span className="blog_date">16 Oct</span>
                </div>{/*end .blog_date*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="blog-details.html">Heating and cooling safety issues</a></h1>
                  <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box">
                <div className="bl_share_img">
                  <img src="/assets/images/news6.jpg" alt="blog 5" />
                  <span className="blog_date">12 Oct</span>
                </div>{/*end .blog_date*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="blog-details.html">Don’t neglect your outdoor unit</a></h1>
                  <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box">
                <div className="bl_share_img">
                  <img src="/assets/images/news7.jpg" alt="blog 6" />
                  <span className="blog_date">07 Oct</span>
                </div>{/*end .blog_date*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="blog-details.html">Have your system professionally inspected</a></h1>
                  <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
          </div>{/*end .row*/}
        </div>{/*end .container*/}
      </section>{/*end .blog_share_area*/}
      {/*===========================
        End Blog
===========================*/}
<Footer/>
    </>
  )
}

export default News
