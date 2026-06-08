import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Sparkles, BookOpen, Cpu, Boxes, Play, FlaskConical, TrendingUp, Download,
  Menu, X, ArrowRight, CheckCircle2, Lightbulb, Layers, Wifi, Languages,
  Sliders, Gamepad2, GraduationCap, School, Users, Wallet,
  FileText, Image as ImageIcon, Presentation, Smartphone, Github,
  ChevronRight, Target, AlertTriangle, Sun, Moon,
  Atom, Zap, Eye, Volume2, VolumeX, Pause,
} from "lucide-react";

import heroVideo from "@/assets/R26_IM_003_Home_Video.mp4";
import demoVideo from "@/assets/Demo.mp4";
import storyBookMarker from "@/assets/story_book_marker.png";
import systemDiagram from "@/assets/System_diagram.png";
import ui1 from "@/assets/1.jpg";
import ui2 from "@/assets/2.jpg";
import ui3 from "@/assets/3.jpg";
import ui4 from "@/assets/4.jpg";
import ui5 from "@/assets/5.jpg";
import ui6 from "@/assets/6.jpg";
import ui7 from "@/assets/7.jpg";
import ui8 from "@/assets/8.jpg";
import ui9 from "@/assets/9.jpg";

import projectProposal from "@/assets/Project_Proposal.pdf";
import grade4Pdf from "@/assets/Grade_4.pdf";
import grade5Pdf from "@/assets/Grade_5.pdf";

