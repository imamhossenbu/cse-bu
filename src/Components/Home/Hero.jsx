import React from "react";

/**
 * Hero with optional background image.
 * Props:
 *  - title (string, required)
 *  - subtitle? (string)
 *  - bgImage? (string)  // e.g. "/assets/hero/research.jpg" or full URL
 *  - height?: "sm" | "md" | "lg" (default "md")
 *  - align?: "center" | "left" (default "center")
 *  - overlayOpacity?: number 0..1 (default 0.45)
 *  - className?: string
 */
export default function Hero({
    title,
    subtitle,
    bgImage,
    height = "md",
    align = "center",
    overlayOpacity = 0.45,
    className = "",
}) {
    const heightMap = {
        sm: "min-h-[180px] sm:min-h-[220px]",
        md: "min-h-[300px] sm:min-h-[360px] md:min-h-[420px]",
        lg: "min-h-[420px] sm:min-h-[500px] md:min-h-[560px]",
    };

    const alignWrap =
        align === "left" ? "items-start text-left" : "items-center text-center";

    const bgStyle = bgImage
        ? {
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        : { backgroundImage: "linear-gradient(90deg,#001BB7 0%,#0046FF 100%)" };

    return (
        <section
            className={`relative w-full overflow-hidden rounded-2xl border border-[#E9E9E9] ${heightMap[height]} ${className}`}
            style={bgStyle}
            aria-label={title}
        >
            {/* overlay for readability */}
            <div
                className="absolute inset-0"
                style={{ backgroundColor: "#001BB7", opacity: overlayOpacity }}
            />
            {/* subtle accent glow */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-[#FF8040] blur-3xl opacity-25" />

            {/* content */}
            <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`h-full flex flex-col justify-center ${alignWrap} gap-2`}>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                        {title}
                    </h1>
                    {subtitle && <p className="max-w-2xl text-white/90">{subtitle}</p>}
                </div>
            </div>
        </section>
    );
}
