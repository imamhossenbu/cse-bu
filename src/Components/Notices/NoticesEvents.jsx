// src/Pages/NoticesEvents.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
    CalendarDays,
    Calendar,
    Clock,
    MapPin,
    Search,
} from "lucide-react";
import Title from "../Shared/Title";


/* ------------------ Dummy Data (15 notices) ------------------ */
const NOTICES = [
    { id: 1, title: "Midterm Exam Routine (Fall 2025)", date: "2025-10-05", tag: "Exam" },
    { id: 2, title: "Course Registration Window (Sep 20–28)", date: "2025-09-20", tag: "Academic" },
    { id: 3, title: "Seminar on Generative AI", date: "2025-09-25", tag: "Event" },
    { id: 4, title: "Lab Safety & Access Guidelines", date: "2025-09-12", tag: "Policy" },
    { id: 5, title: "Make-up Class Schedule (Week 07)", date: "2025-10-12", tag: "Academic" },
    { id: 6, title: "Final Exam Seat Plan (Draft)", date: "2025-11-20", tag: "Exam" },
    { id: 7, title: "Thesis Proposal Submission Deadline", date: "2025-10-01", tag: "Academic" },
    { id: 8, title: "Workshop: Secure Coding Practices", date: "2025-10-08", tag: "Event" },
    { id: 9, title: "Revised Classroom Allocation (Week 06)", date: "2025-09-30", tag: "Academic" },
    { id: 10, title: "Scholarship Application Announcement", date: "2025-10-15", tag: "Policy" },
    { id: 11, title: "Quiz-2 Routine (Level-1 Term-1)", date: "2025-10-18", tag: "Exam" },
    { id: 12, title: "Hackathon Participation Guidelines", date: "2025-09-27", tag: "Policy" },
    { id: 13, title: "Industry Talk: Data Engineering @ Scale", date: "2025-10-22", tag: "Event" },
    { id: 14, title: "Registration Correction Window", date: "2025-10-05", tag: "Academic" },
    { id: 15, title: "Supplementary Exam Form Fill-up", date: "2025-11-05", tag: "Exam" },
];

const EVENTS = [
    { id: 101, title: "Freshers’ Orientation", date: "2025-09-22", time: "10:00 AM", where: "Auditorium", cat: "Orientation", to: "/notices" },
    { id: 102, title: "Research Poster Day", date: "2025-10-10", time: "02:00 PM", where: "CSE Gallery", cat: "Research", to: "/research/projects" },
    { id: 103, title: "Alumni Tech Talk", date: "2025-10-18", time: "04:00 PM", where: "Seminar Hall", cat: "Alumni", to: "/alumni" },
];

/* ------------------ Category Meta (Tooltips) ------------------ */
const NOTICE_TAGS = {
    All: { label: "All", tip: "Show all notices", chip: "bg-slate-100 text-slate-700" },
    Exam: { label: "Exam", tip: "Routines, seat plans, results, and exam notices", chip: "bg-blue-50 text-blue-700" },
    Academic: { label: "Academic", tip: "Registration, classes, academic process updates", chip: "bg-slate-50 text-slate-700" },
    Event: { label: "Event", tip: "Seminars, workshops, competitions, celebrations", chip: "bg-orange-50 text-orange-700" },
    Policy: { label: "Policy", tip: "Guidelines, rules, and important official policies", chip: "bg-violet-50 text-violet-700" },
};

const EVENT_CATS = {
    All: { label: "All", tip: "Show all events", chip: "bg-slate-100 text-slate-700" },
    Orientation: { label: "Orientation", tip: "Welcome programs for new students", chip: "bg-emerald-50 text-emerald-700" },
    Research: { label: "Research", tip: "Posters, talks, research showcases", chip: "bg-sky-50 text-sky-700" },
    Alumni: { label: "Alumni", tip: "Talks and networking with alumni", chip: "bg-amber-50 text-amber-700" },
};

/* --------------- Utils --------------- */
const fmt = (iso) =>
    new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

/* ========================================================= */

