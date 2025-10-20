/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Button from "../reusable-components/Button";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import AnimatedText from "../reusable-components/AnimatedText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useCreateEmailClientMutation } from "@/redux/api/email/emailApi";
import { emailSchema, EmailSchemaData } from "@/schema/email/EmailSchema";

export default function ContactSection() {
  const [createEmailClient, { isLoading }] = useCreateEmailClientMutation();
  const [submitSuccess,] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailSchemaData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
      country: "",
      projectName: "",
    },
  });


const onSubmit = async (data: EmailSchemaData) => {
  try {
    const { country, ...rest } = data;
    const payload = country?.trim() ? { ...rest, country } : rest;
    const response = await createEmailClient(payload).unwrap();
    reset();
    if (response?.success) {
      toast.success(response.message || "Message sent successfully! We will get back to you soon.", {
        duration: 5000,
        position: "top-right",
      });
    } 
    // reset();
  } catch (error: any) {
    console.error("Error submitting form:", error);

    toast.error(error?.data?.message || "Failed to send message. Please try again!", {
      duration: 5000,
      position: "top-right",
    });
  }
};




  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* Left Info Section */}
        <div className="order-2 lg:order-1">
          <h2 className="text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg">Contact</h2>
          <div className="mt-4 sm:mt-6">
            <Heading className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
              Get in touch
            </Heading>
            <Paragraph>
              <AnimatedText
                text="We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out to us. Our team is here to assist you with any inquiries you may have."
                loop={false}
                speed={0.02}
                className="text-gray-700 dark:text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base leading-relaxed max-w-md"
              />
            </Paragraph>

            <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-gray-300" />
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
              text="Let's drop us a line and get the project started."
              loop={false}
            />
          </Heading>

          {submitSuccess && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 sm:mt-8 md:mt-10 space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Enter first name"
                  className="mt-1"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Enter last name"
                  className="mt-1"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter email address"
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  maxLength={11}
                  {...register("phone")}
                  placeholder="Enter 11-digit phone number"
                  className="mt-1"
                  onInput={(e) => {
                    // Remove any non-digit characters
                    e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="subject" className="text-sm font-medium">
                Subject *
              </Label>
              <Input
                id="subject"
                {...register("subject")}
                placeholder="Enter subject"
                className="mt-1"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="projectName" className="text-sm font-medium">
                Project Name *
              </Label>
              <Input
                id="projectName"
                {...register("projectName")}
                placeholder="Enter project name"
                className="mt-1"
              />
              {errors.projectName && (
                <p className="text-red-500 text-sm mt-1">{errors.projectName.message}</p>
              )}
            </div>
</div>
            <div>
              <Label htmlFor="country" className="text-sm font-medium">
                Country
              </Label>
              <Input
                id="country"
                {...register("country")}
                placeholder="Enter country"
                className="mt-1"
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium">
                Message *
              </Label>
              <textarea
                id="message"
                {...register("message")}
                placeholder="Enter your message"
                rows={3}
                className="w-full p-2 border rounded"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[#1776BB] hover:cursor-pointer text-white font-medium w-full sm:w-[214px] h-[40px] sm:h-[48px] rounded-[12px] sm:rounded-[16px] transition text-sm sm:text-base"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}