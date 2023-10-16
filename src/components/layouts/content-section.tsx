import { type ComponentPropsWithRef } from "react";

import { cn } from "@/lib/utils";

type ContentSectionProps = ComponentPropsWithRef<"section"> & {
    sectionTitle?: string;
};

export function ContentSection({
    children,
    className,
    sectionTitle,
    ...props
}: ContentSectionProps) {
    return (
        <section className={cn("flex flex-col gap-6", className)} {...props}>
            {sectionTitle && (
                <div>
                    <h1 className="text-4xl font-bold">{sectionTitle}</h1>
                </div>
            )}
            {children}
        </section>
    );
}
