// src/Pages/FacultyStaff.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Search as SearchIcon,
    Mail,
    Phone,
    GraduationCap,
    Users2,
    ArrowRight,
} from "lucide-react";

import Hero from "../Components/Shared/Hero";
import Title from "../Components/Shared/Title";

/* ---------------- Data (category can be string OR string[]) ---------------- */
const FACULTY = [
    {
        name: "Dr. Rahat Hossain Faisal",
        role: "Associate Professor & Chair",
        area: "",
        category: ["Head", "Associate Professor"],
        email: "rhfaisal@bu.ac.bd",
        phone: "+8801733977761",
        img: "/assets/chairman.jpg",
    },
    {
        name: "Dr. Md Manjur Ahmed",
        role: "Associate Professor",
        area: "",
        category: "Associate Professor",
        email: " mmahmed@bu.ac.bd",
        phone: "+8801851924944",
        img: "/assets/monjur.jpg",
    },
    {
        name: "Md. Erfan",
        role: "Assistant Professor",
        area: "",
        category: "Assistant Professor",
        email: "",
        phone: "",
        img: "/assets/irfan.jpg",
    },
    {
        name: "Md Mostafijur Rahman",
        role: "Assistant Professor",
        area: "",
        category: "Assistant Professor",
        email: "mostafij.csebu@gmail.com",
        phone: "+8801739097182",
        img: "/assets/mustafij.jpg",
    },
    {
        name: "Md Samsuddoha",
        role: "Assistant Professor",
        area: "Software Engineer",
        category: "Assistant Professor",
        email: "msamsuddoha@bu.ac.bd",
        phone: "+8801737349075",
        img: "/assets/sams.jpg",
    },
    {
        name: "Dr. Tania Islam",
        role: "Assistant Professor",
        area: "",
        category: "Assistant Professor",
        email: "tania.bd.09@gmail.com",
        phone: "+8801059505136",
        img: "/assets/tania.jpg",
    },
    {
        name: "Sohely Jahan",
        role: "Assistant Professor",
        area: "",
        category: "Assistant Professor",
        email: "sojahan@bu.ac.bd",
        phone: "+8801317419066",
        img: "/assets/sohely.jpg",
    },
    {
        name: "Md. Rashid Al Asif",
        role: "Assistant Professor",
        area: "",
        category: "Assistant Professor",
        email: " mraasif@bu.ac.bd",
        phone: "+8801734528367",
        img: "/assets/asif.jpg",
    },
    {
        name: "Md Mahbub E Noor",
        role: "Assistant Professor",
        area: "",
        category: "Assistant Professor",
        email: "mmenoor@bu.ac.bd",
        phone: "+8801718916201",
        img: "/assets/noor.png",
    },
];

const STAFF = [
    {
        name: "Farjana Yesmin",
        role: "Section Officer",
        area: "Office & Coordination",
        category: "Officer",
        email: "yesminfarjana61@gmail.com",
        phone: "+8801783917785",
        img: "/assets/farjana.jpg",
    },
    {
        name: "Abu Rayhan",
        role: "Junior Instrument Engineer",
        area: "Insrtuments",
        category: "Officer",
        email: " arayhan@bu.ac.bd",
        phone: "+8801771451204",
        img: "/assets/rayhan.jpg",
    },

    {
        name: "Habib Ullah",
        role: "Lab Assistant",
        area: "Networks",
        category: "Lab Staff",
        email: "habib@bu.ac.bd",
        phone: "+8801XXXXXXXXX",
        img: "/assets/staff/habib.jpg",
    },
];

/* Preferred ordering (add Head first) */
const FACULTY_ORDER = [
    "Head",
    "Professor",
    "Associate Professor",
    "Assistant Professor",
    "Lecturer",
    "Adjunct",
];

const STAFF_ORDER = [
    "Officer",
    "Lab Staff",
    "Technical Staff",
    "Support Staff",
];

