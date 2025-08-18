// src/Components/Legal/TermsOfUse.jsx
import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    User,
    Shield,
    MessageSquare,
    BookOpen,
    ExternalLink,
    AlertTriangle,
    Ban,
    Scale,
    FileEdit,
    RefreshCcw,
    Mail,
    MapPin,
    Clock,
} from "lucide-react";
import Title from "../Shared/Title";

export default function TermsOfUse({
    effectiveDate = "2025-01-15",
    contactEmail = "cse@bu.ac.bd",
    address = "Department of CSE, University of Barishal, Barishal-8200, Bangladesh",
}) {
    const sections = [
        { id: "acceptance", label: "Acceptance of Terms", icon: FileText },
        { id: "eligibility", label: "Eligibility & Accounts", icon: User },
        { id: "acceptable-use", label: "Acceptable Use", icon: Shield },
        { id: "user-content", label: "User Content", icon: MessageSquare },
        { id: "ip", label: "Intellectual Property", icon: BookOpen },
        { id: "third-parties", label: "Links & Third-Party", icon: ExternalLink },
        { id: "disclaimer", label: "Disclaimers", icon: AlertTriangle },
        { id: "liability", label: "Limitation of Liability", icon: Ban },
        { id: "law", label: "Governing Law & Venue", icon: Scale },
        { id: "changes", label: "Changes to Terms", icon: RefreshCcw },
        { id: "contact", label: "Contact Us", icon: Mail },
    ];

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title="Terms & Conditions" subtitle="Your responsibilities and our commitments online." />

            {/* Effective date */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-xl border border-[#E9E9E9] bg-white px-3 py-2 text-xs text-slate-700">
                <Clock className="h-4 w-4 text-[#001BB7]" />
                Effective date: <span className="font-semibold">{fmtDate(effectiveDate)}</span>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Quick nav */}
                <aside className="lg:col-span-3">
                    <nav className="sticky top-24 rounded-2xl border border-[#E9E9E9] bg-white p-4">
                        <p className="text-xs font-semibold text-slate-500 mb-2">Jump to</p>
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

                {/* Body */}
                <div className="lg:col-span-9 space-y-8">
                    <Block id="acceptance" icon={FileText} title="Acceptance of Terms">
                        <p>
                            These Terms & Conditions (“Terms”) govern your use of BU CSE websites, portals, and online services
                            (“Services”). By accessing or using the Services, you agree to these Terms and our Privacy Policy.
                            If you do not agree, please do not use the Services.
                        </p>
                    </Block>

                    <Block id="eligibility" icon={User} title="Eligibility & Accounts">
                        <List>
                            <li>You must provide accurate information when creating any account.</li>
                            <li>You are responsible for safeguarding your credentials and all activity under your account.</li>
                            <li>Notify us immediately of any unauthorized use of your account.</li>
                        </List>
                    </Block>

                    <Block id="acceptable-use" icon={Shield} title="Acceptable Use">
                        <List>
                            <li>No unlawful, harassing, infringing, or misleading activity.</li>
                            <li>No attempts to disrupt, probe, or bypass security or rate limits.</li>
                            <li>No uploading of malware or content that violates rights of others.</li>
                        </List>

                    </Block>

                    <Block id="user-content" icon={MessageSquare} title="User Content">
                        <List>
                            <li>
                                You retain ownership of content you submit; you grant us a non-exclusive license to host, display, and
                                operate it for educational/administrative purposes.
                            </li>
                            <li>
                                You are responsible for ensuring you have rights to upload and share the content you submit.
                            </li>
                        </List>
                    </Block>

                    <Block id="ip" icon={BookOpen} title="Intellectual Property">
                        <p>
                            Unless otherwise noted, BU CSE and/or licensors own the materials on the Services.
                            Logos, marks, and content may not be used without prior permission, except as permitted by law.
                        </p>
                    </Block>

                    <Block id="third-parties" icon={ExternalLink} title="Links & Third-Party Services">
                        <p>
                            Our Services may link to third-party sites or tools. We are not responsible for their content,
                            policies, or practices. Review third-party terms before use.
                        </p>
                    </Block>

                    <Block id="disclaimer" icon={AlertTriangle} title="Disclaimers">
                        <p>
                            Services are provided “as is” and “as available.” We disclaim warranties of merchantability, fitness for
                            a particular purpose, and non-infringement to the maximum extent permitted by law.
                        </p>
                    </Block>

                    <Block id="liability" icon={Ban} title="Limitation of Liability">
                        <p>
                            To the extent permitted by law, BU CSE shall not be liable for indirect, incidental, special, or
                            consequential damages arising from your use of the Services.
                        </p>
                    </Block>

                    <Block id="law" icon={Scale} title="Governing Law & Venue">
                        <p>
                            These Terms are governed by the laws of Bangladesh. Any disputes shall be subject to the jurisdiction of
                            the competent courts in Barishal, Bangladesh.
                        </p>
                    </Block>

                    <Block id="changes" icon={RefreshCcw} title="Changes to Terms">
                        <p>
                            We may update these Terms from time to time. The “Effective date” above will be revised accordingly.
                            Continued use of the Services constitutes acceptance of the updated Terms.
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
                            Questions about these Terms? Reach out:
                        </p>
                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="inline-flex items-start gap-2">
                                <Mail className="h-4 w-4 text-[#001BB7] mt-0.5" />
                                <div>
                                    <div className="font-semibold text-slate-900">Email</div>
                                    <a href={`mailto:${contactEmail}`} className="text-[#0046FF] hover:text-[#001BB7]">
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

/* ----------------- Small building blocks ----------------- */

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
            {React.Children.map(children, (li) => (
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
