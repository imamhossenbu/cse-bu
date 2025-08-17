// src/Components/Contact/DepartmentMap.jsx
import React from "react";

/**
 * Fixed BU CSE map (uses your shared URL coords)
 *
 * Props:
 *  - zoom?: number (default 17)
 *  - satellite?: boolean (default true)
 *  - label?: string (default "University of Barishal")
 *  - className?: string
 *  - heightClass?: string (default "h-[420px] md:h-[520px]")
 *  - bordered?: boolean (default true)
 */
export default function DepartmentMap({
    zoom = 17,
    satellite = true,
    label = "University of Barishal",
    className = "",
    heightClass = "h-[320px] md:h-[420px]",
    bordered = true,
}) {
    // From your link:
    // https://www.google.com/maps/place/University+of+Barishal/@22.659866,90.3595312,... 4d90.3621061
    const lat = 22.659866;
    const lng = 90.3621061;

    // t=k => satellite, t=m => roadmap
    const t = satellite ? "k" : "m";

    // Use ll=center + q=label so the place card shows up
    const src = `https://maps.google.com/maps?ll=${lat},${lng}&q=${encodeURIComponent(
        label
    )}&t=${t}&z=${zoom}&hl=en&output=embed`;

    return (
        <div
            className={[
                "w-full overflow-hidden bg-white",
                heightClass,
                bordered ? "border border-[#E9E9E9] shadow-sm " : "",
                className,
            ].join(" ")}
        >
            <iframe
                title={`${label} Map`}
                src={src}
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
}
