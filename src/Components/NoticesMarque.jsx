import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Megaphone } from "lucide-react";

/**
 * GlobalNoticeMarquee
 * Props:
 *  - items: Array<{ id?:string|number, title:string, date?:string, to?:string }>
 *  - speedSec?: number (default 22)
 *  - pauseOnHover?: boolean (default true)
 */
export default function NoticesMarque({
    items = [],
    speedSec = 22,
    pauseOnHover = true,
}) {
    const controls = useAnimation();
    const row = [...items, ...items]; // repeat for seamless loop

    React.useEffect(() => {
        if (!items.length) return;
        controls.start({
            x: ["0%", "-50%"],
            transition: { duration: speedSec, ease: "linear", repeat: Infinity },
        });
    }, [controls, items, speedSec]);

    const handleEnter = () => {
        if (pauseOnHover) controls.stop();
    };
    const handleLeave = () => {
        if (!items.length) return;
        controls.start({
            x: ["0%", "-50%"],
            transition: { duration: speedSec, ease: "linear", repeat: Infinity },
        });
    };

    if (!items.length) return null;

    return (
        <div
            className="w-full border-b border-[#E9E9E9] bg-white"
            style={{
                // fade edges
                maskImage:
                    "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            aria-label="Latest notices marquee"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-1.5 flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[#001BB7] shrink-0">
                    <Megaphone className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                        Notices
                    </span>
                </span>

                <div className="relative flex-1 overflow-hidden">
                    <motion.div className="flex gap-8 whitespace-nowrap" animate={controls}>
                        {row.map((n, i) => (
                            <span
                                key={n.id ?? i}
                                className="inline-flex items-center gap-2 text-sm text-slate-700"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF8040]" />
                                <Link
                                    to={n.to || "/notices"}
                                    className="hover:text-[#001BB7]"
                                    title={n.title}
                                >
                                    {n.title}
                                </Link>
                                {n.date && <span className="text-slate-400">• {n.date}</span>}
                            </span>
                        ))}
                    </motion.div>
                </div>

                <Link
                    to="/notices"
                    className="hidden sm:inline-flex text-xs text-[#0046FF] hover:text-[#001BB7] font-medium shrink-0"
                >
                    View all →
                </Link>
            </div>
        </div>
    );
}
