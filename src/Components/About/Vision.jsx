import React from "react";
import Title from "../Shared/Title";

export default function Vision() {
    const visionText =
        "To be a world-renowned leader in Computer Science and Engineering education and research, shaping the future of technology and empowering individuals to create solutions that address the world's most pressing challenges.";

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            <Title title={' Our Vision'} subtitle={'Where we aim to go'} />

            {/* Body */}
            <p className="mt-6 mx-auto max-w-4xl text-slate-800 text-center leading-relaxed">
                {visionText}
            </p>
        </section>
    );
}
