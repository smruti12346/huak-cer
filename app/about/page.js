import Aboutus from "@/components/aboutus/Aboutus";
export const metadata = {
  title: "About Shenzhen HUAK - Company Info",
  openGraph: {
    title: "About Shenzhen HUAK - Company Info",
    description:
      "Learn about Shenzhen HUAK, a leading certification company, providing top-notch services for compliance and quality assurance in different domains.",
    locale: "en_US",
    type: "website",
    url: "https://huak-cer.com/about/",
    site_name: "Huak-cer",
  },
  alternates: {
    canonical: "https://huak-cer.com/about/",
  },
};
const Page = () => {
  return (
    <div>
      <Aboutus />
    </div>
  );
};

export default Page;
