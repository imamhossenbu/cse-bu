// src/Components/Contact/Testimonials.jsx
import React from "react";
import Title from "../Shared/Title";

const ITEMS = [
    {
        name: "Sarah Ahmed",
        text:
            "Great mentorship and supportive staff. The labs are excellent!",
        stars: 5,
        url: "https://i.pravatar.cc/160?img=32",
    },
    {
        name: "Rifwan Khan",
        text:
            "Strong research culture with plenty of opportunities to learn.",
        stars: 4,
        url: "https://i.pravatar.cc/160?img=14",
    },
    {
        name: "Fatima Begum",
        text:
            "Helpful admin and faculty—easy to get guidance when needed.",
        stars: 5,
        url: "https://i.pravatar.cc/160?img=47",
    },
    {
        name: "Tanvir Rahman",
        text:
            "Friendly environment and hands-on projects that build real skills.",
        stars: 5,
        url: "https://i.pravatar.cc/160?img=52",
    },
];

export default function Testimonials() {
    return (
        <>
            <Title title="What our students say" />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {ITEMS.map((t, i) => (
                    <figure
                        key={`${t.name}-${i}`}
                        className="rounded-2xl border border-[#E9E9E9] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className="flex justify-center">
                            <img
                                className="w-16 h-16 rounded-full object-cover ring-2 ring-[#F0F4FF]"
                                src={t.url}
                                alt={`${t.name} avatar`}
                                loading="lazy"
                            />
                        </div>

                        <StarRating stars={t.stars} />

                        <blockquote className="mt-3 text-slate-700 text-center text-sm">
                            {t.text}
                        </blockquote>
                        <figcaption className="mt-3 text-sm font-semibold text-center text-slate-900">
                            {t.name}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
}

function StarRating({ stars = 5 }) {
    return (
        <div
            className="mt-2 flex justify-center gap-0.5 text-yellow-500"
            aria-label={`${stars} out of 5 stars`}
        >
            {[...Array(5)].map((_, i) => (
                <span key={i} aria-hidden>
                    {i < stars ? "★" : "☆"}
                </span>
            ))}
        </div>
    );
}
