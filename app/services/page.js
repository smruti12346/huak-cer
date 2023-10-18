import Services from "@/components/services/Services";

export const metadata = {
  title: "Certification Services - Shenzhen HUAK",
  openGraph: {
    title: "Certification Services - Shenzhen HUAK",
    description:
      "Browse our diverse certification services at Shenzhen HUAK. We deliver excellence in compliance and quality assurance for various sectors and standards.",
  },
  alternates: {
    canonical: "https://huak-cer.com/services/",
  },
};

const Page = () => {
  return (
    <div>

      <Services />
    </div>
  );
};

export default Page;
