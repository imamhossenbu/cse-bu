// src/Components/Admissions/AdmissionTabs.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    School,
    BadgeDollarSign,
    BookOpenCheck,
    ClipboardCheck,
    CalendarDays,
    ExternalLink,
    FileDown,
} from "lucide-react";
import Title from "../Shared/Title";

const TABS = [
    { id: "Graduate", icon: GraduationCap },
    { id: "Undergraduate", icon: School },
    { id: "Scholarships", icon: BadgeDollarSign },
];

// --- Content config (dummy data; edit freely) ---
const CONTENT = {
    Graduate: {
        blurb:
            "Our graduate programs focus on research-led learning in AI/ML, Data Systems, Security, HCI and more—guided by active labs and supervisors.",
        keyFacts: [
            { k: "Degree", v: "MSc / MPhil (CSE)" },
            { k: "Duration", v: "1.5–2 years" },
            { k: "Intake", v: "Fall / Spring" },
            { k: "Mode", v: "Thesis or Coursework" },
        ],
        programs: [
            { name: "MSc in CSE (Thesis)" },
            { name: "MSc in CSE (Coursework)" },
            { name: "MPhil in CSE" },
        ],
        requirements: [
            "BSc in CSE/related area with minimum CGPA set by the department.",
            "Statement of Purpose and two academic references.",
            "Research interest aligned with available supervisors (for thesis).",
            "English proficiency (if applicable).",
        ],
        steps: [
            "Create application account & fill personal details.",
            "Upload transcripts, SOP, and reference details.",
            "Select preferred program/track & potential supervisor (optional).",
            "Pay application fee and submit.",
            "Attend interview (shortlisted candidates).",
        ],
        deadlines: "Applications open in June (Fall) and November (Spring).",
        prospectus: "#", // change to your PDF
    },

    Undergraduate: {
        blurb:
            "Undergraduate programs emphasize strong fundamentals, hands-on labs, and team projects—preparing students for careers and higher studies.",
        keyFacts: [
            { k: "Degree", v: "BSc in CSE" },
            { k: "Duration", v: "4 years / 8 semesters" },
            { k: "Intake", v: "Fall" },
            { k: "Credits", v: "~160 (core + labs + electives)" },
        ],
        programs: [
            { name: "BSc in Computer Science & Engineering", to: "/admissions/undergrad" },
            { name: "Minor / Electives in Emerging Areas", to: "/academics/courses" },
        ],
        requirements: [
            "Eligibility as per national admission rules (Science background).",
            "Merit-based selection through admission test/board criteria.",
            "Photo ID and academic documents verification.",
        ],
        steps: [
            "Register for the admission portal.",
            "Fill out the online application and upload documents.",
            "Download admit card (if admission test).",
            "Sit for the test / evaluation and check result.",
            "Complete final admission & course registration.",
        ],
        deadlines: "Admission cycle usually announced in July–August.",
        prospectus: "#",
    },

    Scholarships: {
        blurb:
            "Merit- and need-based scholarships encourage excellence and access. Special awards are available for outstanding research, leadership, and service.",
        keyFacts: [
            { k: "Types", v: "Merit / Need-based / Research" },
            { k: "Coverage", v: "Tuition fee waivers (partial/ full)" },
            { k: "Cycle", v: "Per semester / annual review" },
            { k: "Eligibility", v: "CGPA & specific criteria apply" },
        ],
        programs: [
            { name: "Merit Scholarship (Top CGPA)", to: "/admissions/scholarships" },
            { name: "Need-based Grant", to: "/admissions/scholarships" },
            { name: "Research Assistantship", to: "/admissions/scholarships" },
        ],
        requirements: [
            "Maintain required CGPA (for merit).",
            "Financial documents (for need-based).",
            "Supervisor/lab confirmation (for RA).",
        ],
        steps: [
            "Check eligibility and prepare documents.",
            "Apply via scholarship portal or department office.",
            "Departmental review/committee decision.",
            "Award notification and disbursement.",
        ],
        deadlines: "Announced at semester start; rolling for some awards.",
        prospectus: "#",
    },
};

