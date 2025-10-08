"use client";

import { useState } from "react";
import Image from "next/image";
import user from "@/assets/Logo/avatar.png";
import Button from "../reusable-components/Button";
import { HiSparkles } from "react-icons/hi";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";

// Dummy reviews data - 8 reviews for each star rating (5 to 1)
const reviews = [
    // 5-star reviews (8)
    {
        id: 1,
        name: "Rob H.",
        role: "Founder",
        product: "Butters' LEGENDARY Product",
        stars: 5,
        date: "Feb 16, 2022",
        text: "Butter will forever change how you approach online or remote workshop collaboration - from the facilitator or the participant; this unique tool will add flavour, fun and discipline for more engaging digital workshops.",
        avatar: user.src,
    },
    {
        id: 2,
        name: "Jane D.",
        role: "CEO",
        product: "Visionary SaaS",
        stars: 5,
        date: "Mar 5, 2022",
        text: "Absolutely love the platform! It has transformed our workflow and increased our team productivity by 40%.",
        avatar: user.src,
    },
    {
        id: 3,
        name: "Sarah M.",
        role: "Product Manager",
        product: "Product Pro",
        stars: 5,
        date: "Apr 12, 2022",
        text: "The best product in its category. Our team uses it daily and couldn't be happier with the results.",
        avatar: user.src,
    },
    {
        id: 4,
        name: "Michael T.",
        role: "CTO",
        product: "Tech Suite",
        stars: 5,
        date: "May 8, 2022",
        text: "Exceptional quality and service. The support team is responsive and knowledgeable.",
        avatar: user.src,
    },
    {
        id: 5,
        name: "Emily R.",
        role: "Marketing Director",
        product: "Marketing Pro",
        stars: 5,
        date: "Jun 10, 2022",
        text: "This has revolutionized how we approach our marketing campaigns. Worth every penny!",
        avatar: user.src,
    },
    {
        id: 6,
        name: "David K.",
        role: "Developer",
        product: "Dev Tools",
        stars: 5,
        date: "Jul 15, 2022",
        text: "As a developer, I appreciate the clean API and thorough documentation. Makes integration a breeze.",
        avatar: user.src,
    },
    {
        id: 7,
        name: "Lisa P.",
        role: "Design Lead",
        product: "Design Suite",
        stars: 5,
        date: "Aug 20, 2022",
        text: "The design tools are intuitive and powerful. Our team has created stunning visuals in half the time.",
        avatar: user.src,
    },
    {
        id: 8,
        name: "James W.",
        role: "Sales Executive",
        product: "Sales Accelerator",
        stars: 5,
        date: "Sep 3, 2022",
        text: "Our conversion rates have improved dramatically since implementing this solution. Highly recommended!",
        avatar: user.src,
    },

    // 4-star reviews (8)
    {
        id: 9,
        name: "Alex K.",
        role: "Developer",
        product: "Dev Tools Pro",
        stars: 4,
        date: "Apr 12, 2022",
        text: "Very useful, but could improve on speed. Overall a great product with minor performance issues.",
        avatar: user.src,
    },
    {
        id: 10,
        name: "Maria L.",
        role: "Designer",
        product: "Creative Kit",
        stars: 4,
        date: "May 8, 2022",
        text: "Loved the design tools, super intuitive. Would give 5 stars if there were more template options.",
        avatar: user.src,
    },
    {
        id: 11,
        name: "Thomas B.",
        role: "Analyst",
        product: "Data Insights",
        stars: 4,
        date: "Jun 5, 2022",
        text: "Powerful analytics features, though the learning curve is a bit steep for new users.",
        avatar: user.src,
    },
    {
        id: 12,
        name: "Olivia M.",
        role: "HR Manager",
        product: "HR Suite",
        stars: 4,
        date: "Jul 18, 2022",
        text: "Great for our HR processes, but the mobile app needs some improvements to match the web version.",
        avatar: user.src,
    },
    {
        id: 13,
        name: "Robert G.",
        role: "Consultant",
        product: "Business Pro",
        stars: 4,
        date: "Aug 22, 2022",
        text: "Excellent features overall, though I wish the pricing was more transparent from the start.",
        avatar: user.src,
    },
    {
        id: 14,
        name: "Sophia H.",
        role: "Educator",
        product: "Edu Platform",
        stars: 4,
        date: "Sep 10, 2022",
        text: "My students love it! Would be perfect with better integration with other educational tools.",
        avatar: user.src,
    },
    {
        id: 15,
        name: "William F.",
        role: "Engineer",
        product: "Engineering Tools",
        stars: 4,
        date: "Oct 5, 2022",
        text: "Reliable and robust, though some features feel a bit outdated compared to competitors.",
        avatar: user.src,
    },
    {
        id: 16,
        name: "Grace L.",
        role: "Content Creator",
        product: "Content Studio",
        stars: 4,
        date: "Nov 15, 2022",
        text: "Makes content creation much easier, though I occasionally experience small bugs.",
        avatar: user.src,
    },

    // 3-star reviews (8)
    {
        id: 17,
        name: "John W.",
        role: "Manager",
        product: "Business Suite",
        stars: 3,
        date: "Jun 10, 2022",
        text: "Good features but needs better support. Sometimes takes days to get responses to critical issues.",
        avatar: user.src,
    },
    {
        id: 18,
        name: "Emma P.",
        role: "Freelancer",
        product: "Freelance Hub",
        stars: 3,
        date: "Jul 15, 2022",
        text: "Works well but has a learning curve. Not as intuitive as I expected for the price point.",
        avatar: user.src,
    },
    {
        id: 19,
        name: "Daniel R.",
        role: "Photographer",
        product: "Photo Editor",
        stars: 3,
        date: "Aug 5, 2022",
        text: "Decent editing tools, but lacks some advanced features that competitors offer at this price.",
        avatar: user.src,
    },
    {
        id: 20,
        name: "Megan S.",
        role: "Writer",
        product: "Writing Assistant",
        stars: 3,
        date: "Sep 12, 2022",
        text: "Helpful for basic writing, but the AI suggestions often miss the mark for professional content.",
        avatar: user.src,
    },
    {
        id: 21,
        name: "Kevin T.",
        role: "Accountant",
        product: "Finance Pro",
        stars: 3,
        date: "Oct 8, 2022",
        text: "Does the job, but the interface feels clunky compared to other financial software I've used.",
        avatar: user.src,
    },
    {
        id: 22,
        name: "Rachel M.",
        role: "Social Media Manager",
        product: "Social Suite",
        stars: 3,
        date: "Nov 20, 2022",
        text: "Average performance. Scheduling works fine but analytics could be more detailed.",
        avatar: user.src,
    },
    {
        id: 23,
        name: "Brian K.",
        role: "Small Business Owner",
        product: "Business Starter",
        stars: 3,
        date: "Dec 5, 2022",
        text: "Good for basic needs, but outgrew it quickly. Better suited for very small operations.",
        avatar: user.src,
    },
    {
        id: 24,
        name: "Laura D.",
        role: "Project Manager",
        product: "Task Master",
        stars: 3,
        date: "Jan 10, 2023",
        text: "Functional but not exceptional. There are better project management tools available.",
        avatar: user.src,
    },

    // 2-star reviews (8)
    {
        id: 25,
        name: "Daniel S.",
        role: "Consultant",
        product: "Pro Consult",
        stars: 2,
        date: "Aug 20, 2022",
        text: "Some features didn't work as expected. Support was unhelpful when I reached out about issues.",
        avatar: user.src,
    },
    {
        id: 26,
        name: "Patricia L.",
        role: "Teacher",
        product: "Classroom Pro",
        stars: 2,
        date: "Sep 5, 2022",
        text: "Frustrating to use. Many promised features either don't work well or are missing entirely.",
        avatar: user.src,
    },
    {
        id: 27,
        name: "George M.",
        role: "Retail Manager",
        product: "Retail Solutions",
        stars: 2,
        date: "Oct 15, 2022",
        text: "Barely functional for our needs. Had to supplement with other tools to get basic functionality.",
        avatar: user.src,
    },
    {
        id: 28,
        name: "Hannah B.",
        role: "Event Planner",
        product: "Event Pro",
        stars: 2,
        date: "Nov 8, 2022",
        text: "Constant bugs make this nearly unusable for professional event planning. Very disappointed.",
        avatar: user.src,
    },
    {
        id: 29,
        name: "Nathan W.",
        role: "IT Specialist",
        product: "IT Toolkit",
        stars: 2,
        date: "Dec 12, 2022",
        text: "Security vulnerabilities found during our audit. Can't recommend until these are fixed.",
        avatar: "/avatars/user29.jpg",
    },
    {
        id: 30,
        name: "Victoria S.",
        role: "Blogger",
        product: "Blog Platform",
        stars: 2,
        date: "Jan 5, 2023",
        text: "Limited customization options and frequent downtime. Moving to a different platform soon.",
        avatar: "/avatars/user30.jpg",
    },
    {
        id: 31,
        name: "Eric J.",
        role: "Fitness Trainer",
        product: "Fitness Pro",
        stars: 2,
        date: "Feb 10, 2023",
        text: "App crashes frequently during client sessions. Unreliable for professional use.",
        avatar: "/avatars/user31.jpg",
    },
    {
        id: 32,
        name: "Diana K.",
        role: "Restaurateur",
        product: "Restaurant Manager",
        stars: 2,
        date: "Mar 15, 2023",
        text: "Missing critical features for inventory management. Had to implement manual workarounds.",
        avatar: "/avatars/user32.jpg",
    },

    // 1-star reviews (8)
    {
        id: 33,
        name: "Olivia B.",
        role: "Student",
        product: "Learn Fast",
        stars: 1,
        date: "Sep 3, 2022",
        text: "Didn't meet my expectations at all. Content was outdated and platform was buggy.",
        avatar: "/avatars/user33.jpg",
    },
    {
        id: 34,
        name: "Mark T.",
        role: "Entrepreneur",
        product: "Startup Kit",
        stars: 1,
        date: "Oct 10, 2022",
        text: "Complete waste of money. None of the advertised features worked properly.",
        avatar: "/avatars/user34.jpg",
    },
    {
        id: 35,
        name: "Jennifer L.",
        role: "Graphic Designer",
        product: "Design Pro",
        stars: 1,
        date: "Nov 5, 2022",
        text: "Terrible user experience. Crashes constantly and corrupts files. Avoid this product!",
        avatar: "/avatars/user35.jpg",
    },
    {
        id: 36,
        name: "Steven P.",
        role: "Architect",
        product: "CAD Tools",
        stars: 1,
        date: "Dec 8, 2022",
        text: "Unusable for professional work. Lost hours of work due to crashes and poor autosave.",
        avatar: "/avatars/user36.jpg",
    },
    {
        id: 37,
        name: "Amanda R.",
        role: "Video Editor",
        product: "Video Suite",
        stars: 1,
        date: "Jan 12, 2023",
        text: "Renders low quality output despite high settings. Support refused to issue a refund.",
        avatar: "/avatars/user37.jpg",
    },
    {
        id: 38,
        name: "Paul H.",
        role: "Musician",
        product: "Music Studio",
        stars: 1,
        date: "Feb 15, 2023",
        text: "Latency makes recording impossible. Basic features that should work don't function at all.",
        avatar: "/avatars/user38.jpg",
    },
    {
        id: 39,
        name: "Nicole W.",
        role: "Therapist",
        product: "Therapy Tools",
        stars: 1,
        date: "Mar 10, 2023",
        text: "Security concerns with client data. Immediately discontinued use after discovering vulnerabilities.",
        avatar: "/avatars/user39.jpg",
    },
    {
        id: 40,
        name: "Jason M.",
        role: "Developer",
        product: "Code Assistant",
        stars: 1,
        date: "Apr 5, 2023",
        text: "Generated code was often incorrect or insecure. Dangerous to use in production environments.",
        avatar: "/avatars/user40.jpg",
    },
];

