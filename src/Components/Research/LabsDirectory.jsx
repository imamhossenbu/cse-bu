// src/Components/Research/LabsDirectory.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, Search, Users, Mail, ChevronRight } from "lucide-react";
import Title from "../Shared/Title";

/* ---------- Themed global images (Unsplash Source) ---------- */
const IMG = {
    ai: "https://source.unsplash.com/1600x900/?artificial-intelligence,neural-network,ml",
    systems: "https://source.unsplash.com/1600x900/?cloud,servers,datacenter,linux",
    security: "https://source.unsplash.com/1600x900/?cybersecurity,lock,hacker,shield",
    data: "https://source.unsplash.com/1600x900/?data,analytics,charts,visualization",
    hci: "https://source.unsplash.com/1600x900/?ux,ui,prototype,design,usability",
    robotics: "https://source.unsplash.com/1600x900/?robotics,robot,automation,mechatronics",
    bio: "https://source.unsplash.com/1600x900/?bioinformatics,dna,genome,biology",
    iot: "https://source.unsplash.com/1600x900/?iot,internet-of-things,smart-devices,sensors",
    quantum: "https://source.unsplash.com/1600x900/?quantum,quantum-computing,physics",
    vision: "https://source.unsplash.com/1600x900/?computer-vision,image-processing,camera,vision",
    mobile: "https://source.unsplash.com/1600x900/?mobile-apps,smartphone,android,ios",
    game: "https://source.unsplash.com/1600x900/?game,game-development,virtual-reality,unity",
};


/* ---------- Default Labs (swap text/leads/links as needed) ---------- */
const DEFAULT_LABS = [
    {
        id: "isl",
        name: "Intelligent Systems Lab",
        area: "AI/ML",
        blurb: "Learning, vision, and intelligent decision-making systems.",
        leads: [{ name: "Dr. Rahat Hossain Faisal", email: "rhfaisal@bu.ac.bd" }],
        email: "isl@bu.ac.bd",
        to: "/research/labs#isl",
        img: IMG.ai,
    },
    {
        id: "scl",
        name: "Systems & Cloud Lab",
        area: "Systems",
        blurb: "OS, container runtimes, and cloud infrastructure.",
        leads: [{ name: "Dr. Md Manjur Ahmed", email: "mmahmed@bu.ac.bd" }],
        email: "scl@bu.ac.bd",
        to: "/research/labs#scl",
        img: IMG.systems,
    },
    {
        id: "spg",
        name: "Security & Privacy Group",
        area: "Security",
        blurb: "Network/app security, usable security, and privacy-preserving analytics.",
        leads: [{ name: "Sohely Jahan", email: "sojahan@bu.ac.bd" }],
        email: "sec@bu.ac.bd",
        to: "/research/labs#spg",
        img: IMG.security,
    },
    {
        id: "dvl",
        name: "Data & Visualization Lab",
        area: "Data Science",
        blurb: "Streaming analytics, big data systems, and visual exploration tools.",
        leads: [{ name: "Md Mostafijur Rahman", email: "mostafij.csebu@gmail.com" }],
        email: "dvl@bu.ac.bd",
        to: "/research/labs#dvl",
        img: IMG.data,
    },
    {
        id: "hci",
        name: "Human–Computer Interaction Lab",
        area: "HCI",
        blurb: "Accessibility, design tooling, and human-centered AI.",
        leads: [{ name: "Dr. Tania Islam", email: "tania.bd.09@gmail.com" }],
        email: "hci@bu.ac.bd",
        to: "/research/labs#hci",
        img: IMG.hci,
    },
    {
        id: "robotics",
        name: "Robotics & Automation Lab",
        area: "Robotics",
        blurb: "Autonomous systems, embedded control, and industrial automation.",
        leads: [{ name: "Md Mahbub E Noor", email: "mmenoor@bu.ac.bd" }],
        email: "robotics@bu.ac.bd",
        to: "/research/labs#robotics",
        img: IMG.robotics,
    },
    {
        id: "iot",
        name: "IoT & Smart Systems Lab",
        area: "IoT",
        blurb: "Smart sensors, edge computing, and IoT applications for real-world systems.",
        leads: [{ name: "Md Samsuddoha", email: "msamsuddoha@bu.ac.bd" }],
        email: "iot@bu.ac.bd",
        to: "/research/labs#iot",
        img: IMG.iot,
    },
    {
        id: "vision",
        name: "Computer Vision Lab",
        area: "Computer Vision",
        blurb: "Image processing, video analytics, and multimedia retrieval.",
        leads: [{ name: "Md. Erfan", email: "" }],
        email: "vision@bu.ac.bd",
        to: "/research/labs#vision",
        img: IMG.vision,
    },
    {
        id: "game",
        name: "Game Development & VR Lab",
        area: "Games & VR",
        blurb: "Game design, simulation, and virtual/augmented reality systems.",
        leads: [{ name: "Dr. Tania Islam", email: "tania.bd.09@gmail.com" }],
        email: "game@bu.ac.bd",
        to: "/research/labs#game",
        img: IMG.game,
    },
];



