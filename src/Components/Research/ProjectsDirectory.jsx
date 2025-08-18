// src/Components/Research/ProjectsDirectory.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FlaskConical,
    Search,
    CalendarDays,
    Users,
    FileText,
    GitBranch,
    ExternalLink,
    X,
    ChevronRight,
} from "lucide-react";
import Title from "../Shared/Title";

/* ---- Global themed images (Unsplash Source) ---- */
const DEFAULT_PROJECTS = [
    {
        id: "smart-city-sensing",
        title: "Smart City Sensing",
        area: "Systems",
        status: "Ongoing",
        year: 2025,
        blurb: "Edge IoT + streaming analytics for traffic, air-quality, and safety signals in Barishal.",
        leads: [{ name: "Dr. Md Manjur Ahmed", email: "mmahmed@bu.ac.bd" }],
        tech: ["Edge IoT", "Kafka", "InfluxDB", "ESP32"],
        outcomes: ["Deployed 50+ sensor nodes", "Live city dashboard", "2 conference papers"],
        repo: "https://github.com/example/smart-city",
        paper: "#",
        to: "/research/projects#smart-city-sensing",
        img: "https://images.unsplash.com/photo-1715462822892-5b6ba676b235?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "bangla-nlp-corpus",
        title: "Bangla NLP Corpus",
        area: "Data",
        status: "Ongoing",
        year: 2025,
        blurb: "Open datasets and baselines for tokenization, NER, and sentiment in Bangla.",
        leads: [{ name: "Md Mostafijur Rahman", email: "mostafij.csebu@gmail.com" }],
        tech: ["PyTorch", "HF Datasets", "SpaCy"],
        outcomes: ["100M+ tokens", "Leaderboard site", "OSS models"],
        repo: "https://github.com/example/bangla-nlp",
        paper: "#",
        to: "/research/projects#bangla-nlp-corpus",
        img: "https://images.unsplash.com/photo-1632475855985-ce4e8318c66f?q=80&w=385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "assistive-ui",
        title: "Assistive UI Toolkit",
        area: "HCI",
        status: "Ongoing",
        year: 2024,
        blurb: "Accessibility-first web components with auto-contrast and ARIA patterns.",
        leads: [{ name: "Dr. Tania Islam", email: "tania.bd.09@gmail.com" }],
        tech: ["TypeScript", "WAI-ARIA", "Storybook"],
        outcomes: ["Component library", "A11y audit tool"],
        repo: "https://github.com/example/assistive-ui",
        paper: "#",
        to: "/research/projects#assistive-ui",
        img: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8VUl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "vision-rice-pest",
        title: "Vision for Crop Pest Detection",
        area: "AI/ML",
        status: "Completed",
        year: 2024,
        blurb: "Mobile CNNs for on-field rice pest identification and severity estimation.",
        leads: [{ name: "Dr. Rahat Hossain Faisal", email: "rhfaisal@bu.ac.bd" }],
        tech: ["MobileNet", "ONNX", "TFLite"],
        outcomes: ["<10MB model", "Farmer app pilot", "Journal paper"],
        repo: "https://github.com/example/rice-pest-vision",
        paper: "#",
        to: "/research/projects#vision-rice-pest",
        img: "https://images.unsplash.com/photo-1654238112855-78ac3e39192d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFZpc2lvbiUyMGZvciUyMENyb3AlMjBQZXN0JTIwRGV0ZWN0aW9ufGVufDB8fDB8fHww",
    },
    {
        id: "privacy-k-anon-stream",
        title: "Streaming k-Anonymity",
        area: "Security",
        status: "Completed",
        year: 2023,
        blurb: "k-Anonymity for real-time telemetry with bounded-latency generalization.",
        leads: [{ name: "Sohely Jahan", email: "sojahan@bu.ac.bd" }],
        tech: ["Flink", "Parquet", "CUDA (opt)"],
        outcomes: ["Prototype operator", "Benchmarks", "Preprint"],
        repo: "https://github.com/example/kanon-stream",
        paper: "#",
        to: "/research/projects#privacy-k-anon-stream",
        img: "https://images.unsplash.com/photo-1562320162-c7884102a43a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3RyZWFtaW5nJTIwayUyMEFub255bWl0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id: "warehouse-robotics",
        title: "Warehouse Robotics",
        area: "Robotics",
        status: "Ongoing",
        year: 2025,
        blurb: "Multi-AGV routing with collision avoidance and energy-aware scheduling.",
        leads: [{ name: "Md Mahbub E Noor", email: "mmenoor@bu.ac.bd" }],
        tech: ["ROS2", "Nav2", "OR-Tools"],
        outcomes: ["Simulation suite", "Physical demo (2 AGVs)"],
        repo: "https://github.com/example/warehouse-robots",
        paper: "#",
        to: "/research/projects#warehouse-robotics",
        img: "https://images.unsplash.com/photo-1712971724897-a9ae95e0ec44?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "serverless-observability",
        title: "Serverless Observability",
        area: "Systems",
        status: "Completed",
        year: 2022,
        blurb: "Low-overhead tracing for FaaS platforms; cold-start reduction via ML.",
        leads: [{ name: "Md Samsuddoha", email: "msamsuddoha@bu.ac.bd" }],
        tech: ["OpenTelemetry", "eBPF", "Lambda"],
        outcomes: ["Trace collector", "1 workshop paper"],
        repo: "https://github.com/example/faas-otel",
        paper: "#",
        to: "/research/projects#serverless-observability",
        img: "https://images.unsplash.com/photo-1472376758045-62f519fc676d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U2VydmVybGVzcyUyME9ic2VydmFiaWxpdHl8ZW58MHx8MHx8fDA%3D",
    },
    {
        id: "edu-ml",
        title: "ML for Edu Analytics",
        area: "Data",
        status: "Ongoing",
        year: 2023,
        blurb: "Predictive risk models for course outcomes and personalized feedback.",
        leads: [{ name: "Md. Rashid Al Asif", email: "mraasif@bu.ac.bd" }],
        tech: ["sklearn", "XGBoost", "Great Expectations"],
        outcomes: ["Dashboard", "Dept. pilot"],
        repo: "https://github.com/example/edu-ml",
        paper: "#",
        to: "/research/projects#edu-ml",
        img: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fE1MfGVufDB8fDB8fHww",
    },
    {
        id: "smart-agriculture",
        title: "Smart Agriculture System",
        area: "AI/ML",
        status: "Ongoing",
        year: 2025,
        blurb: "AI-based crop disease detection using drone imagery and ML models.",
        leads: [{ name: "Dr. Tanvir Hasan", email: "tanvir@bu.ac.bd" }],
        tech: ["TensorFlow", "OpenCV", "DroneTech"],
        outcomes: ["Disease prediction model", "Field trials", "Research paper"],
        repo: "https://github.com/example/smart-agriculture",
        paper: "#",
        to: "/research/projects#smart-agriculture",
        img: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: "cloud-security-monitor",
        title: "Cloud Security Monitoring",
        area: "Security",
        status: "Ongoing",
        year: 2025,
        blurb: "Real-time anomaly detection in cloud environments using ML.",
        leads: [{ name: "Dr. Ayesha Karim", email: "ayesha@bu.ac.bd" }],
        tech: ["AWS", "Scikit-learn", "Kubernetes"],
        outcomes: ["Anomaly detection tool", "Security dashboard", "Whitepaper"],
        repo: "https://github.com/example/cloud-security-monitor",
        paper: "#",
        to: "/research/projects#cloud-security-monitor",
        img: "https://plus.unsplash.com/premium_photo-1726842420928-e2d727ca4b9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3VkJTIwc2VjdXJpdHklMjBtb25pdG9yaW5nfGVufDB8fDB8fHww",
    },
    {
        id: "gesture-control-interface",
        title: "Gesture Control Interface",
        area: "HCI",
        status: "Ongoing",
        year: 2025,
        blurb: "Developing a gesture-based control system for smart devices.",
        leads: [{ name: "Nusrat Jahan", email: "nusrat@bu.ac.bd" }],
        tech: ["OpenCV", "MediaPipe", "JavaScript"],
        outcomes: ["Gesture recognition model", "Interactive UI", "Demo video"],
        repo: "https://github.com/example/gesture-control-interface",
        paper: "#",
        to: "/research/projects#gesture-control-interface",
        img: "https://plus.unsplash.com/premium_photo-1664391929781-a8c5879fdf58?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2VzdHVyZSUyMENvbnRyb2wlMjBJbnRlcmZhY2V8ZW58MHx8MHx8fDA%3D",
    },
];