const ReviewSection = () => {
    const [selectedStars, setSelectedStars] = useState<number>(5);

    const filteredReviews = reviews.filter((r) => r.stars === selectedStars);

    return (
        <section className="w-full py-12 bg-gray-50 dark:bg-gray-800 rounded-[24px] mb-[10px] ">
            <div className="max-w-[1280px] mx-auto px-4">
                {/* Heading */}
                <div className="text-center mb-6">
                    <Heading className="text-3xl font-bold text-black dark:text-white">
                        Loved by{" "}
                        <span className="text-blue-700">customers</span> everywhere
                    </Heading>
                    <Paragraph className="text-gray-500 mt-2">
                        See what our users say about our products and services
                    </Paragraph>
                </div>

                
                <div className="flex justify-center mb-8">
                    <div className="flex bg-gray-50 dark:bg-gray-900 rounded-lg p-1 shadow-sm">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <Button
                                key={star}
                                onClick={() => setSelectedStars(star)}
                                className={`flex items-center justify-center px-4 py-2 rounded-lg hover:cursor-pointer text-base font-semibold transition-colors duration-200 ${selectedStars === star
                                    ? "bg-[#1776BB] text-white dark:text-black"
                                    : "bg-transparent text-gray-900 dark:text-gray-300"
                                    }`}
                            >
                                {star}
                                <span className="ml-1 text-yellow-400">★</span>
                            </Button>
                        ))}
                    </div>
                </div>


                {/* Reviews Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredReviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white dark:bg-black dark:border border-gray-300 rounded-xl shadow p-5 flex flex-col hover:shadow-md transition"
                        >
                            {/* Avatar + Name */}
                            <div className="flex items-center mb-3">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src={review.avatar}
                                        alt={review.name}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div className="ml-3">
                                    <Heading className="font-semibold text-[16px] ">{review.name}</Heading>
                                    <Paragraph className="text-xs text-gray-500 dark:text-gray-300">{review.role}</Paragraph>
                                </div>
                            </div>

                            {/* Product Name */}
                            <Paragraph className="text-sm font-medium text-gray-500 dark:text-gray-300">{review.product}</Paragraph>

                            {/* Stars */}
                            <div className="flex items-center text-yellow-400 text-sm my-2">
                                {"★".repeat(review.stars)}
                                {"☆".repeat(5 - review.stars)}
                            </div>

                            {/* Review Text */}
                            <Paragraph className="text-sm text-gray-500 dark:text-gray-300 flex-grow">
                                {review.text}
                            </Paragraph>

                            {/* Date */}
                            <Paragraph className="text-xs text-gray-400 mt-3">{review.date}</Paragraph>
                        </div>
                    ))}
                </div>

               <div className="flex justify-center ">
                 <Button
                    className="bg-[#1776BB] hover:bg-[#0f5ed1] mt-[38px] flex justify-center text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg font-medium items-center gap-2 mx-auto lg:mx-0 transition text-sm sm:text-base"
                >
                    <HiSparkles className="text-lg sm:text-xl" />
                    Let&apos;s build something
                </Button>
               </div>
            </div>
        </section>
    );
};

export default ReviewSection;