// components/ProjectShowcase.tsx
import Image from "next/image";
import phoneImage from "@/assets/Projects/double-mobile.png"
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import AnimatedText from "../reusable-components/AnimatedText";

export default function ProjectShowcase() {
  return (
    <section className="bg-white dark:bg-black pt-[60px] px-4 lg:px-0">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="bg-white dark:bg-gray-600 rounded-[20px] shadow-xl border p-4 flex justify-center">
            <Image
              src={phoneImage}
              alt="POS Application Preview"
              className="rounded-xl object-contain"
              priority
            />
          </div>

          {/* Right - Title */}
          <div>
            <Heading>
              <AnimatedText
                text="POS Application for Clothing Store"
                loop={true}
                loopDelay={5}
                speed={0.05}
                className="text-3xl md:text-[60px] font-bold text-black dark:text-white leading-tight text-center"
              />

              
            </Heading>
          </div>
        </div>

        {/* Bottom Details */}
        <div className="my-[98px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Service */}
          <div className="pt-[12px] border-t border-gray-200">
            <Paragraph className="text-black dark:text-gray-300 text-md font-semibold mb-1">Service</Paragraph>
            <Paragraph className="text-gray-500 dark:text-gray-400 font-medium">Visual Identity Branding</Paragraph>
          </div>

          {/* Client */}
          <div className="pt-[12px] border-t border-gray-200">
            <Paragraph className="text-black dark:text-gray-300 text-md font-semibold mb-1">Client</Paragraph>
            <Paragraph className="text-gray-500 dark:text-gray-400 font-medium">Digital Agency</Paragraph>
          </div>

          {/* Date */}
          <div className="pt-[12px] border-t border-gray-200">
            <Paragraph className="text-black dark:text-gray-300 text-md font-semibold mb-1">Date</Paragraph>
            <Paragraph className="text-gray-500 dark:text-gray-400 font-medium">January 2025</Paragraph>
          </div>

          {/* Technology */}
          <div className="pt-[12px] border-t border-gray-200">
            <Paragraph className="text-black dark:text-gray-300 text-md font-semibold mb-1">Technology</Paragraph>
            <Paragraph className="text-gray-500 dark:text-gray-400 font-medium">Figma, JavaScript, Flutter</Paragraph>
          </div>
        </div>
      </div>
    </section>
  );
}
