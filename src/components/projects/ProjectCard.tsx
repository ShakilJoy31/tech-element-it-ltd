// components/ProjectCard.tsx
"use client"

import Image from "next/image";
import productImage from "@/assets/Projects/projectImage.png";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, subtitle, description, image }: ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-background rounded-[20px] shadow-md overflow-hidden border border-gray-100 h-[538px] hover:shadow-2xl duration-300 ">
            {/* Image */}
            <div className=" relative p-2 h-[327px] ">
                <Image
                    src={image || productImage}
                    alt={title}
                    height={327}
                    width={386}
                    className="object-cover rounded-[10px] w-full "
                    priority
                />
            </div>

            {/* Text Content */}
            <div className="px-6 py-6 text-center">
                <h3 className="text-[20px] md:text-[22px] font-bold leading-snug text-[#0A1D4D] dark:text-white">
                    {title}{" "}
                    <span className="text-[#0A1D4D] dark:text-[#1776BB]">{subtitle}</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-300 text-[15px] leading-relaxed mt-3">
                    {description}
                </p>
            </div>
        </div>
    );
}