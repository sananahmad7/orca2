// components/About/AboutHero.tsx
import type { FC } from "react";
import Image from "next/image";

const AboutHero: FC = () => {
  return (
    <section className="relative font-nunito text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Hero.jpg"
          alt="Team collaborating in a modern workspace"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Color Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-90 -z-10 bg-[radial-gradient(circle_at_top,_rgba(22,119,179,0.6)_0,_transparent_55%),linear-gradient(to_bottom_right,rgba(0,0,0,0.8),rgba(0,0,0,0.9))]" />

      {/* Main Layout Fix:
        1. 'min-h-[60vh]': Ensures height.
        2. 'flex items-center': Vertically centers the content.
        3. 'pt-32 pb-20': 
            - Added extra top padding (pt-32) to account for the Navigation Bar height.
            - Keeps bottom padding (pb-20) standard.
            - This ensures the text looks visually centered in the *visible* space.
      */}
      <div className="min-h-[60vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100 mb-4 border border-white/10">
              About Orca Edge
            </p>

            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              Who We Are
            </h1>

            <p className="mt-5 text-sm md:text-base text-slate-100/90 leading-relaxed">
              Orca Edge is a digital solutions partner dedicated to helping
              businesses build a strong, strategic, and sustainable presence
              online. We specialize in web development, mobile app development,
              digital marketing, and copywriting—bringing all the pieces
              together under one roof so you don&apos;t have to juggle multiple
              agencies or freelancers.
            </p>

            <p className="mt-4 text-sm md:text-base text-slate-100/80 leading-relaxed">
              We believe that digital isn&apos;t about being everywhere;
              it&apos;s about showing up in the right places, with the right
              message, at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
