import React from "react";

/**
 * SectionHeading – title + subtitle + stylish bottom border
 *
 * Props:
 *  - title: string (required)
 *  - subtitle?: string
 *  - align?: "left" | "center" | "right" (default "center")
 *  - border?: "solid" | "dashed" | "none" (default "solid")
 *  - size?: "sm" | "md" | "lg" (default "lg")   // title size
 *  - showDot?: boolean (default true)           // small accent dot on the border
 *  - className?: string
 */
export default function Title({
    title,
    subtitle,
    align = "center",
    border = "solid",
    size = "sm",
    showDot = true,
    className = "",
}) {
    const alignText =
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";
    const alignBlock =
        align === "left" ? "mr-auto" : align === "right" ? "ml-auto" : "mx-auto";

    const borderStyle =
        border === "dashed" ? "border-dashed" : border === "none" ? "border-0" : "border-solid";

    const sizeMap = {
        sm: "text-xl sm:text-2xl",
        md: "text-2xl sm:text-3xl",
        lg: "text-3xl sm:text-4xl md:text-5xl",
    };

    return (
        <div className={`${alignText} ${className}`}>
            <div className={`inline-block ${alignBlock}`}>
                <h2 className={`${sizeMap[size]} font-extrabold tracking-tight text-slate-900 uppercase`}>
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-1 text-md  font-semibold text-[#001BB7] uppercase">
                        {subtitle}
                    </p>
                )}

                {border !== "none" && (
                    <div className="relative">
                        {showDot && (
                            <div className="mt-3 flex items-center justify-center gap-3">
                                <span className="h-[2px] w-16 sm:w-24 bg-[#001BB7] rounded-full" />
                                <span className="h-2 w-2 rotate-45 bg-[#FF8040] rounded-[2px]" />
                                <span className="h-[2px] w-16 sm:w-24 bg-[#0046FF] rounded-full" />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
