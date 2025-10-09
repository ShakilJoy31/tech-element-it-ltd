"use client";

import React from "react";
import bannerBackgroundImage from "../../assets/Home/Hero-back.png";
import knot from "../../assets/Home/knot2 1.png";
import Image from "next/image";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import Button from "../reusable-components/Button";
import { HiSparkles } from "react-icons/hi";
import dotStar from '@/assets/Icons/Sparkles.svg'
import AnimatedText from "../reusable-components/AnimatedText";

const Banner = () => {
    return (
        <section
            className="min-h-screen flex flex-col justify-between"
            style={{
                backgroundImage: `url(${bannerBackgroundImage.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            {/* Top Section */}
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:py-20 gap-8 md:gap-10">
                {/* Text Content */}
                <div className="w-full lg:max-w-[600px] space-y-4 sm:space-y-6 text-center lg:text-left mt-6 lg:mt-0">
                    <Heading>
                        <AnimatedText
                            text="Crafting Digital Experiences That Inspire & Convert"
                            loop={false}
                            loopDelay={5}
                            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                        />
                    </Heading>

                    <Paragraph >
                        <AnimatedText
                            text="Experience Excellence In Digital Craftsmanship With Our Team Of Skilled Professionals Dedicated To Delivering Exceptional Results."
                            loop={false}
                            speed={0.005}
                           className="text-[#9F9FAF] text-sm sm:text-base md:text-lg leading-relaxed"
                        />
                    </Paragraph>
                    
                    <Button
                        className="bg-[#1776BB] hover:bg-[#0f5ed1] text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium flex items-center gap-2 mx-auto lg:mx-0 transition text-sm sm:text-base"
                    >
                        <HiSparkles className="text-lg sm:text-xl" />
                        Let&apos;s build something
                    </Button>
                </div>

                {/* Image */}
                <div className="w-full lg:w-auto mt-2 lg:mt-0 ">
                    <div className="flex justify-center lg:justify-end relative ">
                        <Image
                            src={knot}
                            alt="Main banner rotating image"
                            width={500}
                            height={500}
                            className="object-contain w-[280px] sm:w-[380px] md:w-[480px] rotating-image-X"
                            priority
                        />
                        <Image
                            src={dotStar}
                            alt="Main banner rotating image"
                            width={500}
                            height={500}
                            className="object-contain absolute top-[30px] right-[-25px] w-[128px] h-[103px] "
                            priority
                        />
                    </div>

                    <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 md:gap-[36px] mt-2 md:mt-8">
                        {[
                            { number: "2020", text: "Journey Started" },
                            { number: "89+", text: "Active Clients" },
                            { number: "20+", text: "Team Members" },
                            { number: "4 Years", text: "Years of Experience" },
                        ].map((item, index) => (
                            <div key={index} className="text-center lg:text-right">
                                <Paragraph className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-white ">
                                    {item.number}
                                </Paragraph>
                                <Paragraph className="text-[#9F9FAF] text-xs sm:text-sm md:text-[16px]">
                                    {item.text}
                                </Paragraph>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Banner; 