import React from "react";
import { Link, useLocation } from "react-router-dom";
import Title from "../Shared/Title";

export default function AboutTeaser() {
    const { pathname } = useLocation();
    // Keep images in /public for simple paths
    const imgSrc = "../src/assets/aboutTeaser.jpg";
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <Title title="About the Department" subtitle="Who we are & what we do" />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden border border-[#E9E9E9] bg-white">
                    <img
                        src={imgSrc}
                        alt="BU CSE department overview"
                        className="h-64 sm:h-80 w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                        loading="lazy"
                    />
                </div>

                {/* Text */}
                <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                        Building thinkers, makers, and researchers
                    </h3>
                    <p className="mt-2 text-slate-700">
                        In this modern world to compete with the world countries we need to habituate ourselves with the use of technological equipment. So opening such a department (CSE) was a notable decision. The department of Computer Science and Engineering is therefore aware of proving quality education. The department provides an excellent and bright young brand of teachers who are deeply committed to the university to bring out the best graduates in academic disciplines and is contributing to the perfect development the backbone of ICT of nation. Our graduates are in forth in serving the nation with reputation. Currently, we are providing B.Sc. (Engg.) and MS degree. However, we dream of commencing PhD program as well.
                    </p>

                    {(!pathname.includes('about')) && (
                        <Link
                            to="/about"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001BB7]"
                        >
                            Read more
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
