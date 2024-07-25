import dynamic from "next/dynamic";
import Head from "next/head";
const Banner = dynamic(() => import("@/components/header/Banner"));
const Downbanner = dynamic(() => import("@/components/Downbanner"));
const About = dynamic(() => import("@/components/About"));
const FeatureServices = dynamic(() => import("@/components/FeatureServices"));
const LatestNews = dynamic(() => import("@/components/LatestNews"));
const CommonServices = dynamic(() => import("@/components/CommonServices"));
const LabIntroduction = dynamic(() => import("@/components/LabIntroduction"));
const ContactForm = dynamic(() => import("@/components/ContactForm"));
export default function Home() {
  return (
    <>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Shenzhen HUAK Testing Technology Co., Ltd",
              "url": "https://huak-cer.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://huak-cer.com//search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Shenzhen HUAK Testing Technology Co., Ltd",
      "alternateName": "HUAK",
      "url": "https://huak-cer.com/",
      "logo": "https://huak-cer.com/_next/image/?url=%2Fassets%2Fimages%2Flogo.png&w=96&q=75",
      "sameAs": [
        "https://cn.linkedin.com/company/shenzhenhuaklab",
        "https://x.com/HuakShenzh18054",
        "https://huak-cer.com/"
      ]
    }`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Shenzhen HUAK Testing Technology Co., Ltd",
      "image": "https://huak-cer.com/_next/image/?url=%2Fassets%2Fimages%2Flogo.png&w=96&q=75",
      "@id": "",
      "url": "https://huak-cer.com/",
      "telephone": "+86-135-28437881",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1-2F, B2 Building, Junfeng Zhongcheng Zhizao Innovation Park, Heping Community, Fuhai Street, Bao'an District,",
        "addressLocality": "Shenzhen",
        "postalCode": "",
        "addressCountry": "CN"
      },
      "sameAs": [
        "https://x.com/HuakShenzh18054",
        "https://cn.linkedin.com/company/shenzhenhuaklab",
        "https://huak-cer.com/"
      ]
    }`,
          }}
        />
      
      <Banner />
      <Downbanner />
      <FeatureServices />
      <About />
      <CommonServices />
      <LatestNews />
      <LabIntroduction />
      <ContactForm />
    </>
  );
}
