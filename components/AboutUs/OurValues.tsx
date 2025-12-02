// components/Home/OurValues.tsx
import type { FC } from "react";
import {
  FaHeartbeat,
  FaSearch,
  FaBolt,
  FaCheck,
  FaHandshake,
} from "react-icons/fa"; // React icons

const OurValues: FC = () => {
  return (
    <section className="font-nunito bg-white py-16 md:py-20">
      <div className="container mx-auto  md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#003144] md:text-4xl">
            Our Values
          </h2>
        </div>

        {/* Values Cards Layout */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Value 1: Integrity */}
          <div className="flex items-start space-x-4 bg-[#009f8b] p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0 bg-white rounded-full p-4">
              <FaHeartbeat className="text-[#009f8b] text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Integrity</h3>
              <p className="text-sm text-white mt-2">
                We provide honest advice, realistic timelines, and transparent
                communication.
              </p>
            </div>
          </div>

          {/* Value 2: Quality */}
          <div className="flex items-start space-x-4 bg-[#009f8b] p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0 bg-white rounded-full p-4">
              <FaSearch className="text-[#009f8b] text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Quality</h3>
              <p className="text-sm text-white mt-2">
                We sweat the details—from code structure and content to user
                flows and branding.
              </p>
            </div>
          </div>

          {/* Value 3: Innovation */}
          <div className="flex items-start space-x-4 bg-[#009f8b] p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0 bg-white rounded-full p-4">
              <FaBolt className="text-[#009f8b] text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Innovation</h3>
              <p className="text-sm text-white mt-2">
                We stay current with tools, trends, and best practices so your
                solutions don’t fall behind.
              </p>
            </div>
          </div>

          {/* Value 4: Accountability */}
          <div className="flex items-start space-x-4 bg-[#009f8b] p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0 bg-white rounded-full p-4">
              <FaCheck className="text-[#009f8b] text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">
                Accountability
              </h3>
              <p className="text-sm text-white mt-2">
                We own our work and measure our success by your outcomes.
              </p>
            </div>
          </div>

          {/* Value 5: Partnership */}
          <div className="flex items-start space-x-4 bg-[#009f8b] p-6 rounded-lg shadow-md">
            <div className="flex-shrink-0 bg-white rounded-full p-4">
              <FaHandshake className="text-[#009f8b] text-4xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Partnership</h3>
              <p className="text-sm text-white mt-2">
                We’re here for the long term, not just one-off projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
