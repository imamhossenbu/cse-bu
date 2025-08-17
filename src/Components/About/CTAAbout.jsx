// src/Components/About/CTAAbout.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CTAAbout({
    bgImage = "../src/assets/terms.jpg",
    overlayColor = "#001BB7",
    overlayOpacity = 0.7,
    title = "Want to know more about BU CSE?",
    subtitle = "Explore programs, research, and student life—or get in touch with us.",
}) {
    return (
        <section className="relative overflow-hidden">
            {/* Background image */}
            <img
                src={bgImage}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay scrim for readability */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
            />

            {/* Subtle accent glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#FF8040]/25 blur-3xl" />

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    {title}
                </h3>
                <p className="mt-2 text-white/85">{subtitle}</p>
                <div className="mt-5 flex justify-center gap-3">
                    <Link
                        to="/academics/courses"
                        className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#001BB7] hover:bg-[#F0F4FF]"
                    >
                        Explore Academics
                    </Link>
                    <Link
                        to="/contact"
                        className="rounded-xl bg-[#FF8040] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
