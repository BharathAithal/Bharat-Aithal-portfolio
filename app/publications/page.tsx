"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { peerReviewedPapers, conferenceProceedings, books, editedBooks, bookChapters, technicalReports } from './data';
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
        className="group relative flex w-full items-center justify-between overflow-hidden rounded-2xl p-5 text-left shadow-[0_18px_42px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_58px_rgba(15,23,42,0.18)] sm:p-6"
        aria-expanded={open}
        aria-controls={`section-${id}`}
        style={{ minHeight: '60px' }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/40" aria-hidden />
        <div className="relative z-10">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">{eyebrow}</p>}
          <h3
            className="mt-1 font-semibold text-white sm:mt-2"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}
          >
            {title}
          </h3>
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
        <div className="content-panel mt-4 p-6">
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
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const totalPages = Math.ceil(sliderImages.length / slidesToShow);
  const activePage = Math.min(currentPage, Math.max(totalPages - 1, 0));

  useEffect(() => {
    if (isPaused) return;
    const interval = window.setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [isPaused, totalPages]);

  const visibleSlides = sliderImages.slice(activePage * slidesToShow, activePage * slidesToShow + slidesToShow);

  const prevSlide = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  const nextSlide = () => setCurrentPage((prev) => (prev + 1) % totalPages);

  return (
    <div className="mb-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        {/* header commented out */}
      </div>

      <div
        className="content-panel relative mt-8 overflow-hidden px-4 py-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center rounded-full bg-slate-900/75 p-3 text-white shadow-lg transition hover:bg-slate-900 active:scale-95"
          aria-label="Previous slide"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-3 sm:gap-4 transition-all duration-500">
            {visibleSlides.map((src, index) => (
              <div
                key={index}
                className="polish-card flex items-center justify-center overflow-hidden rounded-2xl flex-shrink-0 p-3 transition-all duration-300 hover:-translate-y-1 sm:p-4"
                style={{
                  width: slidesToShow === 1 ? '100%' : `calc((100% - ${(slidesToShow - 1) * 12}px) / ${slidesToShow})`,
                  maxWidth: slidesToShow === 1 ? '260px' : '220px',
                  aspectRatio: '3/4'
                }}
              >
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
          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex items-center justify-center rounded-full bg-slate-900/75 p-3 text-white shadow-lg transition hover:bg-slate-900 active:scale-95"
          aria-label="Next slide"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Slide counter — replaces dots */}
      <div className="slide-counter" aria-live="polite" aria-atomic="true">
        <span className="current-slide">{activePage + 1}</span>
        {' / '}
        <span className="total-slides">{totalPages}</span>
      </div>
    </div>
  );
}

export default function Publications() {
  const [open, setOpen] = useState<Record<string, boolean>>({
    books: false,
    editedBooks: false,
    papers: false,
    chapters: false,
    proceedings: false,
    reports: false,
  });

  const toggle = (key: string) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="page-container py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
          <div className="max-w-4xl animate-fade-in-up delay-100">
            <p className="eyebrow-pill mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
              Research Output
            </p>
            <h1
              className="font-bold leading-[1.1] tracking-tight text-slate-950"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
            >
              Publications
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Explore peer-reviewed journal articles, conference proceedings, books, book chapters and technical reports organized into focused publication categories
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-300">
        <SectionHeading eyebrow="Publications" title="Publication Categories" />

        <SectionBanner
          id="books"
          title="Books"
          bg="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop"
          open={!!open.books}
          onToggle={() => toggle('books')}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, idx) => (
              <BookCard key={idx} book={book} index={idx} />
            ))}
          </div>
        </SectionBanner>

        <SectionBanner
          id="editedBooks"
          title="Edited Books"
          bg="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop"
          open={!!open.editedBooks}
          onToggle={() => toggle('editedBooks')}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {editedBooks.map((book, idx) => (
              <BookCard key={idx} book={book as Parameters<typeof BookCard>[0]['book']} index={idx} />
            ))}
          </div>
        </SectionBanner>

        <SectionBanner
          id="papers"
          title="Journal(s)"
          bg="https://ik.imagekit.io/krishdheniya/images/alumni/IMG-20260731-WA0009.jpg"
          open={!!open.papers}
          onToggle={() => toggle('papers')}
        >
          <PaperList papers={peerReviewedPapers} />
        </SectionBanner>

        <SectionBanner
          id="chapters"
          title="Chapter in a book"
          bg="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop"
          open={!!open.chapters}
          onToggle={() => toggle('chapters')}
        >
          <ChapterList chapters={bookChapters} />
        </SectionBanner>

        <SectionBanner
          id="proceedings"
          title="Conference Proceedings"
          bg="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
          open={!!open.proceedings}
          onToggle={() => toggle('proceedings')}
        >
          <ProceedingList proceedings={conferenceProceedings} />
        </SectionBanner>

        <SectionBanner
          id="reports"
          title="Technical Reports"
          bg="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=1600&auto=format&fit=crop"
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
