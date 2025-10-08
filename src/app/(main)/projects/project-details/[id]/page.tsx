import ImageCollage from "@/components/projects/ImageCollage";
import ProjectDescription from "@/components/projects/ProjectDescription";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import projectScreenshot from '@/assets/Projects/project (4).jpg'
import projectScreenshot2 from '@/assets/Projects/project (1).jpg'
import projectScreenshot3 from '@/assets/Projects/project (2).jpg'
import projectScreenshot4 from '@/assets/Projects/project (3).jpg'
import FeaturesSection from "@/components/projects/FeaturesSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";
import BackButton from "@/components/reusable-components/BackButton";

export async function generateMetadata() {
    return generateDynamicMetadata({
        title: "Tech Element IT | Project Details",
        description: "Your Vision Our Code & Technology. Building Software to Solve, Scale, and Succeed. From sparking ideas to driving growth, we guide you through every step of product development.",
        keywords: ["tech element it", "software development", "custom software",
      "web development", "app development", "product development",
      "software solutions", "digital transformation", "scalable software",
      "tech partners", "MVP development", "SaaS", "full-stack development"],
    });
}

const ProjectsPage = () => {

    return (
        <div className="mt-16">
            <BackButton></BackButton>
            <ProjectShowcase></ProjectShowcase>
            <ProjectDescription></ProjectDescription>
            <ImageCollage
                images={[
                    projectScreenshot.src,
                    projectScreenshot2.src,
                    projectScreenshot3.src,
                    projectScreenshot4.src,
                    
                ]}
            />
            <FeaturesSection></FeaturesSection>
        </div>
    )
}

export default ProjectsPage;
