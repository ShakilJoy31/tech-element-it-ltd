import { FC } from "react";
import Image from "next/image";
import Heading from "../reusable-components/Heading";
import teamMember from '@/assets/About-Us/team-member.png'
import ceo from '@/assets/About-Us/ceo.png'
import Paragraph from "../reusable-components/Paragraph";
import AnimatedText from "../reusable-components/AnimatedText";
import teamMember2 from '@/assets/About-Us/hafsa.png'
import teamMember3 from '@/assets/About-Us/team-menberr (2).png'
import teamMember4 from '@/assets/About-Us/team-menberr (3).png'
import teamMember5 from '@/assets/About-Us/team-menberr (4).png'
import teamMember6 from '@/assets/About-Us//team (2).png'
import teamMember7 from '@/assets/About-Us/team (1).png'
import teamMember8 from '@/assets/About-Us/WhatsApp Image 2025-08-23 at 13.07.59_322830a0.jpg'


const teamMembers = [
    {
        name: "Anamul Hassan",
        title: "HR & Full Stack Developer",
        image: teamMember.src
    },
    {
        name: "Ms. Hafsa",
        title: "Managing Director (MD)",
        image: teamMember2.src
    },
    {
        name: "Kamrul Islam",
        title: "UI/UX Designer",
        image: teamMember3.src
    },
    {
        name: "Puja Saha",
        title: "UI/UX Designer",
        image: teamMember4.src
    },
    {
        name: "Imran Hossain",
        title: "Software Engineer",
        image: teamMember5.src
    },
     {
        name: "Imran Hossain",
        title: "Software Engineer",
        image: teamMember6.src
    },
     {
        name: "Rakibul Hasan",
        title: "SEO Specialist",
        image: teamMember7.src
    },
     {
        name: "Yousuf Jobayer",
        title: "Software Engineer",
        image: teamMember8.src
    },
];


const FeaturesSection: FC = () => {
    return (
        <section className="bg-[#111111] text-white pt-8 md:pt-[60px] pb-12 md:pb-[84px] px-4">
            <div className="max-w-[1280px] mx-auto relative">
                {/* Gradient Background */}

                <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[500px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] h-[500px] sm:h-[600px] md:h-[800px] lg:h-[1000px] rounded-full opacity-90"
                    style={{ zIndex: 0, background: "linear-gradient(to bottom, #6366F166 0%, #03001400 70%)" }}
                ></div>

                {/* Title */}
                <div className="relative flex justify-center" style={{ zIndex: 10 }}>
                    <Heading><AnimatedText
                        text='Meet Our Directors'
                        loop={false}
                        className="text-3xl sm:text-4xl md:text-[50px] font-bold text-center mt-8 md:mt-[87px]"
                    /> </Heading>
                </div>
                <Paragraph className="text-center mb-[79px] ">Meet the Minds Behind the Magic</Paragraph>

                {/* Features Grid */}
                <div className="flex justify-center mb-[70px] ">
                    <div
                        className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-6 relative w-[282px] "
                    >
                        <h3 className="text-lg font-semibold">Md Rasel</h3>

                        <p className="text-gray-400 text-sm mb-[22px] ">Founder & CEO</p>

                        <div className="w-full h-[280px] flex items-center justify-center overflow-hidden rounded-xl mb-6 bg-white">
                            <Image
                                src={ceo}
                                alt='CEO'
                                width={300}
                                height={300}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="bg-[#1a1a1a] rounded-2xl shadow-lg overflow-hidden flex flex-col items-center text-center p-6 relative"
                        >
                            <h3 className="text-lg font-semibold">{member.name}</h3>

                            <p className="text-gray-400 text-sm mb-[22px] ">{member.title}</p>

                            <div className="w-full h-[280px] flex items-center justify-center overflow-hidden rounded-xl mb-6 bg-white">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default FeaturesSection;