// components/ProjectBanner.tsx
"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";
import Button from "../reusable-components/Button";
import productImage from "@/assets/Projects/projectImage.png";
import productImage2 from "@/assets/Projects/projectImagee (1).png";
import productImage3 from "@/assets/Projects/projectImagee (2).png";
import productImage4 from "@/assets/Projects/projectImagee (3).png";

// Project data interface
interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    image: string;
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
    const router = useRouter();

    // Real project data array
    const projects: Project[] = [
        {
            id: 1,
            title: "KRY",
            subtitle: "- E-Commerce",
            description: "Revolutionizing online shopping with a sleek, user-friendly platform featuring secure payments, advanced search filters, and personalized recommendations.",
            category: "App Development",
            image: productImage.src
        },
        {
            id: 2,
            title: "School Management",
            subtitle: "- Educational Software",
            description: "A comprehensive fitness app with workout tracking, meal planning, and progress analytics to help users achieve their health goals.",
            category: "UI/UX Design",
            image: productImage2.src
        },
        {
            id: 3,
            title: "Iconic",
            subtitle: "- Ticket Management Software",
            description: "An intuitive IoT solution that allows users to control their home appliances, security systems, and energy usage from a single interface.",
            category: "Technology",
            image: productImage3.src
        },
        {
            id: 4,
            title: "Proyojon Sobar",
            subtitle: "- E-Commerce",
            description: "A powerful financial analytics dashboard that provides real-time insights into spending patterns, investments, and budget management.",
            category: "UI/UX Design",
            image: productImage4.src
        },
        {
            id: 5,
            title: "Educational Platform for",
            subtitle: "Remote Learning",
            description: "An interactive learning management system with video conferencing, assignment tracking, and collaborative tools for students and educators.",
            category: "App Development",
            image: productImage.src
        },
        {
            id: 6,
            title: "Travel Planning",
            subtitle: "AI Assistant",
            description: "An intelligent travel planner that uses machine learning to suggest personalized itineraries based on user preferences and budget constraints.",
            category: "Technology",
            image: productImage.src
        }
    ];

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'All Categories'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-0 py-8">
            {/* Filter Buttons - Made horizontally scrollable on mobile */}
            <div className="relative mb-8">
                <div className="flex overflow-x-auto pb-2 hide-scrollbar md:overflow-visible">
                    <div className="flex space-x-2 min-w-max md:min-w-0 bg-gray-50 dark:bg-gray-900 rounded-lg p-1 shadow-sm">
                        {['All Categories', 'UI/UX Design', 'Technology', 'App Development'].map((projectCategory) => (
                            <Button
                                key={projectCategory}
                                onClick={(e) => {
                                    setSelectedCategory(projectCategory);

                                    // Scroll the button into view if it's partially visible
                                    const button = e.currentTarget;
                                    const buttonRect = button.getBoundingClientRect();

                                    // Check if button is partially out of view on the right or left
                                    const isPartiallyVisible = (
                                        buttonRect.left >= 0 &&
                                        buttonRect.right <= window.innerWidth
                                    );

                                    // If not fully visible, scroll it into view
                                    if (!isPartiallyVisible) {
                                        button.scrollIntoView({
                                            behavior: 'smooth',
                                            block: 'nearest',
                                            inline: 'center'
                                        });
                                    }
                                }}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg hover:cursor-pointer font-semibold transition-colors duration-200 ${selectedCategory === projectCategory
                                        ? "bg-[#1776BB] text-white"
                                        : "text-gray-700 dark:text-gray-200"
                                    }`}
                            >
                                {projectCategory}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <div key={project.id} onClick={() => router.push(`/projects/project-details/${project.id}`)} className="hover:cursor-pointer">
                        <ProjectCard
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center">
                <Button className="flex items-center w-[202px] gap-2 bg-[#0057B8] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#004a9c] transition mt-[80px]">
                    <GoDotFill size={25}></GoDotFill>
                    <span>Load More</span>
                </Button>
            </div>

            {/* Add this to your global CSS or in a style tag */}
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}