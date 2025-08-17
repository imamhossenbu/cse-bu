// src/Components/Contact/FAQ.jsx
import React from "react";
import { ChevronDown } from "lucide-react";
import Title from "../Shared/Title";

const QA = [
    { q: "How do I apply for admissions?", a: "Check the Admissions page for steps, deadlines, and required documents." },
    { q: "How can I collaborate on research projects?", a: "Email your proposal to the research coordinator or contact lab supervisors directly." },
    { q: "Can I schedule a campus visit?", a: "Yes. Contact the department office to arrange a guided visit." },
    { q: "What are the department’s research areas?", a: "AI/ML, Systems & Security, Data & Visualization, HCI, and more." },
];

export default function FAQ() {
    const [open, setOpen] = React.useState(null);
    return (
        <>
            <Title title={'Frequently asked questions'} />
            <div className="mt-6 rounded-2xl border border-[#E9E9E9] bg-white divide-y divide-[#E9E9E9]">
                {QA.map((item, i) => {
                    const isOpen = open === i;
                    return (
                        <button
                            type="button"
                            key={i}
                            onClick={() => setOpen(isOpen ? null : i)}
                            className="w-full text-left p-4 focus:outline-none"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <p className="font-semibold text-slate-900">{item.q}</p>
                                <ChevronDown className={`h-5 w-5 transition ${isOpen ? "rotate-180" : ""}`} />
                            </div>
                            {isOpen && <p className="mt-2 text-sm text-slate-700">{item.a}</p>}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