const STATUS = ["All", "Ongoing", "Completed"];

export default function ProjectsDirectory({ projects = DEFAULT_PROJECTS }) {
    const areas = React.useMemo(
        () => ["All", ...Array.from(new Set(projects.map((p) => p.area)))],
        [projects]
    );
    const years = React.useMemo(
        () => ["All", ...Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a)],
        [projects]
    );

    const [status, setStatus] = React.useState("All");
    const [area, setArea] = React.useState("All");
    const [year, setYear] = React.useState("All");
    const [q, setQ] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);
    const [active, setActive] = React.useState(null); // project for modal

    const filtered = React.useMemo(() => {
        return projects
            .filter((p) => (status === "All" ? true : p.status === status))
            .filter((p) => (area === "All" ? true : p.area === area))
            .filter((p) => (year === "All" ? true : p.year === year))
            .filter((p) =>
                q.trim()
                    ? (
                        p.title +
                        " " +
                        p.blurb +
                        " " +
                        (p.leads || []).map((l) => l.name).join(" ")
                    )
                        .toLowerCase()
                        .includes(q.toLowerCase())
                    : true
            )
            .sort((a, b) => (b.year || 0) - (a.year || 0));
    }, [projects, status, area, year, q]);

    const visible = showAll ? filtered : filtered.slice(0, 6);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Research Projects" subtitle="Filter by area, status, and year—or search" />

            {/* Filters */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Status pills */}
                <div className="flex flex-wrap items-center gap-2">
                    {STATUS.map((s) => {
                        const active = status === s;
                        return (
                            <button
                                key={s}
                                onClick={() => setStatus(s)}
                                className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${active ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"
                                    }`}
                            >
                                {active && (
                                    <motion.span
                                        layoutId="proj-status"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#001BB7] to-[#0046FF]"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{s}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="grow" />

                {/* Area, Year, Search */}
                <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    title="Area"
                >
                    {areas.map((a) => (
                        <option key={a} value={a}>
                            {a}
                        </option>
                    ))}
                </select>

                <select
                    value={year}
                    onChange={(e) =>
                        setYear(isNaN(+e.target.value) ? e.target.value : Number(e.target.value))
                    }
                    className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    title="Year"
                >
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {y}
                        </option>
                    ))}
                </select>

                <label className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search projects, leads…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>
            </div>

            {/* Count */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                <FlaskConical className="h-4 w-4 text-[#001BB7]" />
                <span className="font-semibold text-slate-900">
                    {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                </span>
            </div>

            {/* Grid */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence initial={false} mode="popLayout">
                    {visible.length ? (
                        visible.map((p, i) => (
                            <ProjectCard key={p.id} p={p} i={i} onOpen={() => setActive(p)} />
                        ))
                    ) : (
                        <div className="md:col-span-2 lg:col-span-3 rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                            No projects match your filters.
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Show more */}
            {filtered.length > 6 && (
                <div className="mt-6 flex justify-center">
                    <button
                        onClick={() => setShowAll((v) => !v)}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
                    >
                        {showAll ? "Show Less" : "Show More"} <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}

            {/* Modal */}
            <ProjectModal project={active} onClose={() => setActive(null)} />
        </section>
    );
}

/* ----------------------------- Card ----------------------------- */
function ProjectCard({ p, i, onOpen }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            className="overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white shadow-sm hover:shadow-md"
        >
            <div className="relative aspect-[16/9] w-full bg-[#F8FAFF] overflow-hidden">
                <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 h-1 bg-[#FF8040]" />
                <span className={`absolute left-3 top-3 rounded-md px-2 py-0.5 text-[11px] font-semibold
          ${p.status === "Ongoing" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-700 border border-slate-200"}`}>
                    {p.status}
                </span>
            </div>

            <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base font-extrabold tracking-tight text-slate-900 line-clamp-1">
                        {p.title}
                    </h3>
                    <span className="shrink-0 rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-0.5 text-[11px] font-medium text-[#001BB7]">
                        {p.area}
                    </span>
                </div>

                <p className="mt-2 text-sm text-slate-700 line-clamp-3">{p.blurb}</p>

                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1">
                        <CalendarDays className="h-4 w-4 text-slate-400" /> {p.year}
                    </span>
                    {p.leads?.length ? (
                        <span className="inline-flex items-center gap-1">
                            <Users className="h-4 w-4 text-slate-400" />
                            {p.leads.map((l) => l.name).join(", ")}
                        </span>
                    ) : null}
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {p.repo && (
                            <a
                                href={p.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                                title="Repository"
                            >
                                <GitBranch className="h-4 w-4" /> Repo
                            </a>
                        )}
                        {p.paper && (
                            <a
                                href={p.paper}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                                title="Paper"
                            >
                                <FileText className="h-4 w-4" /> Paper
                            </a>
                        )}
                    </div>

                    <button
                        onClick={onOpen}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0046FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#001BB7]"
                    >
                        Details <ExternalLink className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </motion.article>
    );
}

/* ----------------------------- Modal ----------------------------- */
function ProjectModal({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
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
                            className="w-full max-w-3xl overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white shadow-2xl"
                        >
                            {/* Header */}
                            <div className="relative">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="h-48 w-full object-cover"
                                />
                                <button
                                    onClick={onClose}
                                    className="absolute right-3 top-3 rounded-lg bg-white/90 p-2 text-slate-800 hover:bg-white"
                                    title="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                                <span className={`absolute left-3 top-3 rounded-md px-2 py-0.5 text-[11px] font-semibold
                  ${project.status === "Ongoing" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-700 border border-slate-200"}`}>
                                    {project.status}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                                        {project.title}
                                    </h3>
                                    <span className="shrink-0 rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-0.5 text-[11px] font-medium text-[#001BB7]">
                                        {project.area} · {project.year}
                                    </span>
                                </div>

                                <p className="mt-2 text-sm text-slate-700">{project.blurb}</p>

                                {project.leads?.length ? (
                                    <div className="mt-3 text-sm text-slate-700">
                                        <span className="font-semibold">Leads: </span>
                                        {project.leads.map((l, idx) => (
                                            <span key={l.email || idx} className="mr-3">
                                                {l.name}
                                                {l.email && (
                                                    <>
                                                        {" "}
                                                        (<a
                                                            href={`mailto:${l.email}`}
                                                            className="text-[#0046FF] hover:text-[#001BB7]"
                                                        >
                                                            {l.email}
                                                        </a>)
                                                    </>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                                {project.tech?.length ? (
                                    <div className="mt-3 flex flex-wrap items-center gap-2">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="rounded-md border border-[#E9E9E9] bg-white px-2 py-0.5 text-[11px] text-slate-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                                {project.outcomes?.length ? (
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-slate-900">Outcomes</h4>
                                        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                                            {project.outcomes.map((o, i) => (
                                                <li key={i}>{o}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}

                                <div className="mt-5 flex flex-wrap items-center gap-2">
                                    {project.repo && (
                                        <a
                                            href={project.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <GitBranch className="h-4 w-4" />
                                            Repository
                                        </a>
                                    )}
                                    {project.paper && (
                                        <a
                                            href={project.paper}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <FileText className="h-4 w-4" />
                                            Paper
                                        </a>
                                    )}
                                    {project.to && (
                                        <a
                                            href={project.to}
                                            className="inline-flex items-center gap-2 rounded-lg bg-[#0046FF] px-3 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
                                        >
                                            Project page <ExternalLink className="h-4 w-4" />
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
