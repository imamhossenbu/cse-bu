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
            <main className="">
                <Outlet />
            </main>
            <Footer />
            <ScrollControls />
        </div>
    );
}
