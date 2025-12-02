// components/Home/HowWeWork.tsx
import { themeClasses } from "@/lib/themeClasses";
import type { FC } from "react";
import {
  FaBullhorn,
  FaRegCheckCircle,
  FaRocket,
  FaTools,
} from "react-icons/fa"; // React Icons for illustration

// Step content stored in an array
const steps = [
  {
    id: "listen-learn",
    icon: <FaBullhorn />,
    title: "Listen & Learn",
    description:
      "We start by understanding your business, customers, and internal constraints.",
  },
  {
    id: "define-align",
    icon: <FaRegCheckCircle />,
    title: "Define & Align",
    description:
      "Together, we clarify scopes, priorities, timelines, and success metrics.",
  },
  {
    id: "design-build",
    icon: <FaTools />,
    title: "Design & Build",
    description:
      "Our team executes with care, keeping you informed at each milestone.",
  },
  {
    id: "launch-support",
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "We support launch, monitor performance, and provide ongoing maintenance or optimization as needed.",
  },
];

const HowWeWork: FC = () => {
  return (
    <section className={`font-nunito py-16 md:py-20 ${themeClasses.sectionBg}`}>
      <div className="container mx-auto md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#003144] md:text-4xl">
            How We Work with You
          </h2>
          <p className="mt-4 text-sm md:text-lg text-slate-800">
            Our proven methodology ensures successful project delivery from
            start to finish.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="text-center bg-white p-6 border border-gray-200 hover:scale-102 rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6 text-4xl flex justify-center text-[#009f8b]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{step.title}</h3>
              <p className="text-sm text-slate-600 mt-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
