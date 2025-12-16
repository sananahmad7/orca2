import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Orca Edge",
  description:
    "Orca Edge is a digital solutions partner dedicated to helping businesses build a strong, strategic, and sustainable presence online. We specialize in web development, mobile app development, digital marketing, and copywriting—bringing all the pieces together under one roof so you don't have to juggle multiple agencies or freelancers.",
};

export default function ContactPage() {
  return <ContactSection />;
}
