import Aboutus from "@/components/aboutus/Aboutus";
export const metadata = {
  title: "About Shenzhen HUAK - Company Info",
  openGraph: {
    title: "About Shenzhen HUAK - Company Info",
    description:
      "Learn about Shenzhen HUAK, a leading certification company, providing top-notch services for compliance and quality assurance in different domains.",
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
