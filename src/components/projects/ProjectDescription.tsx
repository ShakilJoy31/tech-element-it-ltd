import AnimatedText from "../reusable-components/AnimatedText";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";

export default function ProjectDescription() {
  return (
    <section className="bg-white dark:bg-black py-12 md:py-16 px-4">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left - Title */}
        <div>
          <Heading>
            <AnimatedText
              text='Build streamline and evolve together with solution'
              loop={false}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white leading-snug"
            />
          </Heading>
        </div>

        {/* Right - Description */}
        <div>
          <Paragraph>
            <AnimatedText
              text='Our POS (Point of Sale) Application for Clothing Stores is an all-in-one
            solution designed to streamline daily operations, optimize sales, and
            enhance customer experience for fashion retailers. Tailored specifically
            for clothing and apparel businesses, this application combines modern
            inventory management, seamless billing, customer insights, and sales
            tracking—all in one intuitive and easy-to-use interface.'
              loop={false}
              speed={0.01}
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6"
            />

          </Paragraph>

          <ul className="space-y-1 sm:space-y-2 text-gray-800 dark:text-gray-500 text-sm sm:text-base font-medium">
            <li>+ Design</li>
            <li>+ Development</li>
            <li>+ Marketing</li>
            <li>+ Writing</li>
            <li>+ Shopify Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}