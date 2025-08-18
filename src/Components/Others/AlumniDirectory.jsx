// src/Components/Alumni/AlumniDirectory.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    GraduationCap,
    Briefcase,
    MapPin,
    Linkedin,
    Github,
    ExternalLink,
    X,
    Filter,
    Tag,
    CalendarDays,
} from "lucide-react";
import Title from "../Shared/Title";

/* ----------------------------- Sample data ----------------------------- */
/* Replace with real alumni later; avatars are real image URLs from i.pravatar.cc */
const ALUMNI = [
    {
        id: "a1",
        name: "Tanim Rahman",
        gradYear: 2020,
        sector: "Industry",
        role: "Software Engineer",
        company: "TechNova",
        location: "Dhaka, BD",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=12",
        story:
            "At TechNova I work on backend services and platform reliability. BU CSE gave me the fundamentals to grow quickly.",
    },
    {
        id: "a2",
        name: "Nusrat Jahan",
        gradYear: 2021,
        sector: "Research",
        role: "PhD Researcher (AI)",
        company: "AIT Lab",
        location: "Seoul, KR",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=32",
        story:
            "My focus is multimodal learning for low-resource languages. I started with undergrad thesis at the vision lab.",
    },
    {
        id: "a3",
        name: "Arif Mahmud",
        gradYear: 2022,
        sector: "Startup",
        role: "Founder & CTO",
        company: "Startify",
        location: "Dhaka, BD",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=49",
        story:
            "We’re building a lightweight logistics platform for SMEs. The capstone project turned into our MVP.",
    },
    {
        id: "a4",
        name: "Fatima Begum",
        gradYear: 2019,
        sector: "Academia",
        role: "Lecturer",
        company: "City University",
        location: "Chattogram, BD",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=47",
        story:
            "I teach data structures and HCI. I’m passionate about inclusive CS education and community outreach.",
    },
    {
        id: "a5",
        name: "Rakibul Islam",
        gradYear: 2023,
        sector: "Industry",
        role: "SWE (Frontend)",
        company: "PixelForge",
        location: "Remote",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=5",
        story:
            "I design component libraries and performance tooling for large SPAs. The web engineering lab was a game-changer.",
    },
    {
        id: "a6",
        name: "Subrina Jahan",
        gradYear: 2024,
        sector: "Research",
        role: "RA (NLP)",
        company: "Language Tech Group",
        location: "Dhaka, BD",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=68",
        story:
            "Working on BanglaNLP datasets and robust baselines. Love reproducible research and open-source.",
    },
    {
        id: "a7",
        name: "Rezwan Nafi",
        gradYear: 2021,
        sector: "Industry",
        role: "DevOps Engineer",
        company: "Cloudlane",
        location: "Singapore",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=10",
        story:
            "From systems courses to SRE/DevOps—observability and reliability are my home turf.",
    },
    {
        id: "a8",
        name: "Israt Tamanna",
        gradYear: 2020,
        sector: "Startup",
        role: "Product Engineer",
        company: "CareLoop",
        location: "Dhaka, BD",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=20",
        story:
            "I prototype fast with users, then harden features. Studio courses built my product mindset.",
    },
    {
        id: "a9",
        name: "Maria Islam",
        gradYear: 2019,
        sector: "Academia",
        role: "Research Associate",
        company: "CivicTech Lab",
        location: "Barishal, BD",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=57",
        story:
            "My research explores data for social good—traffic safety and public services.",
    },
    {
        id: "a10",
        name: "Mahimalam Sabir",
        gradYear: 2022,
        sector: "Industry",
        role: "Data Engineer",
        company: "DataWorks",
        location: "Berlin, DE",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=3",
        story:
            "Pipelines, lakehouses, and batch/stream processing. Loved the databases & OS tracks.",
    },
    {
        id: "a11",
        name: "Ritu Akter",
        gradYear: 2023,
        sector: "Research",
        role: "MS Student (CV)",
        company: "VisionX",
        location: "Tokyo, JP",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=26",
        story:
            "Pushing tiny vision models for mobile robotics. The robotics lab fueled this path.",
    },
    {
        id: "a12",
        name: "Shahriar Kabir",
        gradYear: 2024,
        sector: "Startup",
        role: "Full-stack Engineer",
        company: "FinNest",
        location: "Remote",
        linkedin: "#",
        github: "#",
        img: "https://i.pravatar.cc/160?img=15",
        story:
            "Shipping fast with type-safe stacks. Senior project → seed-stage startup.",
    },
];

const SECTORS = ["All", "Industry", "Research", "Startup", "Academia"];

/* ===================================================================== */

