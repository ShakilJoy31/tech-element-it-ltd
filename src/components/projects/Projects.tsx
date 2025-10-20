"use client";

import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { GoDotFill } from "react-icons/go";
import Button from "../reusable-components/Button";

interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    liveLink: string;
    image: string;
}

interface ApiProject {
    id: number;
    name: string;
    description: string;
    link: string;
    image: string;
    video: string;
    createdAt: string;
    updatedAt: string;
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch projects on component mount
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('https://tech-element-backend.vercel.app/api/v1/project/get-project-all?page=1&size=10');

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data = await response.json();

                if (data.success) {
                    // Transform API data to match your component structure
                    const transformedProjects: Project[] = data.data.map((project: ApiProject, index: number) => ({
                        id: project.id,
                        title: project.name,
                        subtitle: "- Project",
                        description: project.description,
                        category: ['UI/UX Design', 'Technology', 'App Development'][index % 3] || 'Technology',
                        liveLink: project.link,
                        image: project.image
                    }));

                    setProjects(transformedProjects);
                } else {
                    throw new Error(data.message || 'Failed to fetch projects');
                }
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    console.log(projects);

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === 'All Categories'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    // Get unique categories
    const categories = ['All Categories', ...new Set(projects.map(project => project.category))];

    if (isLoading) {
        return (
            <section className="max-w-[1280px] mx-auto px-4 lg:px-0 py-8">
                <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">Loading projects...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="max-w-[1280px] mx-auto px-4 lg:px-0 py-8">
                <div className="text-center py-12">
                    <p className="text-red-500 dark:text-red-400">Error: {error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-[1280px] mx-auto px-4 lg:px-0 py-8">
            {/* ... rest of your JSX remains the same ... */}
            {/* Filter Buttons */}
            <div className="relative mb-8">
                <div className="flex overflow-x-auto pb-2 hide-scrollbar md:overflow-visible">
                    <div className="flex space-x-2 min-w-max md:min-w-0 bg-gray-50 dark:bg-gray-900 rounded-lg p-1 shadow-sm">
                        {categories.map((projectCategory) => (
                            <Button
                                key={projectCategory}
                                onClick={(e) => {
                                    setSelectedCategory(projectCategory);
                                    const button = e.currentTarget;
                                    const buttonRect = button.getBoundingClientRect();
                                    const isPartiallyVisible = (
                                        buttonRect.left >= 0 &&
                                        buttonRect.right <= window.innerWidth
                                    );
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
                    <div key={project.id} className="hover:cursor-pointer">
                        <ProjectCard
                            title={project.title}
                            id={project.id}
                            subtitle={project.subtitle}
                            description={project.description}
                            image={project.image}
                            liveLink={project.liveLink}
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