'use client';

const projectTitles: string[] = [
    'Centre of Excellence on Energy Aware Urban Infrastructure',
    'Study on Young Children and Climate',
    'Developing a Spatial Data Infrastructure with Application in Urban Transport',
    'Developing an Integrated Land Use-Transport-Emissions Model Utilizing Emerging Big Data Sources for Quantifying Energy and Environmental Impacts of Ridesharing Services',
    'Planning Smart Cities: Urban Dynamics and Surface Temperature Extraction Using Hyperspectral Remote Sensing Data',
    'Scenario Based Projections of Future Land Use: A Spatially Explicit Knowledge Base for Climate Resilience',
    'Spatial Decision Support System for Select Smart Cities in India Using Nature Inspired Techniques',
];

const agencies: string[] = [
    'Science and Engineering Research Board (SERB)',
    'ICLEI — Local Governments for Sustainability',
    'NRDMS',
    'Apex Committee of SPARC',
    'Department of Science and Technology (DST), Government of West Bengal',
    'ISIRD, SRIC',
    'Science and Engineering Research Board (SERB)',
];

// Duplicate for seamless infinite scroll
const marqueeAll = [...projectTitles, ...projectTitles];

export default function Projects() {
    return (
        <main className="page-shell">
            {/* Page header */}
            <section className="page-hero">
                <div className="page-container py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-4xl animate-fade-in-up delay-100">
                        <p className="eyebrow-pill mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
                            Projects
                        </p>
                        <h1
                            className="font-bold leading-[1.1] tracking-tight text-slate-950"
                            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
                        >
                            Funded urban, climate and geospatial projects
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Seven sponsored projects addressing energy-aware infrastructure,
                            climate resilience, urban transport, smart cities and spatial
                            decision support.
                        </p>
                    </div>
                </div>
            </section>

            {/* Animated marquee */}
            <section className="relative z-10 py-16 lg:py-24 overflow-hidden animate-fade-in-up delay-200">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 text-center">
                        Funded Research
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 text-center">
                        Project Portfolio
                    </h2>
                </div>

                {/* Single marquee row — all project titles */}
                <div className="relative flex overflow-hidden mb-4" aria-hidden="true">
                    <div className="flex animate-marquee-left gap-4 whitespace-nowrap">
                        {marqueeAll.map((name, i) => (
                            <div
                                key={`m-${i}`}
                                className="polish-card inline-flex shrink-0 items-center rounded-2xl px-6 py-4 transition-all duration-300 hover:-translate-y-1"
                                style={{ maxWidth: '480px' }}
                            >
                                <span className="mr-3 h-2 w-2 rounded-full bg-sky-400 shrink-0" />
                                <span className="text-sm font-bold text-slate-900 whitespace-normal leading-6">
                                    {name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staggered card grid with agency */}
            <section className="page-container pb-16 md:px-6 lg:px-8 lg:pb-24 animate-fade-in-up delay-300">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projectTitles.map((title, index) => (
                        <div
                            key={title}
                            className="polish-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="absolute right-4 top-4 text-5xl font-black text-slate-50 select-none group-hover:text-sky-50 transition-colors duration-300">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="relative">
                                <div className="mb-3 h-1 w-8 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-12" />
                                <p className="font-bold leading-7 text-slate-900 text-base">
                                    {title}
                                </p>
                                <p className="mt-3 border-t border-slate-100 pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                                    {agencies[index]}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
