import Link from "next/link";
import { bookChapters } from "../data";
import { SectionHeading, ChapterList } from "../components";

export default function BookChaptersPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              Publications
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Book chapters
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Chapters contributed to edited volumes on geospatial modelling, urban dynamics and environmental planning.
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

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <SectionHeading eyebrow="Book Chapters" title="Chapters in edited volumes" />
        <div className="mt-7">
          <ChapterList chapters={bookChapters} />
        </div>
      </section>
    </main>
  );
}
