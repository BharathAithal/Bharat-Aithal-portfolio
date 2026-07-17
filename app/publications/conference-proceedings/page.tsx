import Link from "next/link";
import { conferenceProceedings } from "../data";
import { SectionHeading, ProceedingList } from "../components";

export default function ConferenceProceedingsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="page-container py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-100">
          <div className="max-w-4xl">
            <p className="eyebrow-pill mb-5 text-xs font-semibold uppercase tracking-[0.3em]">
              Publications
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Conference proceedings
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Conference papers presented at national and international events in urban science and remote sensing.
            </p>
            <Link
              href="/publications"
              className="mt-8 inline-flex text-sm font-semibold text-sky-700 underline underline-offset-4 hover:text-sky-900"
            >
              ← Back to Publications
            </Link>
          </div>
        </div>
      </section>

      <section className="page-container py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-200">
        <SectionHeading eyebrow="Conference Proceedings" title="Conference contributions" />
        <div className="mt-7">
          <ProceedingList proceedings={conferenceProceedings} />
        </div>
      </section>
    </main>
  );
}
