// src/Components/Calendar/AcademicCalendarList.jsx
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Calendar, Search, Download } from "lucide-react";
import Title from "../../Shared/Title";

/* ------------------- Programs ------------------- */
const PROGRAMS = ["All", "Undergraduate", "Masters"];

/* ------------------- Sample data (program + cohorts) ------------------- */
const ACADEMIC_CAL = [
    /* ====================== 2019 (Session-2019-20) ====================== */
    { id: 101, title: "Orientation (Fall 2019)", date: "2019-09-01", tag: "Semester", cohorts: ["Session-2019-20"], program: "Undergraduate" },
    { id: 102, title: "Classes Begin (Fall 2019)", date: "2019-09-02", tag: "Semester", cohorts: ["Session-2019-20"], program: "Undergraduate" },
    { id: 103, title: "Midterm Exams (Fall 2019)", start: "2019-10-20", end: "2019-10-24", tag: "Exam", cohorts: ["Session-2019-20"], program: "Undergraduate" },
    { id: 104, title: "Winter Recess", start: "2019-12-24", end: "2020-01-01", tag: "Recess", cohorts: ["All"], program: "All" },

    // Masters 2019
    { id: 150, title: "Graduate Orientation (Fall 2019)", date: "2019-09-05", tag: "Semester", cohorts: ["Session-2019-20"], program: "Masters" },
    { id: 151, title: "Graduate Classes Begin (Fall 2019)", date: "2019-09-08", tag: "Semester", cohorts: ["Session-2019-20"], program: "Masters" },
    { id: 152, title: "Graduate Midterm (Fall 2019)", start: "2019-11-03", end: "2019-11-05", tag: "Exam", cohorts: ["Session-2019-20"], program: "Masters" },

    /* ====================== 2020 (Sessions 2019-20, 2020-21) ====================== */
    { id: 201, title: "Spring Registration Opens", date: "2020-01-05", tag: "Registration", cohorts: ["Session-2019-20", "Session-2020-21"], program: "Undergraduate" },
    { id: 202, title: "Classes Begin (Spring 2020)", date: "2020-01-20", tag: "Semester", cohorts: ["All"], program: "Undergraduate" },
    { id: 203, title: "Midterm Exams (Spring 2020)", start: "2020-03-10", end: "2020-03-14", tag: "Exam", cohorts: ["Session-2019-20"], program: "Undergraduate" },
    { id: 204, title: "Independence Day", date: "2020-03-26", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 205, title: "Eid-ul-Fitr Break", start: "2020-05-22", end: "2020-05-28", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 206, title: "Final Exams (Spring 2020)", start: "2020-06-10", end: "2020-06-20", tag: "Exam", cohorts: ["Session-2019-20"], program: "Undergraduate" },
    { id: 207, title: "Fall Registration Opens", date: "2020-08-10", tag: "Registration", cohorts: ["Session-2020-21"], program: "Undergraduate" },
    { id: 208, title: "Classes Begin (Fall 2020)", date: "2020-09-01", tag: "Semester", cohorts: ["Session-2020-21"], program: "Undergraduate" },
    { id: 209, title: "Midterm Exams (Fall 2020)", start: "2020-10-18", end: "2020-10-22", tag: "Exam", cohorts: ["Session-2020-21"], program: "Undergraduate" },

    // Masters 2020
    { id: 250, title: "Graduate Spring Registration Opens", date: "2020-01-07", tag: "Registration", cohorts: ["Session-2019-20", "Session-2020-21"], program: "Masters" },
    { id: 251, title: "Graduate Classes Begin (Spring 2020)", date: "2020-01-26", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 252, title: "Graduate Thesis Proposal Window", start: "2020-04-01", end: "2020-04-15", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 253, title: "Graduate Final Exams (Spring 2020)", start: "2020-06-15", end: "2020-06-25", tag: "Exam", cohorts: ["Session-2019-20"], program: "Masters" },

    /* ====================== 2021 (Sessions 2020-21, 2021-22) ====================== */
    { id: 301, title: "Spring Registration Opens", date: "2021-01-08", tag: "Registration", cohorts: ["Session-2020-21", "Session-2021-22"], program: "Undergraduate" },
    { id: 302, title: "Classes Begin (Spring 2021)", date: "2021-01-18", tag: "Semester", cohorts: ["All"], program: "Undergraduate" },
    { id: 303, title: "Midterm Exams (Spring 2021)", start: "2021-03-15", end: "2021-03-19", tag: "Exam", cohorts: ["Session-2020-21"], program: "Undergraduate" },
    { id: 304, title: "Eid-ul-Fitr Break", start: "2021-05-10", end: "2021-05-16", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 305, title: "Final Exams (Spring 2021)", start: "2021-06-07", end: "2021-06-17", tag: "Exam", cohorts: ["Session-2020-21"], program: "Undergraduate" },
    { id: 306, title: "Fall Registration Opens", date: "2021-08-12", tag: "Registration", cohorts: ["Session-2021-22"], program: "Undergraduate" },
    { id: 307, title: "Classes Begin (Fall 2021)", date: "2021-09-01", tag: "Semester", cohorts: ["Session-2021-22"], program: "Undergraduate" },
    { id: 308, title: "Midterm Exams (Fall 2021)", start: "2021-10-24", end: "2021-10-28", tag: "Exam", cohorts: ["Session-2021-22"], program: "Undergraduate" },

    // Masters 2021
    { id: 350, title: "Graduate Spring Registration Opens", date: "2021-01-06", tag: "Registration", cohorts: ["Session-2020-21", "Session-2021-22"], program: "Masters" },
    { id: 351, title: "Graduate Seminar (Spring 2021)", date: "2021-03-07", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 352, title: "Graduate Final Exams (Spring 2021)", start: "2021-06-10", end: "2021-06-18", tag: "Exam", cohorts: ["Session-2020-21"], program: "Masters" },

    /* ====================== 2022 (Sessions 2021-22, 2022-23) ====================== */
    { id: 401, title: "Spring Registration Opens", date: "2022-01-10", tag: "Registration", cohorts: ["Session-2021-22", "Session-2022-23"], program: "Undergraduate" },
    { id: 402, title: "Classes Begin (Spring 2022)", date: "2022-01-23", tag: "Semester", cohorts: ["All"], program: "Undergraduate" },
    { id: 403, title: "Midterm Exams (Spring 2022)", start: "2022-03-14", end: "2022-03-18", tag: "Exam", cohorts: ["Session-2021-22"], program: "Undergraduate" },
    { id: 404, title: "Eid-ul-Fitr Break", start: "2022-04-29", end: "2022-05-05", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 405, title: "Final Exams (Spring 2022)", start: "2022-06-06", end: "2022-06-16", tag: "Exam", cohorts: ["Session-2021-22"], program: "Undergraduate" },
    { id: 406, title: "Fall Registration Opens", date: "2022-08-11", tag: "Registration", cohorts: ["Session-2022-23"], program: "Undergraduate" },
    { id: 407, title: "Classes Begin (Fall 2022)", date: "2022-09-01", tag: "Semester", cohorts: ["Session-2022-23"], program: "Undergraduate" },
    { id: 408, title: "Midterm Exams (Fall 2022)", start: "2022-10-17", end: "2022-10-21", tag: "Exam", cohorts: ["Session-2022-23"], program: "Undergraduate" },

    // Masters 2022
    { id: 450, title: "Graduate Spring Registration Opens", date: "2022-01-09", tag: "Registration", cohorts: ["Session-2021-22", "Session-2022-23"], program: "Masters" },
    { id: 451, title: "Graduate Proposal Defense (Spring 2022)", start: "2022-04-03", end: "2022-04-07", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 452, title: "Graduate Final Exams (Spring 2022)", start: "2022-06-12", end: "2022-06-20", tag: "Exam", cohorts: ["Session-2021-22"], program: "Masters" },

    /* ====================== 2023 (Sessions 2022-23, 2023-24) ====================== */
    { id: 501, title: "Spring Registration Opens", date: "2023-01-09", tag: "Registration", cohorts: ["Session-2022-23", "Session-2023-24"], program: "Undergraduate" },
    { id: 502, title: "Classes Begin (Spring 2023)", date: "2023-01-22", tag: "Semester", cohorts: ["All"], program: "Undergraduate" },
    { id: 503, title: "Midterm Exams (Spring 2023)", start: "2023-03-13", end: "2023-03-17", tag: "Exam", cohorts: ["Session-2022-23"], program: "Undergraduate" },
    { id: 504, title: "Eid-ul-Fitr Break", start: "2023-04-19", end: "2023-04-26", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 505, title: "Final Exams (Spring 2023)", start: "2023-06-05", end: "2023-06-15", tag: "Exam", cohorts: ["Session-2022-23"], program: "Undergraduate" },
    { id: 506, title: "Fall Registration Opens", date: "2023-08-10", tag: "Registration", cohorts: ["Session-2023-24"], program: "Undergraduate" },
    { id: 507, title: "Classes Begin (Fall 2023)", date: "2023-09-03", tag: "Semester", cohorts: ["Session-2023-24"], program: "Undergraduate" },
    { id: 508, title: "Midterm Exams (Fall 2023)", start: "2023-10-23", end: "2023-10-27", tag: "Exam", cohorts: ["Session-2023-24"], program: "Undergraduate" },

    // Masters 2023
    { id: 550, title: "Graduate Spring Registration Opens", date: "2023-01-07", tag: "Registration", cohorts: ["Session-2022-23", "Session-2023-24"], program: "Masters" },
    { id: 551, title: "Graduate Seminar (Spring 2023)", date: "2023-03-12", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 552, title: "Graduate Final Exams (Spring 2023)", start: "2023-06-08", end: "2023-06-18", tag: "Exam", cohorts: ["Session-2022-23"], program: "Masters" },

    /* ====================== 2024 (Sessions 2023-24, 2024-25) ====================== */
    { id: 601, title: "Spring Registration Opens", date: "2024-01-08", tag: "Registration", cohorts: ["Session-2023-24", "Session-2024-25"], program: "Undergraduate" },
    { id: 602, title: "Classes Begin (Spring 2024)", date: "2024-01-21", tag: "Semester", cohorts: ["All"], program: "Undergraduate" },
    { id: 603, title: "Midterm Exams (Spring 2024)", start: "2024-03-11", end: "2024-03-15", tag: "Exam", cohorts: ["Session-2023-24"], program: "Undergraduate" },
    { id: 604, title: "Eid-ul-Fitr Break", start: "2024-04-07", end: "2024-04-12", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 605, title: "Final Exams (Spring 2024)", start: "2024-06-03", end: "2024-06-13", tag: "Exam", cohorts: ["Session-2023-24"], program: "Undergraduate" },
    { id: 606, title: "Fall Registration Opens", date: "2024-08-08", tag: "Registration", cohorts: ["Session-2024-25"], program: "Undergraduate" },
    { id: 607, title: "Classes Begin (Fall 2024)", date: "2024-09-01", tag: "Semester", cohorts: ["Session-2024-25"], program: "Undergraduate" },
    { id: 608, title: "Midterm Exams (Fall 2024)", start: "2024-10-21", end: "2024-10-25", tag: "Exam", cohorts: ["Session-2024-25"], program: "Undergraduate" },

    // Masters 2024
    { id: 650, title: "Graduate Spring Registration Opens", date: "2024-01-06", tag: "Registration", cohorts: ["Session-2023-24", "Session-2024-25"], program: "Masters" },
    { id: 651, title: "Graduate Proposal Defense (Spring 2024)", start: "2024-04-02", end: "2024-04-06", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 652, title: "Graduate Final Exams (Spring 2024)", start: "2024-06-06", end: "2024-06-16", tag: "Exam", cohorts: ["Session-2023-24"], program: "Masters" },

    /* ====================== 2025 (Sessions 2024-25, 2025-26) ====================== */
    { id: 701, title: "Spring Registration Opens", date: "2025-01-10", tag: "Registration", cohorts: ["Session-2024-25", "Session-2025-26"], program: "Undergraduate" },
    { id: 702, title: "Classes Begin (Spring 2025)", date: "2025-01-20", tag: "Semester", cohorts: ["All"], program: "Undergraduate" },
    { id: 703, title: "Midterm Exams (Spring 2025)", start: "2025-03-10", end: "2025-03-14", tag: "Exam", cohorts: ["Session-2021-22", "Session-2024-25"], program: "Undergraduate" },
    { id: 704, title: "Bangabandhu Birthday & National Day", date: "2025-03-17", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 705, title: "Independence Day", date: "2025-03-26", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 706, title: "Eid-ul-Fitr Break", start: "2025-03-29", end: "2025-04-03", tag: "Holiday", cohorts: ["All"], program: "All" },
    { id: 707, title: "Final Exams (Spring 2025)", start: "2025-06-09", end: "2025-06-19", tag: "Exam", cohorts: ["Session-2024-25"], program: "Undergraduate" },
    { id: 708, title: "Fall Registration Opens", date: "2025-08-14", tag: "Registration", cohorts: ["Session-2025-26"], program: "Undergraduate" },
    { id: 709, title: "Classes Begin (Fall 2025)", date: "2025-09-01", tag: "Semester", cohorts: ["Session-2025-26"], program: "Undergraduate" },
    { id: 710, title: "Midterm Exams (Fall 2025)", start: "2025-10-20", end: "2025-10-24", tag: "Exam", cohorts: ["Session-2025-26"], program: "Undergraduate" },
    { id: 711, title: "Victory Day", date: "2025-12-16", tag: "Holiday", cohorts: ["All"], program: "All" },

    // Masters 2025
    { id: 750, title: "Graduate Spring Registration Opens", date: "2025-01-08", tag: "Registration", cohorts: ["Session-2024-25", "Session-2025-26"], program: "Masters" },
    { id: 751, title: "Graduate Seminar (Spring 2025)", date: "2025-03-09", tag: "Semester", cohorts: ["All"], program: "Masters" },
    { id: 752, title: "Graduate Final Exams (Spring 2025)", start: "2025-06-12", end: "2025-06-22", tag: "Exam", cohorts: ["Session-2024-25"], program: "Masters" },
];

