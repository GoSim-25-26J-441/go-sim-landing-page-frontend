import { pricingConstants } from '../constant/page';

export default function Section4() {
    return (
        <section className="mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {pricingConstants.faq.title}
            </h2>
            <div className="border border-white mb-8 md:mb-12" />
            <div className="space-y-4 md:space-y-6">
                {pricingConstants.faq.items.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-gray-100 font-bold mb-2 text-sm md:text-base">{item.question}</h3>
                        <p className="text-gray-300 text-xs md:text-sm">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}