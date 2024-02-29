import "./globals.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/fontello.css";
import "@/assets/css/animate.css";
import "@/assets/css/responsive.css";

import Script from "next/script";
import Head from "next/head";
const Header = dynamic(() => import("@/components/header/Header"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shenzhen HUAK - Certification Services",
  description:
    "Shenzhen HUAK provides comprehensive certification services. Ensure compliance and quality with our expert solutions for various industries.",
  openGraph: {
    title: "Shenzhen HUAK - Certification Services",
    description:
      "Shenzhen HUAK provides comprehensive certification services. Ensure compliance and quality with our expert solutions for various industries.",
    locale: "en_US",
    type: "website",
    url: "https://huak-cer.com",
    site_name: "Huak-cer",
  },
  alternates: {
    canonical: "https://huak-cer.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <meta
          name="google-site-verification"
          content="AYKBSpCdakY4gr3g6izBLZQJJkzoTFnqtLkOqbyz2No"
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4W7S589GPE" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4W7S589GPE');
        `}
        </Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9SLR34S');`,
          }}
        ></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11292301273"
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-11292301273');`,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
