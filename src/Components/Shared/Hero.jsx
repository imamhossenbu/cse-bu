import React from "react";

/**
 * Hero with optional background image + hover zoom.
 * Props:
 *  - title (string, required)
 *  - subtitle? (string)
 *  - bgImage? (string)  // "/assets/hero/research.jpg" or full URL
 *  - height?: "sm" | "md" | "lg" (default "md")
 *  - overlayOpacity?: number 0..1 (default 0.45)
 *  - className?: string
 *  - hoverZoom?: boolean (default true)
 */
export default function Hero({
    title,
    subtitle,
    bgImage,
    height = "md",
    overlayOpacity = 0.45,
    className = "",
    hoverZoom = true,
}) {
    const heightMap = {
        sm: "min-h-[180px] sm:min-h-[220px]",
        md: "min-h-[300px] sm:min-h-[360px] md:min-h-[420px]",
        lg: "min-h-[420px] sm:min-h-[500px] md:min-h-[560px]",
    };

    // common classes used for the zoomable background layer
    const zoomCls =
        "transition-transform duration-700 ease-out will-change-transform " +
        (hoverZoom ? "group-hover:scale-110" : "");

    return (
        <section
            className={`group relative w-full overflow-hidden ${heightMap[height]} ${className}`}
            aria-label={title}
        >
            {/* ------ Background layer (image OR gradient), zooms on hover ------ */}
            {bgImage ? (
                <img
                    src={bgImage}
                    alt=""
                    className={`pointer-events-none absolute inset-0 h-full w-full object-cover ${zoomCls}`}
                />
            ) : (
                <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-[#001BB7] to-[#0046FF] ${zoomCls}`}
                />
            )}

            {/* Overlay for readability (does NOT zoom) */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "#001BB7", opacity: overlayOpacity }}
            />

            {/* Subtle accent glow */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[#FF8040] blur-3xl opacity-25" />

            {/* Centered content */}
            <div className="relative z-10 h-full px-4 sm:px-6 lg:px-8">
                <div className={`${heightMap[height]} flex flex-col items-center justify-center text-center`}>
                    <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold ">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="mt-2 max-w-2xl mx-auto text-white/90">{subtitle}</p>
                    )}
                </div>
            </div>
        </section>
    );
}
