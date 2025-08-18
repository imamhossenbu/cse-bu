// src/Components/Legal/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Cookie,
    Database,
    Share2,
    Clock,
    FileEdit,
    Mail,
    MapPin,
    Globe,
} from "lucide-react";
import Title from "../Shared/Title";

export default function PrivacyPolicy({
    lastUpdated = "2025-01-15",
    contactEmail = "cse@bu.ac.bd",
    address = "Department of Computer Science & Engineering, University of Barishal, Barishal-8200, Bangladesh",
}) {
    const sections = [
        { id: "overview", label: "Overview", icon: ShieldCheck },
        { id: "info-we-collect", label: "Information We Collect", icon: Database },
        { id: "use-of-info", label: "How We Use Your Information", icon: FileEdit },
        { id: "cookies", label: "Cookies & Analytics", icon: Cookie },
        { id: "sharing", label: "Sharing & Disclosure", icon: Share2 },
        { id: "security", label: "Data Security", icon: Lock },
        { id: "retention", label: "Retention", icon: Clock },
        { id: "rights", label: "Your Rights", icon: ShieldCheck },
        { id: "international", label: "International Transfers", icon: Globe },
        { id: "changes", label: "Changes to this Policy", icon: FileEdit },
        { id: "contact", label: "Contact Us", icon: Mail },
    ];

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Privacy Policy" subtitle="How we collect, use, and protect your information." />

            {/* Last updated pill */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-xs text-slate-700">
                <Clock className="h-4 w-4 text-[#001BB7]" />
                Last updated: <span className="font-semibold">{fmtDate(lastUpdated)}</span>
            </div>

            {/* Content layout */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Left: Quick nav */}
                <aside className="lg:col-span-3">
                    <nav className="sticky top-24 rounded-2xl border border-[#E9E9E9] bg-white p-4">
                        <p className="text-xs font-semibold text-slate-500 mb-2">Quick Links</p>
                        <ul className="space-y-1.5">
                            {sections.map(({ id, label, icon: Icon }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-[#F8FAFF]"
                                    >
                                        <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#001BB7]" />
                                        <span className="truncate group-hover:text-[#001BB7]">{label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Right: Policy body */}
                <div className="lg:col-span-9 space-y-8">
                    <Block id="overview" icon={ShieldCheck} title="Overview">
                        <p>
                            This Privacy Policy explains how the Department of Computer Science & Engineering (BU CSE) collects,
                            uses, shares, and safeguards personal information across our websites, forms, and online services.
                            By using our services, you agree to the practices described here.
                        </p>
                    </Block>

                    <Block id="info-we-collect" icon={Database} title="Information We Collect">
                        <List>
                            <li>
                                <strong>Contact details</strong> (name, email, phone) when you submit forms or inquiries.
                            </li>
                            <li>
                                <strong>Academic information</strong> for admissions, advising, or event registrations (e.g., program interest, transcripts).
                            </li>
                            <li>
                                <strong>Technical data</strong> such as IP address, device/browser info, and pages visited (via cookies/analytics).
                            </li>
                            <li>
                                <strong>Submitted content</strong> (messages, CVs, abstracts) when you choose to provide them.
                            </li>
                        </List>
                    </Block>

                    <Block id="use-of-info" icon={FileEdit} title="How We Use Your Information">
                        <List>
                            <li>To process applications, registrations, and scholarship requests.</li>
                            <li>To respond to queries and provide student/faculty services.</li>
                            <li>To improve site performance, content relevance, and security.</li>
                            <li>To send important updates (e.g., admissions, events, deadlines).</li>
                        </List>
                    </Block>

                    <Block id="cookies" icon={Cookie} title="Cookies & Analytics">
                        <p className="mb-3">
                            We use essential cookies for core functionality and optional analytics (e.g., privacy-friendly metrics)
                            to understand aggregate usage. You can control cookies via your browser settings.
                        </p>
                    </Block>

                    <Block id="sharing" icon={Share2} title="Sharing & Disclosure">
                        <p className="mb-3">
                            We do not sell your personal information. We may share limited data:
                        </p>
                        <List>
                            <li>With university units strictly for academic or administrative purposes.</li>
                            <li>With service providers (e.g., hosting) under confidentiality agreements.</li>
                            <li>When required by law or to protect safety, rights, and integrity.</li>
                        </List>
                    </Block>

                    <Block id="security" icon={Lock} title="Data Security">
                        <p>
                            We apply administrative, technical, and physical safeguards to protect information.
                            However, no method of transmission or storage is completely secure. Please report concerns to{" "}
                            <a href={`mailto:${contactEmail}`} className="text-[#0046FF] hover:text-[#001BB7] font-medium">
                                {contactEmail}
                            </a>.
                        </p>
                    </Block>

                    <Block id="retention" icon={Clock} title="Retention">
                        <p>
                            We retain personal data only as long as necessary for the purposes described or to comply with legal/archival requirements.
                            When no longer needed, we delete or anonymize the data.
                        </p>
                    </Block>

                    <Block id="rights" icon={ShieldCheck} title="Your Rights">
                        <p className="mb-3">
                            Subject to applicable laws, you may request to access, correct, or delete your data, or object to certain processing.
                        </p>
                        <p>
                            To make a request, email{" "}
                            <a href={`mailto:${contactEmail}`} className="text-[#0046FF] hover:text-[#001BB7] font-medium">
                                {contactEmail}
                            </a>.
                        </p>
                    </Block>

                    <Block id="international" icon={Globe} title="International Transfers">
                        <p>
                            If we transfer data across borders (e.g., to cloud providers), we take steps to ensure appropriate protections
                            consistent with applicable data-protection regulations.
                        </p>
                    </Block>

                    <Block id="changes" icon={FileEdit} title="Changes to this Policy">
                        <p>
                            We may update this policy to reflect changes in our practices. We’ll adjust the “Last updated” date and, where appropriate,
                            provide additional notice.
                        </p>
                    </Block>

                    <motion.div
                        id="contact"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.18 }}
                        className="rounded-2xl border border-[#E9E9E9] bg-white p-5"
                    >
                        <h3 className="text-base font-extrabold tracking-tight text-slate-900">Contact Us</h3>
                        <p className="mt-2 text-sm text-slate-700">
                            Questions about this policy or your data?
                        </p>
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="inline-flex items-start gap-2">
                                <Mail className="h-4 w-4 text-[#001BB7] mt-0.5" />
                                <div>
                                    <div className="font-semibold text-slate-900">Email</div>
                                    <a
                                        href={`mailto:${contactEmail}`}
                                        className="text-[#0046FF] hover:text-[#001BB7]"
                                    >
                                        {contactEmail}
                                    </a>
                                </div>
                            </div>
                            <div className="inline-flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-[#001BB7] mt-0.5" />
                                <div>
                                    <div className="font-semibold text-slate-900">Address</div>
                                    <p className="text-slate-700">{address}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* --------------------------- Small building blocks --------------------------- */

function Block({ id, icon: Icon, title, children }) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.18 }}
            className="rounded-2xl border border-[#E9E9E9] bg-white p-5"
        >
            <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#F0F4FF] text-[#001BB7]">
                    <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-base font-extrabold tracking-tight text-slate-900">{title}</h3>
            </div>
            <div className="mt-3 text-sm text-slate-700 space-y-3">{children}</div>
        </motion.section>
    );
}

function List({ children }) {
    return (
        <ul className="list-none space-y-2">
            {React.Children.map(children, (li, i) => (
                <li className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#FF8040]" />
                    <div className="flex-1">{li}</div>
                </li>
            ))}
        </ul>
    );
}

function fmtDate(iso) {
    try {
        return new Date(iso).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        return iso;
    }
}
