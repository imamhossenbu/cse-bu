import React from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollControls() {
  const [showUp, setShowUp] = React.useState(false);
  const [showDown, setShowDown] = React.useState(false);

  React.useEffect(() => {
    const handle = () => {
      const y = window.scrollY || window.pageYOffset;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setShowUp(y > 160);             // show "Up" after some scrolling
      setShowDown(y < max - 16);      // hide "Down" near the bottom
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollBottom = () =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {/* Scroll to Top */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        className={`rounded-full bg-[#0046FF] text-white shadow-lg p-3 transition
          hover:bg-[#001BB7] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0046FF]
          ${showUp ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Scroll to Bottom */}
      <button
        onClick={scrollBottom}
        aria-label="Scroll to bottom"
        className={`rounded-full bg-[#FF8040] text-white shadow-lg p-3 transition
          hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8040]
          ${showDown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </div>
  );
}
