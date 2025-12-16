'use client';

import { pricingConstants } from '../constant/page';

export default function Section5() {
    return (
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0 pl-0 md:pl-8 py-8 md:py-12">
            <div className="border-b md:border-b-0 md:border-r-4 border-white pb-6 md:pb-12 md:pr-8 flex-1">
                <h2 className="text-2xl md:text-3xl font-medium mb-2">{pricingConstants.cta.title}</h2>
                <p className="text-gray-100 text-sm md:text-base">{pricingConstants.cta.subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 md:gap-4 w-full md:w-auto md:pl-8">
                <button className="px-8 md:px-14 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-200 text-sm md:text-base">
                    {pricingConstants.cta.buttons.free}
                </button>
                <button className="px-8 md:px-14 py-3 bg-gray-900 rounded-xl font-bold hover:border-white border border-transparent text-sm md:text-base">
                    {pricingConstants.cta.buttons.talk}
                </button>
            </div>
        </div>
    );
}