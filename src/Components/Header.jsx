// src/components/Header.jsx
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import NoticesMarque from "./NoticesMarque";

// ----- MENUS -----
const menus = [
    {
        label: "Academics",
        items: [
            { to: "/academics/courses", label: "Courses" },
            { to: "/academics/syllabus", label: "Syllabus" },
            { to: "/academics/calendar", label: "Academic Calendar" },
        ],
    },
    {
        label: "Research",
        items: [
            { to: "/research", label: "Overview" },
            { to: "/research/labs", label: "Labs" },
            { to: "/research/projects", label: "Projects" },
            { to: "/research/publications", label: "Publications" },
        ],
    },
    {
        label: "Others",
        items: [
            { to: "/alumni", label: "Alumni" },
            { to: "/clubs", label: "Clubs & Societies" },
            { to: "/resources", label: "Resources" },
        ],
    },
];
const SITE_NOTICES = [
    { id: 1, title: "Midterm Exam Routine (Fall 2025)", date: "Oct 05, 2025", to: "/notices" },
    { id: 2, title: "Course Registration Window", date: "Sep 20–28, 2025", to: "/notices" },
    { id: 3, title: "Seminar on Generative AI", date: "Sep 25, 2025", to: "/notices" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [showTopbar, setShowTopbar] = React.useState(true);
    const [showSearch, setShowSearch] = React.useState(false);
    const [showSearchMobile, setShowSearchMobile] = React.useState(false);

    // Hide topbar after a tiny scroll
    React.useEffect(() => {
        const onScroll = () => setShowTopbar(window.scrollY < 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // ---- Auto-close on route change ----
    const location = useLocation();
    React.useEffect(() => {
        setMobileOpen(false);
        setShowSearchMobile(false);
        // optionally close desktop search too:
        // setShowSearch(false);
    }, [location]);

    return (
        <header className="sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
            {/* ---------------- Topbar (only at top) ---------------- */}

            <AnimatePresence initial={false}>
                {showTopbar && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="bg-[#E9E9E9] border-b"
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between py-2">
                                {/* left: logo + dept name */}
                                <div className="flex items-center gap-3">
                                    <div className="grid place-items-center text-white text-sm font-bold">
                                        <img
                                            className="h-16 w-16 rounded-full"
                                            src="../src/assets/download.png"
                                            alt="BU CSE Logo"
                                        />
                                    </div>
                                    <div className="leading-tight">
                                        <p className="font-semibold text-lg sm:text-xl text-[#001BB7]">
                                            Department of Computer Science &amp; Engineering
                                        </p>
                                        <p className="text-sm text-slate-600">
                                            University of Barishal, Bangladesh
                                        </p>
                                    </div>
                                </div>

                                {/* right: Desktop Login + Search toggle */}
                                <div className="flex items-center gap-3">
                                    <div className="hidden sm:flex">
                                        <Link to="/login">
                                            <button className="px-3 py-2 bg-[#003AEA] text-white rounded-lg hover:bg-[#003bea88]">
                                                Log In
                                            </button>
                                        </Link>
                                    </div>
                                    <div className="hidden sm:flex">
                                        <button
                                            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#001BB7] hover:bg-white"
                                            onClick={() => setShowSearch((v) => !v)}
                                            aria-expanded={showSearch}
                                            aria-controls="topbar-search"
                                        >
                                            <Search className="h-4 w-4" />
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* expanding search field (desktop) */}
                            <AnimatePresence initial={false}>
                                {showSearch && (
                                    <motion.div
                                        id="topbar-search"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.18 }}
                                        className="hidden sm:block pb-3"
                                    >
                                        <div className="flex justify-end">
                                            <input
                                                type="search"
                                                placeholder="Search…"
                                                className="w-80 rounded-lg border border-[#0046FF]/30 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <NoticesMarque items={SITE_NOTICES} />

            {/* ---------------- Main navbar ---------------- */}
            <div className="bg-gradient-to-r from-[#001BB7] to-[#0046FF] text-white border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Single column: center desktop nav */}
                    <div className="relative h-14 flex items-center justify-center">
                        {/* Desktop nav (centered) */}
                        <nav className="hidden md:flex items-center gap-2">
                            <DesktopLink to="/">Home</DesktopLink>
                            <DesktopLink to="/about">About</DesktopLink>
                            <DesktopLink to="/notices">Notices & Events</DesktopLink>
                            <DesktopLink to="/gallery">Gallery</DesktopLink>
                            <DesktopLink to="/admission">Admission</DesktopLink>
                            <DesktopLink to="/faculty">Faculty & Staffs</DesktopLink>
                            <DesktopLink to="/contact">Contact</DesktopLink>

                            {menus.map((m) => (
                                <DesktopDropdown key={m.label} label={m.label}>
                                    {m.items.map((it) => (
                                        <DropdownLink key={it.to} to={it.to}>
                                            {it.label}
                                        </DropdownLink>
                                    ))}
                                </DesktopDropdown>
                            ))}
                        </nav>

                        {/* Mobile toggle (right side) */}
                        <div className="md:hidden absolute right-0">
                            <button
                                className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10"
                                onClick={() => setMobileOpen((v) => !v)}
                                aria-label="Toggle menu"
                                aria-expanded={mobileOpen}
                            >
                                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ---------------- Mobile drawer ---------------- */}
                <AnimatePresence initial={false}>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden border-t border-white/10 bg-white text-slate-800"
                        >
                            <div
                                className="mx-auto max-w-7xl px-4 py-3 grid gap-2"
                                // ---- Auto-close when any anchor inside is clicked ----
                                onClickCapture={(e) => {
                                    const link = e.target.closest("a[href]");
                                    if (link) {
                                        setMobileOpen(false);
                                        setShowSearchMobile(false);
                                    }
                                }}
                            >
                                {/* top row: login + search toggle */}
                                <div className="flex gap-2 items-center justify-between">
                                    <Link to="/login">
                                        <button className="px-3 py-2 bg-[#003AEA] text-white rounded-lg hover:bg-[#003bea88]">
                                            Log In
                                        </button>
                                    </Link>

                                    <button
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0046FF]/30 px-3 py-2 text-sm text-[#001BB7]"
                                        onClick={() => setShowSearchMobile((v) => !v)}
                                        aria-expanded={showSearchMobile}
                                    >
                                        <Search className="h-4 w-4" /> Search
                                    </button>
                                </div>

                                <AnimatePresence initial={false}>
                                    {showSearchMobile && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                        >
                                            <input
                                                type="search"
                                                placeholder="Search…"
                                                className="w-full rounded-lg border border-[#0046FF]/30 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* links */}
                                <MobileLink to="/">Home</MobileLink>
                                <MobileLink to="/about">About</MobileLink>
                                <MobileLink to="/notices">Notices & Events</MobileLink>
                                <MobileLink to="/gallery">Gallery</MobileLink>
                                <MobileLink to="/admission">Admission</MobileLink>
                                <MobileLink to="/faculty">Faculty & Staffs</MobileLink>
                                <MobileLink to="/contact">Contact</MobileLink>

                                {menus.map((m) => (
                                    <MobileAccordion
                                        key={m.label}
                                        label={m.label}
                                        items={m.items}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

/* ================= Desktop helpers ================= */

function DesktopLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `relative px-3 py-2 text-sm font-medium transition-colors border-b-2 ${isActive
                    ? "border-[#FF8040] text-white"
                    : "border-transparent text-white/90 hover:text-white hover:border-white/60"
                }`
            }
        >
            {children}
        </NavLink>
    );
}

function DesktopDropdown({ label, children }) {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const onDoc = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("click", onDoc);
        return () => document.removeEventListener("click", onDoc);
    }, []);

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white/90 hover:text-white border-b-2 border-transparent hover:border-white/60"
                aria-haspopup="menu"
                aria-expanded={open}
            >
                {label}
                <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-0 mt-1 min-w-48 rounded-xl border border-[#0046FF]/30 bg-white shadow-lg"
                        role="menu"
                    >
                        <div className="py-2">{children}</div>
                        <div className="h-0.5 w-full bg-[#FF8040]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DropdownLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `block px-4 py-2 text-sm ${isActive ? "text-[#001BB7]" : "text-slate-700"
                } hover:bg-[#E9E9E9]`
            }
            role="menuitem"
        >
            {children}
        </NavLink>
    );
}

/* ================= Mobile helpers ================= */

function MobileLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "text-[#001BB7] bg-[#E9E9E9]" : "text-slate-800 hover:bg-[#E9E9E9]"
                }`
            }
        >
            {children}
        </NavLink>
    );
}

function MobileAccordion({ label, items }) {
    const [open, setOpen] = React.useState(false);
    return (
        <div className="rounded-lg border border-slate-200">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium"
                aria-expanded={open}
            >
                {label}
                <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="border-t"
                    >
                        <div className="py-1">
                            {items.map((it) => (
                                <NavLink
                                    key={it.to}
                                    to={it.to}
                                    className={({ isActive }) =>
                                        `block px-3 py-2 text-sm ${isActive ? "text-[#001BB7]" : "text-slate-800"
                                        } hover:bg-[#E9E9E9]`
                                    }
                                >
                                    {it.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
