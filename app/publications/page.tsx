"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { highlights, peerReviewedPapers, conferenceProceedings, books, bookChapters, technicalReports } from './data';
import { SectionHeading, PaperList, ProceedingList, BookCard, ChapterList, ReportList } from './components';
import cover1 from './papers/1.jpg';
import cover2 from './papers/2.gif';
import cover3 from './papers/3.jpg';
import cover4 from './papers/4.jpg';
import cover5 from './papers/5.png';
import cover6 from './papers/6.png';
import cover7 from './papers/7.jpg';
import cover8 from './papers/8.jpg';
import cover9 from './papers/9.jpg';
import cover10 from './papers/10.jpg';
import cover11 from './papers/11.jpg';
import cover12 from './papers/12.png';
import cover13 from './papers/13.jpg';
import cover14 from './papers/14.jpg';

function SectionBanner({
  id,
  title,
  eyebrow,
  bg,
  open,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  bg: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState<string>('0px');

  useEffect(() => {
    if (open && contentRef.current) {
      setMaxH(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxH('0px');
    }
  }, [open]);

  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl p-6 text-left"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="absolute inset-0 bg-black/45" aria-hidden />
        <div className="relative z-10">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">{eyebrow}</p>}
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        </div>
        <svg
          className={`relative z-10 h-6 w-6 text-white transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        id={`section-${id}`}
        ref={contentRef}
        style={{ maxHeight: maxH }}
        className="overflow-hidden transition-[max-height] duration-400"
      >
        <div className="mt-4 rounded-b-2xl bg-white p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

const sliderImages = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
  cover11,
  cover12,
  cover13,
  cover14,
];

function ImageSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [slidesToShow]);

  const totalPages = Math.ceil(sliderImages.length / slidesToShow);

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [isPaused, totalPages]);

  const visibleSlides = sliderImages.slice(currentPage * slidesToShow, currentPage * slidesToShow + slidesToShow);

  const prevSlide = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const nextSlide = () => setCurrentPage((prev) => (prev + 1) % totalPages);

  return (
    <div className="mb-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        {/* <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Publication Covers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Publication image slider</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Browse publication covers in a responsive slider that preserves every image ratio.
          </p>
        </div> */}
      </div>

      <div
        className="relative mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-900/75 p-3 text-white shadow-lg transition hover:bg-slate-900"
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-4 transition-all duration-500">
            {visibleSlides.map((src, index) => (
              <div key={index} className="mx-auto flex h-[320px] w-full max-w-[220px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-4 shadow-sm">
                <Image
                  src={src}
                  alt={`Publication cover ${currentPage * slidesToShow + index + 1}`}
                  width={220}
                  height={320}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-slate-900/75 p-3 text-white shadow-lg transition hover:bg-slate-900"
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="mt-5 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${index === currentPage ? 'bg-sky-700' : 'bg-slate-300'}`}
            aria-label={`Go to slide group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Publications() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    papers: true,
    proceedings: false,
    books: false,
    chapters: false,
    reports: false,
  });

  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_24rem] lg:px-8 lg:py-16">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
              Research Output
            </p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Publications
            </h1>
            <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore peer-reviewed journal articles, conference proceedings, books, book chapters and technical reports organized into focused publication categories.
            </p>
          </div>

          <aside className="border-t-2 border-slate-900 pt-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pl-8 lg:pt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              Publication Overview
            </p>
            <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-5 py-4">
                  <dt className="text-sm leading-6 text-slate-600">{item.label}</dt>
                  <dd className="shrink-0 text-lg font-semibold text-slate-950">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <SectionHeading eyebrow="Publications" title="Journal Articles" />

        <SectionBanner
          id="papers"
          title="Peer-Reviewed Papers"
          bg="https://images.unsplash.com/photo-1526378725037-1d3f3a0f6c5f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c0dfc6b5b9e"
          open={!!open.papers}
          onToggle={() => toggle('papers')}
        >
          <PaperList papers={peerReviewedPapers} />
        </SectionBanner>

        <SectionBanner
          id="proceedings"
          title="Conference Proceedings"
          bg="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=7e3b8f5b5c1a"
          open={!!open.proceedings}
          onToggle={() => toggle('proceedings')}
        >
          <ProceedingList proceedings={conferenceProceedings} />
        </SectionBanner>

        <SectionBanner
          id="books"
          title="Books"
          bg="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f2a6f7f1b6c"
          open={!!open.books}
          onToggle={() => toggle('books')}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {books.map((book, idx) => (
              <BookCard key={`${book.title}-${book.year}`} book={book} index={idx} />
            ))}
          </div>
        </SectionBanner>

        <SectionBanner
          id="chapters"
          title="Book Chapters"
          bg="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d3a1b5b8f3e"
          open={!!open.chapters}
          onToggle={() => toggle('chapters')}
        >
          <ChapterList chapters={bookChapters} />
        </SectionBanner>

        <SectionBanner
          id="reports"
          title="Technical Reports"
          bg="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=2d0f4e3b9c2a"
          open={!!open.reports}
          onToggle={() => toggle('reports')}
        >
          <ReportList reports={technicalReports} />
        </SectionBanner>

        <ImageSlider />
      </section>
    </main>
  );
}
