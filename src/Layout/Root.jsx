// src/App.jsx (layout)
import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollControls from "../Components/ScrollControls";

export default function AppLayout() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <Outlet />
            </main>
            <Footer />
            <ScrollControls />
        </div>
    );
}
