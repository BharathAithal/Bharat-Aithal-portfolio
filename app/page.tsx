import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f1f5f9_48%,#eef2f7_100%)] text-slate-900">
      {/* Decorative blobs — hidden on small screens to avoid overflow */}
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl animate-float-1 hidden sm:block" />
      <div className="pointer-events-none absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl animate-float-2 hidden sm:block" />
      <div className="pointer-events-none absolute bottom-16 left-1/3 h-52 w-52 rounded-full bg-cyan-50/70 blur-3xl animate-float-3 hidden sm:block" />
      <div className="pointer-events-none absolute left-16 top-40 h-3 w-3 rounded-full border border-slate-300/80 bg-white/80 hidden md:block" />
      <div className="pointer-events-none absolute right-20 top-56 h-4 w-4 rounded-full bg-slate-200/80 hidden md:block" />
      <div className="pointer-events-none absolute bottom-28 right-28 h-2.5 w-2.5 rounded-full bg-slate-300/80 hidden md:block" />

      <section className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-12 sm:py-16 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-14 lg:px-8 lg:py-20">
        {/* Text content */}
        <div className="relative max-w-2xl text-center lg:text-left lg:-mt-10">
          <p className="mb-3 text-xl font-semibold tracking-tight text-slate-800 sm:mb-4 sm:text-2xl md:text-3xl animate-fade-in-up delay-100">
            Hello, I&apos;m
          </p>
          <h1
            className="hover-gradient-text font-black uppercase tracking-[0.08em] animate-fade-in-up delay-200 cursor-default inline-block"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)' }}
          >
            Bharath
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-500 sm:text-lg animate-fade-in-up delay-300 max-w-xl mx-auto lg:mx-0">
            Researcher, educator, and builder focused on clear academic work,
            collaborative research, practical projects, and thoughtful training
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start animate-fade-in-up delay-400">
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-sky-500/20 active:scale-95 w-full justify-center sm:w-auto"
            >
              <span>View Projects</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md active:scale-95 w-full justify-center flex sm:w-auto"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative mx-auto flex w-full max-w-xs items-center justify-center sm:max-w-sm lg:max-w-[30rem] lg:justify-end animate-fade-in-up delay-300">
          <div className="pointer-events-none absolute h-[18rem] w-[18rem] rounded-full bg-sky-100/60 blur-3xl animate-float-3 sm:h-[22rem] sm:w-[22rem] lg:h-[24rem] lg:w-[24rem]" />
          <div className="pointer-events-none absolute -left-2 top-10 h-5 w-5 rounded-full border border-slate-300/80 bg-white/80 hidden sm:block" />
          <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 rounded-full bg-violet-100/90 hidden sm:block" />
          <div className="pointer-events-none absolute bottom-8 left-6 h-3 w-3 rounded-full bg-slate-300/70 hidden sm:block" />

          <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] lg:max-w-[30rem] lg:h-[32rem] lg:w-[30rem] group">
            {/* Outer rotating solid sky-blue border */}
            <div className="absolute inset-0 rounded-[42%_58%_52%_48%/45%_38%_62%_55%] border-[3px] border-sky-400/80 animate-spin-slow transition-transform duration-700 group-hover:scale-[1.02]" />
            {/* Outer rotating dashed indigo border running in reverse */}
            <div className="absolute inset-[-4px] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] border-[2px] border-dashed border-indigo-400/60 animate-spin-reverse-slow transition-transform duration-700 group-hover:scale-[1.03]" />
            {/* Ambient hover glow */}
            <div className="absolute inset-0 rounded-[42%_58%_52%_48%/45%_38%_62%_55%] bg-sky-200/10 blur-2xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            {/* Main container with profile image */}
            <div className="relative h-full w-full rounded-[42%_58%_52%_48%/45%_38%_62%_55%] border border-white/80 bg-white/60 p-3 shadow-[0_25px_60px_rgba(15,23,42,0.10)] backdrop-blur transition-transform duration-700 group-hover:scale-[1.01]">
              <div className="relative h-full w-full overflow-hidden rounded-[46%_54%_40%_60%/57%_43%_57%_43%] border border-dashed border-slate-300/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,245,249,0.88)_100%)]">
                <Image
                  src="/bharat.png"
                  alt="Prof. Bharath H Aithal"
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 480px"
                  className="object-cover object-center"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.10)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
