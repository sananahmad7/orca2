// components/Home/OurInfo.tsx
import type { FC } from "react";
import Image from "next/image";
import LordIcon from "../LordIcon";

const OurInfo: FC = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-8 font-nunito">
      <div className="container mx-auto ">
        {/* The Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {/* --- Block 1: The Header & Intro (Spans 2 columns) --- */}
          <div className="md:col-span-2 lg:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#009f8b]/10 transition-colors duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-slate-400"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  The Core Principles
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Strategy. Design. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009f8b] to-teal-600">
                  Execution.
                </span>
              </h2>

              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                This section shares how Orca Edge thinks about purpose and
                direction as your digital partner—the principles that guide
                every strategy, design, and solution we deliver.
              </p>
            </div>
          </div>

          {/* --- Block 2: Vision (High Contrast Accent Card) --- */}
          <div className="md:col-span-1 bg-[#009f8b] rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white shadow-xl shadow-teal-900/10 hover:shadow-teal-900/20 transition-all duration-300 transform hover:-translate-y-1">
            <div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                <LordIcon
                  src="https://cdn.lordicon.com/lagziwcr.json"
                  trigger="loop"
                  colors="primary:#ffffff,secondary:#ffffff"
                  style={{ width: 32, height: 32 }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-teal-100/80 text-sm font-mono uppercase tracking-wider">
                The Destination
              </p>
            </div>

            <p className="text-white/90 leading-relaxed text-sm md:text-base mt-8 border-l border-white/20 pl-4">
              To become the trusted digital partner for businesses that demand
              both creativity and performance—delivering solutions that generate
              measurable results.
            </p>
          </div>

          {/* --- Block 3: Mission (Clean Bordered Card) --- */}
          <div className="md:col-span-1 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-[#009f8b]/30 transition-colors duration-300">
            <div>
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                <LordIcon
                  src="https://cdn.lordicon.com/ehfrzide.json"
                  trigger="loop"
                  colors="primary:#1e293b,secondary:#009f8b"
                  style={{ width: 32, height: 32 }}
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Our Mission
              </h3>
              <p className="text-slate-400 text-sm font-mono uppercase tracking-wider">
                The Journey
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-8 border-l-2 border-[#009f8b] pl-4">
              To empower businesses with clear strategy, thoughtful design, and
              reliable technology—so they can operate efficiently and grow
              confidently.
            </p>
          </div>

          {/* --- Block 4: The Visual Anchor (Cinematic Image) --- */}
          <div className="hidden lg:flex md:col-span-2 lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[300px] group">
            <Image
              src="/bottom.jpg" // Your public image
              alt="Orca Edge team workspace"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInfo;
