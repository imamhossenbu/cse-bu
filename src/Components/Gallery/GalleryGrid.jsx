// src/Components/GalleryGrid.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageDown } from "lucide-react";
import Title from "../Shared/Title";


/**
 * Props:
 * - images: Array<{ src: string, alt?: string, title?: string, tag?: string }>
 * - categories?: string[]  // Fixed filter tabs (excludes anything not in this list). Defaults below.
 * - showFilters?: boolean
 */
const DEFAULT_CATEGORIES = ["Campus", "Academics", "Research", "Community", "Resources"];

export default function GalleryGrid({
    images = DEFAULT_IMAGES,
    categories = DEFAULT_CATEGORIES,
    showFilters = true,
}) {
    const [activeTag, setActiveTag] = React.useState("All");
    const [idx, setIdx] = React.useState(-1); // -1 = closed

    // Build chips strictly from provided categories
    const chips = React.useMemo(() => ["All", ...categories], [categories]);

    // Only show images whose tag is within our fixed categories (unless "All")
    const filtered = React.useMemo(() => {
        const inList = images.filter((i) => categories.includes(i.tag));
        return activeTag === "All" ? inList : inList.filter((i) => i.tag === activeTag);
    }, [images, categories, activeTag]);

    const open = (i) => setIdx(i);
    const close = () => setIdx(-1);
    const hasPrev = idx > 0;
    const hasNext = idx >= 0 && idx < filtered.length - 1;
    const prev = () => hasPrev && setIdx((i) => i - 1);
    const next = () => hasNext && setIdx((i) => i + 1);

    React.useEffect(() => {
        if (idx < 0) return;
        const onKey = (e) => {
            if (e.key === "Escape") close();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idx, filtered.length]);

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title={'Moments at BU CSE'} subtitle={'Curated images across the department'} />
            {showFilters && (
                <div className="mb-5 my-5 flex flex-wrap justify-center items-center gap-2">
                    {chips.map((t) => (
                        <button
                            key={t}
                            onClick={() => {
                                setActiveTag(t);
                                setIdx(-1); // reset lightbox index when switching filters
                            }}
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition
              ${activeTag === t ? "border-[#0046FF] bg-[#F0F4FF] text-[#001BB7]" : "border-[#E9E9E9] bg-white text-slate-700 hover:bg-[#F8FAFF]"}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            )}

            {filtered.length === 0 ? (
                <p className="text-sm text-slate-500">No images found.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filtered.map((img, i) => (
                        <figure key={`${img.src}-${i}`} className="group relative overflow-hidden rounded-xl border border-[#E9E9E9] bg-white">
                            <button
                                type="button"
                                onClick={() => open(i)}
                                className="block w-full aspect-[4/3] overflow-hidden"
                                aria-label={`Open ${img.title || img.alt || "image"}`}
                            >
                                <motion.img
                                    src={img.src}
                                    alt={img.alt || img.title || "Gallery image"}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.25 }}
                                />
                            </button>

                            {(img.title || img.tag) && (
                                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0">
                                    <div className="m-2 rounded-lg bg-white/90 backdrop-blur p-2 shadow-sm">
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="truncate text-sm font-medium text-slate-900">{img.title}</p>
                                            {img.tag && (
                                                <span className="shrink-0 rounded-md bg-[#E9E9E9] px-2 py-0.5 text-[11px] font-medium text-slate-700">
                                                    {img.tag}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </figcaption>
                            )}
                        </figure>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {idx >= 0 && filtered[idx] && (
                    <motion.div
                        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                    >
                        <div className="absolute inset-0 flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                            <div className="relative w-full max-w-5xl">
                                <motion.img
                                    key={filtered[idx].src}
                                    src={filtered[idx].src}
                                    alt={filtered[idx].alt || filtered[idx].title || "Image"}
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.97 }}
                                    transition={{ duration: 0.2 }}
                                    className="mx-auto max-h-[78vh] w-auto rounded-xl shadow-2xl"
                                />

                                {(filtered[idx].title || filtered[idx].tag) && (
                                    <div className="mx-auto mt-3 max-w-3xl rounded-lg bg-white/90 p-3 text-center shadow">
                                        <p className="text-sm font-medium text-slate-900">{filtered[idx].title}</p>
                                        {filtered[idx].tag && <p className="text-xs text-slate-600 mt-0.5">{filtered[idx].tag}</p>}
                                    </div>
                                )}

                                <div className="absolute -top-2 right-0 flex gap-2">
                                    <a
                                        href={filtered[idx].src}
                                        download
                                        className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-sm font-medium text-slate-800 hover:bg-white"
                                        title="Download"
                                    >
                                        <ImageDown className="h-4 w-4" />
                                    </a>
                                    <button onClick={close} className="rounded-lg bg-white/90 p-2 text-slate-800 hover:bg-white" title="Close">
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {hasPrev && (
                                    <button
                                        onClick={prev}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 hover:bg-white"
                                        title="Previous"
                                    >
                                        <ChevronLeft className="h-6 w-6" />
                                    </button>
                                )}
                                {hasNext && (
                                    <button
                                        onClick={next}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 hover:bg-white"
                                        title="Next"
                                    >
                                        <ChevronRight className="h-6 w-6" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

/* ---- Curated images with only 5 categories & human titles ----
   Tip: Prefer /public assets like /assets/.... for builds.
*/
const DEFAULT_IMAGES = [
    // Campus
    { src: "/assets/home.jpeg", title: "Riverside Campus Morning", tag: "Campus" },
    { src: "/assets/gallery.jpg", title: "Campus Walkway at Dusk", tag: "Campus" },
    { src: "/assets/aboutTeaser.jpg", title: "Student Life Snapshot", tag: "Campus" },

    // Academics
    { src: "/assets/courses.jpg", title: "Core & Elective Courses", tag: "Academics" },
    { src: "/assets/syllabus.jpg", title: "Syllabus Highlights", tag: "Academics" },
    { src: "/assets/calendar.jpg", title: "Academic Calendar in Action", tag: "Academics" },

    // Research
    { src: "/assets/research.jpg", title: "Research in Action", tag: "Research" },
    { src: "/assets/lab.jpg", title: "Inside the AI & Robotics Lab", tag: "Research" },
    { src: "/assets/publications.jpg", title: "Recent Lab Publications", tag: "Research" },

    // Community
    { src: "/assets/club.jpg", title: "Clubs & Societies Fair", tag: "Community" },
    { src: "/assets/alumni.jpg", title: "Alumni Meet-Up", tag: "Community" },
    { src: "/assets/faculty.jpg", title: "Faculty Mentorship", tag: "Community" },

    // Resources
    { src: "/assets/notice.jpg", title: "Notice Board", tag: "Resources" },
    { src: "/assets/contact.jpg", title: "Department Office & Helpdesk", tag: "Resources" },
    { src: "/assets/resourse.jpg", title: "Student Resources & Forms", tag: "Resources" }, // ensure file exists
];
