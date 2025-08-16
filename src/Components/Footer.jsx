import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Facebook,
    Twitter,
    Youtube,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    ArrowUp,
} from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    const groups = [
        {
            title: "Academics",
            links: [
                { to: "/academics/courses", label: "Courses" },
                { to: "/academics/syllabus", label: "Syllabus" },
                { to: "/academics/calendar", label: "Academic Calendar" },
            ],
        },
        {
            title: "Research",
            links: [
                { to: "/research", label: "Overview" },
                { to: "/research/labs", label: "Labs" },
                { to: "/research/projects", label: "Projects" },
                { to: "/research/publications", label: "Publications" },
            ],
        },
        {
            title: "Admission",
            links: [
                { to: "/admissions/undergrad", label: "Undergraduate" },
                { to: "/admissions/grad", label: "Graduate" },
                { to: "/admissions/scholarships", label: "Scholarships" },
            ],
        },
        {
            title: "Resources",
            links: [
                { to: "/notices", label: "Notices" },
                { to: "/faculty", label: "Faculty Directory" },
                { to: "/staff", label: "Staff" },
                { to: "/alumni", label: "Alumni" },
                { to: "/clubs", label: "Clubs & Societies" },
                { to: "/resources", label: "Department Resources" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
            ],
        },
    ];


    return (
        <footer className=" ">
            {/* Thin brand line */}
            <div className="h-1 w-full bg-gradient-to-r from-[#001BB7] via-[#0046FF] to-[#FF8040]" />

            {/* Main */}
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* About / contact (span 5) */}
                        <section className="lg:col-span-5">
                            <h2 className="">
                                <img className="h-16 w-16" src="../src/assets/download.png" alt="logo" />
                            </h2>
                            <p className="mt-3 text-sm leading-relaxed text-slate-700">
                                Department of Computer Science &amp; Engineering, University of
                                Barishal — fostering learning, research, and innovation across
                                computing disciplines.
                            </p>

                            {/* Quick contact */}
                            <ul className="mt-5 space-y-2 text-sm text-slate-700">
                                <li className="flex items-start gap-2">
                                    <MapPin className="h-4 w-4 mt-0.5 text-[#0046FF]" />
                                    <span>University of Barishal, Barishal, Bangladesh</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Mail className="h-4 w-4 mt-0.5 text-[#0046FF]" />
                                    <span>cse@bu.ac.bd</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="h-4 w-4 mt-0.5 text-[#0046FF]" />
                                    <span>+880 1X XXX XXXX</span>
                                </li>
                            </ul>

                            {/* Socials */}
                            <div className="mt-5 flex gap-3" aria-label="Social media">
                                <SocialIcon href="#" label="Facebook">
                                    <Facebook />
                                </SocialIcon>
                                <SocialIcon href="#" label="Twitter">
                                    <Twitter />
                                </SocialIcon>
                                <SocialIcon href="#" label="YouTube">
                                    <Youtube />
                                </SocialIcon>
                                <SocialIcon href="#" label="LinkedIn">
                                    <Linkedin />
                                </SocialIcon>
                            </div>

                            {/* Newsletter (front-end only) */}
                            <form
                                className="mt-6"
                                onSubmit={(e) => e.preventDefault()}
                                aria-label="Newsletter signup (demo only)"
                            >
                                <label className="text-sm font-medium text-slate-700">
                                    Get updates
                                </label>
                                <div className="mt-2 flex items-center gap-2">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full rounded-lg border border-[#E9E9E9] bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                                    />
                                    <button
                                        type="submit"
                                        className="shrink-0 rounded-lg bg-[#0046FF] px-3 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </section>

                        {/* Link groups (span 7) */}
                        <section className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {groups.map((g) => (
                                <div key={g.title}>
                                    <SectionTitle>{g.title}</SectionTitle>
                                    <ul className="mt-3 space-y-2 text-sm">
                                        {g.links.map((l) => (
                                            <li key={l.to}>
                                                <FooterLink to={l.to}>{l.label}</FooterLink>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    </div>



                </div>
                {/* Bottom bar */}
                <div className="mt-10 bg-[#002ACF] px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
                    <p className="text-white">
                        © {year} BU CSE — University of Barishal. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        <Link to="/privacy" className="text-white hover:text-[#648bf7]">Privacy</Link>
                        <span className="text-white">•</span>
                        <Link to="/terms" className="text-white hover:text-[#648bf7]">Terms</Link>
                        <span className="text-white">•</span>
                        <Link to="/sitemap" className="text-white hover:text-[#648bf7]">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* ---------- helpers ---------- */

function SectionTitle({ children }) {
    return (
        <div className="inline-flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-wide text-slate-800">
                {children}
            </span>
            <span className="mt-1 h-1 w-8 rounded-full bg-[#FF8040]" />
        </div>
    );
}

function FooterLink({ to, children }) {
    return (
        <NavLink
            to={to}
            className="group inline-flex items-center gap-1 text-slate-700 hover:text-[#001BB7]"
        >
            <span className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-[#0046FF]" />
            {children}
        </NavLink>
    );
}

function SocialIcon({ href, label, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E9E9E9] text-[#001BB7] hover:bg-[#0046FF] hover:text-white"
            target="_blank"
            rel="noreferrer"
        >
            {React.cloneElement(children, { className: "h-5 w-5" })}
        </a>
    );
}
