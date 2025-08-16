import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    Mail,
    ArrowLeft,
    Loader2,
    AlertCircle,
    ShieldCheck,
} from "lucide-react";

export default function ForgotPassword() {
    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const [sent, setSent] = React.useState(false);

    const validate = () => {
        if (!email.trim()) return "Please enter your email address.";
        const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
        if (!okEmail) return "Please enter a valid email address.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const v = validate();
        if (v) return setError(v);

        setLoading(true);
        // simulate request
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 900);
    };

    const handleResend = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 700);
    };

    return (
        <div className="min-h-[70vh] grid place-items-center pt-4 bg-white">
            {/* Single card container: everything is inside this div */}
            <div className="w-full max-w-md rounded-2xl border border-[#E9E9E9] bg-white shadow-sm overflow-hidden">
                {/* Accent line */}
                <div className="h-1 bg-gradient-to-r from-[#001BB7] via-[#0046FF] to-[#FF8040]" />

                <div className="p-5 sm:p-6">
                    {/* Header row with back button inside card */}
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h1 className="text-2xl font-extrabold tracking-tight text-[#001BB7]">
                                Forgot your password?
                            </h1>
                            <p className="mt-1 text-sm text-slate-600">
                                Enter your email and we’ll send you a password reset link.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="inline-flex items-center gap-2 rounded-lg border border-[#0046FF]/30 px-3 py-1.5 text-sm font-medium text-[#001BB7] hover:bg-white"
                            aria-label="Back to login"
                            title="Back to login"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Login
                        </button>
                    </div>

                    {/* Alerts */}
                    <div className="mt-2 min-h-6">
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
                            {sent && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    className="mb-3 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
                                >
                                    <ShieldCheck className="h-4 w-4" />
                                    If this email exists, a reset link was sent to{" "}
                                    <b className="ml-1">{email}</b>.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="mt-2">
                        <label className="block text-sm font-medium text-slate-700">
                            Email address
                        </label>
                        <div className="mt-1 relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <input
                                type="email"
                                placeholder="you@bu.ac.bd"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border border-[#E9E9E9] bg-white pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0046FF]"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0046FF] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#001BB7] disabled:opacity-60"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Sending…
                                </>
                            ) : (
                                "Send reset link"
                            )}
                        </button>
                    </form>

                    {/* After-sent actions (still inside the card) */}
                    {sent && (
                        <div className="mt-4 flex flex-col gap-2">
                            <button
                                onClick={handleResend}
                                disabled={loading}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#E9E9E9] px-4 py-2 text-sm font-medium text-slate-700 hover:bg-[#E9E9E9] disabled:opacity-60"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        Resending…
                                    </>
                                ) : (
                                    "Resend link"
                                )}
                            </button>

                            <button
                                onClick={() => navigate("/login")}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#0046FF]/30 px-4 py-2 text-sm font-semibold text-[#001BB7] hover:bg-white"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to login
                            </button>
                        </div>
                    )}

                    {/* Small helper text (inside card) */}
                    <p className="mt-4 text-center text-sm text-slate-600">
                        Need help? <span className="text-slate-500">Contact the department office.</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
