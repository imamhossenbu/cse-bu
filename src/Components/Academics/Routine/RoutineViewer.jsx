// src/Components/Routine/RoutineViewer.jsx
import React from "react";
import { motion } from "framer-motion";
import { CalendarClock, User2, MapPin, BookOpen, Filter, School, GraduationCap } from "lucide-react";
import Title from "../../Shared/Title";


/* ==================== Your course data (UG + Masters) ==================== */
const UG = [
    {
        sem: 1, courses: [
            { title: "Introduction to Computer Systems", code: "CSE-1101", cr: 3.0, hr: 45 },
            { title: "Computer Systems and Computing Lab", code: "CSE-1102", cr: 0.75, hr: 30 },
            { title: "Programming Fundamentals", code: "CSE-1103", cr: 3.0, hr: 45 },
            { title: "Programming Fundamentals Lab", code: "CSE-1104", cr: 1.5, hr: 45 },
            { title: "Physics", code: "PHY-1105", cr: 3.0, hr: 45 },
            { title: "Physics Lab.", code: "PHY-1106", cr: 1.5, hr: 45 },
            { title: "Chemistry", code: "CHEM-1107", cr: 3.0, hr: 45 },
            { title: "Chemistry Lab", code: "CHEM-1108", cr: 0.75, hr: 45 },
            { title: "Differential Calculus and Co-ordinate Geometry", code: "MATH-1109", cr: 3.0, hr: 45 },
            { title: "English Communication Skills Lab.", code: "ENG-1110", cr: 1.5, hr: 45 },
        ]
    },
    {
        sem: 2, courses: [
            { title: "Data Structures", code: "CSE-1201", cr: 3.0, hr: 45 },
            { title: "Data Structures Lab.", code: "CSE-1202", cr: 0.75, hr: 30 },
            { title: "Discrete Mathematics", code: "CSE-1203", cr: 3.0, hr: 45 },
            { title: "Discrete Mathematics Lab.", code: "CSE-1204", cr: 0.75, hr: 30 },
            { title: "Introduction to Electrical Engineering", code: "EEE-1205", cr: 3.0, hr: 45 },
            { title: "Introduction to Electrical Engineering Lab.", code: "EEE-1206", cr: 1.5, hr: 45 },
            { title: "Basic Mechanical Engineering", code: "EEE-1207", cr: 3.0, hr: 45 },
            { title: "Engineering Drawing", code: "EEE-1208", cr: 0.75, hr: 30 },
            { title: "Integral Calculus, ODE/PDE & Series Solutions", code: "MATH-1209", cr: 3.0, hr: 45 },
            { title: "Statistics and Probability", code: "STAT-1211", cr: 3.0, hr: 45 },
        ]
    },
    {
        sem: 3, courses: [
            { title: "Database Management System", code: "CSE-2101", cr: 3.0, hr: 45 },
            { title: "Database Management System Lab.", code: "CSE-2102", cr: 1.5, hr: 45 },
            { title: "Digital Logic Design", code: "CSE-2103", cr: 3.0, hr: 45 },
            { title: "Digital Logic Design Lab.", code: "CSE-2104", cr: 1.5, hr: 45 },
            { title: "Electronic Devices and Circuits", code: "EEE-2105", cr: 3.0, hr: 45 },
            { title: "Electronic Devices and Circuits Lab.", code: "EEE-2106", cr: 1.5, hr: 45 },
            { title: "Object Oriented Programming", code: "CSE-2107", cr: 3.0, hr: 45 },
            { title: "Object Oriented Programming Lab.", code: "CSE-2108", cr: 1.5, hr: 45 },
            { title: "Complex Variable and Matrices", code: "MATH-2109", cr: 3.0, hr: 45 },
        ]
    },
    {
        sem: 4, courses: [
            { title: "Design and Analysis of Algorithms", code: "CSE-2201", cr: 3.0, hr: 45 },
            { title: "Design and Analysis of Algorithms Lab.", code: "CSE-2202", cr: 1.5, hr: 45 },
            { title: "Computer Architecture and Organization", code: "CSE-2203", cr: 3.0, hr: 45 },
            { title: "Data Communication", code: "CSE-2205", cr: 3.0, hr: 45 },
            { title: "Operating System", code: "CSE-2207", cr: 3.0, hr: 45 },
            { title: "Operating System Lab.", code: "CSE-2208", cr: 1.5, hr: 45 },
            { title: "Web Engineering Lab.", code: "CSE-2210", cr: 3.0, hr: 90 },
            { title: "Vectors, Fourier & Laplace", code: "MATH-2211", cr: 3.0, hr: 45 },
        ]
    },
    {
        sem: 5, courses: [
            { title: "Microprocessors and Microcontrollers", code: "CSE-3101", cr: 3.0, hr: 45 },
            { title: "Assembly/Microprocessors & Microcontrollers Lab.", code: "CSE-3102", cr: 1.5, hr: 45 },
            { title: "Software Eng. & IS Design", code: "CSE-3103", cr: 3.0, hr: 45 },
            { title: "SE & IS Design Lab.", code: "CSE-3104", cr: 1.5, hr: 45 },
            { title: "Computer Networks", code: "CSE-3105", cr: 3.0, hr: 45 },
            { title: "Computer Networks Lab.", code: "CSE-3106", cr: 1.5, hr: 45 },
            { title: "Numerical Methods", code: "CSE-3107", cr: 3.0, hr: 45 },
            { title: "Financial & Managerial Accounting", code: "HUM-3109", cr: 2.0, hr: 30 },
            { title: "Economics", code: "HUM-3209", cr: 2.0, hr: 30 },
            { title: "Technical Writing and Presentation", code: "CSE-3114", cr: 1.0, hr: 30 },
        ]
    },
    {
        sem: 6, courses: [
            { title: "Mathematical Analysis for Computer Science", code: "CSE-3201", cr: 3.0, hr: 45 },
            { title: "Theory of Computation", code: "CSE-3203", cr: 3.0, hr: 45 },
            { title: "Artificial Intelligence", code: "CSE-3205", cr: 3.0, hr: 45 },
            { title: "Artificial Intelligence Lab.", code: "CSE-3206", cr: 1.5, hr: 45 },
            { title: "Peripherals and Interfacing", code: "CSE-3207", cr: 3.0, hr: 45 },
            { title: "Peripherals and Interfacing Lab.", code: "CSE-3208", cr: 1.5, hr: 45 },
            { title: "Simulation and Modeling", code: "CSE-3209", cr: 3.0, hr: 45 },
            { title: "Simulation and Modeling Lab.", code: "CSE-3210", cr: 0.75, hr: 30 },
            { title: "Mobile Application Development Lab.", code: "CSE-3212", cr: 1.5, hr: 30 },
        ]
    },
    {
        sem: 7, courses: [
            { title: "Compiler Design and Construction", code: "CSE-4103", cr: 3.0, hr: 45 },
            { title: "Compiler Design and Construction Lab.", code: "CSE-4104", cr: 0.75, hr: 22.5 },
            { title: "System Programming", code: "CSE-4105", cr: 2.0, hr: 30 },
            { title: "System Programming Lab", code: "CSE-4106", cr: 0.75, hr: 45 },
            { title: "Computer Graphics", code: "CSE-4109", cr: 3.0, hr: 45 },
            { title: "Computer Graphics Lab", code: "CSE-4110", cr: 0.75, hr: 22.5 },
            { title: "Professional Ethics & Industrial Management", code: "HUM-3211", cr: 2.0, hr: 45 },
            { title: "Robotics and Automation", code: "CSE-4101", cr: 3.0, hr: 30 },
            { title: "Robotics and Automation Lab", code: "CSE-4102", cr: 1.5, hr: 15 },
            { title: "Information Retrieval & SEO", code: "CSE-4107", cr: 2.0, hr: 20 },
            { title: "IR & SEO Lab", code: "CSE-4108", cr: 0.75, hr: 20 },
        ]
    },
    {
        sem: 8, courses: [
            { title: "Digital Image Processing", code: "CSE-4201", cr: 3.0, hr: 45 },
            { title: "Project and Thesis", code: "CSE-4202", cr: 6.0, hr: 0 },
            { title: "Mobile Computing", code: "CSE-4225", cr: 3.0, hr: 45 },
            { title: "Mobile Computing Lab", code: "CSE-4226", cr: 1.5, hr: 45 },
            { title: "Machine Learning and Data Mining", code: "CSE-4213", cr: 3.0, hr: 45 },
            { title: "Machine Learning Lab.", code: "CSE-4214", cr: 1.5, hr: 45 },
        ]
    },
];

