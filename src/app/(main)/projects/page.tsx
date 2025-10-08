import ProjectBanner from "@/components/projects/ProjectBanner";
import Projects from "@/components/projects/Projects";
import RecentWork from "@/components/projects/RecentWork";
import SignupSection from "@/components/projects/SignupSection";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";

export async function generateMetadata() {
    return generateDynamicMetadata({
        title: "Tech Element IT | Project",
        description: "Your Vision Our Code & Technology. Building Software to Solve, Scale, and Succeed. From sparking ideas to driving growth, we guide you through every step of product development.",
        keywords: ["tech element it", "software development", "custom software",
      "web development", "app development", "product development",
      "software solutions", "digital transformation", "scalable software",
      "tech partners", "MVP development", "SaaS", "full-stack development"],
    });
}

const ProjectsPage = () => {
  return (
    <div className="">
      <ProjectBanner></ProjectBanner>
      <RecentWork></RecentWork>
      <Projects></Projects>
      <SignupSection></SignupSection>
    </div>
  )
}

export default ProjectsPage;
