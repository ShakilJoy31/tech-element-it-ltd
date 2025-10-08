import SignupSection from "@/components/projects/SignupSection";
import TemplateFeatures from "@/components/theme/TemplateFeatures";
import TemplateShowcase from "@/components/theme/TemplateShowcase";
import TemplateStats from "@/components/theme/TemplateStats";
import ThemeBanner from "@/components/theme/ThemeBanner";
import { generateDynamicMetadata } from "@/metadata/generateMetadata";

export async function generateMetadata() {
    return generateDynamicMetadata({
        title: "Tech Element IT | Theme",
        description: "Discover stunning, responsive e-commerce templates built with modern technology. Ready-to-use themes for online stores, organic food markets, and more.",
        keywords: ["e-commerce templates", "website themes", "online store templates", "responsive design", "premium templates", "organic food website", "modern e-commerce"],
    });
}

const ThemesPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ThemeBanner />
      <TemplateShowcase />
      <TemplateFeatures />
      <TemplateStats />
      <SignupSection />
    </div>
  )
}

export default ThemesPage;