const MASTERS = [
    {
        title: "MSc (Thesis)",
        courses: [
            { title: "Research Methodology", code: "MSC-6001", cr: 3, hr: 45 },
            { title: "Advanced Machine Learning", code: "MSC-6103", cr: 3, hr: 45 },
            { title: "Graduate Seminar", code: "MSC-6201", cr: 1, hr: 15 },
            { title: "Thesis (Proposal + Defense)", code: "MSC-6999", cr: 9, hr: 0 },
        ],
    },
    {
        title: "MSc (Coursework)",
        courses: [
            { title: "Advanced Algorithms", code: "MSC-6101", cr: 3, hr: 45 },
            { title: "Distributed Systems", code: "MSC-6203", cr: 3, hr: 45 },
            { title: "Information Security", code: "MSC-6305", cr: 3, hr: 45 },
            { title: "Elective I/II/III", code: "MSC-63xx", cr: 9, hr: 135 },
            { title: "Project/Capstone", code: "MSC-6995", cr: 3, hr: 0 },
        ],
    },
];

/* ==================== Routine generator (no sections) ==================== */

// Sessions from 2019-20 up to 2025-26
const SESSIONS = makeSessions(2019, 2026); // ["Session-2019-20", ... , "Session-2025-26"]
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu"]; // (adjust if needed)
const SLOTS = [
    { start: "09:00", end: "10:30" },
    { start: "10:45", end: "12:15" },
    { start: "12:30", end: "14:00" },
    { start: "14:15", end: "15:45" },
];
const LAB_SLOT = { start: "13:30", end: "16:30" };

