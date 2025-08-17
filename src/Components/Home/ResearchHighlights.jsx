// src/Components/ResearchHighlights.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FlaskConical, ArrowRight, Cpu, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Title from "../Shared/Title";

const HIGHLIGHTS = [
    { title: "Intelligent Systems Lab", tag: "Lab", blurb: "Work on ML, vision, and NLP for real-world impact.", to: "/research/labs" },
    { title: "Smart City Sensing", tag: "Project", blurb: "IoT + data analytics for urban safety and mobility.", to: "/research/projects" },
    { title: "Bangla NLP Corpus", tag: "Publication", blurb: "Open datasets and baselines for Bangla NLP tasks.", to: "/research/publications" },
];

const TAG_STYLE = {
    Lab: "border-[#0046FF]/25 bg-[#F0F4FF] text-[#001BB7]",
    Project: "border-[#FF8040]/30 bg-[#FFF4EC] text-[#8A3D12]",
    Publication: "border-violet-300 bg-violet-50 text-violet-700",
};

const ICON_BY_TAG = {
    Lab: <FlaskConical className="h-4 w-4" />,
    Project: <Cpu className="h-4 w-4" />,
    Publication: <BookOpen className="h-4 w-4" />,
};

export default function ResearchHighlights() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title="Research Highlights" subtitle="Labs, projects, and publications" />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {HIGHLIGHTS.map((h) => (
                    <ResearchCard key={h.title} {...h} />
                ))}
            </div>
        </section>
    );
}

function ResearchCard({ title, tag, blurb, to }) {
    const tagClass = TAG_STYLE[tag] || TAG_STYLE.Lab;
    const icon = ICON_BY_TAG[tag] || ICON_BY_TAG.Lab;

    return (
        <motion.article
            whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.18 }}
            className="group relative overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white p-5"
        >
            {/* top accent strip */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#001BB7] via-[#0046FF] to-[#FF8040]" />
            {/* soft glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#0046FF]/10 blur-2xl" />

            {/* header: icon + tag */}
            <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#E9E9E9] text-[#001BB7]">
                    {icon}
                </span>
                <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${tagClass}`}>
                    {tag}
                </span>
            </div>

            <Link
                to={to}
                className="mt-4 block text-lg font-extrabold tracking-tight text-slate-900 hover:text-[#001BB7]"
                title={title}
            >
                {title}
            </Link>

            <p className="mt-2 text-sm text-slate-700">{blurb}</p>

            <Link
                to={to}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#001BB7] group/btn"
            >
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Link>
        </motion.article>
    );
}
