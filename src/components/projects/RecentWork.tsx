// components/RecentWork.tsx

import AnimatedText from "../reusable-components/AnimatedText";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";

export default function RecentWork() {
    return (
        <section className="px-4 max-w-[1280px] mx-auto py-16 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-y-8 md:gap-x-16">

                {/* Left side - Recent Work */}
                <div className="text-gray-500 text-lg md:text-base">
                    Recent work
                </div>

                {/* Right side - Heading and content */}
                <div>
                    {/* Heading */}
                    <Heading>
                        <AnimatedText
                            text="Creative works with our incredible"
                            loop={false}
                            loopDelay={5}
                            className="text-[40px] md:text-[56px] font-bold leading-tight mb-10 max-w-3xl"
                        />

                    </Heading>

                    {/* Services + Description */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                        {/* Services list */}
                        <ul className="space-y-2 text-[20px] font-semibold text-[#555] dark:text-gray-400">
                            <li>+ Design</li>
                            <li>+ Development</li>
                            <li>+ Marketing</li>
                            <li>+ Writing</li>
                        </ul>

                        {/* Description */}
                        <Paragraph className="text-[#555] dark:text-gray-400 text-[20px] font-semibold leading-relaxed max-w-lg">
                            We take a comprehensive approach to the creation and development of brands.
                            we help local companies and services enter the market and well known brand
                            expand the audience.
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
}
