import React from "react";
import Link from "next/link";
import { api_url } from "@/Auth";

import Image from "next/image";
import { url } from "@/Auth";

const getData = async (slug) => {
  const res = await fetch(`${api_url}/post?slug=${slug}`, {
    next: { revalidate: 2 },
  }); console.log(res)
  const data = await res.json();
  return data;
};

function Blog() {
  return (
    <>
   
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </>
  )
}

export default Blog