export default function AdmissionTabs() {
    const [active, setActive] = React.useState(TABS[0].id);

    const tab = CONTENT[active];

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title="Admissions" subtitle="Graduate · Undergraduate · Scholarships" />

            {/* Tabs */}
            <div className="mt-6 rounded-2xl border border-[#E9E9E9] bg-white p-2">
                <div className="relative flex flex-wrap gap-2">
                    {TABS.map(({ id, icon: Icon }) => {
                        const isActive = id === active;
                        return (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setActive(id)}
                                className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition
                  ${isActive ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"}`}
                            >
                                {/* active pill background */}
                                {isActive && (
                                    <motion.span
                                        layoutId="admission-pill"
                                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#001BB7] to-[#0046FF]"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 inline-flex items-center gap-2">
                                    <Icon className="h-4 w-4" />
                                    {id}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Panel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {/* Left column: key facts + programs */}
                    <aside className="lg:col-span-1 space-y-6">
                        <Card>
                            <CardHeader icon={<BookOpenCheck className="h-5 w-5" />} title="Key Facts" />
                            <ul className="mt-3 space-y-2 text-sm">
                                {tab.keyFacts.map((f) => (
                                    <li key={f.k} className="flex items-center justify-between gap-3">
                                        <span className="text-slate-600">{f.k}</span>
                                        <span className="font-medium text-slate-900">{f.v}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>

                        <Card>
                            <CardHeader icon={<GraduationCap className="h-5 w-5" />} title="Programs" />
                            <ul className="mt-3 space-y-2">
                                {tab.programs.map((p) => (
                                    <li key={p.name}>
                                        <Link
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0046FF] hover:text-[#001BB7]"
                                        >
                                            {p.name} <ExternalLink className="h-4 w-4" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </aside>

                    {/* Right column: overview + requirements + steps + deadlines + CTAs */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader title={active} />
                            <p className="mt-2 text-sm text-slate-700">{tab.blurb}</p>
                            {tab.deadlines && (
                                <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#0046FF]/25 bg-[#F0F4FF] px-3 py-2 text-xs text-[#001BB7]">
                                    <CalendarDays className="h-4 w-4" />
                                    <span className="font-medium">{tab.deadlines}</span>
                                </div>
                            )}
                            <div className="mt-5 flex flex-wrap gap-3">
                                <Link

                                    className="rounded-xl bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001BB7]"
                                >
                                    Apply Now
                                </Link>
                                <a
                                    href={tab.prospectus}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-[#E9E9E9]"
                                >
                                    <FileDown className="h-4 w-4" />
                                    Prospectus (PDF)
                                </a>
                            </div>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader icon={<BookOpenCheck className="h-5 w-5" />} title="Requirements" />
                                <ul className="mt-3 space-y-2 text-sm">
                                    {tab.requirements.map((r, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#FF8040]" />
                                            <span className="text-slate-700">{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Card>
                                <CardHeader icon={<ClipboardCheck className="h-5 w-5" />} title="Application Steps" />
                                <ol className="mt-3 space-y-3 text-sm">
                                    {tab.steps.map((s, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E9E9E9] text-[#001BB7] text-xs font-bold">
                                                {i + 1}
                                            </span>
                                            <span className="text-slate-700">{s}</span>
                                        </li>
                                    ))}
                                </ol>
                            </Card>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}

/* ---------------- small building blocks ---------------- */

function Card({ children }) {
    return (
        <div className="rounded-2xl border border-[#E9E9E9] bg-white p-5 shadow-sm">
            {children}
        </div>
    );
}

function CardHeader({ icon, title }) {
    return (
        <div className="flex items-center gap-2">
            {icon && (
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#E9E9E9] text-[#001BB7]">
                    {icon}
                </span>
            )}
            {title && <h3 className="text-base font-extrabold tracking-tight text-slate-900">{title}</h3>}
        </div>
    );
}

function findTabLink(tab) {
    const found = TABS.find((t) => t.id === tab);
    return found?.to || "/admissions";
}
