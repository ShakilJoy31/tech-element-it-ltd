"use client"

import { FaUsers, FaSearch, FaPenNib, FaCode, FaUserCheck, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import meetingRightImage from "@/assets/Home/8408.jpg";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import { useState } from "react";

export default function MeetingComponent() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0); // Start with first item expanded
    
    const steps = [
        {
            icon: <FaUsers className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />,
            title: "Initial Meeting",
            description: "We begin with a comprehensive consultation to understand your business goals, target audience, and project requirements. This collaborative session helps us align our development strategy with your vision.",
        },
        {
            icon: <FaSearch className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />,
            title: "Research to System analysis",
            description: "Our team conducts thorough market research and technical analysis to identify the best solutions for your needs. We evaluate technologies, frameworks, and architectures to ensure optimal performance.",
        },
        {
            icon: <FaPenNib className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />,
            title: "Design via Following Empathy",
            description: "We create intuitive, user-centered designs that prioritize the end-user experience. Our design process focuses on empathy, accessibility, and creating interfaces that are both beautiful and functional.",
        },
        {
            icon: <FaCode className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />,
            title: "Development and Iterated",
            description: "Our developers build robust, scalable solutions using industry best practices. We follow an iterative approach, regularly testing and refining features to ensure quality and alignment with your requirements.",
        },
        {
            icon: <FaUserCheck className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />,
            title: "User Tested and Delivered",
            description: "We conduct comprehensive user testing to validate functionality and usability. After rigorous QA testing and client approval, we deploy the final product to your production environment.",
        },
        {
            icon: <FaCheckCircle className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl" />,
            title: "Finalized",
            description: "We provide ongoing support, maintenance, and optimization services to ensure your solution continues to perform excellently. We also offer training and documentation for your team.",
        },
    ];

    const toggleDescription = (index: number) => {
        // If clicking the already active item, close it. Otherwise, open the clicked one
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="bg-white dark:bg-black rounded-[24px] pt-8 md:p-8 lg:p-12 lg:mx-4 md:mx-2 mx-1 mb-[20px] ">
            {/* Heading */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              
                <Heading className="text-2xl md:text-3xl lg:text-4xl font-bold dark:text-white text-black">
                    Our Industry <span className="text-blue-600">Development Expertise</span>
                </Heading>
                <Paragraph className="text-gray-500 mt-2 sm:mt-3 text-sm sm:text-base">
                    From concept to completion, we build success through every step
                </Paragraph>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2  max-w-[1280px] mx-auto">
                {/* Left Side: Steps */}
                <div className="space-y-4 sm:space-y-6">
                    {steps.map((step, idx) => (
                        <div 
                            key={idx} 
                            className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg cursor-pointer transition-all duration-100 ${
                                activeIndex === idx 
                                    ? " " 
                                    : "hover:bg-gray-50 dark:hover:bg-gray-800"
                            }`}
                            onClick={() => toggleDescription(idx)}
                        >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mt-1">
                                {step.icon}
                            </div>
                            <div className="flex-1">
                                <Heading className="font-semibold text-gray-700 dark:text-gray-300 text-base sm:text-lg flex items-center">
                                    {step.title}
                                </Heading>
                                <div 
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        activeIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <Paragraph className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">
                                        {step.description}
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Side: Image */}
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px]">
                    <Image
                        src={meetingRightImage}
                        alt="Industry Expertise"
                        fill
                        className="rounded-lg sm:rounded-xl object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 600px"
                    />
                </div>
            </div>
        </section>
    );
}