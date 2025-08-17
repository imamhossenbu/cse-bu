import React from "react";
import Title from "../Shared/Title";

export default function Mission() {

    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
            {/* Heading */}
            <Title title={'Our Mission'} subtitle={'What we do every day'} />


            {/* Body */}
            <div className="mt-6 mx-auto max-w-4xl text-slate-800 text-center leading-relaxed">
                <p>To advance the field of Computer Science and Engineering through excellence in education, research, and innovation, while nurturing a community of lifelong learners, ethical professionals, and responsible global citizens.</p>
            </div>

        </section>
    );
}
