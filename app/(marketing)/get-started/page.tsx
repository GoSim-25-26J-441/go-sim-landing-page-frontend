import ButtonSet from "../../../components/common/buttonSet/page";
import Section1 from "../../../components/getStart/section1/page";
import Section2 from "../../../components/getStart/section2/page";
import Section3 from "../../../components/getStart/section3/page";

export default function GetStarted() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
      <ButtonSet
        title="Getting started with GO-SIM"
        description="Follow these steps to go from a blank account to your first analyzed microservice architecture."
        buttonsVisible={true}
        button1Name="Create account"
        button2Name="Try with a sample project"
        isLinkAvailable={true}
        linkName="Quick start guide"
        buttonClass="bg-[#9AA4B2] text-black"
      />

      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
