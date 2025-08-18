// src/Components/Research/PublicationsDirectory.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Filter,
    FileText,
    Code2,
    Database,
    Link as LinkIcon,
    ExternalLink,
    Copy,
    Check,
    X,
    CalendarDays,
    Tag,
    Download,
} from "lucide-react";
import Title from "../Shared/Title"; // adjust path if your Title is elsewhere

/* ------------------------ Demo publications (edit freely) ------------------------ */
const DEFAULT_PUBS = [
    {
        id: "p1",
        title: "Streaming k-Anonymity for Real-Time Telemetry",
        authors: ["N. Jahan", "R. H. Faisal", "T. Hasan"],
        year: 2025,
        venue: { name: "ACM DEBS", type: "Conference" },
        area: "Security",
        pdf: "#",
        code: "https://github.com/example/kanon-stream",
        data: "#",
        doi: "10.1145/xxxxxx",
        abstract:
            "We propose a bounded-latency k-anonymization operator for streaming telemetry with adaptive generalization. Our approach meets privacy constraints while preserving utility for monitoring workloads.",
    },
    {
        id: "p2",
        title: "BanglaNLP: Open Corpora and Baselines for Bangla",
        authors: ["A. Karim", "S. Ahmed", "M. Rahman"],
        year: 2025,
        venue: { name: "Transactions on Asian & Low-Resource Language Information Processing", type: "Journal" },
        area: "Data",
        pdf: "#",
        code: "https://github.com/example/bangla-nlp",
        data: "https://huggingface.co/datasets/example/bangla-nlp",
        doi: "10.1145/yyyyyy",
        abstract:
            "We compile large-scale Bangla corpora for tokenization, NER, and sentiment, and release reproducible baselines and evaluation scripts.",
    },
    {
        id: "p3",
        title: "Vision Models for On-Device Rice Pest Detection",
        authors: ["R. H. Faisal", "M. Haque"],
        year: 2024,
        venue: { name: "Computers and Electronics in Agriculture", type: "Journal" },
        area: "AI/ML",
        pdf: "#",
        code: "https://github.com/example/rice-pest-vision",
        data: "#",
        doi: "10.1016/j.compag.zzzz",
        abstract:
            "We design lightweight CNNs for rice pest identification and severity estimation optimized for low-memory field devices.",
    },
    {
        id: "p4",
        title: "Assistive UI Toolkit: Accessibility-First Web Components",
        authors: ["N. Jahan", "F. Yeasmin"],
        year: 2024,
        venue: { name: "CHI Workshops", type: "Workshop" },
        area: "HCI",
        pdf: "#",
        code: "https://github.com/example/assistive-ui",
        data: "",
        doi: "",
        abstract:
            "A component set implementing ARIA guidelines with auto-contrast theming and audit hooks for rapid accessibility testing.",
    },
    {
        id: "p5",
        title: "Serverless Observability with eBPF Tracing",
        authors: ["T. Hasan", "A. Mahmud"],
        year: 2023,
        venue: { name: "USENIX HotCloud", type: "Workshop" },
        area: "Systems",
        pdf: "#",
        code: "https://github.com/example/faas-otel",
        data: "",
        doi: "",
        abstract:
            "We present a low-overhead eBPF-based tracing path for Function-as-a-Service platforms to analyze cold starts and tail latency.",
    },
    {
        id: "p6",
        title: "Energy-Aware Routing for Multi-AGV Warehouses",
        authors: ["A. Mahmud", "R. Islam"],
        year: 2023,
        venue: { name: "IEEE IROS", type: "Conference" },
        area: "Robotics",
        pdf: "#",
        code: "https://github.com/example/warehouse-robots",
        data: "#",
        doi: "10.1109/iros.zzzz",
        abstract:
            "We propose an energy-aware multi-AGV routing and scheduling framework with collision avoidance and battery health constraints.",
    },
];

const TYPES = ["All", "Journal", "Conference", "Workshop", "Preprint"];
const AREAS = ["All", "AI/ML", "Systems", "Security", "Data", "HCI", "Robotics"];

/* ================================================================================= */