const TEACHERS = [
    { key: /CSE-11|Programming|Intro/i, teacher: "Dr. Rahat Hossain Faisal", room: "CSE-101" },
    { key: /CSE-12|Data Structures|Discrete/i, teacher: "Nusrat Jahan", room: "CSE-102" },
    { key: /CSE-21|DBMS|Digital/i, teacher: "Dr. Ayesha Karim", room: "CSE-201" },
    { key: /CSE-22|Algo|Arch|OS|Networks/i, teacher: "Dr. Tanvir Hasan", room: "CSE-303" },
    { key: /CSE-31|Software|Micro|Networks/i, teacher: "Md. Imran Ali", room: "CSE-204" },
    { key: /CSE-32|AI|Computation|Simulation/i, teacher: "Arif Mahmud", room: "CSE-304" },
    { key: /CSE-41|Compiler|Graphics|Robotics|IR/i, teacher: "Md. Imran Ali", room: "CSE-402" },
    { key: /CSE-42|DIP|ML|Project|Mobile/i, teacher: "Dr. Ayesha Karim", room: "CSE-403" },
    { key: /^PHY|Physics/i, teacher: "Physics Faculty", room: "PHY-01" },
    { key: /^CHEM|Chemistry/i, teacher: "Chemistry Faculty", room: "CHEM-01" },
    { key: /^EEE/i, teacher: "EEE Faculty", room: "EEE-01" },
    { key: /^MATH|STAT/i, teacher: "Mathematics Faculty", room: "MATH-01" },
    { key: /^ENG|HUM/i, teacher: "Humanities Faculty", room: "HUM-01" },
    { key: /^MSC|^MSc/i, teacher: "Graduate Faculty", room: "Grad-01" },
];

function assignTeacher(code, title) {
    for (const t of TEACHERS) {
        if (t.key.test(code) || t.key.test(title)) return { teacher: t.teacher, room: t.room };
    }
    return { teacher: "TBA", room: "TBA" };
}

// lab detection
const isLab = (c) => /lab/i.test(c.title) || /-2$/.test(c.code);

// generate undergrad routine: for each session & semester, place courses round-robin into days/slots
function buildUGRoutine() {
    const list = [];
    for (const session of SESSIONS) {
        UG.forEach(({ sem, courses }) => {
            let di = 0; // day index
            let si = 0; // slot index
            courses.forEach((c) => {
                const { teacher, room } = assignTeacher(c.code, c.title);
                const day = DAYS[di % DAYS.length];
                const slot = isLab(c) ? LAB_SLOT : SLOTS[si % SLOTS.length];

                list.push({
                    id: `${session}-${sem}-${c.code}`,
                    session,
                    semester: sem,
                    day,
                    start: slot.start,
                    end: slot.end,
                    course: `${c.code} ${c.title}`,
                    teacher,
                    room: isLab(c)
                        ? (c.code.includes("CSE") ? "CSE Lab-1" : "Dept Lab")
                        : room,
                });

                // advance indices (labs take afternoon; bump day)
                if (isLab(c)) {
                    di += 1; // next day for next course
                    si = 0;  // reset slot for next day
                } else {
                    si += 1;
                    if (si >= SLOTS.length) {
                        si = 0;
                        di += 1;
                    }
                }
            });
        });
    }
    return list;
}