export default function NoticesEventsPage() {
    // Notices filters
    const [noticeCat, setNoticeCat] = React.useState("All");
    const [noticeQuery, setNoticeQuery] = React.useState("");
    const [showAllNotices, setShowAllNotices] = React.useState(false);

    // Events filters
    const [eventCat, setEventCat] = React.useState("All");
    const [eventQuery, setEventQuery] = React.useState("");

    const noticesFiltered = React.useMemo(() => {
        return NOTICES
            .filter((n) => (noticeCat === "All" ? true : n.tag === noticeCat))
            .filter((n) => (noticeQuery ? n.title.toLowerCase().includes(noticeQuery.toLowerCase()) : true))
            .sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [noticeCat, noticeQuery]);

    const visibleNotices = showAllNotices
        ? noticesFiltered
        : noticesFiltered.slice(0, 6);

    const eventsFiltered = React.useMemo(() => {
        return EVENTS
            .filter((e) => (eventCat === "All" ? true : e.cat === eventCat))
            .filter((e) => (eventQuery ? e.title.toLowerCase().includes(eventQuery.toLowerCase()) : true))
            .sort((a, b) => new Date(a.date) - new Date(b.date)); // upcoming first
    }, [eventCat, eventQuery]);

    // reset "show all" when category/search changes
    React.useEffect(() => {
        setShowAllNotices(false);
    }, [noticeCat, noticeQuery]);

    const viewAllLabel =
        showAllNotices
            ? "Show less"
            : `View all ${noticeCat === "All" ? "notices" : `${noticeCat.toLowerCase()} notices`}`;

    return (
        <div className="bg-white">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <Title title="Notices & Events" subtitle="All departmental updates in one place" />
            </section>

            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 space-y-12">
                {/* ----------------- Notices (TOP) ----------------- */}
                <div>
                    <HeaderBar
                        icon={<CalendarDays className="h-5 w-5" />}
                        title="Latest Notices"
                        count={noticesFiltered.length}
                    />

                    <div className="mt-3 rounded-2xl border border-[#E9E9E9] bg-white p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <FilterChips
                                allKeys={Object.keys(NOTICE_TAGS)}
                                meta={NOTICE_TAGS}
                                active={noticeCat}
                                onChange={setNoticeCat}
                            />
                            <SearchBox value={noticeQuery} onChange={setNoticeQuery} placeholder="Search notices..." />
                        </div>

                        <ul className="mt-4 divide-y divide-[#E9E9E9]">
                            {visibleNotices.map((n, idx) => (
                                <NoticeItem key={n.id} n={n} idx={idx} />
                            ))}
                            {!visibleNotices.length && (
                                <li className="p-8 text-center text-sm text-slate-500">No notices found.</li>
                            )}
                        </ul>

                        {noticesFiltered.length > 6 && (
                            <div className="mt-5 flex justify-center">
                                <button
                                    onClick={() => setShowAllNotices((v) => !v)}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
                                >
                                    {viewAllLabel}
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* ----------------- Events (BOTTOM) ----------------- */}
                <div>
                    <HeaderBar
                        icon={<Calendar className="h-5 w-5" />}
                        title="Upcoming Events"
                        count={eventsFiltered.length}
                    />

                    <div className="mt-3 rounded-2xl border border-[#E9E9E9] bg-white p-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <FilterChips
                                allKeys={Object.keys(EVENT_CATS)}
                                meta={EVENT_CATS}
                                active={eventCat}
                                onChange={setEventCat}
                            />
                            <SearchBox value={eventQuery} onChange={setEventQuery} placeholder="Search events..." />
                        </div>

                        <div className="mt-4 relative pl-5">
                            <span className="absolute left-2 top-0 bottom-0 w-px bg-[#E9E9E9]" />
                            <ul className="space-y-3">
                                {eventsFiltered.map((e, idx) => (
                                    <EventItem key={e.id} e={e} idx={idx} />
                                ))}
                                {!eventsFiltered.length && (
                                    <li className="p-8 text-center text-sm text-slate-500">No events found.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

/* =================== Small, focused components =================== */

function HeaderBar({ icon, title, count }) {
    return (
        <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-[#0046FF]">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7] border border-[#0046FF]/20">
                    {icon}
                </span>
                <h2 className="text-lg font-extrabold tracking-tight text-slate-900">{title}</h2>
            </div>
            <span className="text-xs rounded-full bg-[#F8FAFF] border border-[#E9E9E9] px-2 py-1 text-slate-700">
                {count} {count === 1 ? "item" : "items"}
            </span>
        </div>
    );
}

function FilterChips({ allKeys, meta, active, onChange }) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {allKeys.map((k) => {
                const isActive = active === k;
                return (
                    <Tippy key={k} content={meta[k].tip} delay={[150, 0]} placement="bottom">
                        <button
                            type="button"
                            onClick={() => onChange(k)}
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition
                ${isActive
                                    ? "border-[#0046FF] bg-[#F0F4FF] text-[#001BB7]"
                                    : `border-[#E9E9E9] ${meta[k].chip} hover:bg-white`}`}
                        >
                            {meta[k].label}
                        </button>
                    </Tippy>
                );
            })}
        </div>
    );
}

function SearchBox({ value, onChange, placeholder = "Search..." }) {
    return (
        <label className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-lg border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
            />
        </label>
    );
}

/* ---- Notices list item ---- */
function NoticeItem({ n, idx }) {
    const cat = NOTICE_TAGS[n.tag] || NOTICE_TAGS.Academic;

    return (
        <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.18, delay: 0.02 * idx }}
            className="p-4"
        >
            <div className="flex items-start gap-3">
                <Tippy content={cat.tip} delay={[150, 0]} placement="right">
                    <span className={`mt-0.5 inline-flex shrink-0 rounded-md border px-2 py-1 text-xs font-medium ${cat.chip} border-current/20`}>
                        {n.tag}
                    </span>
                </Tippy>

                <div className="min-w-0 flex-1">
                    <Link
                        to="/notices"
                        className="block text-sm font-semibold text-slate-900 hover:text-[#001BB7] line-clamp-2"
                        title={n.title}
                    >
                        {n.title}
                    </Link>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {fmt(n.date)}
                    </p>
                </div>
            </div>
        </motion.li>
    );
}

/* ---- Event timeline item ---- */
function EventItem({ e, idx }) {
    const cat = EVENT_CATS[e.cat] || EVENT_CATS.All;

    return (
        <motion.li
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.18, delay: 0.03 * idx }}
            className="relative pl-5 py-3"
        >
            <span className="absolute left-0 top-4 h-2.5 w-2.5 rounded-full bg-[#FF8040]" />
            <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                    <Link
                        to={e.to || "/notices"}
                        className="text-sm font-semibold text-slate-900 hover:text-[#001BB7]"
                    >
                        {e.title}
                    </Link>

                    <Tippy content={cat.tip} delay={[150, 0]} placement="bottom">
                        <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium ${cat.chip} border-current/20`}>
                            {cat.label}
                        </span>
                    </Tippy>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {fmt(e.date)}
                    </span>
                    {e.time && (
                        <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {e.time}
                        </span>
                    )}
                    {e.where && (
                        <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {e.where}
                        </span>
                    )}
                </div>
            </div>
        </motion.li>
    );
}
