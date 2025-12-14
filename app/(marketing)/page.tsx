import HeroSection from "../../components/landing/heroSection/page";
import Section1 from "../../components/landing/section1/page";
import Section2 from "../../components/landing/section2/page";
import {section1, section2} from "../../public/constant";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
       <HeroSection />
       <Section1 {...section1} />
       
       <div className="h-1 w-full bg-white md:hidden"></div>

       <Section2 {...section2} />
    </div>
  );
}
