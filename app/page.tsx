import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f1f5f9_48%,#eef2f7_100%)] text-slate-900">
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
      <div className="pointer-events-none absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 left-1/3 h-52 w-52 rounded-full bg-cyan-50/70 blur-3xl" />
      <div className="pointer-events-none absolute left-16 top-40 h-3 w-3 rounded-full border border-slate-300/80 bg-white/80" />
      <div className="pointer-events-none absolute right-20 top-56 h-4 w-4 rounded-full bg-slate-200/80" />
      <div className="pointer-events-none absolute bottom-28 right-28 h-2.5 w-2.5 rounded-full bg-slate-300/80" />

      <section className="mx-auto grid min-h-[calc(100vh-73px)] w-full max-w-7xl items-center gap-14 px-4 py-16 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-20">
        <div className="relative max-w-2xl lg:-mt-10">
          <p className="mb-4 text-2xl font-semibold tracking-tight text-slate-800 sm:text-3xl">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl font-black uppercase tracking-[0.08em] text-slate-900 sm:text-6xl lg:text-7xl">
            Bharat
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Researcher, educator, and builder focused on clear academic work,
            collaborative research, practical projects, and thoughtful training
            experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[30rem] items-center justify-center lg:justify-end">
          <div className="pointer-events-none absolute h-[24rem] w-[24rem] rounded-full bg-sky-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -left-2 top-10 h-5 w-5 rounded-full border border-slate-300/80 bg-white/80" />
          <div className="pointer-events-none absolute right-4 top-4 h-4 w-4 rounded-full bg-violet-100/90" />
          <div className="pointer-events-none absolute bottom-8 left-6 h-3 w-3 rounded-full bg-slate-300/70" />

          <div className="relative h-[32rem] w-[30rem] rounded-[42%_58%_52%_48%/45%_38%_62%_55%] border border-white/80 bg-white/60 p-3 shadow-[0_25px_60px_rgba(15,23,42,0.10)] backdrop-blur">
            <div className="relative h-full w-full overflow-hidden rounded-[46%_54%_40%_60%/57%_43%_57%_43%] border border-dashed border-slate-300/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(241,245,249,0.88)_100%)]">
              <Image
                src="/bharat.png"
                alt="Profile"
                fill
                sizes="(max-width: 1024px) 260px, 320px"
                className="object-cover object-center"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.10)_100%)]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
