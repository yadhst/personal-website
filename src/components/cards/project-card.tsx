import Link from "next/link";
import Image from "next/image";

type Link = {
    readonly label: string;
    readonly href: string;
};

type ProjectCardProps = {
    name: string;
    description: string;
    cover: string;
    links?: readonly Link[];
};

export function ProjectCard({
    name,
    description,
    cover,
    links,
}: ProjectCardProps) {
    return (
        <div className="glassmorphism-effect rounded-md border border-zinc-100/10">
            <div className="pointer-events-none select-none">
                <Image
                    alt="cover"
                    width={1200}
                    height={630}
                    src={cover}
                    className="aspect-auto h-full max-h-36 w-full rounded-t-md object-cover"
                />
            </div>
            <div className="my-3 flex flex-col gap-3 px-4">
                <div>
                    <h1 className="text-lg font-bold">{name}</h1>
                    <p className="text-sm text-zinc-100/80">{description}</p>
                </div>
                {!!links?.length && (
                    <div className="flex flex-wrap items-center gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                            >
                                <span className="font-semibold underline underline-offset-4">
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
