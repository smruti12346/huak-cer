import "./globals.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/fontello.css";
import "@/assets/css/animate.css";
import "@/assets/css/responsive.css";
import Script from "next/script";
const Header = dynamic(() => import("@/components/header/Header"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shenzhen HUAK - Certification Services",
  openGraph: {
    title: "Shenzhen HUAK - Certification Services",
    description:
      "Shenzhen HUAK provides comprehensive certification services. Ensure compliance and quality with our expert solutions for various industries.",
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

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
