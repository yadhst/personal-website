"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { MenuIcon } from "lucide-react";

import { NavigationLink } from "./navigation-link";

const navigations = [
    {
        href: "/",
        label: "Home",
    },
    {
        href: "/about",
        label: "About",
    },
    {
        href: "/projects",
        label: "Projects",
    },
];

export function Navbar() {
    const [opened, setOpened] = useState(false);

    return (
        <header className="glassmorphism-effect sticky left-0 right-0 top-4 z-50 rounded-md shadow shadow-zinc-950/20">
            <div className="flex items-center justify-between gap-4 px-6 py-4">
                <div className="pointer-events-none select-none">
                    <span className="text-2xl font-bold">Yadh</span>
                </div>
                <div className="flex items-center">
                    <ul className="hidden items-center gap-8 sm:!flex">
                        {navigations.map((link) => (
                            <li key={link.href}>
                                <NavigationLink
                                    href={link.href}
                                    label={link.label}
                                />
                            </li>
                        ))}
                    </ul>
                    <button
                        className="sm:hidden"
                        onClick={() => setOpened((o) => !o)}
                    >
                        <span>
                            <MenuIcon className="h-5 w-5" />
                        </span>
                    </button>
                </div>
            </div>
            <Transition as={Fragment} show={opened}>
                <div className="border-t border-zinc-100/10 p-6 sm:!hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="duration-75 transition ease-linear"
                        enterFrom="opacity-0 -translate-y-6"
                        enterTo="opacity-100 translate-y-0"
                        leave="duration-75 transition ease-linear"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-6"
                    >
                        <ul className="flex flex-col items-start gap-6">
                            {navigations.map((link) => (
                                <li key={link.href}>
                                    <NavigationLink
                                        href={link.href}
                                        label={link.label}
                                    />
                                </li>
                            ))}
                        </ul>
                    </Transition.Child>
                </div>
            </Transition>
        </header>
    );
}
