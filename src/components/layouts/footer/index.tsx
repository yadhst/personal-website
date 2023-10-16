import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-zinc-100/10 py-4">
            <div className="flex items-center justify-center text-center">
                <p className="flex flex-row gap-1 font-light">
                    Made with <span className="text-red-500">❤️</span> by
                    <Link
                        href="https://github.com/yadh75/personal-website"
                        target="_blank"
                        className="font-bold underline underline-offset-2"
                    >
                        Yadh
                    </Link>
                </p>
            </div>
        </footer>
    );
}
