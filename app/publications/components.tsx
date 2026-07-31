import type {
  Publication,
  ConferenceProceeding,
  Book,
  BookChapter,
  TechnicalReport,
} from './data';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-slate-300/80 pb-5">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export function PaperList({ papers }: { papers: Publication[] }) {
  return (
    <ol className="content-panel divide-y divide-slate-200/80 p-4 sm:p-6">
      {papers.map((paper, index) => (
        <li
          key={index}
          className="group grid gap-3 rounded-xl py-5 transition-all duration-300 hover:bg-white/80 hover:shadow-sm sm:grid-cols-[2.6rem_1fr] sm:gap-5 sm:hover:px-4"
        >
          <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div>
            {paper.fullText ? (
              <div className="text-sm leading-6 text-slate-700" dangerouslySetInnerHTML={{ __html: paper.fullText }} />
            ) : (
              <>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-sm font-medium text-slate-500">{paper.authors}</p>
                  <span className="shrink-0 text-sm font-semibold text-slate-700">
                    {paper.year}
                  </span>
                </div>
                <h3 className="mt-1 font-semibold leading-7 text-slate-950">
                  {paper.title}
                </h3>
                <p className="mt-1 text-sm italic leading-6 text-slate-600">
                  {paper.journal}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                  {paper.publisher && (
                    <span className="inline-block border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                      {paper.publisher}
                    </span>
                  )}
                  {paper.impactFactor && (
                    <span className="inline-block border border-sky-100 bg-sky-50 px-2 py-0.5 text-xs font-semibold text-sky-700">
                      IF: {paper.impactFactor}
                    </span>
                  )}
                  {paper.doi && (
                    <a
                      href={paper.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-sky-600 underline underline-offset-2 hover:text-sky-800"
                    >
                      DOI ↗
                    </a>
                  )}
                </div>
              </>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ProceedingList({ proceedings }: { proceedings: ConferenceProceeding[] }) {
  return (
    <ol className="content-panel divide-y divide-slate-200/80 p-4 sm:p-6">
      {proceedings.map((proc, index) => (
        <li
          key={index}
          className="group grid gap-3 rounded-xl py-5 transition-all duration-300 hover:bg-white/80 hover:shadow-sm sm:grid-cols-[2.6rem_1fr_auto] sm:gap-5 sm:hover:px-4"
        >
          <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="col-span-1 sm:col-span-2">
            {proc.fullText ? (
              <div className="text-sm leading-6 text-slate-700" dangerouslySetInnerHTML={{ __html: proc.fullText }} />
            ) : (
              <div className="grid sm:grid-cols-[1fr_auto] gap-2 items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">{proc.authors}</p>
                  <h3 className="mt-1 font-semibold leading-7 text-slate-950">{proc.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {proc.conference}
                    {proc.location ? `, ${proc.location}` : ''}
                  </p>
                  {proc.note && (
                    <span className="mt-2 inline-block border border-amber-200 bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">
                      🏆 {proc.note}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium leading-7 text-slate-500 sm:text-right mt-2 sm:mt-0">
                  {proc.date}
                </p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function BookCard({ book, index }: { book: Book; index: number }) {
  if (book.fullText) {
    return (
      <div className="polish-card flex flex-col p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 rounded-xl">
        <p className="text-sm font-semibold tracking-[0.16em] text-sky-700 mb-2">
          {String(index + 1).padStart(2, '0')}
        </p>
        <div className="text-sm leading-6 text-slate-700" dangerouslySetInnerHTML={{ __html: book.fullText }} />
      </div>
    );
  }
  return (
    <div className="polish-card flex flex-col p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 rounded-xl">
      <p className="text-sm font-semibold tracking-[0.16em] text-sky-700">
        {String(index + 1).padStart(2, '0')}
      </p>
      <h3 className="mt-4 text-lg font-semibold leading-8 text-slate-950">{book.title}</h3>
      <p className="mt-2 grow text-sm leading-7 text-slate-500">{book.authors}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-medium text-slate-600">{book.publisher}</span>
        <div className="flex items-center gap-3">
          {book.pages && (
            <span className="text-xs text-slate-400">{book.pages} pp.</span>
          )}
          <span className="text-sm font-semibold text-slate-700">{book.year}</span>
        </div>
      </div>
      {(book as Book & { isbn?: string }).isbn && (
        <p className="mt-2 text-xs font-medium text-slate-400">
          ISBN: {(book as Book & { isbn?: string }).isbn}
        </p>
      )}
    </div>
  );
}

export function ChapterList({ chapters }: { chapters: BookChapter[] }) {
  return (
    <ol className="content-panel divide-y divide-slate-200/80 p-4 sm:p-6">
      {chapters.map((ch, index) => (
        <li
          key={index}
          className="group grid gap-3 rounded-xl py-5 transition-all duration-300 hover:bg-white/80 hover:shadow-sm sm:grid-cols-[2.6rem_1fr_auto] sm:gap-5 sm:hover:px-4"
        >
          <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="col-span-1 sm:col-span-2">
            {ch.fullText ? (
              <div className="text-sm leading-6 text-slate-700" dangerouslySetInnerHTML={{ __html: ch.fullText }} />
            ) : (
              <div className="grid sm:grid-cols-[1fr_auto] gap-2 items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">{ch.authors}</p>
                  <h3 className="mt-1 font-semibold leading-7 text-slate-950">{ch.title}</h3>
                  <p className="mt-1 text-sm italic leading-6 text-slate-600">In: {ch.bookTitle}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="inline-block border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600">
                      {ch.publisher}
                    </span>
                    {ch.isbn && <span className="text-xs text-slate-400">ISBN: {ch.isbn}</span>}
                    {ch.doi && (
                      <a
                        href={ch.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-sky-600 underline underline-offset-2 hover:text-sky-800"
                      >
                        DOI ↗
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm font-medium leading-7 text-slate-500 sm:text-right mt-2 sm:mt-0">{ch.year}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ReportList({ reports }: { reports: TechnicalReport[] }) {
  return (
    <ol className="content-panel divide-y divide-slate-200/80 p-4 sm:p-6">
      {reports.map((rep, index) => (
        <li
          key={index}
          className="group grid gap-3 rounded-xl py-5 transition-all duration-300 hover:bg-white/80 hover:shadow-sm sm:grid-cols-[2.6rem_1fr_auto] sm:gap-5 sm:hover:px-4"
        >
          <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="col-span-1 sm:col-span-2">
            {rep.fullText ? (
              <div className="text-sm leading-6 text-slate-700" dangerouslySetInnerHTML={{ __html: rep.fullText }} />
            ) : (
              <div className="grid sm:grid-cols-[1fr_auto] gap-2 items-start">
                <div>
                  <p className="text-sm font-medium text-slate-500">{rep.authors}</p>
                  <h3 className="mt-1 font-semibold leading-7 text-slate-950">{rep.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{rep.report}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{rep.institution}</p>
                </div>
                <p className="text-sm font-medium leading-7 text-slate-500 sm:text-right mt-2 sm:mt-0">{rep.year}</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
