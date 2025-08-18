// src/Components/Resources/ResourcesHub.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    Search,
    FileText,
    FileDown,
    FileSpreadsheet,
    FileSignature,
    BookOpen,
    ShieldCheck,
    Wrench,
    Link2,
    ExternalLink,
    GraduationCap,
    FlaskConical,
    ClipboardList,
    Tag,
} from "lucide-react";
import Title from "../Shared/Title";

/* ------------------------------ Demo data ------------------------------ */
// type: Form | Guide | Policy | Tool
// cat: Students | Faculty | Admin | Labs
const RESOURCES = [
    // Students
    {
        id: "reg-form",
        title: "Course Registration Form",
        desc: "Submit during add/drop. Include advisor signature.",
        type: "Form",
        cat: "Students",
        filetype: "pdf",
        size: "180 KB",
        updated: "2025-01-12",
        href: "/assets/resources/course-registration-form.pdf",
    },
    {
        id: "thesis-template",
        title: "Thesis/Project Report Template",
        desc: "Department-approved template (DOCX).",
        type: "Guide",
        cat: "Students",
        filetype: "docx",
        size: "92 KB",
        updated: "2025-03-04",
        href: "/assets/resources/thesis-template.docx",
    },
    {
        id: "handbook",
        title: "Student Handbook",
        desc: "Academic rules, grading, and code of conduct.",
        type: "Policy",
        cat: "Students",
        filetype: "pdf",
        size: "1.3 MB",
        updated: "2025-02-10",
        href: "/assets/resources/student-handbook.pdf",
        featured: true,
    },
    {
        id: "scholarship-guide",
        title: "Scholarship Guide",
        desc: "Eligibility, application windows, and required docs.",
        type: "Guide",
        cat: "Students",
        filetype: "pdf",
        size: "420 KB",
        updated: "2025-04-01",
        href: "/assets/resources/scholarship-guide.pdf",
    },

    // Faculty
    {
        id: "course-outline",
        title: "Course Outline Template",
        desc: "Syllabus/outline template for course pages.",
        type: "Form",
        cat: "Faculty",
        filetype: "docx",
        size: "64 KB",
        updated: "2025-01-20",
        href: "/assets/resources/course-outline-template.docx",
    },
    {
        id: "exam-policy",
        title: "Exam & Proctoring Policy",
        desc: "Midterm/final exam guidelines for instructors.",
        type: "Policy",
        cat: "Faculty",
        filetype: "pdf",
        size: "260 KB",
        updated: "2025-02-18",
        href: "/assets/resources/exam-policy.pdf",
    },

    // Admin
    {
        id: "leave-form",
        title: "Leave Application Form",
        desc: "For academic/administrative leave requests.",
        type: "Form",
        cat: "Admin",
        filetype: "pdf",
        size: "120 KB",
        updated: "2025-01-09",
        href: "/assets/resources/leave-application.pdf",
    },
    {
        id: "budget-sheet",
        title: "Department Budget Sheet",
        desc: "Standard spreadsheet for event/lab purchases.",
        type: "Form",
        cat: "Admin",
        filetype: "xlsx",
        size: "38 KB",
        updated: "2025-03-12",
        href: "/assets/resources/budget-sheet.xlsx",
    },

    // Labs
    {
        id: "lab-safety",
        title: "Lab Safety Guidelines",
        desc: "Mandatory safety rules for all CSE labs.",
        type: "Policy",
        cat: "Labs",
        filetype: "pdf",
        size: "240 KB",
        updated: "2025-02-02",
        href: "/assets/resources/lab-safety.pdf",
        featured: true,
    },
    {
        id: "vpn-setup",
        title: "VPN & Git Access",
        desc: "How to access internal Git and services off-campus.",
        type: "Tool",
        cat: "Labs",
        filetype: "link",
        size: "—",
        updated: "2025-03-28",
        href: "https://docs.example.com/bu-cse-vpn",
        external: true,
    },
    {
        id: "equipment-checkout",
        title: "Equipment Checkout Form",
        desc: "Borrow sensors, kits, or cameras for projects.",
        type: "Form",
        cat: "Labs",
        filetype: "pdf",
        size: "140 KB",
        updated: "2025-04-19",
        href: "/assets/resources/equipment-checkout.pdf",
    },

    // Shared
    {
        id: "calendar-ics",
        title: "Academic Calendar (.ics)",
        desc: "Add term dates to your calendar app.",
        type: "Tool",
        cat: "Students",
        filetype: "link",
        size: "—",
        updated: "2025-01-05",
        href: "/assets/resources/academic-calendar.ics",
    },
];

