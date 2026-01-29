"use client";
import Link from "next/link";
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
    <section
      // CHANGED: Removed deep blue, switched to light background
      className="relative bg-slate-50 py-20 md:py-25 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated mesh gradient blobs - Adjusted opacity for light bg */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#1677B3]/5 rounded-full blur-3xl animate-pulse" />

        <div
          className="absolute top-1/3 right-20 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#1677B3]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Grid pattern overlay - Switched to dark grid lines for visibility */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          {/* CHANGED: Text to dark slate/black */}
          <h2 className="text-3xl 2xl:text-4xl font-bold text-slate-900 mb-4 font-nunito">
            Our Process
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A strategic, collaborative approach to delivering exceptional
            results for your business.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* CHANGED: Connector line to gray/blue */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-slate-200 via-[#1677B3]/20 to-slate-200 -z-10 md:top-24" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
                onMouseEnter={() => setActiveStep(step.number)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div
                  // CHANGED: Added bg-[#1677B3] here. Text is now white.
                  className={`relative h-full rounded-2xl p-6 md:p-8 transition-all duration-300 cursor-pointer border
                    ${
                      activeStep === step.number
                        ? "bg-[#146aa0] border-[#1677B3] -translate-y-2 shadow-2xl shadow-blue-900/20"
                        : "bg-[#1677B3] border-[#1677B3] shadow-lg shadow-blue-900/10"
                    }
                    ${
                      // Fade out other cards when one is active
                      activeStep !== null && activeStep !== step.number
                        ? "opacity-90 scale-95"
                        : "opacity-100 scale-100"
                    }
                  `}
                >
                  {/* Number Badge */}
                  <div
                    // CHANGED: Badge is now White bg with Blue text
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full font-bold text-lg mb-6 transition-all duration-300 shadow-md
                      ${
                        activeStep === step.number
                          ? "bg-white text-[#1677B3] scale-110"
                          : "bg-white/90 text-[#1677B3]"
                      }
                    `}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>

                  <p className="text-blue-100 leading-relaxed text-sm md:text-base">
                    {step.description}
                  </p>

                  {/* Decorative arrow - visible on hover */}
                  {index < processSteps.length - 1 && (
                    <div
                      className={`absolute -right-5 top-1/2 -translate-y-1/2 text-3xl transition-all duration-300 z-20
                        ${
                          activeStep === step.number
                            ? "text-[#1677B3] translate-x-2"
                            : "text-slate-300/50"
                        }
                        hidden lg:block
                      `}
                    >
                      →
                    </div>
                  )}
                </div>

                {/* Mobile connector line */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden flex items-center justify-center h-8">
                    <div className="w-0.5 h-full bg-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-600 mb-6 text-lg">
            Ready to start your journey with us?
          </p>
          <Link
            href={"/contact"}
            // CHANGED: Button is now Blue bg with White text
            className="inline-flex items-center cursor-pointer justify-center px-8 py-3 bg-[#1677B3] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 hover:bg-[#146aa0]"
          >
            Let's Work Together
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
