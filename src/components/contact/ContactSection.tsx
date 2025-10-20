/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Mail, Phone } from "lucide-react";
import Button from "../reusable-components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useCreateEmailClientMutation } from "@/redux/api/email/emailApi";
import { emailSchema, EmailSchemaData } from "@/schema/email/EmailSchema";

export default function ContactSection() {
  const [createEmailClient, { isLoading }] = useCreateEmailClientMutation();
  const [submitSuccess] = useState(false);

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
        toast.success(
          response.message ||
            "Message sent successfully! We will get back to you soon.",
          {
            duration: 5000,
            position: "top-right",
          }
        );
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast.error(
        error?.data?.message || "Failed to send message. Please try again!",
        {
          duration: 5000,
          position: "top-right",
        }
      );
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 max-w-[1280px] mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
          Get in touch with us to discuss how we can support your objectives
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="bg-[#111827] text-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-800">
          <h3 className="text-lg font-semibold mb-4">Send us a Message</h3>
          {submitSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              Thank you for your message! We&apos;ll get back to you soon.
            </div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 sm:space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-gray-300">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Enter full name"
                  className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
                />
                {errors.firstName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="lastName" className="text-gray-300">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Enter last name"
                  className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
                />
                {errors.lastName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>

             
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div>
                <Label htmlFor="email" className="text-gray-300">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-300">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  maxLength={11}
                  {...register("phone")}
                  placeholder="+8801XXXXXXXXX"
                  className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /\D/g,
                      ""
                    );
                  }}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div>
                <Label htmlFor="subject" className="text-gray-300">
                  Subject
                </Label>
                <Input
                  id="subject"
                  {...register("subject")}
                  placeholder="Enter subject name"
                  className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

               <div>
                <Label htmlFor="projectName" className="text-gray-300">
                  Project Name
                </Label>
                <Input
                  id="projectName"
                  {...register("projectName")}
                  placeholder="Enter project name"
                  className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
                />
                {errors.projectName && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.projectName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="country" className="text-gray-300">
                Country
              </Label>
              <Input
                id="country"
                {...register("country")}
                placeholder="Enter a country name"
                className="mt-1 bg-transparent border-gray-600 focus:border-yellow-400 text-white"
              />
              {errors.country && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.country.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-gray-300">
                Message *
              </Label>
              <textarea
                id="message"
                {...register("message")}
                rows={3}
                placeholder="Tell us about your inquiry..."
                className="w-full mt-1 p-2 rounded-md border border-gray-600 bg-transparent text-white focus:border-yellow-400 focus:ring-0"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1776BB] hover:cursor-pointer text-white font-medium rounded-md h-[45px] mt-4 transition"
            >
              {isLoading ? "Sending..." : "Submit Message"}
            </Button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6">
          <div className="bg-gradient-to-b from-yellow-100 to-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-800 text-sm">
              <div>
                <p className="font-semibold">Office Address</p>
                <p>Dhaka, Bangladesh</p>
              </div>

              <div>
                <p className="font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1776BB]" /> Phone
                </p>
                <p>+880 1601-590591</p>
                <p>+880 1601-590591</p>
              </div>

              <div>
                <p className="font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1776BB]" /> Email
                </p>
                <p>info@radiantcorp.com</p>
                <p>contact@radiantcorp.com</p>
              </div>

              <div>
                <p className="font-semibold">Business Hours</p>
                <p>Sunday – Thursday: 9:00 AM – 6:00 PM</p>
                <p>Friday – Saturday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] text-gray-200 p-6 rounded-xl border border-gray-800">
            <h4 className="text-lg font-semibold text-[#1776BB] mb-2">
              Quick Response
            </h4>
            <p className="text-sm leading-relaxed">
              We typically respond to all inquiries within 24–48 hours during
              business days. For urgent matters, please call our office
              directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
