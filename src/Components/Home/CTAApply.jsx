// src/Components/CTAApply.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTAApply() {
    const BG = "../src/assets/sitemap.jpg";

    return (
        <section className="relative overflow-hidden">
            {/* Background image */}
            <img
                src={BG}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Blue gradient scrim for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#001BB7]/90 via-[#001BB7]/60 to-[#0046FF]/70" />

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FF8040]/25 blur-3xl" />

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                        Ready to join BU CSE?
                    </h3>
                    <p className="mt-2 text-white/85">
                        Explore admissions, scholarships, and programs designed for impact.
                    </p>

                    <div className="mt-5 flex justify-center gap-3">
                        <Link
                            to="/admission"
                            className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#001BB7] hover:bg-[#F0F4FF]"
                        >
                            Apply Now
                        </Link>
                        <Link
                            to="/about"
                            className="rounded-xl bg-[#FF8040] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
