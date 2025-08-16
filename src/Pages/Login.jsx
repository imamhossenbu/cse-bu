import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Loader2,
    AlertCircle,
    ShieldCheck,
} from "lucide-react";



const BG_URL = "../src/assets/terms.jpg"; // <-- replace with your path if different

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [showPw, setShowPw] = React.useState(false);
    const [remember, setRemember] = React.useState(true);

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    const validate = () => {
        if (!email.trim() || !password.trim()) {
            return "Please enter email and password.";
        }
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!okEmail) return "Please enter a valid email address.";
        if (password.length < 6) return "Password must be at least 6 characters.";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const v = validate();
        if (v) return setError(v);

        setLoading(true);
        setTimeout(() => {
            const match = DUMMY_USERS.find(
                (u) => u.email === email.trim() && u.password === password
            );
            if (!match) {
                setError("Invalid email or password.");
                setLoading(false);
                return;
            }
            if (remember) {
                localStorage.setItem("bu_cse_token", "demo-token");
                localStorage.setItem("bu_cse_user", email.trim());
            }
            setSuccess("Logged in successfully!");
            setLoading(false);
            setTimeout(() => navigate("/"), 600);
        }, 650);
    };

    return (
        <section className="relative w-screen min-h-screen overflow-hidden grid place-items-center">
            {/* Full-width background image */}
            <img
                src={BG_URL}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-[#001BB7]/55" />
            {/* Subtle brand accent glow */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-[#FF8040] blur-3xl opacity-30" />

            {/* All content lives INSIDE this centered div */}
            <div className="relative z-10 w-full max-w-md px-4">
                {/* Card */}
                <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden">
                    {/* Accent top bar */}
                    <div className="h-1 bg-gradient-to-r from-[#001BB7] via-[#0046FF] to-[#FF8040]" />

                    <form onSubmit={handleSubmit} className="p-5 sm:p-6">
                        {/* Header (inside the same div) */}
                        <div className="flex justify-center items-center pb-2">
                            <img className="h-16 w-16 rounded-full" src="../src/assets/download.png" alt="" />
                        </div>
                        <div className="text-center mb-5">
                            <h1 className="text-2xl font-extrabold tracking-tight text-[#001BB7]">
                                Sign in to BU CSE
                            </h1>

                        </div>

                        {/* Alerts */}
                        <div className="min-h-6">
                            <AnimatePresence>
                                {error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className="mb-3 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                                    >
                                        <AlertCircle className="h-4 w-4" />
                                        {error}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className="mb-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
                                    >
                                        <ShieldCheck className="h-4 w-4" />
                                        {success}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Email */}
                        <label className="block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <div className="mt-1 relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="email"
                                autoComplete="email"
                                placeholder="you@bu.ac.bd"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                            />
                        </div>

                        {/* Password */}
                        <label className="mt-4 block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <div className="mt-1 relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type={showPw ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-[#E9E9E9] bg-white pl-9 pr-10 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPw((v) => !v)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-[#E9E9E9]"
                                aria-label={showPw ? "Hide password" : "Show password"}
                            >
                                {showPw ? (
                                    <EyeOff className="h-4 w-4 text-slate-500" />
                                ) : (
                                    <Eye className="h-4 w-4 text-slate-500" />
                                )}
                            </button>
                        </div>

                        {/* Extras */}
                        <div className="mt-4 flex items-center justify-between">
                            <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                                <input
                                    type="checkbox"
                                    checked={remember}
                                    onChange={(e) => setRemember(e.target.checked)}
                                    className="h-4 w-4 rounded border-slate-300 text-[#0046FF] focus:ring-[#0046FF]"
                                />
                                Remember me
                            </label>
                            <Link
                                to="/forgot-password"
                                className="text-sm text-[#0046FF] hover:text-[#001BB7]"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001BB7] disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Signing in…
                                </>
                            ) : (
                                "Sign in"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
