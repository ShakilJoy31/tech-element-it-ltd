"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ShoppingCart, Star } from "lucide-react";
import projectImage1 from "../../../public/Project-Screenshot/e-commerce.png"
import projectImage2 from "../../../public/Project-Screenshot/fashinova.png"
import projectImage3 from "../../../public/Project-Screenshot/gramer-hut.png"
import projectImage4 from "../../../public/Project-Screenshot/taste-hub.png"
import Button from "../reusable-components/Button";

// Template data
const templates = [
    {
        id: 1,
        name: "Borcelle E-Commerce",
        category: "E-Commerce",
        description: "A sleek, modern e-commerce template with advanced product filtering, cart functionality, and seamless checkout process.",
        image: projectImage1.src,
        liveUrl: "https://e-commerce-template-olive-seven.vercel.app",
        price: "$89",
        features: ["Responsive Design", "Dark Mode", "Product Reviews", "Wishlist", "Cart"],
        rating: 4.9,
        sales: 1247
    },
    {
        id: 2,
        name: "Gramer Hut",
        category: "Organic Food",
        description: "Fresh and clean design for organic food stores with recipe sections, delivery tracking, and subscription options.",
        image: projectImage3.src,
        liveUrl: "https://gramer-haat.vercel.app",
        price: "$79",
        features: ["Organic Food", "Delivery Tracking", "Subscription Box", "Farm Stories"],
        rating: 4.8,
        sales: 892
    },
    {
        id: 3,
        name: "Fashnova",
        category: "E-Commerce",
        description: "High-tech template for electronics stores with comparison tools, tech specs, and customer support integration.",
        image: projectImage2.src,
        liveUrl: "https://fashnova-kappa.vercel.app",
        price: "$95",
        features: ["Fashion", "Catogories", "Men", "Women", "Child"],
        rating: 4.7,
        sales: 756
    },
    {
        id: 4,
        name: "Taste Hub",
        category: "Restaurant",
        description: "Trendy fashion template with lookbook, size guides, and social media integration for clothing brands.",
        image: projectImage4.src,
        liveUrl: "https://taste-hub-jjsf.vercel.app",
        price: "$85",
        features: ["Lookbook", "Size Guide", "Social Feed", "Style Quiz"],
        rating: 4.9,
        sales: 1345
    }
];

export default function TemplateShowcase() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

    const filteredTemplates = selectedCategory === 'All'
        ? templates
        : templates.filter(template => template.category === selectedCategory);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-[1280px] mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Templates
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Handpicked templates designed to help you launch your online business faster
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="relative mb-8">
                    <div className="flex overflow-x-auto pb-2 hide-scrollbar md:overflow-visible">
                        <div className="flex space-x-2 min-w-max md:min-w-0 bg-gray-50 dark:bg-gray-900 rounded-lg p-1 shadow-sm">
                            {['All', 'E-Commerce', 'Organic Food', 'Restaurant'].map((projectCategory) => (
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


                {/* Templates Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence>
                        {filteredTemplates.map((template) => (
                            <motion.div
                                key={template.id}
                                layout
                                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                                onMouseEnter={() => setHoveredTemplate(template.id)}
                                onMouseLeave={() => setHoveredTemplate(null)}
                                whileHover={{ y: -10 }}
                            >
                                {/* Image Container with Scroll Effect */}
                                <div className="relative h-64 overflow-hidden">
                                    <motion.div
                                        animate={{
                                            y: hoveredTemplate === template.id ? "-100%" : "0" // Changed: 0 = top, -100 = bottom
                                        }}
                                        transition={{ duration: 8, ease: "linear" }}
                                        className="w-full h-[1100%]" // This makes the image container twice the height
                                    >
                                        <Image
                                            src={template.image}
                                            alt={template.name}
                                            fill
                                            className="object-cover object-top" // Start from top
                                        />
                                    </motion.div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />

                                    {/* Hover Actions */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="absolute inset-0 flex items-center justify-center gap-4"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-blue-600 text-white p-3 rounded-full shadow-lg"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                window.open(template.liveUrl, '_blank');
                                            }}
                                        >
                                            <ExternalLink size={20} />
                                        </motion.button>
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                                        {template.category}
                                    </div>

                                    {/* Rating */}
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-sm">
                                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{template.rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {template.name}
                                        </h3>
                                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                            {template.price}
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                        {template.description}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {template.features.slice(0, 2).map((feature, index) => (
                                            <span
                                                key={index}
                                                className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {template.features.length > 2 && (
                                            <span className="text-gray-500 dark:text-gray-400 text-xs">
                                                +{template.features.length - 2} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {template.sales.toLocaleString()} sales
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold transition-colors"
                                        >
                                            <ShoppingCart size={16} />
                                            Purchase
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

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
            </div>
        </section>
    );
}