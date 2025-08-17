
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BookOpen, FileDown, ChevronDown, GraduationCap, School, X } from "lucide-react";
import Title from "../../Shared/Title";


/* ---------------- Syllabus data (extend as you like) ---------------- */
const SYLLABI = {
    "CSE-1101": {
        overview:
            "Foundations of computer systems: number systems, data representation, CPU/memory basics, OS concepts, and problem solving for computing.",
        outcomes: [
            "Explain core components of a modern computer system",
            "Use number systems and data representation correctly",
            "Relate OS responsibilities to program execution",
            "Apply basic problem-solving strategies to CS tasks",
        ],
        topics: [
            "Number systems & data representation",
            "Von Neumann model, CPU, memory, I/O",
            "Intro to operating systems & processes",
            "Intro to problem solving for programming",
        ],
        assessment: "Quiz 10%, Midterm 30%, Assignments 10%, Final 50%",
        references: [
            "Patterson & Hennessy, *Computer Organization and Design*",
            "Stallings, *Computer Organization and Architecture*",
        ],
    },
    "CSE-1103": {
        overview:
            "First programming course: variables, control flow, functions, arrays, pointers/refs, and problem decomposition.",
        outcomes: [
            "Write small to medium programs with structured control",
            "Trace and debug imperative code",
            "Model problems using functions and arrays",
        ],
        topics: ["C/CPP/Python syntax basics", "Control flow", "Functions", "Arrays & pointers/refs"],
        assessment: "Lab 20%, Assignments 15%, Midterm 25%, Final 40%",
        references: ["Kernighan & Ritchie, *C Programming Language*"],
    },
    "CSE-1201": {
        overview: "Abstract data types, lists, stacks, queues, trees, and hash tables; complexity and tradeoffs.",
        outcomes: [
            "Implement core ADTs",
            "Analyze time/space complexity",
            "Choose appropriate structures for tasks",
        ],
        topics: ["Lists/Stacks/Queues", "Trees & BSTs", "Hashing", "Complexity & Big-O"],
    },
    "CSE-2101": {
        overview:
            "Relational model, SQL, schema design, normalization, transactions, and basic query optimization.",
        topics: ["ER modeling", "Relational algebra", "SQL", "Normalization", "Transactions"],
    },
    "CSE-2201": {
        overview: "Algorithm design strategies with rigorous analysis.",
        topics: ["Divide & conquer", "Greedy", "DP", "Graphs", "NP-Completeness (intro)"],
    },
    "CSE-3105": {
        overview: "Network models and protocols from physical to transport layers; basic routing & congestion.",
        topics: ["OSI/TCP-IP", "Link/ARQ", "Routing", "Transport (TCP/UDP)", "Intro to apps"],
    },
    "CSE-3205": {
        overview: "Classical AI & modern ML overview; search, knowledge, and learning foundations.",
        topics: ["Search", "Knowledge & reasoning", "Supervised learning (intro)"],
    },
    "CSE-4103": {
        overview: "Compiler phases: lexical, syntax, semantic analysis; IR, optimization, code generation.",
        topics: ["Lexer/Parser", "Type checking", "IR/CFG", "Register allocation"],
    },
    "CSE-4201": {
        overview: "Fundamentals of digital image processing and vision pipeline.",
        topics: ["Filtering", "Transforms", "Segmentation", "Features"],
    },
};

/* --------------------------- UNDERGRAD DATA --------------------------- */
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

/* --------------------------- MASTERS (placeholder) --------------------------- */
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

/* ======================================================================= */

export default function CourseCatalog() {
    const [tab, setTab] = React.useState("Undergraduate");
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Program Curriculum" subtitle="Browse course structures for Undergraduate and Masters" />

            {/* Tabs */}
            <div className="mt-4 flex flex-wrap gap-2">
                <Pill active={tab === "Undergraduate"} onClick={() => setTab("Undergraduate")} icon={<School className="h-4 w-4" />}>
                    Undergraduate
                </Pill>
                <Pill active={tab === "Masters"} onClick={() => setTab("Masters")} icon={<GraduationCap className="h-4 w-4" />}>
                    Masters
                </Pill>
            </div>

            {tab === "Undergraduate" ? <UndergradView /> : <MastersView />}
        </section>
    );
}

