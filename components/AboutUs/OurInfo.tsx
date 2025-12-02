// components/Home/OurInfo.tsx
import type { FC } from "react";
import Image from "next/image";
import LordIcon from "../LordIcon";

const OurInfo: FC = () => {
  return (
    <section className="relative font-nunito bg-white py-16 md:py-20 overflow-hidden">
      {/* Left teal strip that runs the full section height */}
      <div
        className="pointer-events-none absolute inset-y-0 bottom-12  left-0 w-full md:w-1/3 bg-[#009f8b]"
        aria-hidden="true"
      />

      <div className="relative  z-10 container mx-auto px-4 md:px-8">
        {/* Top Layout: Left intro + Right mission/vision cards (side by side) */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] items-start">
          {/* Left: Intro content on teal background */}
          <div className="max-w-md text-center md:text-left text-white md:pr-8">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Our mission and
              <br />
              vision statement
            </h2>
            <p className="mt-4 text-sm md:text-lg text-slate-100/90 leading-relaxed">
              This section shares how Orca Edge thinks about purpose and
              direction as your digital partner&mdash;the principles that guide
              every strategy, design, and solution we deliver.
            </p>
          </div>

          {/* Right: Vision & Mission cards in a row */}
          <div className="flex flex-col gap-8 md:flex-row md:gap-10">
            {/* Vision Card */}
            <article className="relative flex-1 rounded-md border border-slate-200 bg-white shadow-sm">
              {/* Icon circle */}
              <div className="absolute -top-10 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#009f8b]/50 bg-white shadow-md">
                <LordIcon
                  src="https://cdn.lordicon.com/lagziwcr.json"
                  style={{ width: 52, height: 52 }}
                  trigger="loop"
                  // trigger, colors, etc. can be added later
                />
              </div>

              <div className="pt-8">
                {/* Colored header bar */}
                <div className="flex h-10 items-center justify-center bg-[#009f8b]">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Our Vision
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                    To become the trusted digital partner for businesses that
                    demand both creativity and performance&mdash;delivering
                    solutions that not only look impressive, but also generate
                    real, measurable results.
                  </p>
                </div>
              </div>
            </article>

            {/* Mission Card */}
            <article className="relative flex-1 rounded-md mt-5 md:mt-0 border border-slate-200 bg-white shadow-sm">
              {/* Icon circle */}
              <div className="absolute -top-10 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-[#009f8b]/50 bg-white shadow-md">
                <LordIcon
                  src="https://cdn.lordicon.com/ehfrzide.json"
                  style={{ width: 52, height: 52 }}
                  trigger="loop"
                />
              </div>

              <div className="pt-8">
                {/* Colored header bar */}
                <div className="flex h-10 items-center justify-center bg-[#009f8b]">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
                    Our Mission
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 py-5">
                  <p className="text-xs md:text-sm leading-relaxed text-slate-600">
                    To empower businesses with clear strategy, thoughtful
                    design, and reliable technology&mdash;so they can
                    communicate effectively, operate efficiently, and grow
                    confidently in a digital-first world.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Bottom Image Block (overlapping the teal strip behind) */}
        <div className="mt-12 md:mt-13 hidden sm:block">
          <div className="relative h-52 md:h-64 lg:h-89 rounded-sm   max-w-8xl mx-auto overflow-hidden shadow-lg">
            <Image
              src="/bottom.jpg" // TODO: replace with your image path in /public
              alt="Orca Edge team collaborating in a modern workspace"
              fill
              className="object-cover"
            />

            {/* Subtle theme overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#009f8b]/20 via-[#009f8b]/20 to-[#009f8b]/20" />

            {/* Accent blocks similar to the slide (theme colors) */}
            <div className="absolute left-0 bottom-6 h-3 w-24 bg-[#003144]/80" />
            <div className="absolute right-6 top-6 h-16 w-16 bg-[#00ffdf]/70 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInfo;
