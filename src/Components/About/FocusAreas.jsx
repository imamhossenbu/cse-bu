// src/Components/About/FocusAreas.jsx
import React from "react";
import { GraduationCap, Atom, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Title from "../Shared/Title";

const DEFAULT = [
    {
        title: "Education",
        blurb:
            "A balanced curriculum across theory and practice with strong fundamentals and modern electives.",
        icon: GraduationCap,
        to: "/academics/courses",
    },
    {
        title: "Research",
        blurb:
            "Faculty-led groups in AI/ML, systems, data, HCI, and more—publishing and building open resources.",
        icon: Atom,
        to: "/research",
    },
    {
        title: "Community",
        blurb:
            "Clubs, events, and peer learning that encourage curiosity, leadership, and teamwork.",
        icon: Users,
        to: "/clubs",
    },
];

export default function FocusAreas({ items = DEFAULT }) {
    return (
        <section className="bg-[#F8FAFF]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <Title title="What We Focus On" subtitle="Education, research, and community" />
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((f, i) => (
                        <FocusCard key={f.title} index={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- card ---------------- */

function FocusCard({ title, blurb, icon: Icon, to, index }) {
    const fromLeft = index % 2 === 0;
    const xStart = fromLeft ? -48 : 48;

    return (
        <motion.article
            initial={{ opacity: 0, x: xStart }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, mass: 0.6 }}
            whileHover={{ y: -6 }}
            className="rounded-2xl bg-white p-6 border border-[#E9E9E9] shadow-sm transition-shadow hover:shadow-lg"
        >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F8FAFF] text-[#001BB7] ring-1 ring-[#E9E9E9]">
                <Icon className="h-5 w-5" />
            </span>

            <h4 className="mt-3 text-lg font-extrabold tracking-tight text-slate-900">{title}</h4>
            <p className="mt-2 text-sm text-slate-700">{blurb}</p>

            <Link
                to={to}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0046FF] hover:text-[#001BB7]"
            >
                Learn more <ChevronRight className="h-4 w-4" />
            </Link>
        </motion.article>
    );
}
