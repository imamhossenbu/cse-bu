// src/Components/Research/ResearchOverview.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Title from "../Shared/Title";
import {
    Atom,
    Brain,
    Shield,
    Database,
    Code2,
    Beaker,
    FileText,
    FlaskConical,
    ArrowRight,
} from "lucide-react";

/* ---------------------- Areas / filters ---------------------- */
const AREAS = [
    { id: "All", label: "All Areas", icon: Atom },
    { id: "AI/ML", label: "AI/ML", icon: Brain },
    { id: "Systems", label: "Systems", icon: Code2 },
    { id: "Security", label: "Security", icon: Shield },
    { id: "Data", label: "Data", icon: Database },
    { id: "HCI", label: "HCI", icon: FlaskConical },
];

/* ---------------------- Demo data (edit freely) ---------------------- */
const LABS = [
    { id: 1, name: "Intelligent Systems Lab", area: "AI/ML", blurb: "Learning, vision, and language models.", to: "/research/labs#isl" },
    { id: 2, name: "Systems & Cloud Lab", area: "Systems", blurb: "OS, virtualization, and cloud runtime.", to: "/research/labs#scl" },
    { id: 3, name: "Security & Privacy Group", area: "Security", blurb: "Network, software, and usable security.", to: "/research/labs#spg" },
    { id: 4, name: "Data & Visualization Lab", area: "Data", blurb: "Large-scale analytics and viz.", to: "/research/labs#dvl" },
    { id: 5, name: "Human–Computer Interaction Lab", area: "HCI", blurb: "UX, accessibility, and design tools.", to: "/research/labs#hci" },
];

const PROJECTS = [
    { id: 11, title: "Bangla LLM for Education", area: "AI/ML", status: "Active", to: "/research/projects/bangla-llm" },
    { id: 12, title: "Green Cloud Scheduler", area: "Systems", status: "Active", to: "/research/projects/green-scheduler" },
    { id: 13, title: "Securing Mobile Payments", area: "Security", status: "Completed", to: "/research/projects/mobile-paysec" },
    { id: 14, title: "DeltaRiver Flood Data Hub", area: "Data", status: "Active", to: "/research/projects/deltariver" },
    { id: 15, title: "Accessible Campus App", area: "HCI", status: "Prototype", to: "/research/projects/campus-access" },
];

const PUBS = [
    { id: 21, title: "Low-Resource ASR with Teacher-Free Distillation", authors: "Karim et al.", venue: "ACL 2024", year: 2024, area: "AI/ML", to: "/research/publications#p-21" },
    { id: 22, title: "Energy-Aware Container Placement in Edge Clouds", authors: "Hasan et al.", venue: "Middleware 2023", year: 2023, area: "Systems", to: "/research/publications#p-22" },
    { id: 23, title: "PINsafe: Shoulder-Surfing Resistant Auth", authors: "Jahan et al.", venue: "NDSS 2025 (poster)", year: 2025, area: "Security", to: "/research/publications#p-23" },
    { id: 24, title: "Streaming Joins for River Sensors", authors: "Ali et al.", venue: "VLDB 2024 (demo)", year: 2024, area: "Data", to: "/research/publications#p-24" },
];

