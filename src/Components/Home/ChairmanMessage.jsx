import React from "react";
import Title from "../Shared/Title";

export default function ChairmanWelcomeBlock() {
    // Prefer storing in /public and referencing like below
    const photoSrc = "../src/assets/chairman.jpg";

    const fullMessage =
        "Welcome to the Department of Computer Science and Engineering at the University of Barishal. Our mission is to foster excellence in teaching, research, and innovation. We are committed to preparing our students for successful careers in the ever-evolving field of computing, empowering them to become leaders, innovators, and responsible citizens. Join us as we continue to build a vibrant academic community dedicated to knowledge, discovery, and societal impact.";

    return (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
            <Title title="Welcome Message" subtitle="Message From the Department Head" />

            {/* Avatar + name */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <div className="rounded-full p-1 border-4 border-[#FF8040]">
                    <img
                        src={photoSrc}
                        alt="Dr. Rahat Hossain Faisal"
                        className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Dr. Rahat Hossain Faisal
                    </h3>
                    <p className="text-sm text-slate-600">
                        Chairman, Department of Computer Science and Engineering
                    </p>
                </div>
            </div>

            {/* Premium quoted message */}
            <figure className="relative mt-10 mx-auto max-w-4xl text-center">
                {/* subtle glow behind text */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0046FF]/10 blur-3xl" />

                {/* opening quote (SVG) */}
                <svg
                    className="pointer-events-none absolute -left-2 -top-8 h-14 w-14 sm:h-16 sm:w-16 text-[#001BB7]/15"
                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                >
                    <path d="M7 4C4.79 4 3 5.79 3 8v4c0 2.21 1.79 4 4 4h2v-4H7V8h4V4H7zm10 0c-2.21 0-4 1.79-4 4v4c0 2.21 1.79 4 4 4h2v-4h-2V8h4V4h-4z" />
                </svg>

                {/* closing quote (SVG) */}
                <svg
                    className="pointer-events-none absolute -right-0 -bottom-0 h-14 w-14 sm:h-16 sm:w-16 text-[#0046FF]/15"
                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                >
                    <path d="M17 20c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4h-2v4h2v4h-4v4h4zm-10 0c2.21 0 4-1.79 4-4v-4c0-2.21-1.79-4-4-4H5v4h2v4H3v4h4z" />
                </svg>

                <blockquote>
                    <p className="px-3 sm:px-6 md:px-10 text-[1.05rem] sm:text-md md:text-lg   text-slate-800 italic font-medium font-serif">
                        {fullMessage}
                    </p>
                </blockquote>

                {/* stylish underline limited to text width */}

            </figure>
        </section>
    );
}
