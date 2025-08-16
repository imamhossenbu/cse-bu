import React from "react";
import {
    Link,
    useNavigate,
    useRouteError,
    isRouteErrorResponse,
} from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    let status = 500;
    let title = "Something went wrong";
    let detail = "An unexpected error occurred.";

    if (isRouteErrorResponse(error)) {
        status = error.status;
        title = error.statusText || title;
        detail = error.data?.message || detail;
    } else if (error instanceof Error) {
        title = error.name || title;
        detail = error.message || detail;
    }
    if (status === 404) {
        title = "Page not found";
        detail = "The page you’re looking for doesn’t exist or was moved.";
    }

    return (
        <div className="min-h-[60vh] grid place-items-center bg-white px-4 py-10">
            <div className="w-full max-w-lg rounded-xl border border-[#E9E9E9] bg-white shadow-sm overflow-hidden">
                {/* thin accent */}
                <div className="h-1 bg-gradient-to-r from-[#001BB7] via-[#0046FF] to-[#FF8040]" />
                <div className="p-6">
                    <div className="flex flex-col items-center text-center">
                        <DotLottieReact
                            src="https://lottie.host/b33b8be4-0b34-43e8-86be-8393bbd6be5f/Fv5sXPpNlp.lottie"
                            loop
                            autoplay
                            style={{ width: 220, height: 220 }}
                        />
                        <p className="mt-2 text-xs font-semibold text-[#0046FF]">Error {status}</p>
                        <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-[#001BB7]">
                            {title}
                        </h1>
                        <p className="mt-1 text-sm text-slate-700">{detail}</p>

                        <div className="mt-5 flex flex-wrap justify-center gap-2">
                            <button
                                onClick={() => navigate(-1)}
                                className="inline-flex items-center gap-2 rounded-lg border border-[#E9E9E9] px-3 py-2 text-sm text-slate-700 hover:bg-[#E9E9E9]"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </button>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 rounded-lg bg-[#0046FF] px-3 py-2 text-sm font-semibold text-white hover:bg-[#001BB7]"
                            >
                                <Home className="h-4 w-4" />
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
