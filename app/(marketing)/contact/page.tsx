import ButtonSet from "../../../components/common/buttonSet/page";
import Card1 from "../../../components/common/card1/page";
import Title from "../../../components/common/tittle/page";
import ContactHelpSection from "../../../components/contact/contactHelpSection/page";
import ContactForm from "../../../components/contact/form/page";

export default function Page() {
  const points = [
    "New user? Start with the Getting started guide.",
    "Working on a thesis or FYP? Check the Research summary for technical details.",
    "Reporting a bug? Include browser, steps to reproduce, and screenshots when possible.",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1F1F1F] to-black pt-16">
      <ButtonSet
        buttonsVisible={false}
        title={"Contact us"}
        description={
          "Questions about GO-SIM, your account, or the research? We’d love to hear from you."
        }
        className="pb-40"
      />
      <div className="flex flex-col md:flex-row justify-center items-start">
        <ContactForm />
        <ContactHelpSection />
      </div>

      <div className="flex flex-col justify-center item-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-0 pb-40">
        <Title
          title="Before you contact us"
          isUnderline={true}
        />
        <Card1 points={points} />
      </div>
    </div>
  );
}
