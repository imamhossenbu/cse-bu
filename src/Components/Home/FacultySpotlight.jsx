// src/Components/FacultySpotlight.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Title from "../Shared/Title";

const FACULTY = [
    {
        name: "Dr. Rahat Hossain Faisal",
        role: "Associate Professor",
        area: "AI & ML",
        to: "/faculty/associate-professor",
        img: "../src/assets/chairman.jpg",
    },
    {
        name: "Dr. Md Manjur Ahmed",
        role: "Associate Professor",
        area: "Systems & Security",
        to: "/faculty/associate-professor",
        img: "../src/assets/monjur.jpg",
    },
    {
        name: "Md. Erfan",
        role: "Assistant Professor",
        area: "HCI & Software Eng.",
        to: "/faculty/assistant-professor",
        img: "../src/assets/irfan.jpg",
    },
    {
        name: "Md Samsuddoha",
        role: "Assistant Professor",
        area: "Software Engineer",
        to: "/faculty/assistant-professor",
        img: "../src/assets/sams.jpg",
    },
];

export default function FacultySpotlight() {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title="Faculty Spotlight" subtitle="Meet our mentors and researchers" />

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
                {FACULTY.map((f) => (
                    <FacultyCard key={f.name} {...f} />
                ))}
            </div>
            <div className="my-6 flex justify-center items-center">
                <Link to={'/faculty'}>
                    <button className="px-10 rounded-lg text-white font-semibold py-3 bg-amber-500">View All</button>
                </Link>
            </div>
        </section>
    );
}

function FacultyCard({ name, role, area, to, img }) {
    const initials = name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("");

    const [imgError, setImgError] = React.useState(false);

    return (
        <motion.article
            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.08)" }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-6 text-center"
        >
            {/* Small circular image on top (not full width) */}
            <div className="mx-auto h-24 w-24 rounded-full overflow-hidden ring-1 ring-[#E9E9E9]">
                {!imgError && img ? (
                    <img
                        src={img}
                        alt={name}
                        loading="lazy"
                        onError={() => setImgError(true)}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <div className="grid h-full w-full place-items-center bg-[#F8FAFF] text-[#001BB7] text-xl font-extrabold">
                        {initials}
                    </div>
                )}
            </div>

            {/* Text */}
            <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
            <p className="text-sm text-slate-600">{role}</p>
            <span className="mt-3 inline-block rounded-md border border-[#0046FF]/20 bg-[#F0F4FF] px-2 py-1 text-xs font-medium text-[#001BB7]">
                {area}
            </span>


        </motion.article>
    );
}
