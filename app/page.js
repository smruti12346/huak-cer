import dynamic from "next/dynamic";
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
      <Banner />
      <Downbanner />
      <FeatureServices />
      <About />
      <CommonServices />
      <LatestNews />
      <LabIntroduction />
      <ContactForm />
      {/* comment */}
    </>
  );
}
