// src/Components/DeptStats.jsx
import React from "react";
import Title from "../Shared/Title";
import CountUp from "react-countup";

const STATS = [
    { label: "Students", value: "600+" },
    { label: "Faculty Members", value: "25+" },
    { label: "Research Projects", value: "150" },
    { label: "Graduates", value: "350+" },
];

export default function DeptStats() {
    return (
        <section className="bg-[#F8FAFF]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <Title title="At a Glance" subtitle="Numbers that define us" />
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {STATS.map((s) => (
                        <StatCard key={s.label} label={s.label} value={s.value} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ label, value }) {
    const { num, suffix } = parseValue(value);

    return (
        <div className="rounded-2xl border border-[#E9E9E9] bg-white p-6 text-center transition hover:shadow-lg hover:-translate-y-0.5">
            <div className="text-3xl font-extrabold text-slate-900 min-h-[2.25rem]">
                <CountUp
                    start={0}
                    end={num}
                    duration={1.2}
                    suffix={suffix}
                    enableScrollSpy
                    scrollSpyOnce
                // optional: small delay after entering view
                // scrollSpyDelay={200}
                />
            </div>
            <div className="mt-1 text-sm font-medium text-slate-600">{label}</div>
            <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[#FF8040]" />
        </div>
    );
}

function parseValue(v = "") {
    const m = String(v).match(/(\d+)(.*)?/);
    return { num: m ? parseInt(m[1], 10) : 0, suffix: m && m[2] ? m[2] : "" };
}
