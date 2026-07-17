import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="home-grid-bg relative h-[calc(100dvh-73px)] overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f1f5f9_48%,#eef2f7_100%)] text-slate-900">
      {/* Decorative blobs — hidden on small screens to avoid overflow */}
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl animate-float-1 hidden sm:block" />
      <div className="pointer-events-none absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl animate-float-2 hidden sm:block" />
      <div className="pointer-events-none absolute bottom-16 left-1/3 h-52 w-52 rounded-full bg-cyan-50/70 blur-3xl animate-float-3 hidden sm:block" />
      <div className="pointer-events-none absolute left-16 top-40 h-3 w-3 rounded-full border border-slate-300/80 bg-white/80 hidden md:block" />
      <div className="pointer-events-none absolute right-20 top-56 h-4 w-4 rounded-full bg-slate-200/80 hidden md:block" />
      <div className="pointer-events-none absolute bottom-28 right-28 h-2.5 w-2.5 rounded-full bg-slate-300/80 hidden md:block" />

      <section className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-5 px-4 py-4 sm:px-6 md:flex-row md:gap-10 md:px-8 lg:gap-14">
        {/* Text content */}
        <div className="relative flex w-full max-w-xl flex-col items-center text-center md:w-1/2 md:items-start md:text-left">


          {/* Name + Group title */}
          <h1
            className="hover-gradient-text font-black tracking-tight animate-fade-in-up delay-200 cursor-default inline-block leading-[1.1]"
            style={{ fontSize: 'clamp(1.7rem, 5vw, 3.5rem)' }}
          >
            Prof. Bharath Haidas Aithal
          </h1>
          <p className="mt-2 text-sm font-semibold tracking-wide text-sky-700 sm:text-lg animate-fade-in-up delay-300">
            Energy and Urban Research Group
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:mt-5 sm:text-lg sm:leading-8 animate-fade-in-up delay-300 md:mx-0">
            Researcher, educator, and builder focused on clear academic work,
            collaborative research, practical projects, and thoughtful training
            experiences.
          </p>

          <div className="mt-5 flex w-full flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4 md:justify-start animate-fade-in-up delay-400">
            <Link
              href="/projects"
              className="group flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r from-indigo-500 to-indigo-700 hover:shadow-lg hover:shadow-sky-500/30 active:scale-95 sm:px-6 sm:py-3"
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

            {/* NPTEL SWAYAM Course button */}
            <a
              href="https://onlinecourses.nptel.ac.in/e-learning/preview/noc21_de11"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r from-emerald-500 to-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 sm:px-6 sm:py-3"
            >
              <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>NPTEL SWAYAM Course</span>
            </a>

            <Link
              href="/contact"
              className="flex min-h-11 items-center justify-center rounded-full border-2 border-slate-300 bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-lg active:scale-95 sm:px-6 sm:py-3"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative flex w-full max-w-[30rem] items-center justify-center animate-fade-in-up delay-300 md:w-1/2">
          <div className="pointer-events-none absolute h-[18rem] w-[18rem] rounded-full bg-sky-100/60 blur-3xl animate-float-3 sm:h-[22rem] sm:w-[22rem] lg:h-[24rem] lg:w-[24rem]" />
          <div className="pointer-events-none absolute -left-2 top-10 h-5 w-5 rounded-full border border-slate-300/80 bg-white/80 hidden sm:block" />
          <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 rounded-full bg-violet-100/90 hidden sm:block" />
          <div className="pointer-events-none absolute bottom-8 left-6 h-3 w-3 rounded-full bg-slate-300/70 hidden sm:block" />

          <div className="relative aspect-square w-[min(54vw,28dvh,210px)] sm:w-full sm:max-w-[300px] md:max-w-[360px] lg:h-[30rem] lg:w-[30rem] lg:max-w-[30rem] group">
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