// generate masters routine: split each track into S1/S2 buckets for display
function buildMastersRoutine() {
    const list = [];
    for (const session of SESSIONS) {
        MASTERS.forEach((track) => {
            const half = Math.ceil(track.courses.length / 2);
            const buckets = [
                { term: 1, set: track.courses.slice(0, half) },
                { term: 2, set: track.courses.slice(half) },
            ];
            let di = 0, si = 0;
            buckets.forEach(({ term, set }) => {
                set.forEach((c) => {
                    const { teacher, room } = assignTeacher(c.code, c.title);
                    const day = DAYS[di % DAYS.length];
                    const slot = isLab(c) ? LAB_SLOT : SLOTS[si % SLOTS.length];

                    list.push({
                        id: `${session}-M-${track.title}-${term}-${c.code}`,
                        session,
                        track: track.title,
                        term,
                        day,
                        start: slot.start,
                        end: slot.end,
                        course: `${c.code} ${c.title}`,
                        teacher,
                        room: isLab(c) ? "Grad Lab" : room,
                    });

                    if (isLab(c)) { di += 1; si = 0; } else { si += 1; if (si >= SLOTS.length) { si = 0; di += 1; } }
                });
            });
        });
    }
    return list;
}

const ROUTINE_UG = buildUGRoutine();
const ROUTINE_MS = buildMastersRoutine();

/* ==================== Component ==================== */

export default function RoutineViewer() {
    const [tab, setTab] = React.useState("Undergraduate");

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title="Class Routine" subtitle="Session-wise schedules generated from your curriculum" />

            {/* Tabs: Undergrad / Masters */}
            <div className="mt-2 flex flex-wrap gap-2">
                <TabPill active={tab === "Undergraduate"} onClick={() => setTab("Undergraduate")} icon={<School className="h-4 w-4" />}>
                    Undergraduate
                </TabPill>
                <TabPill active={tab === "Masters"} onClick={() => setTab("Masters")} icon={<GraduationCap className="h-4 w-4" />}>
                    Masters
                </TabPill>
            </div>

            {tab === "Undergraduate" ? <UndergradView /> : <MastersView />}
        </section>
    );
}

/* ------------------------ Undergrad View ------------------------ */

function UndergradView() {
    const [session, setSession] = React.useState(SESSIONS[SESSIONS.length - 1]); // latest
    const semesters = UG.map((u) => u.sem);
    const [semester, setSemester] = React.useState(semesters[0]);
    const [day, setDay] = React.useState("All");
    const [q, setQ] = React.useState("");

    const items = React.useMemo(() => {
        const needle = q.trim().toLowerCase();
        return ROUTINE_UG
            .filter((r) => r.session === session && r.semester === semester)
            .filter((r) => (day === "All" ? true : r.day === day))
            .filter((r) => (needle ? (r.course + " " + r.teacher + " " + r.room).toLowerCase().includes(needle) : true))
            .sort((a, b) => timeToMin(a.start) - timeToMin(b.start));
    }, [session, semester, day, q]);

    const grouped = groupByDay(items, day);

    return (
        <>
            <Filters
                left={
                    <>
                        <Select label="Session" value={session} onChange={setSession} options={SESSIONS} />
                        <Select label="Semester" value={semester} onChange={setSemester} options={semesters} />
                        <Select label="Day" value={day} onChange={setDay} options={["All", ...DAYS]} />
                    </>
                }
                search={{ q, setQ, placeholder: "Course / teacher / room…" }}
                summary={{ count: items.length, extra: `${session} · Semester ${semester}` + (day !== "All" ? ` · ${day}` : "") }}
            />

            <DayLists grouped={grouped} />
        </>
    );
}

/* ------------------------ Masters View ------------------------ */

function MastersView() {
    const tracks = [...new Set(MASTERS.map((m) => m.title))];
    const [session, setSession] = React.useState(SESSIONS[SESSIONS.length - 1]);
    const [track, setTrack] = React.useState(tracks[0]);
    const [term, setTerm] = React.useState("All");
    const [day, setDay] = React.useState("All");
    const [q, setQ] = React.useState("");

    const items = React.useMemo(() => {
        const needle = q.trim().toLowerCase();
        return ROUTINE_MS
            .filter((r) => r.session === session && r.track === track)
            .filter((r) => (term === "All" ? true : r.term === Number(term)))
            .filter((r) => (day === "All" ? true : r.day === day))
            .filter((r) => (needle ? (r.course + " " + r.teacher + " " + r.room).toLowerCase().includes(needle) : true))
            .sort((a, b) => timeToMin(a.start) - timeToMin(b.start));
    }, [session, track, term, day, q]);

    const grouped = groupByDay(items, day);

    return (
        <>
            <Filters
                left={
                    <>
                        <Select label="Session" value={session} onChange={setSession} options={SESSIONS} />
                        <Select label="Track" value={track} onChange={setTrack} options={tracks} />
                        <Select label="Term" value={term} onChange={setTerm} options={["All", 1, 2]} />
                        <Select label="Day" value={day} onChange={setDay} options={["All", ...DAYS]} />
                    </>
                }
                search={{ q, setQ, placeholder: "Course / teacher / room…" }}
                summary={{ count: items.length, extra: `${session} · ${track}` + (term !== "All" ? ` · Term ${term}` : "") + (day !== "All" ? ` · ${day}` : "") }}
            />

            <DayLists grouped={grouped} />
        </>
    );
}

