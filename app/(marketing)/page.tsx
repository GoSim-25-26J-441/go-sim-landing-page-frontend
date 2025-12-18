import ButtonSet from "../../components/common/buttonSet/page";
import HeroSection from "../../components/landing/heroSection/page";
import Section1 from "../../components/landing/section1/page";
import Section2 from "../../components/landing/section2/page";
import Section3 from "../../components/landing/section3/page";
import Section4 from "../../components/landing/section4/page";
import { section1, section2, section3 } from "../../public/constant";

export default function Home() {
  const DASHBOARD =
    process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3001";
  const returnTo = "/";

  const signUpUrl = new URL("/signup", DASHBOARD);
  signUpUrl.searchParams.set("returnTo", returnTo);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
      <HeroSection />

      <Section1 {...section1} />

      <div className="h-1 w-full bg-white md:hidden"></div>

      <Section2 {...section2} />

      <Section3
        title="How ArcFind works"
        description="From raw service definitions to performance insights in four simple steps."
      />

      <Section4 {...section3} />

      <ButtonSet
        buttonsVisible={true}
        title={"Ready to stress-test your architecture before production ?"}
        description={
          "Create your first project in minutes and let ArcFind find the risks for you."
        }
        button1Name={"Get Started Free"}
        button1Route={signUpUrl.toString()}
        button2Name={"Explore the Dashboard"}
        button2Route="/get-started"
        className="pb-40"
      />
    </div>
  );
}
