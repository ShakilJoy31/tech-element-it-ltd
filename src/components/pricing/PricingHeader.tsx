import AnimatedText from "../reusable-components/AnimatedText";
import Heading from "../reusable-components/Heading";
import Paragraph from "../reusable-components/Paragraph";
import PricingCard from "./PricingCard";

export default function PricingHeader() {
    const pricingPlans = [
        {
            discountLabel: "50% Off",
            title: "Basic Plan",
            price: "$9.99",
            period: "month",
            features: [
                "10 projects",
                "5 team members",
                "Basic analytics",
                "Email support",
                "Email support",
                "Email support",
                "Email support",
                "Email support"
            ],
            extraLinks: [
                { label: "Sher Hosting - 1000" },
                { label: "VPS Hosting - 2500" },
                { label: "AWS Hosting - 3500" },
            ]
        },
        {
            discountLabel: "50% Off",
            title: "Pro Plan",
            price: "$19.99",
            period: "month",
            features: [
                "Unlimited projects",
                "10 team members",
                "Advanced analytics",
                "Priority support",
                "API access"
            ],
            extraLinks: [
                { label: "Sher Hosting - 1000" },
                { label: "VPS Hosting - 2500" },
                { label: "AWS Hosting - 3500" },
            ]
        },
        {
            discountLabel: "50% Off",
            title: "Enterprise",
            price: "$49.99",
            period: "month",
            features: [
                "Unlimited projects",
                "Unlimited members",
                "Advanced analytics",
                "24/7 support",
                "API access",
                "Custom integrations"
            ],
            extraLinks: [
                { label: "Sher Hosting - 1000" },
                { label: "VPS Hosting - 2500" },
                { label: "AWS Hosting - 3500" },
            ]
        },
        {
            discountLabel: "50% Off",
            title: "Starter",
            price: "$4.99",
            period: "month",
            features: [
                "3 projects",
                "2 team members",
                "Basic analytics",
                "Community support"
            ],
            extraLinks: [
                { label: "Sher Hosting - 1000" },
                { label: "VPS Hosting - 2500" },
                { label: "AWS Hosting - 3500" },
            ]
        },
        {
            discountLabel: "50% Off",
            title: "Business",
            price: "$29.99",
            period: "month",
            features: [
                "Unlimited projects",
                "20 team members",
                "Advanced analytics",
                "Priority support",
                "API access",
                "Custom reports"
            ],
            extraLinks: [
                { label: "Sher Hosting - 1000" },
                { label: "VPS Hosting - 2500" },
                { label: "AWS Hosting - 3500" },
            ]
        }
    ];


    return (
        <section className="text-center py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            {/* Small pill text */}
            <div className="inline-block mb-3 sm:mb-4">
                <span className="text-xs sm:text-sm font-medium px-3 py-1 sm:px-4 sm:py-1 border border-gray-300 rounded-full">
                    Boost your productivity
                </span>
            </div>

            {/* Main heading */}
            <Heading>
                <AnimatedText
                    text="Our Pricing Plans"
                    loop={true}
                    loopDelay={5}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0A0A33] dark:text-white mb-3 sm:mb-4"
                />
            </Heading>

            {/* Subtitle */}
            <Paragraph className="text-gray-700 dark:text-gray-300 max-w-md sm:max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                <AnimatedText
                text='Effortlessly turn your ideas into a fully functional, responsive,
                no-code SaaS website in just minutes with the set of free components for
                Framer.'
                loop={false}
                speed={0.005}
              />
            </Paragraph>

            {/* Cards container - single centered column on mobile */}
            <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-[120px] max-w-[1280px] mx-auto">
                <div className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="w-full max-w-[350px] md:max-w-none">
                            <PricingCard
                                discountLabel={plan.discountLabel}
                                title={plan.title}
                                price={plan.price}
                                period={plan.period}
                                features={plan.features}
                                extraLinks={plan.extraLinks}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
}