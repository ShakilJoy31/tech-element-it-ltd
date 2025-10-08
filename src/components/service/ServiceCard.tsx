"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Heading from "../reusable-components/Heading";

interface ServiceSectionProps {
  id: string;
  title: string;
  items: string[];
  image: string;
}

const ServiceCard: FC<ServiceSectionProps> = ({ id, title, items, image }) => {
  const router = useRouter();
  return (
    <section onClick={()=> router.push(`/service/service-details/12`)} className="grid hover:bg-gray-100 dark:hover:bg-black dark:hover:border border-cyan-600 rounded-[24px] cursor-pointer grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 py-8 sm:py-10 lg:py-12 px-4">
      {/* Left ID */}
      <div className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">{`(${id})`}</div>

      {/* Middle Text */}
      <div className="flex-1">
        <Heading className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</Heading>
        <ul className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Right Image */}
      <div className="sm:col-span-2 lg:col-span-1 w-full max-w-full sm:max-w-[459px] mx-auto lg:ml-auto">
        <Image
          src={image}
          alt={title}
          width={800}
          height={250}
          className="rounded-lg sm:rounded-xl object-cover w-full h-auto"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
    </section>
  );
};

export default ServiceCard;