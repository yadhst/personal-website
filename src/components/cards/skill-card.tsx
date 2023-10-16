import Image from "next/image";

type SkillCardProps = {
    name: string;
    description: string;
    since: string;
};

export function SkillCard({ name, description, since }: SkillCardProps) {
    const brandImageUrl = `https://raw.githubusercontent.com/danielcranney/profileme-dev/a3980c779fb39d1ef4235fa8c3d9447ca6708b0b/public/icons/skills/${name.toLowerCase()}-colored.svg`;

    return (
        <div
            key={name}
            className="glassmorphism-effect flex flex-col gap-2 rounded-sm border border-zinc-100/10 px-6 py-6"
        >
            <div>
                <Image alt="brand" src={brandImageUrl} width={50} height={50} />
                <h1 className="text-lg font-medium">{name}</h1>
            </div>
            <div>
                <p className="text-sm text-zinc-100/80">{description}</p>
            </div>
            <div className="mt-auto">
                <span className="text-xs">Since {since}</span>
            </div>
        </div>
    );
}
