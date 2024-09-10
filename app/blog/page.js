"use client";

import { useState, useEffect } from "react";
import { api_url } from "@/Auth";
import Link from "next/link";

const PAGE_SIZE = 10; // Number of items per page

// Function to fetch posts data for the current page
const getData = async (page = 1) => {
  console.log(page, "===============");

  const res = await fetch(`${api_url}/posts?_page=${page}&_limit=${PAGE_SIZE}`, {
    next: { revalidate: 2 },
  });
  console.log(res, "=============")
  if (!res.ok) {
    console.error("Error fetching posts data:", res.status, res.statusText);
    return [];
  }
  const data = await res.json();
  return data;
};

// Function to fetch the total count of posts
const getTotalCount = async () => {
  const res = await fetch(`${api_url}/posts/count`, {
    next: { revalidate: 2 },
  });
  if (!res.ok) {
    console.error("Error fetching total count:", res.status, res.statusText);
    return 0;
  }

  const data = await res.json();
  
  console.log("Total Count API Response:", data); // Debugging log

  // Check if total count is directly a number or an object
  return typeof data === "number" ? data : data.count || 0;
};

export default function Page() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [posts, count] = await Promise.all([getData(page), getTotalCount()]);
        setData(posts);
        setTotalCount(count);
        console.log(`Fetched data for page: ${page}`, posts); // Debugging log
        console.log("Fetched total count:", count); // Debugging log for total count
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page]); // Add 'page' as a dependency to trigger API call on page change

  const totalPages = Math.ceil(totalCount / PAGE_SIZE); // Total pages calculation

  const handlePrevious = () => {
    if (page > 1) {
      console.log('Previous button clicked');
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      console.log('Next button clicked');
      setPage(page + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    console.log('Page button clicked:', pageNumber);
    setPage(pageNumber);
  };

  return (
    <>
      <section className="breadcrumb_section text-center section_padding">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
        <h1>Blogs</h1>
      </section>
      <section className="blog_share_area section_padding">
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-md-6 col-sm-12" key={index}>
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
          {/* Pagination Buttons */}
          <div className="pagination d-flex justify-content-center align-items-center mt-4">
            <button
              className="btn btn-outline-secondary mx-1"
              onClick={handlePrevious}
              disabled={page === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`btn mx-1 ${
                  page === index + 1 ? "btn-primary" : "btn-outline-secondary"
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            <button
              className="btn btn-outline-secondary mx-1"
              onClick={handleNext}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
