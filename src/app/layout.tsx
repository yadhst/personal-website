import "./globals.css";

import { type Metadata } from "next";
import { Poppins } from "next/font/google";

import { siteConfig } from "@/site.config";

import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s - ${siteConfig.title}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(process.env.SITE_URL as string),
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <div className="relative min-h-screen w-full">
                    <div className="absolute inset-0">
                        <div className="blobs"></div>
                    </div>
                    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-between gap-6 px-4 sm:px-8">
                        <div className="relative">
                            <Navbar />
                            <main className="mt-10">{children}</main>
                        </div>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
