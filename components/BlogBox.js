import React from 'react';

const BlogBox = ({ post }) => {
  return (
    <div className="blog_share_box mb-30">
      <a href={`/blog/${post.slug}`} className="box-link">
        <div className="bl_share_img">
          <img src={post.acf.img_url} alt={`blog ${post.id}`} />
          <span className="blog_date">{post.x_date}</span>
        </div>
        <div className="blog_share_details">
          <span className="comment_author">
            by <a href="#">{post.x_author}</a> - <a href="#">3 Comments</a>
          </span>
          <h1>
            <a href={`/blog/${post.slug}`}>{post.title.rendered}</a>
          </h1>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      </a>
    </div>
  );
};

export default BlogBox;