export default function PublicationsDirectory({ items = DEFAULT_PUBS }) {
    const years = React.useMemo(
        () => ["All", ...Array.from(new Set(items.map((p) => p.year))).sort((a, b) => b - a)],
        [items]
    );

    const [type, setType] = React.useState("All");
    const [area, setArea] = React.useState("All");
    const [year, setYear] = React.useState("All");
    const [q, setQ] = React.useState("");
    const [pdfOnly, setPdfOnly] = React.useState(false);
    const [active, setActive] = React.useState(null); // modal paper

    const filtered = React.useMemo(() => {
        return items
            .filter((p) => (type === "All" ? true : p.venue?.type === type))
            .filter((p) => (area === "All" ? true : p.area === area))
            .filter((p) => (year === "All" ? true : p.year === year))
            .filter((p) => (pdfOnly ? Boolean(p.pdf) && p.pdf !== "#" : true))
            .filter((p) =>
                q.trim()
                    ? (
                        p.title +
                        " " +
                        (p.venue?.name || "") +
                        " " +
                        (p.authors || []).join(" ")
                    )
                        .toLowerCase()
                        .includes(q.toLowerCase())
                    : true
            )
            .sort((a, b) => (b.year - a.year) || pTitle(a).localeCompare(pTitle(b)));
    }, [items, type, area, year, q, pdfOnly]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Research Publications" subtitle="Accepted papers with links to PDFs, code, and data." />

            {/* Filters */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-5 gap-3">
                <label className="relative mt-6 md:col-span-2">
                    <Search className="absolute left-3 top-5 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search title, venue, authors…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>

                <Select label="Type" value={type} onChange={setType} options={TYPES} />
                <Select label="Area" value={area} onChange={setArea} options={AREAS} />
                <Select label="Year" value={year} onChange={setYear} options={years} />
            </div>

            {/* Tools row */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                    <Filter className="h-4 w-4 text-[#001BB7]" />
                    <span className="font-semibold text-slate-900">{filtered.length}</span>
                    <span className="text-slate-700">result{filtered.length !== 1 ? "s" : ""}</span>
                </div>

                <label className="inline-flex select-none items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-slate-300 text-[#0046FF] focus:ring-[#0046FF]"
                        checked={pdfOnly}
                        onChange={(e) => setPdfOnly(e.target.checked)}
                    />
                    Only with PDF
                </label>
            </div>

            {/* List */}
            <div className="mt-6 space-y-3">
                {filtered.length ? (
                    filtered.map((p, i) => (
                        <PubRow key={p.id} p={p} i={i} onOpen={() => setActive(p)} />
                    ))
                ) : (
                    <div className="rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                        No publications match your filters.
                    </div>
                )}
            </div>

            {/* Modal */}
            <PubModal paper={active} onClose={() => setActive(null)} />
        </section>
    );
}

/* -------------------------------- Row -------------------------------- */
function PubRow({ p, i, onOpen }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.02 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-4"
        >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                {/* Left: meta + title */}
                <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-0.5 text-[11px] font-medium text-[#001BB7]">
                            {p.venue?.type || "Other"}
                        </span>
                        {p.area ? (
                            <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700">
                                <Tag className="mr-1 h-3.5 w-3.5" /> {p.area}
                            </span>
                        ) : null}
                        <span className="inline-flex items-center gap-1 text-xs text-slate-600">
                            <CalendarDays className="h-3.5 w-3.5" /> {p.year}
                        </span>
                    </div>

                    <h3 className="mt-1 text-base font-extrabold tracking-tight text-slate-900">
                        {pTitle(p)}
                    </h3>

                    <p className="mt-1 text-sm text-slate-700">
                        {p.authors?.join(", ")}
                    </p>

                    {p.venue?.name && (
                        <p className="mt-0.5 text-xs text-slate-600">{p.venue.name}</p>
                    )}
                </div>

                {/* Right: actions */}
                <div className="flex shrink-0 flex-wrap items-center gap-2">
                    {p.pdf && (
                        <a
                            href={p.pdf}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                            title="PDF"
                        >
                            <FileText className="h-4 w-4" /> PDF
                        </a>
                    )}
                    {p.code && (
                        <a
                            href={p.code}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                            title="Code"
                        >
                            <Code2 className="h-4 w-4" /> Code
                        </a>
                    )}
                    {p.data && (
                        <a
                            href={p.data}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                            title="Data"
                        >
                            <Database className="h-4 w-4" /> Data
                        </a>
                    )}
                    {p.doi && (
                        <a
                            href={`https://doi.org/${p.doi}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-medium text-slate-800 hover:bg-[#F5F7FF]"
                            title="DOI"
                        >
                            <LinkIcon className="h-4 w-4" /> DOI
                        </a>
                    )}

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

/* -------------------------------- Modal -------------------------------- */
function PubModal({ paper, onClose }) {
    const [copied, setCopied] = React.useState(false);
    if (!paper) return null;

    const bib = bibtex(paper);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(bib);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { /* ignore */ }
    };

    const download = () => {
        const blob = new Blob([bib], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${slug(pTitle(paper))}.bib`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <AnimatePresence>
            {paper && (
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
                            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-[#E9E9E9]">
                                <div className="min-w-0">
                                    <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                                        {pTitle(paper)}
                                    </h3>
                                    <p className="mt-1 text-sm text-slate-700">{paper.authors?.join(", ")}</p>
                                    <p className="text-xs text-slate-600">
                                        {paper.venue?.name} · {paper.venue?.type} · {paper.year}
                                    </p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="rounded-lg bg-white p-2 text-slate-700 hover:bg-slate-50 border border-[#E9E9E9]"
                                    title="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="px-5 py-4">
                                {paper.abstract && (
                                    <>
                                        <h4 className="text-sm font-semibold text-slate-900">Abstract</h4>
                                        <p className="mt-2 text-sm text-slate-700">{paper.abstract}</p>
                                    </>
                                )}

                                {/* Links */}
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {paper.pdf && (
                                        <a
                                            href={paper.pdf}
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <FileText className="h-4 w-4" />
                                            PDF
                                        </a>
                                    )}
                                    {paper.code && (
                                        <a
                                            href={paper.code}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <Code2 className="h-4 w-4" />
                                            Code
                                        </a>
                                    )}
                                    {paper.data && (
                                        <a
                                            href={paper.data}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <Database className="h-4 w-4" />
                                            Data
                                        </a>
                                    )}
                                    {paper.doi && (
                                        <a
                                            href={`https://doi.org/${paper.doi}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            DOI
                                        </a>
                                    )}

                                    {/* BibTeX actions */}
                                    <button
                                        onClick={copy}
                                        className="ml-auto inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                    >
                                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        {copied ? "Copied" : "Copy BibTeX"}
                                    </button>
                                    <button
                                        onClick={download}
                                        className="inline-flex items-center gap-2 rounded-lg bg-[#0046FF] px-3 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
                                    >
                                        <Download className="h-4 w-4" />
                                        .bib
                                    </button>
                                </div>

                                {/* BibTeX preview */}
                                <pre className="mt-4 max-h-48 overflow-auto rounded-lg border border-[#E9E9E9] bg-[#F8FAFF] p-3 text-xs text-slate-800">
                                    {bib}
                                </pre>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* ------------------------------ UI bits ------------------------------ */
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

/* ------------------------------ helpers ------------------------------ */
function pTitle(p) {
    return p.title || "Untitled";
}
function slug(s = "") {
    return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function bibtex(p) {
    const key = `${(p.authors?.[0] || "author").split(" ").slice(-1)[0]}${p.year || ""}:${slug(
        pTitle(p).slice(0, 24)
    )}`;
    const authors = (p.authors || []).join(" and ");
    const type = mapTypeToBib(p.venue?.type);
    const fields = [
        `  title = {${pTitle(p)}}`,
        authors && `  author = {${authors}}`,
        p.venue?.name && (type === "article" ? `  journal = {${p.venue.name}}` : `  booktitle = {${p.venue.name}}`),
        p.year && `  year = {${p.year}}`,
        p.doi && `  doi = {${p.doi}}`,
        p.pdf && p.pdf !== "#" && `  url = {${p.pdf}}`,
    ]
        .filter(Boolean)
        .join(",\n");
    return `@${type}{${key},\n${fields}\n}`;
}
function mapTypeToBib(t) {
    switch (t) {
        case "Journal":
            return "article";
        case "Conference":
            return "inproceedings";
        case "Workshop":
            return "inproceedings";
        case "Preprint":
            return "misc";
        default:
            return "misc";
    }
}
