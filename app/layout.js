import "./globals.css";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-awesome.min.css";
import "@/assets/css/fontello.css";
import "@/assets/css/animate.css";
import "@/assets/css/responsive.css";
const Header = dynamic(() => import("@/components/header/Header"));
const Footer = dynamic(() => import("@/components/footer/Footer"));
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huak Cer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
