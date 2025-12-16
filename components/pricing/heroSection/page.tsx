import { pricingConstants } from '../constant/page';

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 md:mb-12 gap-6">
                <div className="flex-1">
                    <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                        {pricingConstants.header.title}
                    </h1>
                    <p className="text-gray-400 text-base md:text-lg">
                        {pricingConstants.header.subtitle}
                    </p>
                </div>
                <div className="text-left md:text-right md:border-l-4 border-white md:pl-4">
                    <div className="text-3xl md:text-5xl font-bold mb-2">Monthly</div>
                    <div className="text-lg md:text-xl font-bold text-gray-400">Yearly (save 20%)</div>
                </div>
            </div>

            <p className="text-white font-bold text-xs md:text-sm my-8 md:my-10">
                {pricingConstants.header.note}
            </p>
        </>
    );
}