/* ---------------------- Overview Component ---------------------- */
export default function ResearchOverview() {
    const [area, setArea] = React.useState("All");

    const labs = React.useMemo(
        () => (area === "All" ? LABS : LABS.filter(l => l.area === area)).slice(0, 3),
        [area]
    );
    const projects = React.useMemo(
        () => (area === "All" ? PROJECTS : PROJECTS.filter(p => p.area === area)).slice(0, 3),
        [area]
    );
    const pubs = React.useMemo(
        () => (area === "All" ? PUBS : PUBS.filter(p => p.area === area)).slice(0, 4),
        [area]
    );

    const totals = React.useMemo(() => ({
        labs: area === "All" ? LABS.length : LABS.filter(l => l.area === area).length,
        projects: area === "All" ? PROJECTS.length : PROJECTS.filter(p => p.area === area).length,
        pubs: area === "All" ? PUBS.length : PUBS.filter(p => p.area === area).length,
    }), [area]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Research Overview" subtitle="Explore labs, active projects, and recent publications" />

            {/* Filters */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                {AREAS.map(a => {
                    const active = a.id === area;
                    const Icon = a.icon;
                    return (
                        <button
                            key={a.id}
                            onClick={() => setArea(a.id)}
                            className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition
                ${active ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"}`}
                        >
                            {active && (
                                <motion.span
                                    layoutId="research-pill"
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#001BB7] to-[#0046FF]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 inline-flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                {a.label}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Stats */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <StatCard label="Labs" value={totals.labs} icon={<Beaker className="h-5 w-5" />} />
                <StatCard label="Projects" value={totals.projects} icon={<Code2 className="h-5 w-5" />} />
                <StatCard label="Publications" value={`${totals.pubs}+`} icon={<FileText className="h-5 w-5" />} />
            </div>

            {/* Labs teaser */}
            <SectionHeader title="Labs" to="/research/labs" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence initial={false} mode="popLayout">
                    {labs.map((l, i) => (
                        <motion.article
                            key={l.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, delay: i * 0.03 }}
                            className="rounded-2xl border border-[#E9E9E9] bg-white p-5 shadow-sm hover:shadow-md"
                        >
                            <div className="inline-flex items-center gap-2">
                                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7]">
                                    <Beaker className="h-5 w-5" />
                                </span>
                                <h3 className="text-base font-extrabold tracking-tight text-slate-900">{l.name}</h3>
                            </div>
                            <p className="mt-2 text-sm text-slate-700">{l.blurb}</p>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="rounded-md border border-[#0046FF]/25 bg-[#F0F4FF] px-2 py-0.5 text-[11px] font-medium text-[#001BB7]">
                                    {l.area}
                                </span>
                                <Link to={l.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0046FF] hover:text-[#001BB7]">
                                    Explore <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>

            {/* Projects teaser */}
            <SectionHeader className="mt-10" title="Featured Projects" to="/research/projects" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence initial={false} mode="popLayout">
                    {projects.map((p, i) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18, delay: i * 0.03 }}
                            className="rounded-2xl border border-[#E9E9E9] bg-white p-5 shadow-sm hover:shadow-md"
                        >
                            <div className="inline-flex items-center gap-2">
                                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7]">
                                    <Code2 className="h-5 w-5" />
                                </span>
                                <h3 className="text-base font-extrabold tracking-tight text-slate-900 line-clamp-1">
                                    {p.title}
                                </h3>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <Badge tone="blue">{p.area}</Badge>
                                <Badge tone={p.status === "Active" ? "emerald" : p.status === "Completed" ? "slate" : "amber"}>
                                    {p.status}
                                </Badge>
                            </div>
                            <div className="mt-3">
                                <Link to={p.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0046FF] hover:text-[#001BB7]">
                                    View project <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>

            {/* Publications teaser */}
            <SectionHeader className="mt-10" title="Recent Publications" to="/research/publications" />
            <div className="overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white">
                <ul className="divide-y divide-[#E9E9E9]">
                    {pubs.map((p, i) => (
                        <motion.li
                            key={p.id}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.18, delay: i * 0.03 }}
                            className="p-4"
                        >
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-slate-900 line-clamp-1">{p.title}</p>
                                    <p className="mt-1 text-xs text-slate-600">
                                        {p.authors} · {p.venue} · {p.year}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge tone="blue">{p.area}</Badge>
                                    <Link to={p.to} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0046FF] hover:text-[#001BB7]">
                                        Details <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* CTA row */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                <CTA
                    icon={<Beaker className="h-5 w-5" />}
                    title="All Labs"
                    to="/research/labs"
                    blurb="Meet the groups driving our research agenda."
                />
                <CTA
                    icon={<Code2 className="h-5 w-5" />}
                    title="All Projects"
                    to="/research/projects"
                    blurb="Student and faculty projects with real impact."
                />
                <CTA
                    icon={<FileText className="h-5 w-5" />}
                    title="All Publications"
                    to="/research/publications"
                    blurb="Browse papers by year, venue, and author."
                />
            </div>
        </section>
    );
}

/* ---------------------- Small building blocks ---------------------- */

function StatCard({ label, value, icon }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-4"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xs text-slate-600">{label}</p>
                    <p className="text-2xl font-extrabold tracking-tight text-slate-900">{value}</p>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7]">
                    {icon}
                </span>
            </div>
        </motion.div>
    );
}

function SectionHeader({ title, to, className = "" }) {
    return (
        <div className={`mt-8 mb-3 flex items-center justify-between ${className}`}>
            <h2 className="text-lg font-extrabold tracking-tight text-slate-900">{title}</h2>
            <Link
                to={to}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-3 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
            >
                View all <ArrowRight className="h-4 w-4" />
            </Link>
        </div>
    );
}

function Badge({ children, tone = "slate" }) {
    const map = {
        blue: "bg-[#F0F4FF] text-[#001BB7] border-[#0046FF]/20",
        emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
        amber: "bg-amber-50 text-amber-800 border-amber-200",
        slate: "bg-slate-50 text-slate-700 border-slate-200",
    };
    return (
        <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${map[tone] || map.slate}`}>
            {children}
        </span>
    );
}

function CTA({ icon, title, blurb, to }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-5"
        >
            <div className="inline-flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7]">
                    {icon}
                </span>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-slate-700">{blurb}</p>
            <div className="mt-3">
                <Link
                    to={to}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0046FF] hover:text-[#001BB7]"
                >
                    Go to page <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </motion.div>
    );
}
