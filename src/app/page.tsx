import { type Metadata } from "next";
import Link from "next/link";
import { BsGithub, BsDiscord, BsInstagram, BsFacebook } from "react-icons/bs";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";

type SocialIconKeys = keyof typeof siteConfig.author.links;
const socialIcons: Record<SocialIconKeys, JSX.Element> = {
    github: <BsGithub className="h-8 w-8" />,
    discord: <BsDiscord className="h-8 w-8" />,
    instagram: <BsInstagram className="h-8 w-8" />,
    facebook: <BsFacebook className="h-8 w-8" />,
};

export const metadata: Metadata = {
    title: `Home - ${siteConfig.title}`,
};

export default function HomePage() {
    return (
        <div className="flex flex-col gap-8">
            <section className="mt-24 flex justify-between gap-4">
                <div className="flex flex-col gap-4">
                    <div>
                        <h1 className="text-3xl font-semibold before:content-['👋_']">
                            Hi, I&apos;m {siteConfig.author.fullName}
                        </h1>
                        <p className="text-lg text-zinc-100/80">
                            I&apos;m a{" "}
                            <span className="cursor-pointer font-bold text-indigo-500">
                                {siteConfig.author.roles[0]}
                            </span>{" "}
                            developer based in Indonesia.
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap gap-4">
                        {Object.entries(siteConfig.author.links).map(
                            ([name, link]) => {
                                const icon =
                                    socialIcons[name as SocialIconKeys];

                                return (
                                    <Link
                                        key={name}
                                        target="_blank"
                                        href={link}
                                        title={name}
                                    >
                                        <span
                                            className={cn("sosmed_icon", name)}
                                        >
                                            {icon}
                                        </span>
                                    </Link>
                                );
                            }
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
