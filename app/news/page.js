import News from "@/components/news/News";
import Link from "next/link";

export const metadata = {
  title: "News - Shenzhen HUAK",
  openGraph: {
    title: "News - Shenzhen HUAK",
    description:
      "Stay updated with the latest news and updates from Shenzhen HUAK, a leading certification company in the industry.",
  },
};
const Page = () => {
  return (
    <div>
      <Link href={`/news/${item.slug}`}></Link>
      <News />
    </div>
  );
};

export default Page;