/* --------------------------- UNDERGRAD VIEW --------------------------- */

function UndergradView() {
    const [q, setQ] = React.useState("");
    const [openCourse, setOpenCourse] = React.useState(null); // {title, code, cr, hr}

    const filtered = React.useMemo(() => {
        if (!q.trim()) return UG;
        const needle = q.toLowerCase();
        return UG.map((blk) => ({
            ...blk,
            courses: blk.courses.filter(
                (c) => c.title.toLowerCase().includes(needle) || c.code.toLowerCase().includes(needle)
            ),
        })).filter((blk) => blk.courses.length > 0);
    }, [q]);

    const allCourses = UG.reduce((acc, s) => acc + s.courses.length, 0);
    const allCr = UG.flatMap((s) => s.courses).reduce((a, c) => a + c.cr, 0);
    const allHr = UG.flatMap((s) => s.courses).reduce((a, c) => a + (c.hr || 0), 0);

    return (
        <>
            {/* Tools */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <label className="relative w-full sm:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search by code or title (e.g., CSE-3101, Algorithms)…"
                        className="w-full rounded-xl border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                    />
                </label>

                <div className="inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                    <BookOpen className="h-4 w-4 text-[#001BB7]" />
                    <span className="font-semibold text-slate-900">{allCourses} courses</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-700">{fmt(allCr)} credits</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-700">{fmt(allHr)} hours</span>
                </div>

                <a
                    href="/assets/undergrad-syllabus.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001BB7]"
                >
                    <FileDown className="h-4 w-4" />
                    Download Syllabus
                </a>
            </div>

            {/* Semesters */}
            <div className="mt-6 space-y-4">
                {filtered.length ? (
                    filtered.map((blk, i) => (
                        <SemesterCard key={blk.sem} i={i} {...blk} onOpen={(course) => setOpenCourse(course)} />
                    ))
                ) : (
                    <div className="rounded-2xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                        No courses match your search.
                    </div>
                )}
            </div>

            {/* Modal */}
            <CourseSyllabusModal
                course={openCourse}
                syllabus={openCourse ? SYLLABI[openCourse.code] : null}
                onClose={() => setOpenCourse(null)}
            />
        </>
    );
}

function SemesterCard({ sem, courses, i, onOpen }) {
    const totalCr = courses.reduce((a, c) => a + c.cr, 0);
    const totalHr = courses.reduce((a, c) => a + (c.hr || 0), 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: i * 0.03 }}
            className="overflow-hidden rounded-2xl border border-[#E9E9E9] bg-white"
        >
            <details open className="group">
                <summary className="flex cursor-pointer select-none items-center justify-between gap-3 px-4 py-3 border-b border-[#E9E9E9]">
                    <div className="inline-flex items-center gap-3">
                        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#F0F4FF] text-[#001BB7] text-sm font-bold">
                            {sem}
                        </span>
                        <h3 className="text-base font-extrabold tracking-tight text-slate-900">Semester {sem}</h3>
                        <span className="text-xs text-slate-600">
                            · {courses.length} courses · {fmt(totalCr)} credits · {fmt(totalHr)} hours
                        </span>
                    </div>
                    <ChevronDown className="h-5 w-5 text-slate-400 transition group-open:rotate-180" />
                </summary>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-[#F8FAFF]">
                            <tr className="text-left text-slate-600">
                                <th className="px-4 py-2 font-medium">Course Title</th>
                                <th className="px-4 py-2 font-medium">Course Code</th>
                                <th className="px-4 py-2 font-medium">Credit</th>
                                <th className="px-4 py-2 font-medium">Hour</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E9E9E9]">
                            {courses.map((c) => (
                                <tr
                                    key={c.code}
                                    onClick={() => onOpen?.(c)}
                                    className="cursor-pointer hover:bg-[#F8FAFF] transition"
                                    title="View syllabus"
                                >
                                    <td className="px-4 py-2 text-slate-900">{c.title}</td>
                                    <td className="px-4 py-2 text-slate-700">{c.code}</td>
                                    <td className="px-4 py-2 text-slate-900">{fmt(c.cr)}</td>
                                    <td className="px-4 py-2 text-slate-700">{c.hr ? fmt(c.hr) : "—"}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="bg-[#FFF8F3]">
                                <td className="px-4 py-2 font-semibold text-slate-900">Totals</td>
                                <td className="px-4 py-2 text-slate-700">{courses.length} courses</td>
                                <td className="px-4 py-2 font-semibold text-slate-900">{fmt(totalCr)}</td>
                                <td className="px-4 py-2 font-semibold text-slate-900">{fmt(totalHr)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </details>
        </motion.div>
    );
}

/* --------------------------- MASTERS VIEW --------------------------- */

function MastersView() {
    const [openCourse, setOpenCourse] = React.useState(null);
    const totalCr = MASTERS.flatMap((t) => t.courses).reduce((a, c) => a + c.cr, 0);

    return (
        <>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-sm">
                    <BookOpen className="h-4 w-4 text-[#001BB7]" />
                    <span className="font-semibold text-slate-900">{MASTERS.length} tracks</span>
                    <span className="text-slate-500">·</span>
                    <span className="text-slate-700">{fmt(totalCr)} total credits (sample)</span>
                </div>
                <a
                    href="/assets/masters-prospectus.pdf"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001BB7]"
                >
                    <FileDown className="h-4 w-4" />
                    Download Prospectus
                </a>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                {MASTERS.map((t, i) => (
                    <motion.div
                        key={t.title}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.18, delay: i * 0.05 }}
                        className="rounded-2xl border border-[#E9E9E9] bg-white overflow-hidden"
                    >
                        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#E9E9E9]">
                            <h3 className="text-base font-extrabold tracking-tight text-slate-900">{t.title}</h3>
                            <span className="text-xs rounded-full bg-[#F8FAFF] border border-[#E9E9E9] px-2 py-1 text-slate-700">
                                {t.courses.length} courses
                            </span>
                        </div>
                        <ul className="divide-y divide-[#E9E9E9]">
                            {t.courses.map((c) => (
                                <li
                                    key={c.code}
                                    className="px-4 py-2 text-sm cursor-pointer hover:bg-[#F8FAFF]"
                                    onClick={() => setOpenCourse(c)}
                                    title="View syllabus"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="min-w-0">
                                            <p className="font-semibold text-slate-900">{c.title}</p>
                                            <p className="text-xs text-slate-600">{c.code}</p>
                                        </div>
                                        <div className="text-right text-slate-700">
                                            <div className="font-semibold">{fmt(c.cr)} cr</div>
                                            <div className="text-xs">{c.hr ? `${fmt(c.hr)} hrs` : "—"}</div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <CourseSyllabusModal
                course={openCourse}
                syllabus={openCourse ? SYLLABI[openCourse.code] : null}
                onClose={() => setOpenCourse(null)}
            />

            <p className="mt-3 text-xs text-slate-500">Replace Masters sample data with your official course list when available.</p>
        </>
    );
}

/* --------------------------- Syllabus Modal --------------------------- */

function CourseSyllabusModal({ course, syllabus, onClose }) {
    // close on ESC
    React.useEffect(() => {
        if (!course) return;
        const onKey = (e) => e.key === "Escape" && onClose?.();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [course, onClose]);

    return (
        <AnimatePresence>
            {course && (
                <motion.div
                    className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm"
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
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.98 }}
                            transition={{ duration: 0.18 }}
                            className="w-full max-w-3xl rounded-2xl border border-[#E9E9E9] bg-white shadow-2xl"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="syllabus-title"
                        >
                            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-[#E9E9E9]">
                                <div className="min-w-0">
                                    <h3 id="syllabus-title" className="text-lg font-extrabold tracking-tight text-slate-900 truncate">
                                        {course.title}
                                    </h3>
                                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                                        <span className="inline-flex items-center rounded-md bg-[#F0F4FF] px-2 py-0.5 text-[#001BB7] border border-[#0046FF]/20">
                                            {course.code}
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-[#FFF8F3] px-2 py-0.5 text-[#A65100] border border-[#FF8040]/20">
                                            {fmt(course.cr)} cr
                                        </span>
                                        <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-slate-700 border border-slate-200">
                                            {course.hr ? `${fmt(course.hr)} hrs` : "Hours: N/A"}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="rounded-lg p-2 hover:bg-slate-100 text-slate-600"
                                    aria-label="Close"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="px-5 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
                                {syllabus ? (
                                    <>
                                        {syllabus.overview && (
                                            <section>
                                                <h4 className="text-sm font-semibold text-slate-900">Overview</h4>
                                                <p className="mt-1 text-sm text-slate-700">{syllabus.overview}</p>
                                            </section>
                                        )}

                                        {Array.isArray(syllabus.outcomes) && syllabus.outcomes.length > 0 && (
                                            <section>
                                                <h4 className="text-sm font-semibold text-slate-900">Learning Outcomes</h4>
                                                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700 space-y-1">
                                                    {syllabus.outcomes.map((o, i) => (
                                                        <li key={i}>{o}</li>
                                                    ))}
                                                </ul>
                                            </section>
                                        )}

                                        {Array.isArray(syllabus.topics) && syllabus.topics.length > 0 && (
                                            <section>
                                                <h4 className="text-sm font-semibold text-slate-900">Topics</h4>
                                                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700 space-y-1">
                                                    {syllabus.topics.map((t, i) => (
                                                        <li key={i}>{t}</li>
                                                    ))}
                                                </ul>
                                            </section>
                                        )}

                                        {syllabus.assessment && (
                                            <section>
                                                <h4 className="text-sm font-semibold text-slate-900">Assessment</h4>
                                                <p className="mt-1 text-sm text-slate-700">{syllabus.assessment}</p>
                                            </section>
                                        )}

                                        {Array.isArray(syllabus.references) && syllabus.references.length > 0 && (
                                            <section>
                                                <h4 className="text-sm font-semibold text-slate-900">References</h4>
                                                <ul className="mt-1 list-disc pl-5 text-sm text-slate-700 space-y-1">
                                                    {syllabus.references.map((r, i) => (
                                                        <li key={i}>{r}</li>
                                                    ))}
                                                </ul>
                                            </section>
                                        )}
                                    </>
                                ) : (
                                    <div className="rounded-lg border border-[#E9E9E9] bg-[#F8FAFF] p-4 text-sm text-slate-700">
                                        Syllabus coming soon for <span className="font-semibold">{course.code}</span>.
                                    </div>
                                )}
                            </div>

                            <div className="px-5 py-3 border-t border-[#E9E9E9] text-right">
                                <button
                                    onClick={onClose}
                                    className="inline-flex items-center rounded-xl border border-[#E9E9E9] bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-[#F5F7FF]"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

/* --------------------------- UI bits --------------------------- */

function Pill({ active, onClick, children, icon }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${active ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"
                }`}
        >
            {active && (
                <motion.span
                    layoutId="prog-pill"
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

/* --------------------------- helpers --------------------------- */
function fmt(n) {
    // keep two decimals to be consistent in table; hide .00 visually for integers if you prefer
    const x = Number(n);
    return Number.isFinite(x) ? (Math.round(x * 100) / 100).toFixed(2) : n;
}
