const nextMdx = require("@next/mdx");

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["ts", "tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    images: {
        domains: ["raw.githubusercontent.com"],
    },
};

const withMDX = nextMdx({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
});

module.exports = withMDX(nextConfig);
