import { FC } from "react";
import Image from "next/image";
import featureImage from '@/assets/Logo/feature-icon (1).svg'
import featureImage1 from '@/assets/Logo/feature-icon (2).svg'
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import AnimatedText from "../reusable-components/AnimatedText";

const features = [
    {
        icon: featureImage.src,
        title: "User Management",
        description:
            "We work closely with your team to understand your mission, values, and goals, forming the foundation of your brand identity.",
    },
    {
        icon: featureImage1.src,
        title: "Branco Management",
        description:
            "Configure your infrastructure in your own cloud, using best practices, automatically",
    },
    {
        icon: featureImage1.src,
        title: "Branco Target Management",
        description:
            "Configure your infrastructure in your own cloud, using best practices, automatically",
    },
    {
        icon: featureImage1.src,
        title: "Buyer Management",
        description:
            "We work closely with your team to understand your mission, values, and goals, forming.",
    },
    {
        icon: featureImage1.src,
        title: "Seller Management",
        description:
            "Empower your sellers with full control and transparency",
    },
];

const FeaturesSection: FC = () => {
    return (
        <section className="bg-[#111111] text-white pt-8 md:pt-[60px] pb-12 md:pb-[84px] px-4">
            <div className="max-w-[1280px] mx-auto relative">
                {/* Gradient Background */}
                <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[536px] h-[300px] sm:h-[400px] md:h-[543px] rounded-full opacity-90"
                    style={{ zIndex: 0, background: "linear-gradient(to bottom, #6366F166 0%, #111111 40%)" }}
                ></div>

                {/* Title */}
                <div className="relative flex justify-center" style={{ zIndex: 10 }}>
                    <Heading>
                        <AnimatedText
                            className="text-3xl sm:text-4xl md:text-[50px] font-bold text-center mt-8 md:mt-[87px]"
                            text="Features"
                            loop={true}
                            loopDelay={5}
                            speed={0.03}
                        />
                    </Heading>
                </div>

                {/* Features Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-y-12 mt-8 md:mt-12 relative"
                    style={{ zIndex: 20 }}
                >
                    {features?.map((feature, i) => (
                        <div key={i} className="flex flex-col items-start gap-3 sm:gap-4 p-4 sm:p-0">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={32}
                                height={32}
                                className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10"
                            />
                            <Heading>
                                <AnimatedText
                                    text={feature.title}
                                    loop={false}
                                    className="text-base sm:text-lg font-semibold"
                                />
                            </Heading>
                            <Paragraph className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                {feature.description}
                            </Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;