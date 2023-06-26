import React from 'react'

function LatestNews() {
  return (
    <>
     
      {/*===========================
        Start Blog
===========================*/}
      <section className="blog_share_area section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-section-title text-center">
                <h1>Our latest news</h1>
              </div>{/*end .hero-section-title*/}
            </div>{/*end .col-md-12*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box">
                <div className="bl_share_img">
                  <img src="/assets/images/services/ce-service.png" alt="blog 1" />
                  <span className="blog_date">07 Nov</span>
                </div>{/*end .bl_share_img*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="#">HUAK Testing Lab. Approved FCC Authorized Laboratory</a></h1>
                  <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box">
                <div className="bl_share_img">
                  <img src="/assets/images/services/fcc-service.png" alt="blog 2" />
                  <span className="blog_date">26 Oct</span>
                </div>{/*end .bl_share_img*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="#">SASO Authorized (HUAK) Registration Certificate of Laboratory</a></h1>
                  <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                </div>{/*end .blog_share_details*/}
              </div>{/*end .blog_share_box*/}
            </div>{/*end .col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="blog_share_box">
                <div className="bl_share_img">
                  <img src="/assets/images/services/rcm-service.png" alt="blog 3" />
                  <span className="blog_date">20 Oct</span>
                </div>{/*end .bl_share_img*/}
                <div className="blog_share_details">
                  <span className="comment_author">by <a href="#">admin</a> - <a href="#">3 Comments</a></span>
                  <h1><a href="#">HUAK Testing Lab. was successfully recognized by the A2LA</a></h1>
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

    </>
  )
}

export default LatestNews
