'use client';

const researchAreaNames: string[] = [
    'Urban Data Mining',
    'Urban Pattern Recognition',
    'Urban Heat Island Analysis',
    'Machine Learning in Urban Land Use Modelling and Feature Extraction',
    'Intelligent Automatic Urban Mapping and Climate Change (SUHI)',
    'Feature Extraction',
    'Analysis of UAV Imagery',
    'Night Time Urban Data Analysis – Development of Automatic Classifiers',
    'Hyperspectral Urban Data Mining',
    'Environmental Analysis and Management',
    'ML/DL Application in Urban Resilience and Pattern Recognition',
    'Disaster Management'
];

// Duplicate for seamless infinite scroll
const marqueeRow1 = [...researchAreaNames.slice(0, 5), ...researchAreaNames.slice(0, 5)];
const marqueeRow2 = [...researchAreaNames.slice(5), ...researchAreaNames.slice(5)];

export default function ResearchArea() {
    return (
        <main className="page-shell">
            {/* Page header */}
            <section className="page-hero">
                <div className="page-container py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-4xl animate-fade-in-up delay-100">
                        <p className="eyebrow-pill mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
                            Research Areas
                        </p>
                        <h1
                            className="font-bold leading-[1.1] tracking-tight text-slate-950"
                            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
                        >
                            Energy and Urban Research Group
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Ten research areas spanning urban data, city morphology, surface
                            heat dynamics, remote sensing and environmental planning
                        </p>
                    </div>
                </div>
            </section>

            {/* Animated marquee section */}
            <section className="relative z-10 py-16 lg:py-24 overflow-hidden animate-fade-in-up delay-200">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 text-center">
                        Areas of Investigation
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 text-center">
                        Research Focus Areas
                    </h2>
                </div>

                {/* Row 1 — scrolls left */}
                <div className="relative flex overflow-hidden mb-4" aria-hidden="true">
                    <div className="flex animate-marquee-left gap-4 whitespace-nowrap">
                        {marqueeRow1.map((name, i) => (
                            <div
                                key={`r1-${i}`}
                                className="polish-card inline-flex shrink-0 items-center rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="mr-3 h-2 w-2 rounded-full bg-sky-400 shrink-0" />
                                <span className="text-sm font-bold text-slate-900 md:text-base">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div className="relative flex overflow-hidden" aria-hidden="true">
                    <div className="flex animate-marquee-right gap-4 whitespace-nowrap">
                        {marqueeRow2.map((name, i) => (
                            <div
                                key={`r2-${i}`}
                                className="polish-card inline-flex shrink-0 items-center rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="mr-3 h-2 w-2 rounded-full bg-indigo-400 shrink-0" />
                                <span className="text-sm font-bold text-slate-900 md:text-base">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staggered card grid */}
            <section className="page-container pb-16 md:px-6 lg:px-8 lg:pb-24 animate-fade-in-up delay-300">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {researchAreaNames.map((name, index) => (
                        <div
                            key={name}
                            className="polish-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute right-4 top-4 text-5xl font-black text-slate-50 select-none group-hover:text-sky-50 transition-colors duration-300">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="relative">
                                <div className="mb-3 h-1 w-8 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-12" />
                                <p className="font-bold leading-7 text-slate-900 text-base">
                                    {name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
