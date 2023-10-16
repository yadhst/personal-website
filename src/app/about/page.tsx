import { type Metadata } from "next";

import { siteConfig } from "@/site.config";

import { AboutMeContent } from "./about-me";
import { ContentSection } from "@/components/layouts/content-section";
import { SkillCard } from "@/components/cards/skill-card";

export const metadata: Metadata = {
    title: "About",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-8">
            <ContentSection sectionTitle="About Me">
                <AboutMeContent />
            </ContentSection>
            <ContentSection
                sectionTitle="Skills / Tools"
                className="border-t border-zinc-100/10 pt-8"
            >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {siteConfig.author.skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </div>
            </ContentSection>
        </div>
    );
}
