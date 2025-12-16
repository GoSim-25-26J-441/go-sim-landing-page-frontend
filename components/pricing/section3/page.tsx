import { pricingConstants } from '../constant/page';

export default function Section3() {
    return (
        <section className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                {pricingConstants.whatsIncluded.title}
            </h2>
            <div className="border border-white mb-8 md:mb-12" />

            <div className="space-y-6 md:space-y-8">
                {pricingConstants.whatsIncluded.items.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-gray-100 font-bold mb-2 text-sm md:text-base">{item.title}</h3>
                        <p className="text-gray-300 text-xs md:text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}