import Image from 'next/image';

const researchAreas = [
    {
        number: '01',
        category: 'Urban Analytics',
        title: 'Urban Data Mining',
        description:
            'Extracting actionable knowledge from large, complex urban and spatial datasets.',
        image: '/research/urban-analytics-photo.webp',
        imageAlt: 'Aerial view of dense urban blocks and intersecting transport corridors',
    },
    {
        number: '02',
        category: 'Urban Morphology',
        title: 'Urban Pattern Recognition',
        description:
            'Identifying recurring city forms, settlement structures and spatial relationships.',
        image: '/research/urban-pattern-recognition-photo.webp',
        imageAlt: 'Aerial contrast between planned housing blocks and dense urban fabric',
    },
    {
        number: '03',
        category: 'Urban Climate',
        title: 'Urban Heat Island analysis',
        description:
            'Examining heat concentration across built surfaces, vegetation and urban form.',
        image: '/research/urban-heat-photo.webp',
        imageAlt: 'Dense city rooftops and skyline under warm atmospheric haze',
    },
    {
        number: '04',
        category: 'Machine Learning',
        title: 'Machine Learning in urban land use modelling and feature extraction',
        description:
            'Applying learning-based approaches to classify land use and derive urban features.',
        image: '/research/ml-land-use-photo.webp',
        imageAlt: 'Researcher studying urban satellite imagery at a geospatial workstation',
    },
    {
        number: '05',
        category: 'Climate Mapping',
        title: 'Intelligent automatic urban mapping and climate change (SUHI)',
        description:
            'Connecting automated urban mapping with surface heat and climate-change analysis.',
        image: '/research/automatic-mapping-climate-photo.webp',
        imageAlt: 'Urban satellite imagery viewed from a research workspace overlooking a city',
    },
    {
        number: '06',
        category: 'Image Analysis',
        title: 'Feature Extraction',
        description:
            'Deriving roads, buildings, water and vegetation from high-resolution imagery.',
        image: '/research/feature-extraction-photo.webp',
        imageAlt: 'Analyst identifying urban features in aerial imagery on a monitor',
    },
    {
        number: '07',
        category: 'UAV Remote Sensing',
        title: 'Analysis of UAV Imagery',
        description:
            'Using drone observations to capture and analyse fine-scale urban information.',
        image: '/research/remote-sensing-photo.webp',
        imageAlt: 'Survey drone operating above an urban-edge landscape',
    },
    {
        number: '08',
        category: 'Night-Time Sensing',
        title: 'Night time urban data analysis - development of automatic classifiers',
        description:
            'Developing classifiers from nocturnal urban observations and lighting patterns.',
        image: '/research/night-urban-data-photo.webp',
        imageAlt: 'Night aerial city view with illuminated road corridors and neighbourhoods',
    },
    {
        number: '09',
        category: 'Spectral Analysis',
        title: 'Hyperspectral urban data mining',
        description:
            'Investigating detailed spectral information for advanced urban material analysis.',
        image: '/research/hyperspectral-data-photo.webp',
        imageAlt: 'Spectral imaging equipment overlooking a metropolitan landscape',
    },
    {
        number: '10',
        category: 'Environment',
        title: 'Environmental analysis and Management',
        description:
            'Supporting environmentally responsible planning through integrated assessment.',
        image: '/research/environment-management-photo.webp',
        imageAlt: 'Restored urban wetland with a city district beyond the vegetation',
    },
];

const highlights = [
    { value: '10', label: 'Research Areas' },
    { value: 'UAV + HSI', label: 'Data Sources' },
    { value: 'ML + RS', label: 'Methods Focus' },
];

export default function ResearchArea() {
    return (
        <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_21rem] lg:px-8 lg:py-16">
                    <div className="max-w-4xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                            Research Areas
                        </p>
                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Urban intelligence, climate and geospatial research
                        </h1>
                        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Ten research areas spanning urban data, city morphology, surface
                            heat dynamics, remote sensing and environmental planning.
                        </p>
                    </div>

                    <aside className="border-t-2 border-slate-900 pt-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pl-8 lg:pt-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Portfolio Overview
                        </p>
                        <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                            {highlights.map((item) => (
                                <div key={item.label} className="flex items-center justify-between py-5">
                                    <dt className="text-sm text-slate-600">{item.label}</dt>
                                    <dd className="text-lg font-semibold text-slate-950">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
                <div className="mb-8 flex items-end justify-between border-b border-slate-300 pb-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        Ten Research Areas
                    </h2>
                    <p className="hidden text-sm text-slate-500 sm:block">
                        Areas of investigation and applied methods
                    </p>
                </div>

                <div className="border-t border-slate-300">
                    {researchAreas.map((area) => (
                        <article
                            key={area.number}
                            className="grid gap-5 border-b border-slate-300 py-7 lg:grid-cols-[5rem_minmax(16rem,0.85fr)_minmax(15rem,0.8fr)_20rem] lg:items-center lg:gap-8 lg:py-8"
                        >
                            <p className="text-lg font-semibold tracking-[0.22em] text-sky-700">
                                {area.number}
                            </p>

                            <div>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    {area.category}
                                </p>
                                <h3 className="text-xl font-semibold leading-8 tracking-tight text-slate-950 sm:text-2xl">
                                    {area.title}
                                </h3>
                            </div>

                            <p className="text-sm leading-7 text-slate-600">
                                {area.description}
                            </p>

                            <div className="relative h-48 border border-slate-200 bg-slate-200 lg:h-40">
                                <Image
                                    src={area.image}
                                    alt={area.imageAlt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 320px"
                                    className="object-cover"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
