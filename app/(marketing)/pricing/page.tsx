import HeroSection from '../../../components/pricing/heroSection/page';
import Section1 from '../../../components/pricing/section1/page';
import Section2 from '../../../components/pricing/section2/page';
import Section3 from '../../../components/pricing/section3/page';
import Section4 from '../../../components/pricing/section4/page';
import Section5 from '../../../components/pricing/section5/page';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <HeroSection />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </div>
      </section>
    </div>
  );
}