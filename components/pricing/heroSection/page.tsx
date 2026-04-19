import { pricingConstants } from '../constant/page';

export default function HeroSection() {
    return (
        <>
            <div className="flex flex-col gap-6 md:mb-10 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                    <h1 className="mb-3 text-2xl font-bold tracking-tight text-white md:mb-4 md:text-3xl">
                        {pricingConstants.header.title}
                    </h1>
                    <p className="text-sm text-gray-400 md:text-base">
                        {pricingConstants.header.subtitle}
                    </p>
                </div>
                <div className="text-left md:border-l-4 md:border-white md:pl-6 md:text-right">
                    <div className="mb-1 text-lg font-semibold text-white md:text-xl">Monthly</div>
                    <div className="text-sm font-medium text-gray-400 md:text-base">Yearly (save 20%)</div>
                </div>
            </div>

            <p className="my-6 text-xs font-semibold text-white/90 md:my-8 md:text-sm">
                {pricingConstants.header.note}
            </p>
        </>
    );
}