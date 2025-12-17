"use client";

import Image from "next/image";
import image1 from "../../../images/screenshots/image1.png";
import image2 from "../../../images/screenshots/image2.png";
import image3 from "../../../images/screenshots/image3.png";

export default function Section2() {
  return (
    <section className="w-full flex justify-center items-center py-16">
      <div className="relative w-full max-w-6xl mx-auto perspective-1000 flex justify-center">
          <div className="translate-x-1/3 w-[90%] md:w-[85%] z-10 transform scale-95 opacity-60">
            <Image src={image1} alt="Dashboard 3" width={500} height={500} className="object-cover" />
          </div>

          <div className="-translate-y-1/3 w-[92%] md:w-[90%] z-20 transform  scale-80 opacity-100">
            <Image src={image2} alt="Dashboard 2" width={500} height={500} className="object-cover" />
          </div>

          <div className="-translate-x-1/3 w-[95%] md:w-[95%] z-30">
            <Image src={image3} alt="Dashboard 1" width={500} height={500} className="object-cover" />
          </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
