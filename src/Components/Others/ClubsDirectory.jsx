// src/Components/Clubs/ClubsDirectory.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    Users,
    Code,
    Trophy,
    HandHeart,
    ExternalLink,
    Mail,
    Link2,
    CalendarDays,
    Tag,
} from "lucide-react";
import Title from "../Shared/Title";

/* ----------------------------- Dummy data ----------------------------- */
const CLUBS = [
    {
        id: "csec",
        name: "CSE Society",
        category: "Tech",
        blurb:
            "Talks, hack nights, and mentorship for all things software and systems.",
        leads: [
            { name: "Tanim Rahman", img: "https://i.pravatar.cc/100?img=12" },
            { name: "Nusrat Jahan", img: "https://i.pravatar.cc/100?img=32" },
        ],
        meet: "Thu 4:00 PM · Room 305",
        links: { website: "#", facebook: "#", email: "csec@bu.ac.bd" },
    },
    {
        id: "ai",
        name: "AI & Robotics Club",
        category: "Tech",
        blurb:
            "Workshops on ML, vision, and robotics; build bots for local challenges.",
        leads: [
            { name: "Arif Mahmud", img: "https://i.pravatar.cc/100?img=49" },
            { name: "Fatima Begum", img: "https://i.pravatar.cc/100?img=47" },
        ],
        meet: "Tue 3:00 PM · Lab-2",
        links: { website: "#", email: "ai-club@bu.ac.bd" },
    },
    {
        id: "cp",
        name: "Competitive Programming",
        category: "Competitive",
        blurb: "Regular contests, ladders, and ICPC training camps.",
        leads: [
            { name: "Rakibul Islam", img: "https://i.pravatar.cc/100?img=5" },
            { name: "Shahriar Kabir", img: "https://i.pravatar.cc/100?img=15" },
        ],
        meet: "Sat 10:00 AM · Lab-1",
        links: { facebook: "#", email: "cp@bu.ac.bd" },
    },
    {
        id: "culture",
        name: "Cultural Club",
        category: "Cultural",
        blurb:
            "Music, drama, and festivals—organize events and showcase your talent.",
        leads: [{ name: "Israt Tamanna", img: "https://i.pravatar.cc/100?img=26" }],
        meet: "Wed 2:30 PM · Auditorium",
        links: { facebook: "#", email: "cultural@bu.ac.bd" },
    },
    {
        id: "community",
        name: "Tech For Good",
        category: "Community",
        blurb: "Volunteering, open data, and civic-tech projects that help the city.",
        leads: [{ name: "Maria Islam", img: "https://i.pravatar.cc/100?img=57" }],
        meet: "Mon 1:30 PM · Seminar Hall",
        links: { website: "#", email: "tfg@bu.ac.bd" },
    },
];

const CATS = {
    All: { label: "All", chip: "bg-slate-100 text-slate-700" },
    Tech: { label: "Tech", chip: "bg-blue-50 text-blue-700" },
    Cultural: { label: "Cultural", chip: "bg-rose-50 text-rose-700" },
    Competitive: { label: "Competitive", chip: "bg-amber-50 text-amber-800" },
    Community: { label: "Community", chip: "bg-emerald-50 text-emerald-700" },
};

/* ===================================================================== */

export default function ClubsDirectory({ items = CLUBS }) {
    const [q, setQ] = React.useState("");
    const [cat, setCat] = React.useState("All");

    const categories = React.useMemo(
        () => ["All", ...Array.from(new Set(items.map((c) => c.category)))],
        [items]
    );

    const filtered = React.useMemo(() => {
        return items
            .filter((c) => (cat === "All" ? true : c.category === cat))
            .filter((c) =>
                q.trim()
                    ? (c.name + " " + c.blurb + " " + (c.meet || ""))
                        .toLowerCase()
                        .includes(q.toLowerCase())
                    : true
            );
    }, [items, cat, q]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title
                title="Clubs & Societies"
                subtitle="Learn, lead, and have fun—join BU CSE’s student communities."
            />

            {/* Filters */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
                {/* Category chips */}
                <div className="flex flex-wrap items-center gap-2">
                    {categories.map((k) => {
                        const active = cat === k;
                        const meta = CATS[k] || CATS.All;
                        return (
                            <button
                                key={k}
                                onClick={() => setCat(k)}
                                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${active
                                        ? "border-[#0046FF] bg-[#F0F4FF] text-[#001BB7]"
                                        : "border-[#E9E9E9] bg-white text-slate-700 hover:bg-[#F8FAFF]"
                                    }`}
                                title={meta.label}
                            >
                                {meta.label}
                            </button>
                        );
                    })}
                </div>

                <div className="grow" />

                {/* Search */}
                <label className="relative w-full sm:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search clubs…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>

                <span className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                    {filtered.length} club{filtered.length !== 1 ? "s" : ""}
                </span>
            </div>

            {/* Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length ? (
                    filtered.map((c, i) => <ClubCard key={c.id} c={c} i={i} />)
                ) : (
                    <div className="sm:col-span-2 lg:col-span-3 rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                        No clubs found.
                    </div>
                )}
            </div>
        </section>
    );
}

/* --------------------------------- Card --------------------------------- */

function ClubCard({ c, i }) {
    const Icon = pickIcon(c.category);

    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white overflow-hidden shadow-sm"
        >
            {/* Cover (icon on soft gradient) */}
            <div className="aspect-[16/9] grid place-items-center bg-gradient-to-br from-[#F0F4FF] to-[#FFF8F3]">
                <Icon className="h-10 w-10 text-[#001BB7]" />
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                        {c.name}
                    </h3>
                    <span
                        className={`inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-medium ${(CATS[c.category]?.chip || CATS.All.chip) + " border-current/20"
                            }`}
                    >
                        <Tag className="h-3.5 w-3.5" />
                        {c.category}
                    </span>
                </div>

                <p className="mt-2 text-sm text-slate-700">{c.blurb}</p>

                {/* Leads */}
                {c.leads?.length ? (
                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {c.leads.slice(0, 3).map((p, idx) => (
                                <img
                                    key={idx}
                                    src={p.img}
                                    alt={p.name}
                                    title={p.name}
                                    className="h-8 w-8 rounded-full ring-2 ring-white"
                                />
                            ))}
                        </div>
                        <span className="text-xs text-slate-600">
                            Lead{c.leads.length > 1 ? "s" : ""}: {c.leads.map((l) => l.name).join(", ")}
                        </span>
                    </div>
                ) : null}

                {/* Meeting info */}
                {c.meet && (
                    <p className="mt-2 inline-flex items-center gap-2 text-xs text-slate-600">
                        <CalendarDays className="h-4 w-4" />
                        {c.meet}
                    </p>
                )}

                {/* Links */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                    {c.links?.website && (
                        <a
                            href={c.links.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                        >
                            <Link2 className="h-4 w-4" />
                            Website
                        </a>
                    )}
                    {c.links?.facebook && (
                        <a
                            href={c.links.facebook}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Facebook
                        </a>
                    )}
                    {c.links?.email && (
                        <a
                            href={`mailto:${c.links.email}`}
                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                        >
                            <Mail className="h-4 w-4" />
                            Email
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

/* ------------------------------ Helpers ------------------------------ */

function pickIcon(category) {
    switch (category) {
        case "Tech":
            return Code;
        case "Competitive":
            return Trophy;
        case "Community":
            return HandHeart;
        case "Cultural":
            return Users;
        default:
            return Users;
    }
}
