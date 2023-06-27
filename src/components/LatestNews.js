import React, { useEffect } from 'react';

function LatestNews() {
  useEffect(() => {
    adjustBoxHeights();
    window.addEventListener('resize', adjustBoxHeights);
    return () => {
      window.removeEventListener('resize', adjustBoxHeights);
    };
  }, []);

  const adjustBoxHeights = () => {
    const boxes = document.querySelectorAll('.blog_share_box');
    let maxHeight = 0;
    boxes.forEach((box) => {
      box.style.height = 'auto';
      const boxHeight = box.offsetHeight;
      if (boxHeight > maxHeight) {
        maxHeight = boxHeight;
      }
    });
    boxes.forEach((box) => {
      box.style.height = `${maxHeight}px`;
    });
  };
  return (
    <>
     
      {/*===========================
        Start Blog
===========================*/}
<section className="blog_share_area section_padding">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="blog_share_box">
          <div className="row">
            <div className="col-md-4">
              <div className="bl_share_img">
                <img src="/assets/images/services/ce-service.png" alt="blog 1" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="blog_share_details">
                <h1><a href="#">CE Certification</a></h1>
                <p>
                  CE certification, which is limited to the product does not endanger the basic safety requirements of human, animal and cargo safety aspects, rather than the general 
            			</p>
                {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="blog_share_box">
          <div className="row">
            <div className="col-md-4">
              <div className="bl_share_img">
                <img src="/assets/images/services/fcc-service.png" alt="blog 2" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="blog_share_details">
                <h1><a href="#">FCC Certification of US</a></h1>
                <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="blog_share_box">
          <div className="row">
            <div className="col-md-4">
              <div className="bl_share_img">
                <img src="/assets/images/services/rcm-service.png" alt="blog 3" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="blog_share_details">
                <h1><a href="#">RCM Certification of Austrelia</a></h1>
                <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="blog_share_box">
          <div className="row">
            <div className="col-md-4">
              <div className="bl_share_img">
                <img src="/assets/images/services/telec-service.png" alt="blog 4" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="blog_share_details">
                <h1><a href="#">JATE Certification of Japan</a></h1>
                <p>There are many variations passages of lorem ipsum available but the majority have suffered alteration.</p>
                {/* <span className="comment_author">by admin - <a href="#">3 Comments</a></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      {/*===========================
        End Blog
===========================*/}

    </>
  )
}
export default LatestNews;