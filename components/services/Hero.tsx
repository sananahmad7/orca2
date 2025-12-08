// components/services/ServiceHero.tsx
import type { FC } from "react";
import Image from "next/image";

type ServiceHeroProps = {
  heading: string;
  description: string;
  imageSrc: string;
};

const ServiceHero: FC<ServiceHeroProps> = ({
  heading,
  description,
  imageSrc,
}) => {
  return (
    <section className="font-nunito bg-white py-12 ">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main row: Flex container with items-center for vertical alignment */}
        <div className="flex flex-col  md:flex-row items-center justify-between ">
          {/* Text side - Takes up roughly half the width on desktop */}
          <div className="w-full md:w-1/2 flex flex-col  xl:justify-center text-left">
            <h1 className="text-4xl max-w-5xl md:text-5xl leading-[1.1] font-extrabold uppercase text-slate-900">
              {heading}
            </h1>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl">
              {description}
            </p>
          </div>

          {/* Illustration side - Takes up the other half */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full ">
              <Image
                src={imageSrc}
                alt={heading}
                width={800}
                height={500}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
