import { ArrowRight } from "lucide-react";
import Heading from "../reusable-components/Heading";
import AnimatedText from "../reusable-components/AnimatedText";
import Paragraph from "../reusable-components/Paragraph";

export default function OurStory() {
  return (
    <section className="bg-white dark:bg-black py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 md:gap-8">

        <div className="md:w-1/3 text-gray-700 dark:text-gray-300 text-base md:text-lg font-medium">
          Our Story
        </div>

        {/* Right Side - 2/3 width */}
        <div className="md:w-2/3">
          <Heading className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 leading-snug">
            The Story Behind Tech <br /> Element IT Limited
          </Heading>

          <Paragraph>
            <AnimatedText
              text='Welcome to Tech Element IT! Founded with a passion for innovation, we started as a
            small startup with a big vision—empowering businesses with cutting-edge web solutions.
            Over time, we have grown into a leading agency, delivering high-quality websites and
            web applications tailored to our client&apos;s needs. Our expertise spans e-commerce platforms,
            school management systems, POS systems, and personal websites, ensuring seamless digital
            experiences. At Tech Element IT, we measure success by our client&apos;s growth, continuously
            innovating to keep them ahead in the digital landscape. Let&apos;s build the future together!'
              loop={false}
              speed={0.005}
            />
          </Paragraph>

          <button className="flex items-center justify-center mt-6 gap-2 bg-[#1976d2] h-12 md:h-[50px] w-full sm:w-[200px] md:w-[231px] text-white font-semibold rounded-lg md:rounded-[16px] hover:bg-[#135ba4] transition text-sm md:text-base">
            Contact Us
            <ArrowRight size={18} className="md:size-[20px]" />
          </button>
          
        </div>
      </div>
    </section>
  );
}