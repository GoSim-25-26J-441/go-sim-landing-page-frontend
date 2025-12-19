import Section1 from "../../../components/about/section1/page";
import Section2 from "../../../components/about/section2/page";
import Section3 from "../../../components/about/section3/page";
import Section4 from "../../../components/about/section4/page";
import Section5 from "../../../components/about/section5/page";
import Section6 from "../../../components/about/section6/page";
import Section7 from "../../../components/about/section7/page";
import ButtonSet from "../../../components/common/buttonSet/page";

export default function Page() {
  const DASHBOARD =
    process.env.NEXT_PUBLIC_DASHBOARD_URL ?? "http://localhost:3001";
  const returnTo = "/";

  const signUpUrl = new URL("/signup", DASHBOARD);
  signUpUrl.searchParams.set("returnTo", returnTo);

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
      <Section1
        leftTitle="Meet ArcFind "
        rightTitle="Your micro-service architecture co-pilot"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      />
      <Section2 />

      <ButtonSet
        description="Design, visualize, and simulate microservice architectures before they hit production."
        button1Name="Try it free"
        button2Name="View pricing"
        linkName="See how it works"
        buttonsVisible={true}
        isLinkAvailable={true}
        button1Route={signUpUrl.toString()}
        button2Route="/pricing"
        linkRoute={"#step-section"}
        className="pb-10"
      />

      <Section3 />
      <Section4 />

      <div id="step-section" className="scroll-mt-24">
        <Section5 />
      </div>

      <Section6 />
      <Section7 />

      <ButtonSet
        buttonsVisible={true}
        title="See ArcFind in action"
        description="Start with a sample architecture or upload your own service definitions to explore graphs, patterns, and simulations."
        button1Name="Try it free"
        button2Name="View documentation"
        button1Route={signUpUrl.toString()}
        button2Route="/docs"
        className="pb-40"
      />
    </div>
  );
}
