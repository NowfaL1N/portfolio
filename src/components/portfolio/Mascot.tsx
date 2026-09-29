"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const GREETINGS = [
  "Hi! I'm your interactive co-pilot! 🚀",
  "Full-stack software & web performance.",
  "Building clean, scalable architecture.",
  "Click me again for more!",
  "Always shipping quality code ✨",
  "Zero bugs guaranteed (mostly) 😉",
  "Let me know if you want to collaborate!",
];

export function Mascot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<SVGGElement>(null);
  const leftEyeRef = useRef<SVGCircleElement>(null);
  const rightEyeRef = useRef<SVGCircleElement>(null);
  const mouthRef = useRef<SVGPathElement>(null);

  const [isBlinking, setIsBlinking] = useState(false);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [speechIndex, setSpeechIndex] = useState(0);

  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const lastMouseMove = useRef<number>(0);
  const idleTarget = useRef({ x: 0, y: 0 });

  const isVisible = useRef(true);
  const isReducedMotion = useRef(false);
  const rafId = useRef<number>(0);
  const speechTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 1. Reduced Motion Check + initialize timestamp refs
  useEffect(() => {
    isReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    lastMouseMove.current = Date.now();
  }, []);

  // 2. Intersection Observer (pause animation when offscreen)
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.current = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // 3. Pointer Tracking
  useEffect(() => {
    if (isReducedMotion.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalize mouse offset between -1 and 1
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));

      targetMouse.current = { x: normX, y: normY };
      lastMouseMove.current = Date.now();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 4. Animation Loop (Lerp + Direct DOM updates to avoid React re-renders)
  useEffect(() => {
    if (isReducedMotion.current) return;

    const animate = () => {
      if (isVisible.current) {
        const now = Date.now();
        // Check for idle look-around after 3 seconds of inactive pointer
        if (now - lastMouseMove.current > 3000) {
          if (Math.random() < 0.02) {
            idleTarget.current = {
              x: (Math.random() - 0.5) * 0.8,
              y: (Math.random() - 0.5) * 0.6,
            };
          }
          targetMouse.current = idleTarget.current;
        }

        // Frame-rate independent smooth lerp
        currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.08;
        currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.08;

        const mx = currentMouse.current.x;
        const my = currentMouse.current.y;

        // Apply transforms directly to SVG elements
        if (headRef.current) {
          headRef.current.style.transform = `translate3d(${mx * 8}px, ${my * 6}px, 0) rotate(${mx * 3}deg)`;
        }
        if (leftEyeRef.current) {
          leftEyeRef.current.style.transform = `translate3d(${mx * 6}px, ${my * 5}px, 0)`;
        }
        if (rightEyeRef.current) {
          rightEyeRef.current.style.transform = `translate3d(${mx * 6}px, ${my * 5}px, 0)`;
        }
        if (mouthRef.current) {
          mouthRef.current.style.transform = `translate3d(${mx * 4}px, ${my * 3}px, 0)`;
        }
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  // 5. Automatic Blinking Loop
  useEffect(() => {
    if (isReducedMotion.current) return;

    let timer: ReturnType<typeof setTimeout>;
    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);

      const nextBlink = 2500 + Math.random() * 4000;
      timer = setTimeout(triggerBlink, nextBlink);
    };

    timer = setTimeout(triggerBlink, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 6. Click Handler for Speech Bubble
  const handleMascotClick = useCallback(() => {
    if (speechTimeoutRef.current) {
      clearTimeout(speechTimeoutRef.current);
    }

    setSpeechBubble(GREETINGS[speechIndex % GREETINGS.length]);
    setSpeechIndex((prev) => prev + 1);

    speechTimeoutRef.current = setTimeout(() => {
      setSpeechBubble(null);
    }, 3000);
  }, [speechIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center select-none group"
      role="region"
      aria-label="Interactive Developer Mascot"
    >
      {/* Speech Bubble */}
      {speechBubble && (
        <div
          className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap
            bg-accent text-background text-xs font-mono font-bold
            px-4 py-2 rounded-full shadow-lg z-20 pointer-events-none"
          style={{ animation: "fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          {speechBubble}
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0
              border-l-[6px] border-l-transparent
              border-r-[6px] border-r-transparent
              border-t-[6px] border-t-accent"
          />
        </div>
      )}

      {/* Interactive Mascot SVG Canvas */}
      <button
        type="button"
        onClick={handleMascotClick}
        className="relative focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-3xl p-2
          transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Interact with developer mascot co-pilot"
      >
        <svg
          width="240"
          height="260"
          viewBox="0 0 240 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* Subtle Ambient Glow */}
          <circle
            cx="120"
            cy="140"
            r="80"
            fill="url(#glow-gradient)"
            opacity="0.25"
            className="transition-opacity duration-500 group-hover:opacity-45"
          />

          {/* Shadow underneath */}
          <ellipse
            cx="120"
            cy="235"
            rx="55"
            ry="10"
            fill="#000000"
            opacity="0.3"
          />

          {/* Breathing Body Container */}
          <g className="animate-[pulse_4s_easeInOut_infinite]">
            {/* Base Body / Torso */}
            <rect
              x="55"
              y="110"
              width="130"
              height="115"
              rx="45"
              fill="#18181b"
              stroke="#27272a"
              strokeWidth="3"
            />

            {/* Inner Hoodie / Tech Accent detail */}
            <path
              d="M 90 120 L 120 155 L 150 120"
              stroke="#b4f461"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.85"
            />

            {/* Head Group (Parallax Target) */}
            <g ref={headRef} className="will-change-transform">
              {/* Head Shell */}
              <rect
                x="45"
                y="35"
                width="150"
                height="120"
                rx="40"
                fill="#27272a"
                stroke="#b4f461"
                strokeWidth="3"
              />

              {/* Antenna / Sensor */}
              <line
                x1="120"
                y1="35"
                x2="120"
                y2="15"
                stroke="#b4f461"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle
                cx="120"
                cy="12"
                r="6"
                fill="#b4f461"
                className="animate-pulse"
              />

              {/* Visor Screen Background */}
              <rect
                x="60"
                y="55"
                width="120"
                height="70"
                rx="25"
                fill="#09090b"
                stroke="#3f3f46"
                strokeWidth="2"
              />

              {/* Left Eye Socket & Pupil */}
              <g className="will-change-transform">
                <circle cx="92" cy="88" r="14" fill="#18181b" />
                <circle
                  ref={leftEyeRef}
                  cx="92"
                  cy="88"
                  r={isBlinking ? 1 : 8}
                  fill="#b4f461"
                  className="transition-[r] duration-100 ease-out"
                />
              </g>

              {/* Right Eye Socket & Pupil */}
              <g className="will-change-transform">
                <circle cx="148" cy="88" r="14" fill="#18181b" />
                <circle
                  ref={rightEyeRef}
                  cx="148"
                  cy="88"
                  r={isBlinking ? 1 : 8}
                  fill="#b4f461"
                  className="transition-[r] duration-100 ease-out"
                />
              </g>

              {/* Smile / Mouth expression */}
              <path
                ref={mouthRef}
                d="M 110 106 Q 120 114 130 106"
                stroke="#b4f461"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                className="will-change-transform"
              />
            </g>
          </g>

          {/* Gradients */}
          <defs>
            <radialGradient id="glow-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#b4f461" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#b4f461" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </button>

      {/* Helper caption */}
      <span className="mt-2 font-mono text-[11px] text-muted-foreground/70 tracking-wider uppercase">
        [ Interactive Co-pilot — Click Me ]
      </span>
    </div>
  );
}
