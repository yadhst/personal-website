import { type Metadata } from "next";

import { siteConfig } from "@/site.config";

import { ContentSection } from "@/components/layouts/content-section";
import { ProjectCard } from "@/components/cards/project-card";

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects I've worked on",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-8">
            <ContentSection sectionTitle="Projects">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {siteConfig.author.projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </ContentSection>
        </div>
    );
}
