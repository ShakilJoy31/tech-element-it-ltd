"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import serviceImage from "../../assets/Home/custom-service.jpg";
import serviceImage1 from "../../assets/Service/service-(1).jpg";
import serviceImage2 from "../../assets/Service/service-(2).jpg";
import serviceImage3 from "../../assets/Service/service-(3).jpg";
import serviceImage4 from "../../assets/Service/service-(4).jpg";

import Button from "../reusable-components/Button";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import { FaArrowRightLong } from "react-icons/fa6";

// Service Data
const services = [
  {
    id: "001",
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences that drive conversion and satisfaction.",
    image: serviceImage1.src,
  },
  {
    id: "002",
    title: "Web Development",
    description:
      "Build responsive, high-performance websites with modern technologies and best practices.",
    image: serviceImage2.src,
  },
  {
    id: "003",
    title: "Web Design",
    description:
      "Craft visually stunning designs that reflect your brand identity and captivate your audience.",
    image: serviceImage.src,
  },
  {
    id: "004",
    title: "Online Ticketing Solution",
    description:
      "Implement seamless ticketing systems for events with secure payment processing.",
    image: serviceImage3.src,
  },
  {
    id: "005",
    title: "Business & Enterprise Solutions",
    description:
      "Develop custom software tailored to your business processes and operational needs.",
    image: serviceImage4.src,
  },
];

const  CustomServices = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="max-w-[1280px] mx-auto px-4 lg:py-24 ">
      {/* Header Section */}
      <div className="text-center mb-16">
        <Heading className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold mb-6 text-gray-900 dark:text-white">
          Custom Software{" "}
          <span className="text-[#1673FF]">Development Services</span>
        </Heading>
        <Paragraph className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We build solid and courageous digital solutions that leave a strong
          mark on your industry and drive business growth.
        </Paragraph>
      </div>

      <div className="flex flex-col lg:flex-row-reverse gap-12">
        {/* Desktop Service Preview */}
        <div className="hidden lg:flex lg:w-3/5 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg opacity-90 max-w-md">
                    {services[activeService].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Services List */}
        <div className="lg:w-2/5">
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border-l-4 ${
                  activeService === index
                    ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/50 border-[#1776BB] shadow-md"
                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-transparent"
                }`}
                onClick={() => setActiveService(index)}
                initial={false}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                whileHover={{ scale: activeService === index ? 1 : 1.02 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Mobile image preview */}
                {activeService === index && (
                  <div className="mb-4 block lg:hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        className="relative w-full h-60 rounded-xl overflow-hidden shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-lg font-bold mb-1">
                              {service.title}
                            </h3>
                            <p className="text-sm opacity-90">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}

                {/* Service Text */}
                <div className="flex items-start gap-4">
                  <motion.div
                    className={`text-lg p-2 rounded-full flex items-center justify-center ${
                      activeService === index
                        ? "bg-[#1776BB]"
                        : "bg-gray-200 dark:bg-gray-700"
                    }`}
                    initial={false}
                    animate={{
                      backgroundColor:
                        activeService === index ? "#1776BB" : "#e5e7eb",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span
                      className="font-semibold"
                      initial={false}
                      animate={{
                        color: activeService === index ? "#ffffff" : "#4b5563",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.id}
                    </motion.span>
                  </motion.div>
                  <div>
                    <motion.h3
                      className={`text-xl font-semibold mb-2 ${
                        activeService === index
                          ? "text-[#1776BB]"
                          : "text-gray-800 dark:text-white"
                      }`}
                      initial={false}
                      transition={{ duration: 0.3 }}
                    >
                      {service.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Explore button */}
          <div className="mt-10 flex justify-center lg:justify-start mb-4 md:mb-0 ">
            <Button className="group bg-[#1776BB] gap-x-6 hover:bg-[#0f5ed1] hover:cursor-pointer text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl">
              Explore All Services
              <FaArrowRightLong size={20}></FaArrowRightLong>
            </Button>
          </div>
    </section>
  );
};

export default CustomServices;
