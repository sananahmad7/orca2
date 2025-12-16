import AboutHero from "@/components/AboutUs/AboutHero";
import HowWeWork from "@/components/AboutUs/HowWeWork";
import OurInfo from "@/components/AboutUs/OurInfo";
import OurValues from "@/components/AboutUs/OurValues";
import SetsUsApart from "@/components/AboutUs/SetsUsApart";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Orca Edge",
  description:
    "Orca Edge is a digital solutions partner dedicated to helping businesses build a strong, strategic, and sustainable presence online. We specialize in web development, mobile app development, digital marketing, and copywriting—bringing all the pieces together under one roof so you don't have to juggle multiple agencies or freelancers.",
};
function page() {
  return (
    <div>
      <AboutHero />
      <OurInfo />
      <SetsUsApart />
      <OurValues />
      <HowWeWork />
    </div>
  );
}

export default page;
