import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: {
        absolute: "404: Page Not Found",
    },
    description:
        "The page you are looking for might have been removed or is temporally unavailable",
};

export default function NotFoundPage() {
    return (
        <section className="mx-auto mt-24 flex max-w-lg flex-col items-center gap-6 text-center">
            <div>
                <h1 className="text-7xl font-bold text-red-500">404</h1>
                <h3 className="text-lg text-zinc-100/80">Are you lost?</h3>
            </div>
            <div>
                <p>{metadata.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <Link
                    href="/"
                    className="rounded-sm border border-zinc-100/0 bg-zinc-100/10 px-4 py-2 transition-colors duration-150 hover:border-zinc-100/10 hover:bg-zinc-100/0"
                >
                    <span>/home</span>
                </Link>
            </div>
        </section>
    );
}
