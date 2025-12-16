import CoreServices from "@/components/Home/CoreServices";
import Hero from "@/components/Home/Hero";
import Intro from "@/components/Home/Intro";
import OurProcess from "@/components/Home/OurProcess";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orca Edge",
  description:
    "Orca Edge is a full-service digital agency delivering high-performing websites, mobile apps, digital marketing, and copywriting that help brands grow with clarity, confidence, and measurable results.",
};
export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <CoreServices />
      <WhyChooseUs />
      <OurProcess />
    </div>
  );
}
