import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav (same as Home) */}
      <header className="border-b border-white/10 bg-slate-950/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 ring-1 ring-slate-700/80">
              <span className="text-xl font-semibold tracking-tight">R</span>
            </div>
            <span className="text-sm font-semibold tracking-wide text-slate-100">
              Recruit<span className="text-primary-400">X</span>
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200/80 md:flex">
            <Link to="/" className="transition-colors hover:text-white/90">
              Home
            </Link>
            <Link to="/about" className="text-white">
              About Us
            </Link>
            <a
              href="#contact"
              className="transition-colors hover:text-white/90"
            >
              Contact Us
            </a>
            <button className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100 shadow-sm shadow-black/50">
              <span>English</span>
              <span className="text-[10px]">▼</span>
            </button>
            <a
              href="/login"
              className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-slate-900/40"
            >
              Sign In
            </a>
          </nav>

          {/* Mobile sign in */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/login"
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-slate-900/40"
            >
              Sign In
            </a>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <main className="relative flex flex-1 flex-col">
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-6 py-16 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
        <div className="pointer-events-none absolute -right-24 -top-20 h-40 w-40 rounded-3xl border border-slate-600/30 bg-slate-900/40" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-36 w-36 rounded-3xl border border-slate-700/30 bg-slate-900/30" />

        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center text-slate-50">
          {/* Pill */}
          <div className="inline-flex items-center rounded-full bg-slate-900/80 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-200 shadow-sm shadow-black/40">
            Story
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem]">
            About Us
          </h1>
          <div className="mt-3 h-0.5 w-14 rounded-full bg-slate-200/90" />

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-200/85 sm:text-[15px]">
            We&apos;re here to help you navigate the marketplace with clarity and
            control. Whether you&apos;re a company or a recruiter, reach out to our
            team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        </section>

        {/* What is Nomad Recruitment? */}
        <section className="bg-white px-6 py-14 text-slate-900 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-4xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What is Nomad Recruitment?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Nomad Recruitment is an online recruitment marketplace that connects
              companies directly with recruiters and recruitment agencies. Instead
              of long contracts, high percentage fees, or one-sided control, Nomad
              lets both sides make clear agreements upfront.
            </p>
          </div>
        </section>

        {/* A new way of working */}
        <section className="bg-white px-6 pb-16 text-slate-900 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
          <div className="mx-auto w-full max-w-5xl">
            <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#2F4B86] via-[#2C437B] to-[#0B1220] shadow-[0_30px_80px_rgba(15,23,42,0.25)] ring-1 ring-white/10">
              <div className="px-6 py-10 text-center text-white sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  A new way of working.
                </h3>
                <p className="mx-auto mt-4 max-w-3xl text-[12px] leading-relaxed text-white/80 sm:text-sm">
                  Nomad isn&apos;t another recruitment platform. It&apos;s a new way of
                  working. Instead of high percentage fees and one-sided control,
                  we bring companies and recruiters together in one transparent
                  marketplace. No CVs thrown over the fence. No paying without
                  results. No unnecessary middlemen.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] text-white/90 shadow-sm shadow-black/30">
                    No CVs thrown over the fence
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] text-white/90 shadow-sm shadow-black/30">
                    No paying without results
                  </div>
                  <div className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] text-white/90 shadow-sm shadow-black/30">
                    No unnecessary middlemen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality matters section */}
        <section className="bg-slate-50 px-6 pb-20 pt-4 text-slate-900 sm:px-8 sm:pb-24 sm:pt-6 lg:px-10 lg:pb-28 lg:pt-8">
          <div className="mx-auto w-full max-w-5xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-slate-50 shadow-md shadow-slate-400/40">
              {/* shield icon placeholder */}
              <span className="text-base">🛡️</span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Quality matters — especially in
              <br className="hidden sm:block" />
              recruitment.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-500 sm:text-[15px]">
              Nomad is built around trust. Companies, recruiters, and recruitment
              agencies are verified before they can actively use the platform. By
              keeping the platform focused on quality, Nomad creates a safer and
              more reliable environment where connections are meaningful.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white px-6 py-6 text-left shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
                <div className="mb-3 flex items-center text-sm text-slate-900">
                  <span className="mr-2 text-sm text-emerald-500">✔</span>
                  <span className="font-semibold">Verified Companies</span>
                </div>
                <p className="text-[12px] leading-relaxed text-slate-500">
                  Every company is manually reviewed.
                </p>
              </div>

              <div className="rounded-2xl bg-white px-6 py-6 text-left shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
                <div className="mb-3 flex items-center text-sm text-slate-900">
                  <span className="mr-2 text-sm text-emerald-500">✔</span>
                  <span className="font-semibold">Verified Recruiters</span>
                </div>
                <p className="text-[12px] leading-relaxed text-slate-500">
                  Only qualified professionals join.
                </p>
              </div>

              <div className="rounded-2xl bg-white px-6 py-6 text-left shadow-[0_18px_55px_rgba(15,23,42,0.08)] ring-1 ring-slate-100">
                <div className="mb-3 flex items-center text-sm text-slate-900">
                  <span className="mr-2 text-sm text-emerald-500">✔</span>
                  <span className="font-semibold">Verified Agencies</span>
                </div>
                <p className="text-[12px] leading-relaxed text-slate-500">
                  Trusted partners with a proven track record.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer (same as Home) */}
      <footer className="mt-auto bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 px-4 pb-10 pt-12 text-slate-200 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pb-14 lg:pt-16">
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* Brand */}
          <div className="inline-flex items-center gap-3 rounded-2xl bg-slate-900/80 px-5 py-3 shadow-[0_20px_55px_rgba(15,23,42,0.8)] ring-1 ring-slate-700/80">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-base font-semibold text-slate-50">
              R
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-semibold tracking-tight text-slate-50">
                Nomad Recruitment
              </span>
              <span className="mt-0.5 text-[11px] font-normal text-slate-300/90">
                The transparent recruitment marketplace where both sides decide
                the deal.
              </span>
            </div>
          </div>

          {/* Primary footer nav */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-slate-300/90">
            <button className="hover:text-white">How It Works</button>
            <button className="hover:text-white">Pricing</button>
            <button className="hover:text-white">About Us</button>
            <button className="hover:text-white">For Companies</button>
            <button className="hover:text-white">For Recruiters</button>
            <button className="hover:text-white">FAQs</button>
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms</button>
            <button className="hover:text-white">Compliance</button>
          </nav>

          {/* Social icons */}
          <div className="mt-9 flex justify-center gap-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70">
              in
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70">
              🌐
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-[13px] text-slate-200 shadow-md shadow-slate-900/70 ring-1 ring-slate-700/70">
              🐦
            </button>
          </div>

          {/* Divider */}
          <div className="mt-9 h-px w-full bg-slate-800/80" />

          {/* Bottom row */}
          <div className="mt-4 flex flex-col items-center justify-between gap-3 text-[11px] text-slate-400 sm:flex-row">
            <p className="text-center">
              © {new Date().getFullYear()} Nomad Recruitment. All rights
              reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
              <button className="hover:text-slate-200">Status</button>
              <span className="text-slate-600">•</span>
              <button className="hover:text-slate-200">Security</button>
              <span className="text-slate-600">•</span>
              <button className="hover:text-slate-200">Cookie Settings</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;