export default function LabsDirectory({ labs = DEFAULT_LABS }) {
    const areas = React.useMemo(
        () => ["All", ...Array.from(new Set(labs.map((l) => l.area)))],
        [labs]
    );
    const leaders = React.useMemo(() => {
        const set = new Set();
        labs.forEach((l) => (l.leads || []).forEach((p) => set.add(p.name)));
        return ["All", ...Array.from(set)];
    }, [labs]);

    const [area, setArea] = React.useState("All");
    const [leader, setLeader] = React.useState("All");
    const [q, setQ] = React.useState("");

    const filtered = React.useMemo(() => {
        return labs
            .filter((l) => (area === "All" ? true : l.area === area))
            .filter((l) =>
                leader === "All"
                    ? true
                    : (l.leads || []).some((p) => p.name === leader)
            )
            .filter((l) =>
                q.trim()
                    ? (l.name + " " + l.blurb + " " + l.area)
                        .toLowerCase()
                        .includes(q.toLowerCase())
                    : true
            );
    }, [labs, area, leader, q]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title
                title="All Labs"
                subtitle="Filter by area, faculty lead, or search by title"
            />

            {/* Filters */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap items-center gap-2">
                    {areas.map((a) => {
                        const active = a === area;
                        return (
                            <button
                                key={a}
                                onClick={() => setArea(a)}
                                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${active
                                    ? "border-[#0046FF] bg-[#F0F4FF] text-[#001BB7]"
                                    : "border-[#E9E9E9] bg-white text-slate-700 hover:bg-[#F8FAFF]"
                                    }`}
                            >
                                {a}
                            </button>
                        );
                    })}
                </div>

                <div className="grow" />

                <select
                    value={leader}
                    onChange={(e) => setLeader(e.target.value)}
                    className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    title="Faculty lead"
                >
                    {leaders.map((n) => (
                        <option key={n} value={n}>
                            {n === "All" ? "All leads" : n}
                        </option>
                    ))}
                </select>

                <label className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search labs…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>
            </div>

            {/* Count */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                <FlaskConical className="h-4 w-4 text-[#001BB7]" />
                <span className="font-semibold text-slate-900">
                    {filtered.length} lab{filtered.length !== 1 ? "s" : ""}
                </span>
            </div>

            {/* Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence initial={false} mode="popLayout">
                    {filtered.length ? (
                        filtered.map((l, i) => <LabCard key={l.id} lab={l} i={i} />)
                    ) : (
                        <div className="md:col-span-2 lg:col-span-3 rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                            No labs match your filters.
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

function LabCard({ lab, i = 0 }) {
    const [imgError, setImgError] = React.useState(false);
    const initials = lab.name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("");

    return (
        <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            className="overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white shadow-sm hover:shadow-md"
        >
            {/* Cover image */}
            <div className="relative aspect-[16/9] w-full bg-[#F8FAFF] overflow-hidden">
                {!imgError ? (
                    <img
                        src={lab.img}
                        alt={lab.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center">
                        <div className="grid h-16 w-16 place-items-center rounded-xl bg-[#E9E9E9] text-[#001BB7] text-lg font-extrabold">
                            {initials}
                        </div>
                    </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FF8040]" />
            </div>

            {/* Body */}
            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-extrabold tracking-tight text-slate-900 line-clamp-1">
                        {lab.name}
                    </h3>
                    <span className="shrink-0 rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-0.5 text-[11px] font-medium text-[#001BB7]">
                        {lab.area}
                    </span>
                </div>

                <p className="mt-2 text-sm text-slate-700 line-clamp-3">{lab.blurb}</p>

                {lab.leads?.length ? (
                    <div className="mt-3 text-xs text-slate-600">
                        <div className="inline-flex items-center gap-2">
                            <Users className="h-4 w-4 text-slate-400" />
                            <span className="font-medium text-slate-800">Leads:</span>
                            <span className="truncate">{lab.leads.map((p) => p.name).join(", ")}</span>
                        </div>
                    </div>
                ) : null}

                <div className="mt-4 flex items-center justify-between">
                    {lab.email ? (
                        <a
                            href={`mailto:${lab.email}`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                            title="Email the lab"
                        >
                            <Mail className="h-4 w-4" />
                            Contact
                        </a>
                    ) : (
                        <span />
                    )}

                    <Link
                        to={lab.to || `/research/labs#${lab.id}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0046FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#001BB7]"
                    >
                        View lab <ChevronRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </motion.article>
    );
}
