// src/Components/Contact/ContactInfoCards.jsx
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Title from "../Shared/Title";

export default function ContactInfoCards() {
    const cards = [
        {
            title: "Address",
            icon: MapPin,
            lines: [
                "Department of CSE",
                "University of Barishal",
                "Barishal 8200, Bangladesh",
            ],
        },
        {
            title: "Phone",
            icon: Phone,
            lines: [
                "Office: +880-431-000000",
                "Chair: +880-1XXXXXXXXX",
                "Admissions Office: +880-1YYYYYYYY",
            ],
        },
        {
            title: "Email & Hours",
            icon: Mail,
            lines: [
                "General: cse@bu.ac.bd",
                "Admissions: admissions@bu.ac.bd",
                "Office Hours: Sun–Thu 9:00–17:00",
            ],
        },
    ];

    return (
        <>
            <Title title={'Get in Touch'} />
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((c) => (
                    <div
                        key={c.title}
                        className="rounded-2xl border border-[#E9E9E9] hover:scale-105 transition-all ease-in bg-white p-6 shadow-sm"
                    >
                        <div className="inline-flex items-center gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#F0F4FF] text-[#001BB7]">
                                <c.icon className="h-5 w-5" />
                            </span>
                            <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                        </div>
                        <ul className="mt-4 space-y-1 text-sm text-slate-700">
                            {c.lines.map((l, i) => (
                                <li key={i}>{l}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    );
}
