"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

type NavigationLinkProps = { href: string; label: string };

export function NavigationLink({ href, label }: NavigationLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href}>
            <span
                className={cn(
                    "font-medium text-zinc-400",
                    isActive
                        ? "text-zinc-100"
                        : "transition-colors duration-150 hover:text-zinc-100"
                )}
            >
                {label}
            </span>
        </Link>
    );
}