/* ------------------------ Shared UI bits ------------------------ */

function Filters({ left, search, summary }) {
    return (
        <>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-3">
                <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">{left}</div>
                <label className="text-sm md:col-span-4">
                    <span className="mb-1 block text-slate-700">Search</span>
                    <div className="relative">
                        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            value={search.q}
                            onChange={(e) => search.setQ(e.target.value)}
                            placeholder={search.placeholder}
                            className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                        />
                    </div>
                </label>
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                <CalendarClock className="h-4 w-4 text-[#001BB7]" />
                <span className="font-semibold text-slate-900">{summary.count} class{summary.count !== 1 ? "es" : ""}</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-700">{summary.extra}</span>
            </div>
        </>
    );
}

function DayLists({ grouped }) {
    return (
        <div className="mt-6 space-y-6">
            {grouped.length ? (
                grouped.map((g, i) => (
                    <motion.div
                        key={g.day}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.18, delay: i * 0.05 }}
                        className="rounded-2xl border border-[#E9E9E9] bg-white overflow-hidden"
                    >
                        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#E9E9E9]">
                            <h3 className="text-base font-extrabold tracking-tight text-slate-900">{g.day}</h3>
                            <span className="text-xs rounded-full bg-[#F8FAFF] border border-[#E9E9E9] px-2 py-1 text-slate-700">{g.items.length} classes</span>
                        </div>
                        <ul className="divide-y divide-[#E9E9E9]">
                            {g.items.map((c, idx) => (
                                <motion.li
                                    key={c.id}
                                    initial={{ opacity: 0, x: 6 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.16, delay: idx * 0.02 }}
                                    className="p-4"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <div className="min-w-0">
                                            <p className="text-sm font-semibold text-slate-900">
                                                <span className="inline-flex items-center gap-2">
                                                    <span className="rounded-md bg-[#F0F4FF] px-2 py-0.5 text-xs font-medium text-[#001BB7]">
                                                        {c.start}–{c.end}
                                                    </span>
                                                    <span className="truncate">{c.course}</span>
                                                </span>
                                            </p>
                                            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                                                <span className="inline-flex items-center gap-1"><User2 className="h-3.5 w-3.5" /> {c.teacher}</span>
                                                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {c.room}</span>
                                                <span className="inline-flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" /> {c.day}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))
            ) : (
                <div className="rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                    No classes found for the selected filters.
                </div>
            )}
        </div>
    );
}

function Select({ label, value, onChange, options }) {
    return (
        <label className="text-sm">
            <span className="mb-1 block text-slate-700">{label}</span>
            <select
                value={value}
                onChange={(e) => onChange(isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value))}
                className="w-full rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
            >
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
        </label>
    );
}

function TabPill({ active, onClick, children, icon }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${active ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"}`}
        >
            {active && (
                <motion.span
                    layoutId="routine-pill"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#001BB7] to-[#0046FF]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            )}
            <span className="relative z-10 inline-flex items-center gap-2">
                {icon}
                {children}
            </span>
        </button>
    );
}

/* ==================== helpers ==================== */

function makeSessions(startYear, endYear) {
    const arr = [];
    for (let y = startYear; y < endYear; y++) {
        const next = String((y + 1) % 100).padStart(2, "0");
        arr.push(`Session-${y}-${next}`);
    }
    return arr;
}
function timeToMin(t) { const [h, m] = t.split(":").map(Number); return h * 60 + m; }
function groupByDay(items, dayFilter) {
    const map = new Map();
    for (const r of items) {
        if (!map.has(r.day)) map.set(r.day, []);
        map.get(r.day).push(r);
    }
    const days = dayFilter === "All" ? DAYS : [dayFilter];
    return days.filter((d) => map.has(d)).map((d) => ({ day: d, items: map.get(d) }));
}
