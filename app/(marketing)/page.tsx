import HeroSection from "../../components/landing/heroSection/page";
import Section1 from "../../components/landing/section1/page";
import {section1} from "../../public/constant";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
       <HeroSection />

       <Section1 {...section1} />

    </div>
  );
}
