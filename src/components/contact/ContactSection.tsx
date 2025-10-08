"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../reusable-components/Button";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import AnimatedText from "../reusable-components/AnimatedText";
import { Controller, useForm } from "react-hook-form";
import TipTapEditor from "../dashboard/tiptap/TipTapEditor";
import AddFeatures from "../pricing/AddFeaturesDropdown";

export default function ContactSection() {
    const {
        control,
    } = useForm({
        defaultValues: {
            companyName: "",
        }
    });
    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                {/* Left Info Section */}
                <div className="order-2 lg:order-1">
                    <h2 className="text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg">Contact</h2>
                    <div className="mt-4 sm:mt-6">
                        <Heading className="text-base sm:text-lg font-medium text-gray-900 dark:text-white ">Get in touch</Heading>
                        <Paragraph>
                            <AnimatedText
                                text='We&apos;d love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us. Our team is here to assist you with any inquiries you may have.'
                                loop={false}
                                speed={0.02}
                                className="text-gray-700 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed max-w-md"
                            />
                        </Paragraph>

                        <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
                            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 " />
                            <span className="font-medium sm:font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                techelementit@gmail.com
                            </span>
                        </div>

                        <div className="mt-3 sm:mt-4 flex items-start gap-2 sm:gap-3">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300 mt-0.5 sm:mt-1" />
                            <span className="font-medium sm:font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                Lavel, D-15, Lily Pond Center, 3 RK <br />
                                Mission Road, Motijheel, Dhaka-1203
                            </span>
                        </div>

                        <button className="mt-6 sm:mt-8 flex items-center gap-2 border dark:border-gray-300 rounded-[12px] sm:rounded-[16px] justify-center w-[140px] sm:w-[163px] h-[40px] sm:h-[46px] text-black dark:text-white dark:hover:text-black hover:cursor-pointer font-medium hover:bg-gray-100 transition text-sm sm:text-base">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4" /> Call us
                        </button>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="order-1 lg:order-2">
                    <Heading>
                        <AnimatedText
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-semibold text-gray-900 dark:text-white leading-snug"
                            text='Let&apos;s drop us a line and get the project started.'
                            loop={false}
                        />
                    </Heading>

                    <form className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {/* First Name */}
                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Company (Optional)
                            </label>
                            <input
                                type="text"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            />
                        </div>

                        {/* Country */}
                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <select className="border-b border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-gray-400 outline-none py-1 sm:py-2 text-sm sm:text-base bg-transparent text-gray-900 dark:text-gray-200">
                                <option className="bg-white dark:bg-gray-800">Bangladesh</option>
                                <option className="bg-white dark:bg-gray-800">India</option>
                                <option className="bg-white dark:bg-gray-800">USA</option>
                                <option className="bg-white dark:bg-gray-800">UK</option>
                            </select>
                        </div>

                        {/* Service Type */}
                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Service Type <span className="text-red-500">*</span>
                            </label>
                            <select className="border-b border-gray-300 dark:border-gray-600 focus:border-black dark:focus:border-gray-400 outline-none py-1 sm:py-2 text-sm sm:text-base bg-transparent text-gray-900 dark:text-gray-200">
                                <option className="bg-white dark:bg-gray-800">App Development</option>
                                <option className="bg-white dark:bg-gray-800">Web Development</option>
                                <option className="bg-white dark:bg-gray-800">UI/UX Design</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Expected Delivery Date <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Project Budget <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="number"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Short Project Description <span className="text-red-500">*</span>
                            </label>
                            <Controller
                                name="companyName"
                                control={control}
                                render={({ field }) => (
                                    <TipTapEditor content={field.value} onUpdate={field.onChange} />
                                )}
                            />
                        </div>

                        <div className="md:col-span-2 flex flex-col">
                            <AddFeatures></AddFeatures>
                        </div>

                        {/* Message */}
                        <div className="md:col-span-2 flex flex-col">
                            <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Write your note"
                                className="border-b border-gray-300 focus:border-black outline-none py-1 sm:py-2 text-sm sm:text-base"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <div className="md:col-span-2 mt-2 sm:mt-4">
                            <Button

                                type="submit"
                                className="bg-[#1776BB] hover:cursor-pointer text-white font-medium w-full sm:w-[214px] h-[40px] sm:h-[48px] rounded-[12px] sm:rounded-[16px] transition text-sm sm:text-base"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>


                </div>
            </div>
        </section>
    );
}