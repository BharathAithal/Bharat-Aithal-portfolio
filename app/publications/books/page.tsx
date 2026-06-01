import Link from "next/link";
import { books } from "../data";
import { SectionHeading, BookCard } from "../components";

export default function BooksPage() {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-100">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              Publications
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Books
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Authored books on urban dynamics, satellite image analysis and geospatial intelligence.
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

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-200">
        <SectionHeading eyebrow="Books" title="Authored books" />
        <ol className="mt-7 grid gap-4 lg:grid-cols-3">
          {books.map((book, index) => (
            <BookCard key={`${book.title}-${book.year}`} book={book} index={index} />
          ))}
        </ol>
      </section>
    </main>
  );
}
