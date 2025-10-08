"use client"

import Image from "next/image";
import leftShape from "@/assets/Projects/0edd4bc86cf6130bed0875ae4dc980bec07b6949.png";
import rightShape from "@/assets/Projects/0e6587822e1e09e9aaf9ea4e60ebf16c4057c2f9.png";
import { ArrowRight } from "lucide-react";
import { HiSparkles } from "react-icons/hi";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import Button from "../reusable-components/Button";
import AnimatedText from "../reusable-components/AnimatedText";

export default function SignupSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#EAF0FF] dark:bg-gradient-to-b dark:from-gray-500 dark:to-gray-900 py-20 px-4 lg:px-0 ">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center relative">
        {/* Left shape */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
          <Image src={leftShape} alt="Left Shape" className="w-[242px] h-auto" priority />
        </div>

        {/* Right shape */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
          <Image src={rightShape} alt="Right Shape" className="w-[267px] h-auto" priority />
        </div>

        {/* Heading */}
        <Heading>
          <AnimatedText
            text="Sign up for free today"
            loop={false}
            loopDelay={5}
            className="text-3xl md:text-5xl font-bold text-[#0A1D4D] dark:text-gray-300 mb-4"
          />
        </Heading>

        {/* Subheading */}
        <Paragraph className="text-gray-600 dark:text-gray-200 max-w-2xl mb-8 text-base md:text-lg leading-relaxed">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </Paragraph>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button className="flex items-center gap-2 bg-[#0057B8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#004a9c] transition">
            <HiSparkles size={25}></HiSparkles>
            Start your project
          </Button>

          <Paragraph className="flex items-center gap-2 text-[#0A1D4D] dark:text-white font-semibold hover:underline ">
            Learn more <ArrowRight size={18} />
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
