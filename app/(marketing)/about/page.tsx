import Section1 from "../../../components/about/section1/page";
import Section2 from "../../../components/about/section2/page";

export default function Page() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
      <Section1 leftTitle="Meet ArcFind " rightTitle="Your micro-service architecture co-pilot" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"/>
      <Section2 />
    </div>
  );
}
