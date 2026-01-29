"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type ProcessStep = {
  number: number;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Discover",
    description:
      "We dive into your business model, audience, and goals to understand what success looks like for you.",
  },
  {
    number: 2,
    title: "Design & Plan",
    description:
      "We create wireframes, architectures, and strategies tailored to deliver the outcomes you care about.",
  },
  {
    number: 3,
    title: "Build & Implement",
    description:
      "Our designers, developers, and marketers bring the plan to life with robust builds and thoughtful campaigns.",
  },
  {
    number: 4,
    title: "Launch & Optimize",
    description:
      "Once live, we monitor performance, refine based on data, and support you as your needs evolve.",
  },
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-25">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-80 w-80 animate-pulse rounded-full bg-[#1677B3]/5 blur-3xl" />
        <div
          className="absolute right-20 top-1/3 h-96 w-96 animate-pulse rounded-full bg-[#38bdf8]/10 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-80 w-80 animate-pulse rounded-full bg-[#1677B3]/5 blur-3xl"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16 text-center md:mb-20">
          <h2 className="mb-4 font-nunito text-3xl font-bold text-slate-900 2xl:text-4xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
            A strategic, collaborative approach to delivering exceptional
            results for your business.
          </p>
        </div>

        {/* NEW LAYOUT: Image + Steps */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          {/* Left: Image panel */}
          <div className="lg:col-span-5">
            <div className="relative h-[320px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-blue-900/5 sm:h-[420px] lg:h-[560px]">
              {/* Replace src with your real image */}
              <Image
                src="/process.jpg"
                alt="Team collaborating on strategy and delivery"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority={false}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

              {/* Small caption chip */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                  Strategy → Design → Build → Optimize
                </div>
              </div>
            </div>
          </div>

          {/* Right: Steps panel */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-lg shadow-blue-900/5 backdrop-blur md:p-8 lg:h-[560px]">
              {/* Top bar */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-[#1677B3]" />
                  Clear, structured delivery
                </div>
                <div className="hidden text-xs font-semibold text-slate-500 md:block">
                  Hover a step to highlight
                </div>
              </div>

              {/* Connector line (desktop) */}
              <div className="pointer-events-none absolute left-8 right-8 top-24 hidden h-px bg-gradient-to-r from-transparent via-[#1677B3]/25 to-transparent md:block" />

              {/* Steps grid */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div
                    key={step.number}
                    className="group relative"
                    onMouseEnter={() => setActiveStep(step.number)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div
                      className={[
                        "relative h-full rounded-2xl border p-5 transition-all duration-300",
                        activeStep === step.number
                          ? "border-[#1677B3] bg-[#146aa0] -translate-y-1 shadow-2xl shadow-blue-900/15"
                          : "border-[#1677B3]/25 bg-[#1677B3] shadow-lg shadow-blue-900/10",
                        activeStep !== null && activeStep !== step.number
                          ? "opacity-90"
                          : "opacity-100",
                      ].join(" ")}
                    >
                      {/* Badge */}
                      <div
                        className={[
                          "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-base font-bold text-[#1677B3] shadow-md transition",
                          activeStep === step.number
                            ? "scale-110"
                            : "scale-100",
                        ].join(" ")}
                      >
                        {step.number}
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-white md:text-xl">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-blue-100 md:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom divider */}
              <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[#1677B3]/20 to-transparent" />

              {/* CTA inside panel (keeps spacing theme) */}
              <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
                <p className="text-lg text-slate-600">
                  Ready to start your journey with us?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#1677B3] px-8 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#146aa0] hover:shadow-lg hover:shadow-blue-500/30"
                >
                  Let&apos;s Work Together <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: keep original bottom CTA spacing if you prefer it outside */}
        {/* If you want it outside, remove the CTA inside the panel above and uncomment below.
        <div className="mt-16 md:mt-20 text-center">
          <p className="mb-6 text-lg text-slate-600">
            Ready to start your journey with us?
          </p>
          <Link
            href={"/contact"}
            className="inline-flex items-center cursor-pointer justify-center px-8 py-3 bg-[#1677B3] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 hover:bg-[#146aa0]"
          >
            Let's Work Together
            <span className="ml-2">→</span>
          </Link>
        </div>
        */}
      </div>
    </section>
  );
}
