// src/Components/Sitemap/SitemapTree.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Home,
    GraduationCap,
    School,
    BookOpen,
    CalendarDays,
    ClipboardList,
    Microscope,
    FlaskConical,
    FolderGit2,
    FileText,
    Users2,
    UserRound,
    Sparkles,
    Image as ImageIcon,
    Megaphone,
    Mail,
    Info,
    Shield,
    FileSignature,
    ChevronDown,
    ArrowRight,
} from "lucide-react";
import Title from "../Shared/Title";

/** ----------------------- Data (edit freely) ----------------------- */
const MAP = [
    {
        id: "home",
        title: "Home",
        icon: Home,
        links: [{ label: "Homepage", to: "/" }],
    },
    {
        id: "admissions",
        title: "Admissions",
        icon: GraduationCap,
        links: [
            { label: "Admission Page", to: "/admission" },
        ],
    },
    {
        id: "academics",
        title: "Academics",
        icon: School,
        links: [
            { label: "Course Catalog", to: "/academics/courses" },
            { label: "Academic Calendar", to: "/academics/calendar" },
            { label: "Class Routine", to: "/academics/routine" },
        ],
    },
    {
        id: "research",
        title: "Research",
        icon: Microscope,
        links: [
            { label: "Research Overview", to: "/research" },
            { label: "Labs Directory", to: "/research/labs" },
            { label: "Research Projects", to: "/research/projects" },
            { label: "Publications", to: "/research/publications" },
        ],
    },
    {
        id: "people",
        title: "People",
        icon: Users2,
        links: [
            { label: "Faculty & Staff", to: "/faculty" },
            { label: "Alumni", to: "/alumni" },
        ],
    },
    {
        id: "student-life",
        title: "Student Life",
        icon: Sparkles,
        links: [
            { label: "Clubs & Societies", to: "/clubs" },
            { label: "Resources", to: "/resources" },
            { label: "Gallery", to: "/gallery" },
        ],
    },
    {
        id: "updates",
        title: "Updates",
        icon: Megaphone,
        links: [{ label: "Notices & Events", to: "/notices" }],
    },
    {
        id: "about",
        title: "About & Contact",
        icon: Info,
        links: [
            { label: "About the Department", to: "/about" },
            { label: "Contact", to: "/contact" },
            { label: "Map / Location", to: "/contact#map" },
        ],
    },
    {
        id: "policies",
        title: "Policies",
        icon: Shield,
        links: [
            { label: "Privacy Policy", to: "/privacy" },
            { label: "Terms & Conditions", to: "/terms" },
            { label: "Sitemap", to: "/sitemap" },
        ],
    },
];

/** ----------------------- Component ----------------------- */
export default function SitemapTree({ groups = MAP }) {
    const [query, setQuery] = React.useState("");
    const [open, setOpen] = React.useState(() => new Set(groups.map((g) => g.id))); // all open

    const quick = React.useMemo(
        () => groups.map((g) => ({ id: g.id, title: g.title })),
        [groups]
    );

    const filtered = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return groups;
        return groups
            .map((g) => ({
                ...g,
                links: g.links.filter(
                    (l) =>
                        l.label.toLowerCase().includes(q) ||
                        (l.to || "").toLowerCase().includes(q)
                ),
            }))
            .filter((g) => g.links.length > 0);
    }, [groups, query]);

    const expandAll = () => setOpen(new Set(groups.map((g) => g.id)));
    const collapseAll = () => setOpen(new Set());

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Sitemap" subtitle="Browse all sections—academics, research, people, and more." />

            {/* Tools */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
                {/* Quick jump chips */}
                <div className="flex flex-wrap items-center gap-2">
                    {quick.map((q) => (
                        <a
                            key={q.id}
                            href={`#${q.id}`}
                            className="inline-flex items-center gap-2 rounded-full border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-[#F8FAFF]"
                        >
                            {q.title}
                        </a>
                    ))}
                </div>

                <div className="grow" />

                {/* Search */}
                <label className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search pages…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>

                {/* Expand/Collapse */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={expandAll}
                        className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                    >
                        Expand all
                    </button>
                    <button
                        onClick={collapseAll}
                        className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                    >
                        Collapse all
                    </button>
                </div>
            </div>

            {/* Groups */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                <AnimatePresence>
                    {filtered.map((g, gi) => {
                        const isOpen = open.has(g.id);
                        const count = g.links.length;
                        const Icon = g.icon || FolderGit2;
                        return (
                            <motion.section
                                key={g.id}
                                id={g.id}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.18, delay: gi * 0.03 }}
                                className="overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white"
                            >
                                {/* Header */}
                                <button
                                    type="button"
                                    onClick={() => {
                                        const next = new Set(open);
                                        isOpen ? next.delete(g.id) : next.add(g.id);
                                        setOpen(next);
                                    }}
                                    className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
                                >
                                    <div className="inline-flex items-center gap-3">
                                        <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#F0F4FF] text-[#001BB7]">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <div>
                                            <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                                                {g.title}
                                            </h3>
                                            <p className="text-xs text-slate-600">{count} link{count !== 1 ? "s" : ""}</p>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`h-5 w-5 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* Links */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <ul className="grid grid-cols-1 gap-2 p-4 pt-0">
                                                {g.links.map((l) => (
                                                    <li key={`${g.id}-${l.label}`}>
                                                        {String(l.to || "").startsWith("/") ? (
                                                            <LinkTile to={l.to} label={l.label} />
                                                        ) : (
                                                            <a
                                                                href={l.to}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="group flex items-center justify-between gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm hover:bg-[#F8FAFF]"
                                                            >
                                                                <span className="truncate text-slate-800 group-hover:text-[#001BB7]">
                                                                    {l.label}
                                                                </span>
                                                                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#001BB7]" />
                                                            </a>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.section>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Empty state */}
            {!filtered.length && (
                <div className="mt-6 rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                    No pages match your search.
                </div>
            )}
        </section>
    );
}

/* ----------------------- Small pieces ----------------------- */

function LinkTile({ to, label }) {
    return (
        <Link
            to={to}
            className="group flex items-center justify-between gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm hover:bg-[#F8FAFF]"
        >
            <span className="truncate text-slate-800 group-hover:text-[#001BB7]">{label}</span>
            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#001BB7]" />
        </Link>
    );
}