/* --------------------------- Category styles --------------------------- */
const TAGS = {
    All: { chip: "bg-slate-100 text-slate-700 border-slate-200", label: "All" },
    Semester: { chip: "bg-blue-50 text-blue-700 border-blue-200", label: "Semester" },
    Exam: { chip: "bg-rose-50 text-rose-700 border-rose-200", label: "Exam" },
    Holiday: { chip: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Holiday" },
    Registration: { chip: "bg-indigo-50 text-indigo-700 border-indigo-200", label: "Registration" },
    Recess: { chip: "bg-amber-50 text-amber-800 border-amber-200", label: "Recess" },
};

/* ============================== Component ============================== */
export default function AcademicCalendarList({
    events = ACADEMIC_CAL,
    defaultCohort = "All",
}) {
    // Years present in events
    const years = React.useMemo(() => {
        const set = new Set();
        events.forEach((e) => set.add(getYear(e)));
        return ["All", ...[...set].sort()];
    }, [events]);

    // Cohorts present in events
    const cohorts = React.useMemo(() => {
        const set = new Set();
        events.forEach((e) => (e.cohorts || []).forEach((c) => c !== "All" && set.add(c)));
        return ["All", ...[...set].sort()];
    }, [events]);

    const [program, setProgram] = React.useState("All");
    const [cat, setCat] = React.useState("All");
    const [year, setYear] = React.useState("All");
    const [cohort, setCohort] = React.useState(cohorts.includes(defaultCohort) ? defaultCohort : "All");
    const [q, setQ] = React.useState("");

    const filtered = React.useMemo(() => {
        return events
            .filter((e) => (program === "All" ? true : (e.program === program || e.program === "All")))
            .filter((e) => (cat === "All" ? true : e.tag === cat))
            .filter((e) => (year === "All" ? true : getYear(e) === year))
            .filter((e) => {
                if (cohort === "All") return true;
                const list = e.cohorts || [];
                return list.includes("All") || list.includes(cohort);
            })
            .filter((e) =>
                q.trim()
                    ? e.title.toLowerCase().includes(q.toLowerCase()) ||
                    (e.tag || "").toLowerCase().includes(q.toLowerCase())
                    : true
            )
            .sort((a, b) => getStartDate(a) - getStartDate(b));
    }, [events, program, cat, year, cohort, q]);

    const groups = React.useMemo(() => groupByMonth(filtered), [filtered]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Academic Calendar" subtitle="Filter by program, cohort session, category, and year" />

            {/* Program pills */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
                {PROGRAMS.map((p) => {
                    const active = program === p;
                    return (
                        <button
                            key={p}
                            onClick={() => setProgram(p)}
                            className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${active ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"
                                }`}
                            title={p}
                        >
                            {active && (
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#001BB7] to-[#0046FF]" />
                            )}
                            <span className="relative z-10">{p}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tools */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
                {/* Category chips */}
                <div className="flex flex-wrap items-center gap-2">
                    {Object.keys(TAGS).map((k) => {
                        const active = cat === k;
                        const meta = TAGS[k];
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

                {/* Cohort + Year + Search */}
                <select
                    value={cohort}
                    onChange={(e) => setCohort(e.target.value)}
                    className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    title="Cohort (Batch / Session)"
                >
                    {cohorts.map((c) => (
                        <option key={c} value={c}>
                            {c === "All" ? "All cohorts" : c.replace(/-/g, " ")}
                        </option>
                    ))}
                </select>

                <select
                    value={year}
                    onChange={(e) => setYear(isNaN(e.target.value) ? e.target.value : Number(e.target.value))}
                    className="rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    title="Year"
                >
                    {years.map((y) => (
                        <option key={y} value={y}>
                            {y === "All" ? "All years" : y}
                        </option>
                    ))}
                </select>

                <label className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search events…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>
            </div>

            {/* List by month */}
            <div className="mt-6 space-y-8">
                {groups.length ? (
                    groups.map(({ key, label, items }, gi) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.18, delay: gi * 0.03 }}
                            className="rounded-2xl border border-[#E9E9E9] bg-white overflow-hidden"
                        >
                            <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#E9E9E9]">
                                <div className="inline-flex items-center gap-2">
                                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#F0F4FF] text-[#001BB7]">
                                        <CalendarDays className="h-4 w-4" />
                                    </span>
                                    <h3 className="text-base font-extrabold tracking-tight text-slate-900">{label}</h3>
                                </div>
                                <span className="text-xs rounded-full bg-[#F8FAFF] border border-[#E9E9E9] px-2 py-1 text-slate-700">
                                    {items.length} {items.length === 1 ? "event" : "events"}
                                </span>
                            </div>

                            <ul className="divide-y divide-[#E9E9E9]">
                                {items.map((e) => (
                                    <li key={e.id} className="p-4">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div className="min-w-0">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${chipClass(e.tag)}`}>
                                                        {e.tag}
                                                    </span>
                                                    <p className="text-sm font-semibold text-slate-900">{e.title}</p>
                                                    {e.program && (
                                                        <span className="inline-flex items-center rounded-md border border-[#E9E9E9] bg-[#F8FAFF] px-2 py-0.5 text-[10px] font-medium text-slate-700">
                                                            {e.program}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-600">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {dateLabel(e)}
                                                </p>
                                                {e.cohorts?.length && (
                                                    <p className="mt-1 text-[11px] text-slate-500">
                                                        Cohorts: {e.cohorts.includes("All") ? "All" : e.cohorts.map((c) => c.replace(/-/g, " ")).join(", ")}
                                                    </p>
                                                )}
                                            </div>

                                            <button
                                                onClick={() => downloadICS(e)}
                                                className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                                title="Add to calendar (.ics)"
                                            >
                                                <Download className="h-4 w-4" />
                                                .ics
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))
                ) : (
                    <div className="rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                        No events match your filters.
                    </div>
                )}
            </div>
        </section>
    );
}

/* ============================== Helpers ============================== */
function chipClass(tag) {
    const meta = TAGS[tag] || TAGS.All;
    return `${meta.chip} border`;
}
function getStartDate(e) { return new Date(e.start || e.date); }
function getEndDate(e) { return new Date(e.end || e.date); }
function getYear(e) { return getStartDate(e).getFullYear(); }

function groupByMonth(list) {
    const fmt = new Intl.DateTimeFormat(undefined, { month: "long", year: "numeric" });
    const map = new Map();
    list.forEach((e) => {
        const d = getStartDate(e);
        const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(e);
    });
    return [...map.entries()]
        .sort(([a], [b]) => (a > b ? 1 : -1))
        .map(([key, items]) => ({ key, label: fmt.format(getStartDate(items[0])), items }));
}

function dateLabel(e) {
    const opts = { month: "short", day: "numeric", year: "numeric" };
    const fmt = new Intl.DateTimeFormat(undefined, opts);
    if (e.start && e.end) {
        const s = new Date(e.start), t = new Date(e.end);
        if (s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()) {
            const m = new Intl.DateTimeFormat(undefined, { month: "short" }).format(s);
            return `${m} ${s.getDate()}–${t.getDate()}, ${t.getFullYear()}`;
        }
        return `${fmt.format(s)} – ${fmt.format(t)}`;
    }
    return fmt.format(new Date(e.date));
}

/* ---- .ics download (all-day event; DTEND exclusive) ---- */
function downloadICS(e) {
    const s = new Date(e.start || e.date);
    const t = addDays(new Date(e.end || e.date), 1);
    const uid = `bu-cse-${e.id}@example`;
    const stamp = toICSDateTime(new Date());
    const ics = [
        "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//BU CSE//Academic Calendar//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
        "BEGIN:VEVENT",
        `UID:${uid}`, `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${toICSDate(s)}`, `DTEND;VALUE=DATE:${toICSDate(t)}`,
        `SUMMARY:${escapeICS(e.title)}`, `DESCRIPTION:${escapeICS((e.program ? `[${e.program}] ` : "") + (e.tag || ""))}`,
        "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${e.title.replace(/\s+/g, "-")}.ics`; a.click();
    URL.revokeObjectURL(url);
}
function toICSDate(d) { const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, "0"), day = String(d.getDate()).padStart(2, "0"); return `${y}${m}${day}`; }
function toICSDateTime(d) { const y = d.getUTCFullYear(), m = String(d.getUTCMonth() + 1).padStart(2, "0"), day = String(d.getUTCDate()).padStart(2, "0"), hh = String(d.getUTCHours()).padStart(2, "0"), mm = String(d.getUTCMinutes()).padStart(2, "0"), ss = String(d.getUTCSeconds()).padStart(2, "0"); return `${y}${m}${day}T${hh}${mm}${ss}Z`; }
function addDays(d, n) { const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function escapeICS(s = "") { return String(s).replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n"); }
