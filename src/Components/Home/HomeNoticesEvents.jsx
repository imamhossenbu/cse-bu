import React from "react";
import { Link } from "react-router-dom";
import { Newspaper, CalendarDays, ArrowRight, Calendar, Clock } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import Title from "../Shared/Title";

/* ---------- dummy data (override via props) ---------- */
const DEFAULT_NOTICES = [
    { id: 1, title: "Midterm Exam Routine (Fall 2025)", date: "Oct 05, 2025", tag: "Exam" },
    { id: 2, title: "Course Registration Window", date: "Sep 20–28, 2025", tag: "Academic" },
    { id: 3, title: "Seminar on Generative AI", date: "Sep 25, 2025", tag: "Event" },
    { id: 4, title: "Lab Safety & Access Guidelines", date: "Sep 12, 2025", tag: "Policy" },
];

const DEFAULT_EVENTS = [
    { id: 1, title: "Freshers’ Orientation", date: "Sep 22, 2025", to: "/notices", time: "10:00 AM" },
    { id: 2, title: "Research Poster Day", date: "Oct 10, 2025", to: "/research/projects", time: "2:00 PM" },
    { id: 3, title: "Alumni Tech Talk", date: "Oct 18, 2025", to: "/alumni", time: "4:00 PM" },
];

/* ---------- tag color map ---------- */
const TAG_STYLE = {
    Exam: "bg-blue-50 text-blue-700 border-blue-200",
    Academic: "bg-slate-50 text-slate-700 border-slate-200",
    Event: "bg-orange-50 text-orange-700 border-orange-200",
    Policy: "bg-violet-50 text-violet-700 border-violet-200",
};

export default function HomeNoticesEvents({
    notices = DEFAULT_NOTICES,
    events = DEFAULT_EVENTS,
}) {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title="Notices & Events" subtitle="All important updates at a glance" />



            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Notices (2 cols) */}
                <div className="lg:col-span-2 rounded-2xl border border-[#E9E9E9] bg-white overflow-hidden">
                    <Header
                        icon={<Newspaper className="h-5 w-5" />}
                        title="Latest Notices"
                        rightLink={{ to: "/notices", label: "View all" }}
                    />
                    {notices?.length ? (
                        <ul className="divide-y divide-[#E9E9E9]">
                            {notices.slice(0, 4).map((n, idx) => (
                                <NoticeItem key={n.id ?? idx} notice={n} />
                            ))}
                        </ul>
                    ) : (
                        <EmptyState text="No notices yet. Please check back soon." />
                    )}
                </div>

                {/* Events (1 col) */}
                <div className="rounded-2xl border border-[#E9E9E9] bg-white overflow-hidden">
                    <Header
                        icon={<CalendarDays className="h-5 w-5" />}
                        title="Upcoming Events"
                        rightLink={{ to: "/academics/calendar", label: "All events" }}
                    />
                    {events?.length ? (
                        <ul className="p-4">
                            <div className="relative pl-5">
                                {/* timeline line */}
                                <span className="absolute left-2 top-0 bottom-0 w-px bg-[#E9E9E9]" />
                                {events.slice(0, 3).map((e, idx) => (
                                    <EventItem key={e.id ?? idx} event={e} />
                                ))}
                            </div>
                        </ul>
                    ) : (
                        <EmptyState text="No upcoming events scheduled." />
                    )}
                </div>
            </div>
        </section>
    );
}

/* ================= helpers ================= */

function Header({ icon, title, rightLink }) {
    return (
        <div className="flex items-center justify-between gap-3 p-4 border-b border-[#E9E9E9]">
            <div className="inline-flex items-center gap-2 text-[#0046FF]">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#E9E9E9] text-[#001BB7]">
                    {icon}
                </span>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900">{title}</h3>
            </div>
            {rightLink && (
                <Link
                    to={rightLink.to}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] px-3 py-1.5 text-sm font-medium text-slate-800 hover:bg-[#E9E9E9]"
                >
                    {rightLink.label} <ArrowRight className="h-4 w-4" />
                </Link>
            )}
        </div>
    );
}

function NoticeItem({ notice }) {
    const tagClass = TAG_STYLE[notice.tag] || TAG_STYLE.Academic;

    return (
        <motion.li
            whileHover={{ backgroundColor: "rgb(248,250,255)" }}
            transition={{ duration: 0.15 }}
            className="p-4"
        >
            <div className="flex items-start gap-3">
                <span className={`mt-0.5 inline-flex shrink-0 rounded-md border px-2 py-1 text-xs font-medium ${tagClass}`}>
                    {notice.tag}
                </span>

                <div className="min-w-0 flex-1">
                    <Link
                        to="/notices"
                        className="block text-sm font-semibold text-slate-900 hover:text-[#001BB7] line-clamp-2"
                        title={notice.title}
                    >
                        {notice.title}
                    </Link>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="h-3.5 w-3.5" />
                        {notice.date}
                    </p>
                </div>

                <ArrowRight className="mt-0.5 h-4 w-4 text-slate-300 group-hover:text-slate-400" />
            </div>
        </motion.li>
    );
}

function EventItem({ event }) {
    return (
        <motion.li
            whileHover={{ x: 2 }}
            transition={{ duration: 0.15 }}
            className="relative pl-5 py-3"
        >
            {/* timeline dot */}
            <span className="absolute left-0 top-4 h-2.5 w-2.5 rounded-full bg-[#FF8040]" />

            <div className="min-w-0">
                <Link
                    to={event.to || "/notices"}
                    className="text-sm font-semibold text-slate-900 hover:text-[#001BB7]"
                    title={event.title}
                >
                    {event.title}
                </Link>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                    </span>
                    {event.time && (
                        <span className="inline-flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {event.time}
                        </span>
                    )}
                </div>
            </div>
        </motion.li>
    );
}

function EmptyState({ text }) {
    return (
        <div className="p-8 text-center text-sm text-slate-600">{text}</div>
    );
}