export default function AlumniDirectory({ items = ALUMNI }) {
    // derive years
    const years = React.useMemo(
        () => ["All", ...Array.from(new Set(items.map((a) => a.gradYear))).sort((a, b) => b - a)],
        [items]
    );

    const [q, setQ] = React.useState("");
    const [sector, setSector] = React.useState("All");
    const [year, setYear] = React.useState("All");
    const [active, setActive] = React.useState(null);

    const filtered = React.useMemo(() => {
        return items
            .filter((a) => (sector === "All" ? true : a.sector === sector))
            .filter((a) => (year === "All" ? true : a.gradYear === year))
            .filter((a) =>
                q.trim()
                    ? (
                        a.name +
                        " " +
                        a.role +
                        " " +
                        (a.company || "") +
                        " " +
                        (a.location || "")
                    )
                        .toLowerCase()
                        .includes(q.toLowerCase())
                    : true
            )
            .sort((a, b) => (b.gradYear - a.gradYear) || a.name.localeCompare(b.name));
    }, [items, sector, year, q]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Our Graduates" subtitle="Journeys from BU CSE to industry, research, and startups." />

            {/* Controls */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
                <label className="relative mt-6 md:col-span-2">
                    <Search className="absolute left-3 top-5 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search name, company, location…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>
                <Select label="Sector" value={sector} onChange={setSector} options={SECTORS} />
                <Select label="Grad Year" value={year} onChange={setYear} options={years} />
                <div className="flex items-center rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                    <Filter className="h-4 w-4 text-[#001BB7] mr-2" />
                    <span className="font-semibold text-slate-900">{filtered.length}</span>
                    <span className="ml-1 text-slate-700">alumni</span>
                </div>
            </div>

            {/* Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length ? (
                    filtered.map((a, i) => (
                        <AlumniCard key={a.id} a={a} i={i} onOpen={() => setActive(a)} />
                    ))
                ) : (
                    <div className="sm:col-span-2 lg:col-span-3 rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                        No results.
                    </div>
                )}
            </div>

            {/* Modal */}
            <ProfileModal person={active} onClose={() => setActive(null)} />
        </section>
    );
}

/* --------------------------------- Card --------------------------------- */

function AlumniCard({ a, i, onOpen }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-5 shadow-sm"
        >
            <div className="flex items-center gap-4">
                <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    className="h-16 w-16 rounded-xl object-cover ring-1 ring-[#E9E9E9]"
                />
                <div className="min-w-0">
                    <h3 className="truncate text-base font-extrabold tracking-tight text-slate-900">
                        {a.name}
                    </h3>
                    <p className="text-sm text-slate-600">
                        <Briefcase className="inline h-4 w-4 mr-1 align-[-2px]" />
                        {a.role} <span className="text-slate-400">·</span> {a.company}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                        <span className={`inline-flex items-center rounded-md border px-2 py-0.5 ${chipCls(a.sector)}`}>
                            <Tag className="h-3.5 w-3.5 mr-1" />
                            {a.sector}
                        </span>
                        <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
                            <GraduationCap className="h-3.5 w-3.5 mr-1" />
                            {a.gradYear}
                        </span>
                        {a.location && (
                            <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
                                <MapPin className="h-3.5 w-3.5 mr-1" />
                                {a.location}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                    {a.linkedin && (
                        <a
                            href={a.linkedin}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                        >
                            <Linkedin className="h-4 w-4" /> LinkedIn
                        </a>
                    )}
                    {a.github && (
                        <a
                            href={a.github}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                        >
                            <Github className="h-4 w-4" /> GitHub
                        </a>
                    )}
                </div>

                <button
                    onClick={onOpen}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#0046FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#001BB7]"
                >
                    Story <ExternalLink className="h-4 w-4" />
                </button>
            </div>
        </motion.article>
    );
}

/* -------------------------------- Modal -------------------------------- */

function ProfileModal({ person, onClose }) {
    if (!person) return null;
    return (
        <AnimatePresence>
            {person && (
                <motion.div
                    className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <div
                        className="absolute inset-0 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.18 }}
                            className="w-full max-w-2xl overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white shadow-2xl"
                        >
                            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-[#E9E9E9]">
                                <div className="flex items-center gap-3 min-w-0">
                                    <img
                                        src={person.img}
                                        alt={person.name}
                                        className="h-12 w-12 rounded-xl object-cover ring-1 ring-[#E9E9E9]"
                                    />
                                    <div className="min-w-0">
                                        <h3 className="truncate text-lg font-extrabold tracking-tight text-slate-900">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm text-slate-700">
                                            {person.role} · {person.company}
                                        </p>
                                        <p className="text-xs text-slate-600 flex items-center gap-2">
                                            <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px]">
                                                <GraduationCap className="h-3.5 w-3.5 mr-1" />
                                                {person.gradYear}
                                            </span>
                                            {person.location && (
                                                <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px]">
                                                    <MapPin className="h-3.5 w-3.5 mr-1" />
                                                    {person.location}
                                                </span>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={onClose}
                                    className="rounded-lg bg-white p-2 text-slate-700 hover:bg-slate-50 border border-[#E9E9E9]"
                                    title="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="px-5 py-4">
                                {person.story && (
                                    <>
                                        <h4 className="text-sm font-semibold text-slate-900">Alumni Story</h4>
                                        <p className="mt-2 text-sm text-slate-700">{person.story}</p>
                                    </>
                                )}

                                {/* Meta row */}
                                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                                    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 ${chipCls(person.sector)}`}>
                                        <Tag className="h-3.5 w-3.5 mr-1" />
                                        {person.sector}
                                    </span>
                                    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-slate-700">
                                        <CalendarDays className="h-3.5 w-3.5 mr-1" />
                                        Graduated {person.gradYear}
                                    </span>
                                </div>

                                {/* Links */}
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {person.linkedin && (
                                        <a
                                            href={person.linkedin}
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <Linkedin className="h-4 w-4" />
                                            LinkedIn
                                        </a>
                                    )}
                                    {person.github && (
                                        <a
                                            href={person.github}
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <Github className="h-4 w-4" />
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* -------------------------------- UI bits -------------------------------- */

function Select({ label, value, onChange, options }) {
    return (
        <label className="text-sm">
            <span className="mb-1 block text-slate-700">{label}</span>
            <select
                value={value}
                onChange={(e) =>
                    onChange(isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value))
                }
                className="w-full rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
            >
                {options.map((o) => (
                    <option key={o} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </label>
    );
}

function chipCls(sector) {
    const map = {
        Industry: "border-blue-200 bg-blue-50 text-blue-700",
        Research: "border-emerald-200 bg-emerald-50 text-emerald-700",
        Startup: "border-amber-200 bg-amber-50 text-amber-800",
        Academia: "border-violet-200 bg-violet-50 text-violet-700",
    };
    return map[sector] || "border-slate-200 bg-slate-50 text-slate-700";
}
