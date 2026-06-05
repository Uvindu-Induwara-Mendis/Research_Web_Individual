import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Sparkles, BookOpen, Cpu, Boxes, Play, FlaskConical, TrendingUp, Download,
  Menu, X, ArrowRight, CheckCircle2, Lightbulb, Layers, Wifi, Languages,
  Sliders, Gamepad2, GraduationCap, School, Users, Wallet,
  FileText, Image as ImageIcon, Presentation, Smartphone, Github,
  ChevronRight, Target, AlertTriangle, Sun, Moon,
} from "lucide-react";

import heroImg from "@/assets/hero-ar.jpg";
import markerImg from "@/assets/gallery-marker.jpg";
import unityImg from "@/assets/gallery-unity.jpg";
import uiImg from "@/assets/gallery-ui.jpg";
import archImg from "@/assets/gallery-arch.jpg";

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
    try { localStorage.setItem("theme", next); } catch {}
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
      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-gradient-cool opacity-20 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-gradient-warm opacity-15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-gradient-fresh opacity-15 blur-3xl" />
      </div>

      {/* NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
              scrolled ? "glass shadow-soft" : "bg-transparent"
            }`}
          >
            <a href="#hero" className="flex items-center gap-2">
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
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                      active === n.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
                className="rounded-full p-2 lg:hidden"
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

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-24 pt-12 lg:grid-cols-2 lg:pb-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
              <Sparkles className="h-3.5 w-3.5" />
              Final Year Research · 2026 · IT22177100
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Narrative-Based <span className="text-gradient-hero">Augmented Reality</span> for Early STEAM Education
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
              <span className="font-semibold text-white">Making the Invisible Visible</span> —
              interactive basic physical science for Sri Lankan primary students,
              powered by storybooks that come alive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {[
                { k: "Grades", v: "4–5" },
                { k: "Languages", v: "සිං / EN" },
                { k: "Mode", v: "Offline" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl glass-dark p-4 text-white">
                  <dt className="text-xs uppercase tracking-wider text-white/60">{s.k}</dt>
                  <dd className="mt-1 font-display text-2xl font-bold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-primary opacity-40 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] glass p-2 shadow-glow ring-1 ring-white/30">
              <img
                src={heroImg}
                alt="Primary student exploring AR storybook"
                width={1536}
                height={1024}
                className="w-full rounded-[1.6rem] object-cover"
              />
              <div className="absolute -bottom-3 left-6 right-6 flex items-center justify-between rounded-2xl glass-dark px-5 py-3 text-white shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-warm">
                    <BookOpen className="h-4 w-4 text-white" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-xs text-white/60">Live Scene</p>
                    <p className="text-sm font-semibold">Pulley · Energy Transfer</p>
                  </div>
                </div>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium">AR Active</span>
              </div>
            </div>

            <div className="absolute -left-6 top-12 hidden animate-float-slow rounded-2xl glass-dark p-3 text-white shadow-card md:block">
              <Boxes className="h-5 w-5" />
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Unity 3D</p>
            </div>
            <div className="absolute -right-4 bottom-24 hidden animate-float-slow [animation-delay:1.5s] rounded-2xl glass-dark p-3 text-white shadow-card md:block">
              <Cpu className="h-5 w-5" />
              <p className="mt-1 text-[10px] uppercase tracking-wider text-white/60">Vuforia</p>
            </div>
          </div>
        </div>

        {/* Team strip */}
        <div className="mx-auto max-w-7xl px-4 pb-16">
          <div className="rounded-3xl glass-dark p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Research Team</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">Built by SLIIT Final-Year Researchers</h3>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { n: "Mendis B.M.U.I", r: "Lead · IT22177100" },
                  { n: "Bandara M.R.J.K", r: "Member" },
                  { n: "Jayasundara R.K.M.J.Y", r: "Member" },
                  { n: "Ilayperuma M.I", r: "Member" },
                ].map((m) => (
                  <div key={m.n} className="rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                    <p className="text-sm font-semibold text-white">{m.n}</p>
                    <p className="text-xs text-white/60">{m.r}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/70">
              <GraduationCap className="h-4 w-4" />
              <span>Supervised by <strong className="text-white">Mr. Ishara Gamage</strong> & <strong className="text-white">Mr. Nushkan Nismi</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section id="problem" eyebrow="The Problem" title="Why basic physical science is failing primary students">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card accent="warm" icon={<AlertTriangle className="h-5 w-5" />} label="The Challenge">
            <p className="text-muted-foreground">
              Grade 4–5 students persistently underperform in basic physical science because
              textbooks rely on <strong className="text-foreground">static 2D diagrams</strong> to
              explain invisible, dynamic processes like force vectors and energy transfer.
            </p>
          </Card>
          <Card accent="cool" icon={<Target className="h-5 w-5" />} label="The Gap">
            <p className="text-muted-foreground">
              Rural schools lack lab equipment, and existing AR tools are
              <strong className="text-foreground"> not aligned with the Sri Lankan "Parisaraya" curriculum</strong>
              {" "}nor available in Sinhala.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { k: "of rural schools", v: "62%", sub: "lack functional physics lab equipment" },
            { k: "static diagrams", v: "2D", sub: "dominate Grade 4–5 textbooks" },
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
                { icon: <Wifi className="h-4 w-4" />, t: "Offline-first functionality" },
                { icon: <Languages className="h-4 w-4" />, t: "Bilingual Sinhala / English" },
                { icon: <Sliders className="h-4 w-4" />, t: "Real-time force sliders" },
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
              combining traditional Sri Lankan storytelling with modern gamified learning —
              <strong className="text-foreground"> no internet required</strong> in rural classrooms.
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2 lg:[grid-auto-flow:dense]">
          <MediaTile className="lg:col-span-7 lg:row-span-2" src={markerImg} label="Storybook Page Marker Design" tone="warm" />
          <MediaTile className="lg:col-span-5" src={unityImg} label="Unity AR Scene · Simple Machines" tone="fresh" />
          <MediaTile className="lg:col-span-3" src={uiImg} label="UI Interaction Flow" tone="cool" />
          <MediaTile className="lg:col-span-2" src={archImg} label="System Architecture" tone="primary" compact />
        </div>
      </Section>

      {/* DEMO */}
      <Section id="demo" eyebrow="Prototype" title="Product walkthrough & live interactions">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary p-1 shadow-glow">
          <div className="relative aspect-video w-full overflow-hidden rounded-[1.75rem] bg-[oklch(0.16_0.05_265)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.5_0.2_280/0.4),transparent_60%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <button className="group flex items-center gap-4 rounded-full glass-dark px-8 py-5 text-white shadow-glow transition-transform hover:scale-105">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-warm shadow-warm">
                  <Play className="h-7 w-7 fill-white text-white" />
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-widest text-white/60">Demo Video</span>
                  <span className="block font-display text-lg font-bold">Product Walkthrough</span>
                </span>
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl glass-dark px-4 py-2 text-xs text-white/80">
              <span>00:00 / 03:42</span>
              <span className="hidden sm:inline">Recorded at SLIIT · Grade 4 classroom pilot</span>
              <span className="rounded-full bg-white/15 px-2.5 py-0.5">1080p</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <InteractionCard
            n="01"
            tone="warm"
            icon={<Boxes className="h-6 w-6" />}
            title="Manipulate lever & pulley mechanisms"
            body="Students tap and drag mechanical parts to watch energy transfer in real time — converting effort into load motion across simple machines."
          />
          <InteractionCard
            n="02"
            tone="cool"
            icon={<Sliders className="h-6 w-6" />}
            title="Adjust an on-screen force slider"
            body="A live physics-driven simulation responds to slider input, visualising Newtonian forces, acceleration and friction on storybook objects."
          />
        </div>
      </Section>

      {/* RESEARCH */}
      <Section id="research" eyebrow="Research & Validation" title="Evidence-based, classroom-tested">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-3xl border bg-card p-8 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-cool text-white shadow-soft">
                <FlaskConical className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-bold">Methodology</h3>
            </div>
            <p className="mt-4 text-muted-foreground">
              A <strong className="text-foreground">build-and-test approach</strong> comparing an
              <strong className="text-foreground"> experimental group</strong> (using the AR application)
              against a <strong className="text-foreground">control group</strong> (conventional textbook
              instruction), measured with pre- and post-tests.
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
                "Real-time engagement data via Firebase Analytics",
              ].map((m) => (
                <li key={m} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-primary-foreground/90">{m}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl bg-white/10 p-3 text-xs text-primary-foreground/80 ring-1 ring-white/15">
              All learning telemetry is securely logged and anonymised in line with research ethics.
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
                { t: "B2B Institutional Licensing", d: "Annual per-school licenses with admin dashboard.", color: "bg-gradient-primary" },
                { t: "Printed AR Storybooks", d: "Physical sales of marker-enabled storybooks per student.", color: "bg-gradient-warm" },
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
                Expansion to Grades 6–9 Science, Tamil-medium release, and SAARC-region
                localisation positions AR-STEAM as a regional category leader.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* RESOURCES */}
      <Section id="resources" eyebrow="Resource Repository" title="Download project deliverables">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Research Proposal", d: "Full academic proposal (PDF)", icon: <FileText className="h-6 w-6" />, color: "bg-gradient-primary", file: "proposal.pdf" },
            { t: "High-Res Poster", d: "A1 conference poster", icon: <ImageIcon className="h-6 w-6" />, color: "bg-gradient-warm", file: "poster.pdf" },
            { t: "Presentation Slides", d: "Final defense deck", icon: <Presentation className="h-6 w-6" />, color: "bg-gradient-fresh", file: "slides.pdf" },
            { t: "Android APK Build", d: "Latest release v1.0", icon: <Smartphone className="h-6 w-6" />, color: "bg-gradient-cool", file: "ar-steam.apk" },
            { t: "GitHub Repository", d: "Source & documentation", icon: <Github className="h-6 w-6" />, color: "bg-[oklch(0.2_0.02_265)]", file: "#" },
            { t: "Lesson Plan Kit", d: "Teacher guide (Sinhala/EN)", icon: <BookOpen className="h-6 w-6" />, color: "bg-gradient-primary", file: "lesson-kit.zip" },
          ].map((r) => (
            <a
              key={r.t}
              href="#"
              download={r.file}
              className="group relative overflow-hidden rounded-3xl border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start gap-4">
                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-white shadow-soft ${r.color}`}>
                  {r.icon}
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-bold text-foreground">{r.t}</p>
                  <p className="text-sm text-muted-foreground">{r.d}</p>
                </div>
                <Download className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:text-primary" />
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold uppercase tracking-wider">
                  {r.file.split(".").pop()}
                </span>
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Download →
                </span>
              </div>
            </a>
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
                <p className="font-display font-bold text-white">AR-STEAM.lk</p>
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
    <section id={id} className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-20 lg:py-28">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {children}
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
    <figure className={`group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-border ${className}`}>
      <img
        src={src}
        alt={label}
        loading="lazy"
        width={1024}
        height={1024}
        className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${compact ? "min-h-[180px]" : "min-h-[260px]"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_265/0.85)] via-transparent to-transparent" />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5 text-white">
        <span className={`h-8 w-1.5 rounded-full ${grad}`} />
        <span className="font-display font-semibold drop-shadow">{label}</span>
      </figcaption>
    </figure>
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