// Team & supervisor photos
import photoMendis from "@/assets/Mendis B.M.U.I.jpeg";
import photoBandara from "@/assets/Bandara M.R.J.K.jpeg";
import photoJayasundara from "@/assets/Jayasundara R.K.M.J.Y.png";
import photoIlayperuma from "@/assets/Ilayperuma M.I.jpeg";
import photoIshara from "@/assets/MR. Ishara Gamage.jpg";
import photoNushkan from "@/assets/Mr. Nushkan Nismi.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Narrative-Based AR for Early STEAM Education | Digital Profile" },
      { name: "description", content: "Mobile AR storybook turning abstract physical science into interactive 3D experiences for Sri Lankan Grade 4–5 students." },
      { property: "og:title", content: "Narrative-Based AR for Early STEAM Education" },
      { property: "og:description", content: "Making the Invisible Visible: Interactive Basic Physical Science for Sri Lankan Primary Students." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "hero", label: "Overview" },
  { id: "team", label: "Team" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "media", label: "Media" },
  { id: "demo", label: "Demo" },
  { id: "research", label: "Research" },
  { id: "market", label: "Market" },
  { id: "resources", label: "Resources" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" && localStorage.getItem("theme")) as
      | "light" | "dark" | null;
    const prefersDark = typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const initial = saved ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch { }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Site-wide animated background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Subtle tech dot grid */}
        <div
          className="absolute inset-0 opacity-[0.08] dark:opacity-[0.15]"
          style={{ backgroundImage: 'radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 0)', backgroundSize: '40px 40px' }}
        />

        {/* Ambient floating blobs */}
        <div className="absolute -top-32 -left-32 h-[800px] w-[800px] animate-pulse-glow rounded-full bg-gradient-cool opacity-30 blur-[150px]" />
        <div className="absolute top-1/4 -right-40 h-[900px] w-[900px] animate-float-slow rounded-full bg-gradient-warm opacity-20 blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 h-[700px] w-[700px] animate-float-medium rounded-full bg-gradient-fresh opacity-20 blur-[150px]" />
      </div>

      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${scrolled ? "glass shadow-soft" : "bg-transparent"
              }`}
          >
            <a href="#hero" className={`flex items-center gap-2 ${scrolled ? "text-foreground" : "text-white"}`}>
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-sm font-bold tracking-tight sm:text-base">
                AR<span className="text-gradient">STEAM</span>.lk
              </span>
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${active === n.id
                        ? (scrolled ? "bg-foreground/10 text-foreground font-semibold" : "bg-white/15 text-white font-semibold")
                        : (scrolled ? "text-foreground/80 hover:bg-foreground/10 hover:text-foreground" : "text-white/80 hover:bg-white/10 hover:text-white")
                      }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="relative grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-foreground shadow-soft backdrop-blur transition-all hover:scale-105 hover:text-primary"
              >
                <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`} />
                <Moon className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"}`} />
              </button>

              <a
                href="#resources"
                className="group hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] lg:inline-flex"
              >
                Get the APK
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                className={`rounded-full p-2 lg:hidden ${scrolled ? "text-foreground" : "text-white"}`}
                onClick={() => setOpen((s) => !s)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </nav>

          {open && (
            <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl glass p-3 shadow-soft lg:hidden">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative isolate overflow-hidden pt-28 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-hero" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-b from-transparent to-background" />

        {/* ── Animated Particle System ── */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
          {/* Orbit rings */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-orbit h-[600px] w-[600px] rounded-full border border-white/[0.06]" />
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-orbit-reverse h-[900px] w-[900px] rounded-full border border-white/[0.04]" />
          </div>

          {/* Floating STEAM elements */}
          {/* Solid dots */}
          <div className="animate-particle absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-steam-orange/60 shadow-[0_0_12px_oklch(0.75_0.17_55/0.8)]" style={{ animationDelay: "0s" }} />
          <div className="animate-particle absolute left-[65%] top-[70%] h-3 w-3 rounded-full bg-steam-green/60 shadow-[0_0_14px_oklch(0.74_0.16_155/0.8)]" style={{ animationDelay: "3s" }} />
          <div className="animate-particle absolute left-[90%] top-[50%] h-2.5 w-2.5 rounded-full bg-steam-yellow/60 shadow-[0_0_15px_oklch(0.86_0.16_90/0.8)]" style={{ animationDelay: "2s" }} />

          {/* Hollow rings */}
          <div className="animate-particle absolute left-[80%] top-[15%] h-3.5 w-3.5 rounded-full border border-steam-purple/60 shadow-[0_0_10px_oklch(0.65_0.2_300/0.7)]" style={{ animationDelay: "1.5s", animationDuration: "12s" }} />
          <div className="animate-particle absolute left-[45%] top-[10%] h-4 w-4 rounded-full border border-steam-orange/50 shadow-[0_0_10px_oklch(0.75_0.17_55/0.6)]" style={{ animationDelay: "6s" }} />

          {/* Plus signs / Crosses */}
          <div className="animate-particle absolute left-[25%] top-[75%] flex h-4 w-4 items-center justify-center text-steam-pink/80 text-sm font-light shadow-glow" style={{ animationDelay: "4.5s", animationDuration: "10s" }}>+</div>
          <div className="animate-particle absolute left-[72%] top-[85%] flex h-4 w-4 items-center justify-center text-steam-purple/70 text-sm font-light shadow-glow" style={{ animationDelay: "7s", animationDuration: "11s" }}>+</div>

          {/* Geometric squares */}
          <div className="animate-particle absolute left-[5%] top-[55%] h-1.5 w-1.5 rotate-45 rounded-[1px] bg-white/60 shadow-[0_0_8px_oklch(1_0_0/0.5)]" style={{ animationDelay: "5s", animationDuration: "9s" }} />
          <div className="animate-particle absolute left-[35%] top-[40%] h-2 w-2 rounded-[2px] bg-steam-green/50 shadow-[0_0_6px_oklch(0.74_0.16_155/0.4)]" style={{ animationDelay: "1s", animationDuration: "15s" }} />
          <div className="animate-particle absolute left-[85%] top-[30%] h-1.5 w-1.5 rotate-12 rounded-[1px] bg-steam-pink/50 shadow-[0_0_8px_oklch(0.72_0.19_0/0.4)]" style={{ animationDelay: "8s", animationDuration: "14s" }} />

          {/* Larger ambient orbs */}
          <div className="absolute left-[15%] top-[30%] h-32 w-32 animate-pulse-glow rounded-full bg-gradient-cool opacity-15 blur-[40px]" />
          <div className="absolute right-[10%] top-[60%] h-40 w-40 animate-pulse-glow rounded-full bg-gradient-warm opacity-15 blur-[40px]" style={{ animationDelay: "2s" }} />
          <div className="absolute left-[55%] top-[15%] h-24 w-24 animate-pulse-glow rounded-full bg-gradient-fresh opacity-10 blur-[30px]" style={{ animationDelay: "4s" }} />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-12 lg:grid-cols-2 lg:pb-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" />
              Final Year Research · 2026 · IT22177100
            </span>

            {/* Main group title */}
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/50 animate-fade-up [animation-delay:100ms]">
              <span className="inline-block h-px w-8 bg-gradient-to-r from-white/40 to-transparent" />
              Group Research Project
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-white/80 sm:text-3xl lg:text-4xl animate-fade-up [animation-delay:200ms]">
              Narrative Based <span className="text-white">Augmented Reality</span> for Early STEAM Education
            </h1>

            {/* Sub component title — THE STAR */}
            <div className="mt-6 relative animate-fade-up [animation-delay:300ms]">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-warm opacity-10 blur-xl" />
              <p className="relative flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-steam-orange">
                <Eye className="h-3.5 w-3.5" />
                Individual Component
              </p>
              <h2 className="relative mt-2 font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="text-gradient-subtitle">Narrative Based AR Storybook</span>
                <br />
                <span className="text-white">for Visualizing Basic</span>
                <br />
                <span className="text-gradient-hero">Physical Science Concepts</span>
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl animate-fade-up [animation-delay:400ms]">
              <span className="font-semibold text-white">Making the Invisible Visible</span>
              {" "} interactive basic physical science for Sri Lankan primary students,
              powered by storybooks that come alive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-up [animation-delay:500ms]">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-warm transition-transform hover:scale-[1.03]"
              >
                <Play className="h-4 w-4 fill-primary" />
                Watch the Demo
              </a>
              <a
                href="#solution"
                className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Explore the Project
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 animate-fade-up [animation-delay:600ms]">
              {[
                { k: "Grades", v: "4-5", icon: <GraduationCap className="h-4 w-4" /> },
                { k: "Languages", v: "සිං / EN", icon: <Languages className="h-4 w-4" /> },
                { k: "Mode", v: "Offline", icon: <Wifi className="h-4 w-4" /> },
              ].map((s) => (
                <div key={s.k} className="group rounded-2xl glass-dark p-4 text-white transition-all hover:bg-white/10">
                  <dt className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/60">
                    {s.icon}
                    {s.k}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Video Player — replaces the static image */}
          <div className="relative animate-fade-up [animation-delay:400ms]">
            {/* Animated glow behind video */}
            <div className="absolute -inset-6 animate-video-glow rounded-[2.5rem] bg-gradient-primary opacity-40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] glass p-2 shadow-glow ring-1 ring-white/30">
              <video
                ref={videoRef}
                src={heroVideo}
                autoPlay
                loop
                muted={videoMuted}
                playsInline
                className="w-full rounded-[1.6rem] object-cover aspect-video"
              />

              {/* Video controls overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass-dark px-5 py-3 text-white shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-warm">
                    <BookOpen className="h-4 w-4 text-white" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs text-white/60">Project Intro</p>
                    <p className="text-sm font-semibold">AR Storybook Overview</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        if (videoPlaying) videoRef.current.pause();
                        else videoRef.current.play();
                        setVideoPlaying(!videoPlaying);
                      }
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-all hover:bg-white/25 hover:scale-110"
                    aria-label={videoPlaying ? "Pause" : "Play"}
                  >
                    {videoPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-white" />}
                  </button>
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = !videoMuted;
                        setVideoMuted(!videoMuted);
                      }
                    }}
                    className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition-all hover:bg-white/25 hover:scale-110"
                    aria-label={videoMuted ? "Unmute" : "Mute"}
                  >
                    {videoMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                  </button>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live Preview
                  </span>
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -left-6 top-12 hidden animate-float-slow rounded-2xl glass-dark p-3 text-white shadow-card md:block">
              <Boxes className="h-5 w-5" />
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Unity 3D</p>
            </div>
            <div className="absolute -right-4 bottom-32 hidden animate-float-slow [animation-delay:1.5s] rounded-2xl glass-dark p-3 text-white shadow-card md:block">
              <Cpu className="h-5 w-5" />
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Vuforia</p>
            </div>
            <div className="absolute -right-2 top-8 hidden animate-float-medium [animation-delay:3s] rounded-2xl glass-dark p-3 text-white shadow-card lg:block">
              <Atom className="h-5 w-5" />
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Physics</p>
            </div>
            <div className="absolute -left-4 bottom-20 hidden animate-float-medium [animation-delay:4.5s] rounded-2xl glass-dark p-3 text-white shadow-card lg:block">
              <Zap className="h-5 w-5" />
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Interactive</p>
            </div>
          </div>
        </div>

        {/* Team strip */}
        <div id="team" className="mx-auto max-w-7xl px-4 scroll-mt-28 z-10 relative">
          <div className="rounded-3xl glass-dark p-8 sm:p-12 shadow-card relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Research Team</p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Built by SLIIT Final Year Researchers</h3>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { n: "Mendis B.M.U.I", r: "Lead", img: photoMendis, pos: "object-[center_15%]" },
                { n: "Bandara M.R.J.K", r: "Member", img: photoBandara, pos: "object-[center_top]" },
                { n: "Jayasundara R.K.M.J.Y", r: "Member", img: photoJayasundara, pos: "object-[center_top]" },
                { n: "Ilayperuma M.I", r: "Member", img: photoIlayperuma, pos: "object-[center_top]" },
              ].map((m) => (
                <div key={m.n} className="group flex flex-col items-center gap-5 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20 hover:shadow-glow text-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white/10 transition-all duration-300 group-hover:ring-white/30 bg-white/5 p-1.5">
                    <img src={m.img} alt={m.n} className={`h-full w-full rounded-xl object-cover ${m.pos}`} />
                  </div>
                  <div>
                    <p className="text-base font-bold text-white">{m.n}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-steam-orange">{m.r}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-8 border-t border-white/10 pt-10 xl:flex-row xl:gap-12">
              <div className="flex flex-col items-center gap-2 text-center xl:items-start xl:text-left">
                <GraduationCap className="h-8 w-8 text-white/60" />
                <span className="text-sm font-semibold uppercase tracking-wider text-white/60">Supervised By</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6">
                {[
                  { n: "Mr. Ishara Gamage", r: "Supervisor", img: photoIshara },
                  { n: "Mr. Nushkan Nismi", r: "Co-Supervisor", img: photoNushkan },
                ].map((s) => (
                  <div key={s.n} className="group flex flex-col sm:flex-row items-center gap-6 rounded-[2rem] bg-white/5 pr-10 p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-white/20 hover:shadow-soft">
                    <div className="relative h-40 w-40 overflow-hidden rounded-2xl shadow-md ring-2 ring-white/20 transition-all duration-300 group-hover:ring-white/40 bg-white/5 p-1.5">
                      <img src={s.img} alt={s.n} className="h-full w-full rounded-xl object-cover object-[center_top]" />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xl font-bold text-white">{s.n}</p>
                      <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-steam-green">{s.r}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to push the fade transition below the team box */}
        <div className="h-24 lg:h-32 w-full" />
      </section>

      {/* PROBLEM */}
      <Section id="problem" eyebrow="The Problem" title="Why basic physical science is failing primary students">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card accent="warm" icon={<AlertTriangle className="h-5 w-5" />} label="The Challenge">
            <p className="text-muted-foreground">
              Grade 4-5 students persistently underperform in basic physical science because
              textbooks rely on <strong className="text-foreground">static 2D diagrams</strong> to
              explain invisible, dynamic processes like force vectors and energy transfer.
            </p>
          </Card>
          <Card accent="cool" icon={<Target className="h-5 w-5" />} label="The Gap">
            <p className="text-muted-foreground">
              Despite the global proliferation of AR-based physical science tools, no AR application exists
              for the Sri Lankan primary Parisaraya curriculum covering simple machines, energy, or forces.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { k: "of rural schools", v: "62%", sub: "lack functional physics lab equipment" },
            { k: "static diagrams", v: "2D", sub: "dominate Grade 4-5 textbooks" },
            { k: "localised AR apps", v: "0", sub: "for the Sinhala Parisaraya syllabus" },
          ].map((s) => (
            <div key={s.k} className="rounded-3xl border bg-card p-6 shadow-soft">
              <p className="font-display text-4xl font-extrabold text-gradient">{s.v}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{s.k}</p>
              <p className="text-sm text-muted-foreground">{s.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="solution" eyebrow="The Solution" title="A storybook that scans into a 3D physics lab">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card accent="primary" icon={<BookOpen className="h-5 w-5" />} label="What it does">
            <p className="text-muted-foreground">
              Uses printed storybooks as AR markers. Scan with a smartphone and
              <strong className="text-foreground"> 3D interactive simple machines and force simulations</strong>
              {" "}pop up from the page.
            </p>
          </Card>
          <Card accent="fresh" icon={<Lightbulb className="h-5 w-5" />} label="Key Features">
            <ul className="space-y-2 text-muted-foreground">
              {[
                { icon: <Wifi className="h-4 w-4" />, t: "Offline first functionality" },
                { icon: <Languages className="h-4 w-4" />, t: "Bilingual Sinhala / English" },
                { icon: <Sliders className="h-4 w-4" />, t: "Real time force sliders" },
                { icon: <Gamepad2 className="h-4 w-4" />, t: "Culturally grounded narratives" },
              ].map((f) => (
                <li key={f.t} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-secondary text-primary">
                    {f.icon}
                  </span>
                  <span className="text-foreground">{f.t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card accent="warm" icon={<Layers className="h-5 w-5" />} label="Innovation">
            <p className="text-muted-foreground">
              Built with <strong className="text-foreground">Unity 3D + Vuforia SDK</strong>,
              combining traditional Sri Lankan storytelling with modern gamified learning.
              <strong className="text-foreground"> No internet required</strong> in rural classrooms.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Unity 3D", "Vuforia", "Firebase", "Android"].map((t) => (
                <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* MEDIA */}
      <Section id="media" eyebrow="Visual Media" title="See it in action">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <MediaTile className="lg:col-span-5" src={storyBookMarker} label="Storybook Page Marker Design" tone="warm" />
          <MediaTile className="lg:col-span-7" src={systemDiagram} label="System Architecture" tone="primary" />
        </div>

        <div className="mt-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-cool text-white shadow-glow">
              <Smartphone className="h-6 w-6" />
            </span>
            <h3 className="font-display text-2xl font-bold">App UI Interaction Flow</h3>
          </div>

          <div className="flex gap-5 overflow-x-auto pb-10 snap-x snap-mandatory [-webkit-overflow-scrolling:touch] px-2 hide-scrollbar">
            {[ui1, ui2, ui3, ui4, ui5, ui6, ui7, ui8, ui9].map((img, i) => (
              <figure key={i} className="group relative flex-none w-[260px] sm:w-[300px] overflow-hidden rounded-[2.5rem] shadow-card ring-1 ring-border snap-center transition-all duration-300 hover:-translate-y-2 hover:shadow-glow hover:ring-white/20 bg-card p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <img src={img} alt={`UI Flow Screen ${i + 1}`} className="h-full w-full object-cover aspect-[9/16] bg-black" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_265/0.9)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/10">
                      Screen {String(i + 1).padStart(2, '0')}
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </Section>

      {/* DEMO */}
      <Section id="demo" eyebrow="Prototype" title="Product walkthrough & live interactions">
        <div className="mx-auto max-w-[320px] sm:max-w-[360px] relative overflow-hidden rounded-[2.5rem] bg-gradient-primary p-1.5 shadow-glow ring-4 ring-white/10">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[2.15rem] bg-black">
            <video
              src={demoVideo}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <InteractionCard
            n="01"
            tone="warm"
            icon={<Zap className="h-6 w-6" />}
            title="Building the Basic Circuit"
            body="Students tap the 3D battery and bulb terminals on their screen to physically draw wires between them. Once the loop is closed, the bulb instantly glows!"
          />
          <InteractionCard
            n="02"
            tone="cool"
            icon={<Layers className="h-6 w-6" />}
            title="Stacking Batteries in Series"
            body="After building the first circuit, students are challenged to make the bulb shine brighter. By tapping the screen, they stack up to three 3D batteries on top of each other and watch the light flare up!"
          />
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research" eyebrow="Research & Validation" title="Evidence based, classroom tested">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-cool text-white shadow-soft">
                <FlaskConical className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Methodology</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              A <strong className="text-foreground">build and test approach</strong> comparing an
              <strong className="text-foreground"> experimental group</strong> (using the AR application)
              against a <strong className="text-foreground">control group</strong> (conventional textbook
              instruction), measured with pre and post tests.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Experimental</p>
                <p className="mt-1 font-display font-bold text-foreground">AR Storybook App</p>
              </div>
              <div className="rounded-2xl bg-secondary p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Control</p>
                <p className="mt-1 font-display font-bold text-foreground">Textbook Instruction</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-glow">
            <h3 className="font-display text-xl font-bold">Metrics Tracked</h3>
            <ul className="mt-5 space-y-4">
              {[
                "Comprehension improvement (pre/post Δ)",
                "Misconception reduction",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-white/10 p-3 text-xs text-primary-foreground/80 ring-1 ring-white/15">
              All learning telemetry is securely logged and anonymized in line with research ethics.
            </p>
          </div>
        </div>
      </Section>

      {/* MARKET */}
      <Section id="market" eyebrow="Commercialization" title="A scalable path from classroom to country">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-fresh text-white shadow-soft">
                <Users className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Target Market</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {[
                { i: <School className="h-4 w-4" />, t: "Sri Lankan government & private primary schools" },
                { i: <BookOpen className="h-4 w-4" />, t: "Tuition classes (Parisaraya / Science streams)" },
                { i: <GraduationCap className="h-4 w-4" />, t: "Parents of Grade 5 Scholarship candidates" },
              ].map((x) => (
                <li key={x.t} className="flex items-center gap-3 rounded-2xl bg-secondary p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-card text-primary shadow-soft">
                    {x.i}
                  </span>
                  <span className="text-sm font-medium text-foreground">{x.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-warm text-white shadow-warm">
                <Wallet className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Revenue Model</h3>
            </div>
            <div className="mt-5 space-y-4">
              {[
                { t: "B2B Institutional Licensing", d: "Annual per school licenses with admin dashboard.", color: "bg-gradient-primary" },
                { t: "Printed AR Storybooks", d: "Physical sales of marker enabled storybooks per student.", color: "bg-gradient-warm" },
                { t: "Freemium Entry", d: "One chapter free to lower adoption barriers.", color: "bg-gradient-fresh" },
              ].map((r, i) => (
                <div key={r.t} className="flex gap-4 rounded-2xl border bg-secondary/50 p-4">
                  <span className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl font-display font-bold text-white shadow-soft ${r.color}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-display font-bold text-foreground">{r.t}</p>
                    <p className="text-sm text-muted-foreground">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-cool p-8 text-white shadow-glow">
          <div className="flex flex-wrap items-center gap-6">
            <TrendingUp className="h-8 w-8" />
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold">Future Potential</h3>
              <p className="text-white/85">
                Expansion to Grades 6-9 Science, Tamil medium release, and SAARC region
                localisation positions AR STEAM as a regional category leader.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section id="resources" eyebrow="Resource Repository" title="Download project deliverables">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Research Proposal", d: "Full academic proposal", icon: <FileText className="h-6 w-6" />, color: "bg-gradient-primary",
              links: [{ label: "Download PDF", href: projectProposal, download: "Project_Proposal.pdf", type: "pdf" }]
            },
            {
              t: "Presentation Slides", d: "Project defense slide decks", icon: <Presentation className="h-6 w-6" />, color: "bg-gradient-fresh",
              links: [
                { label: "Proposal Presentation", href: "https://docs.google.com/presentation/d/1FDqdWzSrDYMExZTPc244BUZwVIMCgFHs/edit?usp=sharing&ouid=104282320511871493654&rtpof=true&sd=true", type: "link" },
                { label: "Progress Presentation 1", href: "https://docs.google.com/presentation/d/17eSOtE-wsy5l876LlMfQFeo0NROwMB_N/edit?usp=sharing&ouid=104282320511871493654&rtpof=true&sd=true", type: "link" },
                { label: "Progress Presentation 2", href: "#", type: "pending" },
                { label: "Final Presentation", href: "#", type: "pending" }
              ]
            },
            {
              t: "Android APK Build", d: "Latest release v1.0", icon: <Smartphone className="h-6 w-6" />, color: "bg-gradient-cool",
              links: [{ label: "Download APK", href: "https://drive.google.com/file/d/14vEFScXLe1Lpj0IMpz85U8tPWHk5bVAD/view?usp=sharing", type: "apk" }]
            },
            {
              t: "Lesson Plan Kit", d: "Teacher guides (Sinhala/EN)", icon: <BookOpen className="h-6 w-6" />, color: "bg-gradient-warm",
              links: [
                { label: "Grade 4 Guide", href: grade4Pdf, download: "Grade_4.pdf", type: "pdf" },
                { label: "Grade 5 Guide", href: grade5Pdf, download: "Grade_5.pdf", type: "pdf" }
              ]
            },
            {
              t: "GitHub Repository", d: "Source & documentation", icon: <Github className="h-6 w-6" />, color: "bg-[oklch(0.2_0.02_265)]",
              links: [{ label: "View Source", href: "https://github.com/Uvindu-Induwara-Mendis/R26-IM-003.git", type: "github" }]
            },
            {
              t: "Demo Video", d: "High res product walkthrough", icon: <Play className="h-6 w-6" />, color: "bg-gradient-primary",
              links: [{ label: "View Video", href: demoVideo, type: "mp4" }]
            },
          ].map((r) => (
            <div key={r.t} className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-soft transition-all hover:shadow-card flex flex-col h-full">
              <div className="flex items-start gap-4 mb-5">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-soft shrink-0 ${r.color}`}>
                  {r.icon}
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-bold text-foreground">{r.t}</p>
                  <p className="text-sm text-muted-foreground">{r.d}</p>
                </div>
              </div>
              <div className="mt-auto space-y-2">
                {r.links.map((l, i) => (
                  <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${l.type === 'pending' ? 'bg-secondary/50 text-muted-foreground pointer-events-none' : 'bg-secondary hover:bg-primary/10 hover:text-primary'}`}>
                    <span className="font-semibold">{l.label}</span>
                    <span className="rounded-full bg-background px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {l.type === 'link' ? 'G-Slides' : l.type}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative mt-12 overflow-hidden bg-[oklch(0.15_0.04_265)] py-12 text-white/80">
        <div className="absolute inset-0 bg-hero opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display font-bold text-white">AR STEAM.lk</p>
                <p className="text-xs text-white/60">Digital Commercialization Profile · SLIIT 2026</p>
              </div>
            </div>
            <p className="text-xs text-white/60">
              © 2026 Mendis B.M.U.I & Team · Supervised by Mr. Ishara Gamage, Mr. Nushkan Nismi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ───────── helpers ───────── */

function Section({
  id, eyebrow, title, children,
}: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative overflow-hidden scroll-mt-24 py-20 lg:py-28">
      {/* Subtle animated background elements for visual interest */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-multiply dark:mix-blend-screen dark:opacity-20">
        <div className="absolute left-0 top-1/4 h-[500px] w-[500px] -translate-x-1/2 animate-float-slow rounded-full bg-gradient-cool opacity-10 blur-[100px]" />
        <div className="absolute right-0 top-3/4 h-[400px] w-[400px] translate-x-1/3 animate-float-medium rounded-full bg-gradient-warm opacity-10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-soft">
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({
  icon, label, accent, children,
}: {
  icon: React.ReactNode;
  label: string;
  accent: "primary" | "warm" | "cool" | "fresh";
  children: React.ReactNode;
}) {
  const grad = {
    primary: "bg-gradient-primary",
    warm: "bg-gradient-warm",
    cool: "bg-gradient-cool",
    fresh: "bg-gradient-fresh",
  }[accent];
  const shadow = accent === "warm" ? "shadow-warm" : "shadow-soft";
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className={`absolute inset-x-0 top-0 h-1 ${grad}`} />
      <div className="flex items-center gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${grad} ${shadow}`}>
          {icon}
        </span>
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
      </div>
      <div className="mt-5 text-base leading-relaxed">{children}</div>
    </div>
  );
}

function MediaTile({
  src, label, tone, className = "", compact = false,
}: {
  src: string; label: string; tone: "warm" | "cool" | "fresh" | "primary";
  className?: string; compact?: boolean;
}) {
  const grad = {
    warm: "bg-gradient-warm",
    cool: "bg-gradient-cool",
    fresh: "bg-gradient-fresh",
    primary: "bg-gradient-primary",
  }[tone];
  return (
    <a href={src} target="_blank" rel="noopener noreferrer" className={`group block relative overflow-hidden rounded-3xl shadow-card ring-1 ring-border cursor-zoom-in ${className}`}>
      <img
        src={src}
        alt={label}
        loading="lazy"
        width={1024}
        height={1024}
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${compact ? "min-h-[180px]" : "min-h-[260px]"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_265/0.85)] via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-white">
        <span className={`h-8 w-1.5 rounded-full ${grad}`} />
        <span className="font-display font-semibold drop-shadow">{label}</span>
      </div>
    </a>
  );
}

function InteractionCard({
  n, icon, title, body, tone,
}: { n: string; icon: React.ReactNode; title: string; body: string; tone: "warm" | "cool" }) {
  const grad = tone === "warm" ? "bg-gradient-warm" : "bg-gradient-cool";
  const shadow = tone === "warm" ? "shadow-warm" : "shadow-glow";
  return (
    <div className={`group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:${shadow}`}>
      <div className={`absolute -right-10 -top-10 h-40 w-40 rounded-full ${grad} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
      <div className="relative flex items-start gap-4">
        <span className={`grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl text-white ${grad} ${shadow}`}>
          {icon}
        </span>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Interaction {n}</span>
          <h3 className="mt-1 font-display text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-muted-foreground">{body}</p>
        </div>
      </div>
    </div>
  );
}
