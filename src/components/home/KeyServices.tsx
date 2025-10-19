"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import dimond from '@/assets/Home/dimond-gif.gif'
import portfolioImage from '@/assets/Home/portfolio.jpg'
import portfolioImage1 from '@/assets/Service/key-service-(1).webp'
import portfolioImage2 from '@/assets/Service/key-service-(2).webp'
import portfolioImage3 from '@/assets/Service/key-service-(3).webp'
import { CgArrowBottomRight } from "react-icons/cg";
import { useState, useEffect } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";


const services = [
    {
        id: 1,
        title: "E-Commerce Solutions For A Digital-First World",
        description: "Build Robust, Scalable, And Customer-Centric Online Stores.",
        image: portfolioImage.src,
    },
    {
        id: 2,
        title: "Comprehensive School Management System Solutions",
        description: "Streamline School Operations With Advanced Technology.",
        image: portfolioImage1.src,
    },
    {
        id: 3,
        title: "Reliable Security Services",
        description: "Ensure Your Digital Assets Remain Safe And Secure.",
        image: portfolioImage2.src,
    },
    {
        id: 4,
        title: "Custom Mobile App Development",
        description: "Create Engaging Mobile Experiences Across iOS and Android Platforms.",
        image: portfolioImage3.src,
    },
    {
        id: 5,
        title: "AI-Powered Business Automation",
        description: "Leverage Artificial Intelligence To Optimize Your Business Processes.",
        image: portfolioImage.src,
    },
    {
        id: 6,
        title: "Cloud Migration & Management",
        description: "Seamlessly Transition To The Cloud With Expert Guidance.",
        image: portfolioImage1.src,
    },
    {
        id: 7,
        title: "Data Analytics & Visualization",
        description: "Transform Raw Data Into Actionable Business Insights.",
        image: portfolioImage2.src,
    },
    {
        id: 8,
        title: "UI/UX Design Services",
        description: "Craft Intuitive And Visually Stunning User Experiences.",
        image: portfolioImage3.src,
    },
    {
        id: 9,
        title: "Digital Marketing Solutions",
        description: "Boost Your Online Presence With Data-Driven Marketing Strategies.",
        image: portfolioImage.src,
    },
    {
        id: 10,
        title: "IoT Development Services",
        description: "Connect Your Business To The Internet of Things Ecosystem.",
        image: portfolioImage1.src,
    },
];

const NavigationButtons = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        const handleSlideChange = () => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
        };

        swiper.on('slideChange', handleSlideChange);
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <>
            {!isBeginning && (
                <button
                    onClick={() => swiper.slidePrev()}
                    className="custom-prev absolute top-1/2 left-4 hover:cursor-pointer z-50 transform -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all duration-300"
                    aria-label="Previous slide"
                >
                    <FaArrowLeftLong size={24} />
                </button>
            )}
            {!isEnd && (
                <button
                    onClick={() => swiper.slideNext()}
                    className="custom-next absolute top-1/2 right-4 hover:cursor-pointer z-50 transform -translate-y-1/2 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 transition-all duration-300"
                    aria-label="Next slide"
                >
                    <FaArrowRightLong size={24} />
                </button>
            )}
        </>
    );
};

export default function KeyServices() {
    return (
        <section className="bg-[#0b0b1a] text-white py-16">
            <div className="max-w-full mx-auto flex flex-col md:flex-row gap-10">
                {/* Left Section */}
                <div className="md:w-1/3 flex md:flex-col lg:justify-between w-full">
                    <div className="block mx-auto ">
                        {/* Circle text logo */}
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center">
                                <span className="text-sm">T</span>
                            </div>
                        </div>

                        {/* Heading */}
                        <h2 className="text-4xl font-light leading-snug text-white">
                            <div className="flex gap-x-12 items-center"><span>KEY</span> <span><CgArrowBottomRight size={45}></CgArrowBottomRight></span></div>
                            <span className="font-semibold">Services</span>
                        </h2>
                    </div>

                    {/* Diamond image */}
                    <div className="flex justify-center">
                        <Image
                            src={dimond}
                            alt="Diamond"
                            width={200}
                            height={200}
                            className="w-[180px] md:w-[280px] lg:w-[370px] h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Right Section - Slider */}
                <div className="md:w-2/3 relative">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 2.2 },
                        }}
                        modules={[Navigation]}
                        className="pb-8 relative"
                    >
                        <NavigationButtons />
                        {services.map((service) => (
                            <SwiperSlide key={service.id}>
                                <div className="relative rounded-xl overflow-hidden group transition-transform duration-300 hover:scale-[1.02]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={500}
                                        height={600}
                                        className="w-full h-[420px] object-cover"
                                        priority={service.id <= 3} // Prioritize loading first few images
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end transition-opacity duration-300 group-hover:bg-black/50">
                                        <Heading className="text-lg md:text-xl font-semibold mb-2">
                                            {service.title}
                                        </Heading>
                                        <Paragraph className="text-gray-300 text-sm mb-3">
                                            {service.description}
                                        </Paragraph>
                                        <a
                                            href="#"
                                            className="text-white font-semibold underline underline-offset-2 hover:text-orange-400 transition-colors duration-300 inline-flex items-center gap-1"
                                        >
                                            Learn more
                                            <FiChevronRight size={16} className="inline" />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Bottom Menu */}
            <div className="flex flex-wrap items-center justify-around mt-10 text-[24px] md:text-[32px] font-medium text-white">
                <span>CREATIVE DESIGN</span>
                <span className="text-orange-500 text-[32px]">•</span>
                <span>UI/UX</span>
                <span className="text-orange-500 text-[32px]">•</span>
                <span>MARKETING</span>
                <span className="text-orange-500 text-[32px]">•</span>
                <span>MOTION</span>
            </div>
        </section>
    );
}