/* ---------------------------- Filter presets --------------------------- */
const CATS = ["All", "Students", "Faculty", "Admin", "Labs"];
const TYPES = ["All", "Form", "Guide", "Policy", "Tool"];

/* ====================================================================== */

export default function ResourcesHub({ items = RESOURCES }) {
    const [q, setQ] = React.useState("");
    const [cat, setCat] = React.useState("All");
    const [type, setType] = React.useState("All");

    const filtered = React.useMemo(() => {
        return items
            .filter((r) => (cat === "All" ? true : r.cat === cat))
            .filter((r) => (type === "All" ? true : r.type === type))
            .filter((r) =>
                q.trim()
                    ? (r.title + " " + r.desc + " " + r.type + " " + r.cat)
                        .toLowerCase()
                        .includes(q.toLowerCase())
                    : true
            )
            .sort((a, b) => Number(b.featured || 0) - Number(a.featured || 0));
    }, [items, q, cat, type]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title
                title="Resources"
                subtitle="Forms, guides, policies, and tools for the BU CSE community."
            />

            {/* Controls */}
            <div className="mt-5 grid grid-cols-1 md:grid-cols-4 gap-3 items-start">
                <label className="relative md:col-span-2">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search resources…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>

                <Select label="Category" value={cat} onChange={setCat} options={CATS} />
                <Select label="Type" value={type} onChange={setType} options={TYPES} />
            </div>

            {/* Count pill */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                <ClipboardList className="h-4 w-4 text-[#001BB7]" />
                <span className="font-semibold text-slate-900">
                    {filtered.length} item{filtered.length !== 1 ? "s" : ""}
                </span>
            </div>

            {/* Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.length ? (
                    filtered.map((r, i) => <ResourceCard key={r.id} r={r} i={i} />)
                ) : (
                    <div className="sm:col-span-2 lg:col-span-3 rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                        No resources found. Try different filters.
                    </div>
                )}
            </div>
        </section>
    );
}

/* --------------------------------- Card -------------------------------- */
function ResourceCard({ r, i }) {
    const Icon = iconFor(r);

    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-5 shadow-sm hover:shadow-md transition"
        >
            <div className="flex items-start justify-between gap-3">
                <div className="inline-flex items-center gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7] ring-1 ring-[#E9E9E9]">
                        <Icon className="h-5 w-5" />
                    </span>
                    <div>
                        <h3 className="text-base font-extrabold tracking-tight text-slate-900">
                            {r.title}
                        </h3>
                        <p className="text-xs text-slate-600">
                            {r.cat} · {r.type}
                            {r.size && <> · {r.size}</>}
                        </p>
                    </div>
                </div>

                {r.featured && (
                    <span className="rounded-md bg-[#FFF8F3] px-2 py-1 text-[11px] font-semibold text-[#FF8040]">
                        Featured
                    </span>
                )}
            </div>

            <p className="mt-2 text-sm text-slate-700">{r.desc}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1">
                    <Tag className="h-3.5 w-3.5" />
                    Updated {fmtDate(r.updated)}
                </span>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
                {r.external ? (
                    <a
                        href={r.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Open
                    </a>
                ) : (
                    <a
                        href={r.href}
                        download
                        className="inline-flex items-center gap-2 rounded-lg bg-[#0046FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#001BB7]"
                    >
                        <FileDown className="h-4 w-4" />
                        Download
                    </a>
                )}

                {/* Optional: quick-open if not external and browser can view */}
                {!r.external && canPreview(r.filetype) && (
                    <a
                        href={r.href}
                        className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-[#F8FAFF]"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Link2 className="h-4 w-4" />
                        View
                    </a>
                )}
            </div>
        </motion.article>
    );
}

/* ------------------------------- Bits/UX ------------------------------- */
function Select({ label, value, onChange, options }) {
    return (
        <label className="text-sm">
            <span className="mb-1 block text-slate-700">{label}</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
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

function iconFor(r) {
    if (r.filetype === "pdf") return FileText;
    if (r.filetype === "docx") return FileSignature;
    if (r.filetype === "xlsx") return FileSpreadsheet;
    if (r.filetype === "link") {
        // pick based on type
        if (r.type === "Tool") return Wrench;
        if (r.type === "Guide") return BookOpen;
        if (r.type === "Policy") return ShieldCheck;
        return Link2;
    }
    // fallback by category
    if (r.cat === "Students") return GraduationCap;
    if (r.cat === "Labs") return FlaskConical;
    return BookOpen;
}

function canPreview(filetype) {
    return ["pdf"].includes(filetype);
}

function fmtDate(iso) {
    if (!iso) return "—";
    try {
        return new Date(iso).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        return iso;
    }
}
