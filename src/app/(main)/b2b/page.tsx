import B2BBanner from "@/components/b2b/B2BBanner";
import CallToActionComponent from "@/components/b2b/CallToAction";
import TermsAndConditions from "@/components/b2b/TermsAndConditions";
import WhyChooseUs from "@/components/b2b/WhyChooseUs";
import CustomServices from "@/components/home/CustomServices";
import ReviewSection from "@/components/home/ReviewSection";
import Projects from "@/components/projects/Projects";
import WhoWeAre from "@/components/projects/WhoWeAre";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";
import getProjects from "@/utils/helper/projectDataFetching";

export async function generateMetadata() {
    return generateDynamicMetadata({
        title: "Tech Element IT | B2B",
        description: "Your Vision Our Code & Technology. Building Software to Solve, Scale, and Succeed. From sparking ideas to driving growth, we guide you through every step of product development.",
        keywords: ["tech element it", "software development", "custom software",
      "web development", "app development", "product development",
      "software solutions", "digital transformation", "scalable software",
      "tech partners", "MVP development", "SaaS", "full-stack development"],
    });
}

export default async function B2BComponent() {
     const projectsData = await getProjects();
    return (
        <div>
            <B2BBanner></B2BBanner>
            <WhyChooseUs></WhyChooseUs>
            <TermsAndConditions></TermsAndConditions>
            <Projects projectsData={projectsData}></Projects>
            <WhoWeAre></WhoWeAre>
            <CustomServices></CustomServices>
            <div className="lg:mx-4 md:mx-2 mx-1">
                <ReviewSection></ReviewSection>
            </div>
            <CallToActionComponent></CallToActionComponent>
        </div>
    );
}
