'use client';

type ResearchAreaItem = {
    title: string;
    description: string;
    tags: string[];
};

const researchAreas: ResearchAreaItem[] = [
    {
        title: 'Urban Data Mining',
        description: 'Advanced data mining and spatial analytics to extract multidimensional urban patterns from big geospatial datasets.',
        tags: ['Data Mining', 'Big Data', 'Urban Analytics'],
    },
    {
        title: 'Urban Pattern Recognition',
        description: 'Pattern recognition algorithms and soft computing to analyze urban morphology, growth corridors, and spatial configuration.',
        tags: ['Pattern Recognition', 'Morphology', 'Spatial Dynamics'],
    },
    {
        title: 'Urban Heat Island Analysis',
        description: 'Assessing Surface Urban Heat Island (SUHI) intensity and microclimate variability using thermal remote sensing.',
        tags: ['UHI', 'SUHI', 'Thermal Remote Sensing'],
    },
    {
        title: 'Machine Learning in Urban Land Use Modelling',
        description: 'Applying supervised and unsupervised machine learning algorithms for high-accuracy LULC classification and transition modeling.',
        tags: ['Machine Learning', 'LULC', 'Land Cover'],
    },
    {
        title: 'Intelligent Automatic Urban Mapping and Climate Change',
        description: 'Automated satellite imagery classification pipelines assessing long-term climate vulnerability and land transformation.',
        tags: ['Satellite Analysis', 'Climate Change', 'Auto Mapping'],
    },
    {
        title: 'Feature Extraction',
        description: 'Extracting building footprints, road networks, and urban infrastructure from high-resolution satellite and aerial data.',
        tags: ['Feature Extraction', 'Infrastructure', 'Computer Vision'],
    },
    {
        title: 'Analysis of UAV Imagery',
        description: 'High-resolution Unmanned Aerial Vehicle (UAV) / Drone data processing for localized infrastructure audit and terrain mapping.',
        tags: ['UAV / Drone', 'High-Resolution', 'Photogrammetry'],
    },
    {
        title: 'Night Time Urban Data Analysis',
        description: 'Developing automatic classifiers using Night-Time Lights (NTL) satellite data to track electrification, economic activity, and urbanisation.',
        tags: ['Night-Time Lights', 'Classifiers', 'Urbanisation'],
    },
    {
        title: 'Hyperspectral Urban Data Mining',
        description: 'Spectroscopy and hyperspectral band analytics for urban material characterization and environmental monitoring.',
        tags: ['Hyperspectral', 'Spectroscopy', 'Remote Sensing'],
    },
    {
        title: 'Environmental Analysis and Management',
        description: 'Ecosystem valuation, natural capital accounting, and sustainability frameworks for regional and urban planning.',
        tags: ['Environment', 'Ecosystem Services', 'Sustainability'],
    },
    {
        title: 'ML/DL Application in Urban Resilience',
        description: 'Deep neural networks and convolutional models for predicting urban stress, resilience indices, and dynamic pattern shifts.',
        tags: ['Deep Learning', 'Resilience', 'Neural Networks'],
    },
    {
        title: 'Disaster Management & Urban Floods',
        description: 'Flood vulnerability modeling, coastal inundation risk assessment, and prioritizing critical emergency infrastructure.',
        tags: ['Disaster Mitigation', 'Urban Floods', 'FReSMO'],
    },
];

const marqueeRow1 = [...researchAreas.slice(0, 6), ...researchAreas.slice(0, 6)];
const marqueeRow2 = [...researchAreas.slice(6), ...researchAreas.slice(6)];

export default function ResearchArea() {
    return (
        <main className="page-shell">
            {/* Page header */}
            <section className="page-hero">
                <div className="page-container py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-4xl animate-fade-in-up delay-100">
                        <p className="eyebrow-pill mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
                            Research Areas &amp; Thrusts
                        </p>
                        <h1
                            className="font-bold leading-[1.1] tracking-tight text-slate-950"
                            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
                        >
                            Energy and Urban Research Group (EURG)
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Leading academic research in Urban Data Mining, Satellite Data Analysis, Land Use Land Cover (LULC), Machine Learning, Deep Learning, and Urban Flood &amp; Disaster Resilience at IIT Kharagpur.
                        </p>
                    </div>
                </div>
            </section>

            {/* Animated marquee section */}
            <section className="relative z-10 py-12 lg:py-16 overflow-hidden animate-fade-in-up delay-200">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 text-center">
                        Areas of Investigation
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 text-center">
                        Research Focus Domains
                    </h2>
                </div>

                {/* Row 1 — scrolls left */}
                <div className="relative flex overflow-hidden mb-4">
                    <div className="flex animate-marquee-left gap-4 whitespace-nowrap">
                        {marqueeRow1.map((item, i) => (
                            <div
                                key={`r1-${i}`}
                                className="polish-card inline-flex shrink-0 items-center rounded-2xl px-6 py-3.5 transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="mr-3 h-2 w-2 rounded-full bg-sky-400 shrink-0" />
                                <span className="text-sm font-bold text-slate-900 md:text-base">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — scrolls right */}
                <div className="relative flex overflow-hidden">
                    <div className="flex animate-marquee-right gap-4 whitespace-nowrap">
                        {marqueeRow2.map((item, i) => (
                            <div
                                key={`r2-${i}`}
                                className="polish-card inline-flex shrink-0 items-center rounded-2xl px-6 py-3.5 transition-all duration-300 hover:-translate-y-1"
                            >
                                <span className="mr-3 h-2 w-2 rounded-full bg-indigo-400 shrink-0" />
                                <span className="text-sm font-bold text-slate-900 md:text-base">
                                    {item.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staggered card grid with semantic details */}
            <section className="page-container pb-16 md:px-6 lg:px-8 lg:pb-24 animate-fade-in-up delay-300">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {researchAreas.map((item, index) => (
                        <article
                            key={item.title}
                            className="polish-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="h-1 w-8 rounded-full bg-sky-400 transition-all duration-300 group-hover:w-12" />
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-sky-600 transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-600 mb-4">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-600 border border-slate-200/60"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