/* ---------------- Page ---------------- */
export default function FacultyStaffPage() {
    const [tab, setTab] = React.useState("Faculty");
    const [query, setQuery] = React.useState("");
    const [catFilter, setCatFilter] = React.useState("All");

    const data = tab === "Faculty" ? FACULTY : STAFF;
    const order = tab === "Faculty" ? FACULTY_ORDER : STAFF_ORDER;

    React.useEffect(() => {
        setCatFilter("All");
        setQuery("");
    }, [tab]);

    const catsOf = (p) => {
        const c = p.category;
        if (Array.isArray(c)) return c.length ? c : ["Others"];
        return c ? [c] : ["Others"];
    };

    // query filter
    const filteredByQuery = React.useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return data;
        return data.filter(
            (p) =>
                p.name.toLowerCase().includes(q) ||
                p.role.toLowerCase().includes(q) ||
                (p.area || "").toLowerCase().includes(q) ||
                catsOf(p).some((c) => c.toLowerCase().includes(q))
        );
    }, [data, query]);

    // category counts from query-filtered set
    const catCounts = React.useMemo(() => {
        const map = new Map();
        for (const p of filteredByQuery) {
            for (const c of catsOf(p)) {
                map.set(c, (map.get(c) || 0) + 1);
            }
        }
        const ordered = [
            ...order.filter((c) => map.has(c)),
            ...[...map.keys()].filter((c) => !order.includes(c)),
        ];
        return ordered.map((c) => ({ cat: c, count: map.get(c) }));
    }, [filteredByQuery, order]);

    // apply category filter
    const filtered = React.useMemo(() => {
        if (catFilter === "All") return filteredByQuery;
        return filteredByQuery.filter((p) => catsOf(p).includes(catFilter));
    }, [filteredByQuery, catFilter]);

    // group for rendering (duplicates across sections are intentional)
    const grouped = React.useMemo(() => {
        const map = new Map();
        for (const p of filtered) {
            for (const c of catsOf(p)) {
                if (catFilter !== "All" && c !== catFilter) continue; // keep only selected
                if (!map.has(c)) map.set(c, []);
                map.get(c).push(p);
            }
        }
        const orderedCats =
            catFilter === "All"
                ? [
                    ...order.filter((c) => map.has(c)),
                    ...[...map.keys()].filter((c) => !order.includes(c)),
                ]
                : [catFilter].filter((c) => map.has(c));
        return orderedCats.map((cat) => ({ cat, items: map.get(cat) }));
    }, [filtered, order, catFilter]);

    return (
        <>
            <Hero
                title="Faculty & Staff"
                subtitle="Meet the people who teach, mentor, and keep the department running"
                bgImage="/assets/faculty.jpg"
                height="sm"
                overlayOpacity={0.45}
            />

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <Title title="Directory" subtitle="Browse by category or search by name/area" />

                {/* Tabs */}
                <div className="mt-4 rounded-2xl border border-[#E9E9E9] bg-white p-2">
                    <div className="flex flex-wrap gap-2">
                        <TabButton
                            active={tab === "Faculty"}
                            onClick={() => setTab("Faculty")}
                            icon={<GraduationCap className="h-4 w-4" />}
                        >
                            Faculty
                        </TabButton>
                        <TabButton
                            active={tab === "Staff"}
                            onClick={() => setTab("Staff")}
                            icon={<Users2 className="h-4 w-4" />}
                        >
                            Staff
                        </TabButton>
                    </div>
                </div>

                {/* Search + Category filter */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <FilterChip
                            active={catFilter === "All"}
                            onClick={() => setCatFilter("All")}
                            label="All"
                            count={filteredByQuery.length}
                        />
                        {catCounts.map(({ cat, count }) => (
                            <FilterChip
                                key={cat}
                                active={catFilter === cat}
                                onClick={() => setCatFilter(cat)}
                                label={cat}
                                count={count}
                            />
                        ))}
                    </div>

                    <label className="relative w-full sm:w-72">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={`Search ${tab.toLowerCase()}…`}
                            className="w-full rounded-lg border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                        />
                    </label>
                </div>

                {/* Grouped sections (person can appear in multiple groups) */}
                <div className="mt-8 space-y-10">
                    {grouped.map(({ cat, items }, gi) => (
                        <section key={cat} className="scroll-mt-24">
                            <GroupTitle>{cat}</GroupTitle>
                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {items.map((p, i) => (
                                    <PersonCard
                                        key={`${p.email}-${cat}`} // key includes cat to avoid conflicts
                                        person={p}
                                        index={gi * 0.05 + i * 0.03}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}

                    {!grouped.length && (
                        <div className="rounded-xl border border-[#E9E9E9] bg-white p-8 text-center text-sm text-slate-600">
                            No results found.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

/* ---------------- Small components ---------------- */

function TabButton({ active, onClick, children, icon }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${active ? "text-white" : "text-[#001BB7] hover:bg-[#F0F4FF]"
                }`}
        >
            {active && (
                <motion.span
                    layoutId="dir-tab-pill"
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

function FilterChip({ active, onClick, label, count }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${active
                ? "border-[#0046FF] bg-[#F0F4FF] text-[#001BB7]"
                : "border-[#E9E9E9] bg-white text-slate-700 hover:bg-[#F8FAFF]"
                }`}
        >
            {label}
            <span className="text-[10px] text-slate-500">{count}</span>
        </button>
    );
}

function GroupTitle({ children }) {
    return (
        <div className="inline-flex flex-col">
            <h3 className="text-lg font-extrabold tracking-tight text-slate-900">
                {children}
            </h3>
            <span className="mt-1 h-1 w-10 rounded-full bg-[#FF8040]" />
        </div>
    );
}

// function PersonCard({ person, index = 0 }) {
//     const [imgError, setImgError] = React.useState(false);
//     const initials = person.name
//         .split(" ")
//         .map((n) => n[0])
//         .slice(0, 2)
//         .join("");

//     return (
//         <motion.article
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ duration: 0.18, delay: index }}
//             className="rounded-2xl border border-[#E9E9E9] bg-white p-5 shadow-sm"
//         >
//             {/* avatar */}
//             <div className="flex justify-center">
//                 <div className="relative h-24 w-24 -mt-2 rounded-xl overflow-hidden ring-1 ring-[#E9E9E9] bg-[#F8FAFF]">
//                     {!imgError ? (
//                         <img
//                             src={person.img}
//                             alt={person.name}
//                             className="h-full w-full object-cover"
//                             loading="lazy"
//                             onError={() => setImgError(true)}
//                         />
//                     ) : (
//                         <div className="grid h-full w-full place-items-center text-[#001BB7] font-extrabold">
//                             {initials}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* basic info */}
//             <div className="mt-4 text-center">
//                 <h4 className="text-base font-extrabold tracking-tight text-slate-900">
//                     {person.name}
//                 </h4>
//                 <p className="text-sm text-slate-600">{person.role}</p>
//                 {person.area && (
//                     <span className="mt-2 inline-flex items-center gap-2 rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-1 text-[11px] font-medium text-[#001BB7]">
//                         {person.area}
//                     </span>
//                 )}

//                 {/* contact lines (email linked, phone as plain text) */}
//                 <div className="mt-3 space-y-1">
//                     {person.email && (
//                         <a
//                             href={`mailto:${person.email}`}
//                             className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0046FF] hover:text-[#001BB7]"
//                             title="Send email"
//                         >
//                             <Mail className="h-4 w-4" />
//                             {person.email}
//                         </a>
//                     )}
//                     <br />
//                     {person.phone && (
//                         <div className="inline-flex items-center gap-1.5 text-sm text-slate-700">
//                             <Phone className="h-4 w-4" />
//                             {person.phone}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* CTA */}
//             <div className="mt-4 flex justify-center">
//                 <Link
//                     to="/faculty"
//                     className="inline-flex items-center gap-1.5 rounded-lg bg-[#0046FF] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#001BB7]"
//                 >
//                     Profile <ArrowRight className="h-4 w-4" />
//                 </Link>
//             </div>
//         </motion.article>
//     );
// }
function PersonCard({ person, index = 0 }) {
    const [imgError, setImgError] = React.useState(false);
    const initials = person.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("");

    return (
        <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: index }}
            className="rounded-2xl border transition-all duration-300 ease-in-out 
hover:scale-105 hover:shadow-md hover:border-gray-300  border-[#E9E9E9] bg-white p-5 shadow-sm"
        >
            <div className="flex items-start gap-5">
                {/* LEFT: rounded image */}
                <div className="shrink-0">
                    <div className="relative h-24 w-24 rounded-xl overflow-hidden ring-1 ring-[#E9E9E9] bg-[#F8FAFF]">
                        {!imgError ? (
                            <img
                                src={person.img}
                                alt={person.name}
                                className="h-full w-full object-cover"
                                loading="lazy"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="grid h-full w-full place-items-center text-[#001BB7] text-xl font-extrabold">
                                {initials}
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: info + contact + bottom button */}
                <div className="min-w-0 flex-1 flex flex-col">
                    {/* name / role / area */}
                    <div>
                        <h4 className="text-base font-extrabold tracking-tight text-slate-900 truncate">
                            {person.name}
                        </h4>
                        <p className="text-sm text-slate-600">{person.role}</p>
                        {person.area && (
                            <span className="mt-2 inline-flex items-center gap-2 rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-1 text-[11px] font-medium text-[#001BB7]">
                                {person.area}
                            </span>
                        )}
                    </div>

                    {/* contact lines */}
                    <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                        {person.email && (
                            <a
                                href={`mailto:${person.email}`}
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0046FF] hover:text-[#001BB7]"
                                title="Send email"
                            >
                                <Mail className="h-4 w-4" />
                                {person.email}
                            </a>
                        )}
                        {person.phone && (
                            <div className="inline-flex items-center gap-1.5 text-sm text-slate-700">
                                <Phone className="h-4 w-4" />
                                {person.phone}
                            </div>
                        )}
                    </div>

                    {/* Bottom-right CTA */}
                    <div className="mt-4 flex justify-start">
                        <Link
                            to="/faculty"
                            className="inline-flex items-center gap-2 rounded-lg bg-[#0046FF] px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#001BB7]"
                        >
                            Profile <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}


