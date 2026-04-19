'use client';

import Image from "next/image";
import mark1 from '../../../images/icon/mark1.png';
import { pricingConstants } from '../constant/page';

interface PricingCardProps {
    plan: 'free' | 'pro' | 'team';
}

function PricingCard({ plan }: PricingCardProps) {
    const planData = pricingConstants.plans[plan];
    const features = pricingConstants.features[plan];

    return (
        <div className={`p-6 md:p-8 flex flex-col items-center ${plan === 'free' ? 'border-b md:border-b-0 md:border-r border-white' :
            plan === 'pro' ? 'border-b md:border-b-0' :
                'md:border-l border-white'
            }`}>
            <div className="text-sm text-gray-400 mb-4 md:mb-5 text-center whitespace-pre-line">
                {planData.for}
            </div>

            <div className="mb-4 flex flex-col items-start justify-center font-bold text-white md:flex-row md:items-start">
                <div className="text-xl md:pr-4 md:text-2xl">{planData.title}</div>
                <div className="mt-2 border-l-4 border-white pl-4 text-sm md:mt-0">
                    <span className={plan === 'free' ? '' : 'font-bold text-white'}>
                        {plan === 'free' ? planData.subtitle : planData.title === 'Pro' ? '$12 / month' : '$29 / month'}
                    </span>
                    <br />
                    <span className="block pt-1 text-xs font-normal text-gray-300 md:text-sm">{planData.description}</span>
                </div>
            </div>

            <div className="my-4 text-center text-xs text-gray-300 md:my-5 md:text-sm">
                {planData.descriptionText}
            </div>

            <div className="w-full space-y-3 text-xs text-gray-300 md:text-sm">
                <div className="font-semibold">What you get,</div>
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                        <Image
                            src={mark1}
                            alt=""
                            width={12}
                            height={12}
                            className="mr-2 shrink-0 mt-1"
                        />
                        <span className="ml-2 mt-2" dangerouslySetInnerHTML={{
                            __html: feature.replace(
                                /\b(3|5|20|60|PNG|SVG|PDF|JSON|YAML|JSON|RPS|Pro|Team)\b/g,
                                '<span class="font-bold text-gray-100">$&</span>'
                            )
                        }} />
                    </div>
                ))}
            </div>

            <div className="w-full flex flex-col items-center justify-center mt-auto pt-6 md:pt-8">
                <button type="button" className="my-4 w-full rounded-xl bg-white py-2.5 text-sm font-bold text-black hover:bg-gray-200 md:w-2/3">
                    {planData.button}
                </button>
                <p className="text-xs text-white mb-6 text-center whitespace-pre-line">
                    {planData.buttonNote}
                </p>
            </div>
        </div>
    );
}

export default function Section1() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
            <PricingCard plan="free" />
            <PricingCard plan="pro" />
            <PricingCard plan="team" />
        </div>
    );
}