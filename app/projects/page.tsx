import Image from 'next/image';

const projects = [
    {
        number: '01',
        category: 'Urban Infrastructure',
        title: 'Centre of Excellence on Energy Aware Urban Infrastructure',
        agency: 'Science and Engineering Research Board (SERB)',
        description:
            'Advancing urban infrastructure planning with an emphasis on energy-aware systems and engineering.',
        image: '/projects/energy-infrastructure.webp',
        imageAlt: 'Energy-aware urban corridor with solar infrastructure and mass transit',
    },
    {
        number: '02',
        category: 'Climate and Society',
        title: 'Study on Young Children and Climate',
        agency: 'ICLEI - Local Governments for Sustainability',
        description:
            'Studying climate-related challenges and responses affecting young children in urban contexts.',
        image: '/projects/children-climate.webp',
        imageAlt: 'Children and an educator planting trees in a shaded city school garden',
    },
    {
        number: '03',
        category: 'Urban Transport',
        title: 'Developing a Spatial Data Infrastructure with Application in Urban Transport',
        agency: 'NRDMS',
        description:
            'Building a spatial-data foundation to support analysis and planning for urban mobility systems.',
        image: '/projects/urban-transport-sdi.webp',
        imageAlt: 'Transport researcher reviewing spatial maps beside an urban rail corridor',
    },
    {
        number: '04',
        category: 'Transport and Emissions',
        title: 'Developing an Integrated Land Use-Transport-Emissions Model Utilizing Emerging Big Data Sources for Quantifying Energy and Environmental Impacts of Ridesharing Services',
        agency: 'Apex Committee of SPARC',
        description:
            'Connecting mobility data, land use and emissions modelling to assess ridesharing impacts.',
        image: '/projects/ridesharing-emissions.webp',
        imageAlt: 'Busy mixed-use city corridor with cars, buses and pedestrians',
    },
    {
        number: '05',
        category: 'Smart Cities',
        title: 'Planning Smart Cities: Urban Dynamics and Surface Temperature Extraction Using Hyperspectral Remote Sensing Data',
        agency: 'Department of Science and Technology (DST), Government of West Bengal',
        description:
            'Using hyperspectral observations to investigate urban dynamics and surface temperature patterns.',
        image: '/projects/hyperspectral-temperature.webp',
        imageAlt: 'Hyperspectral sensing instrument observing a dense urban landscape',
    },
    {
        number: '06',
        category: 'Climate Resilience',
        title: 'Scenario Based Projections of Future Land Use: A Spatially Explicit Knowledge Base for Climate Resilience',
        agency: 'ISIRD, SRIC',
        description:
            'Producing spatially explicit land-use scenarios to strengthen climate-resilience planning.',
        image: '/projects/land-use-resilience.webp',
        imageAlt: 'Urban edge landscape with wetlands, agriculture and expanding development',
    },
    {
        number: '07',
        category: 'Decision Support',
        title: 'Spatial Decision Support System for Select Smart Cities in India Using Nature Inspired Techniques',
        agency: 'Science and Engineering Research Board (SERB)',
        description:
            'Supporting smart-city decisions through spatial analysis and nature-inspired computational techniques.',
        image: '/projects/smart-city-decision-support.webp',
        imageAlt: 'Urban planners examining city imagery and spatial information at a workstation',
    },
];

const highlights = [
    { value: '07', label: 'Funded Projects' },
    { value: 'Urban + Climate', label: 'Primary Focus' },
    { value: 'RS + SDSS', label: 'Methods' },
];

export default function Projects() {
    return (
        <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_21rem] lg:px-8 lg:py-16">
                    <div className="max-w-4xl animate-fade-in-up delay-100">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                            Projects
                        </p>
                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Funded urban, climate and geospatial projects
                        </h1>
                        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Seven sponsored projects addressing energy-aware infrastructure,
                            climate resilience, urban transport, smart cities and spatial
                            decision support.
                        </p>
                    </div>

                    <aside className="border-t-2 border-slate-900 pt-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pl-8 lg:pt-0 animate-fade-in-up delay-200">
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

            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-300">
                <div className="mb-8 flex items-end justify-between border-b border-slate-300 pb-5">
                    <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
                        Seven Projects
                    </h2>
                    <p className="hidden text-sm text-slate-500 sm:block">
                        Sponsored research and applied investigation
                    </p>
                </div>

                <div className="border-t border-slate-300">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group grid gap-5 border-b border-slate-300 py-7 lg:grid-cols-[5rem_minmax(20rem,1fr)_minmax(16rem,0.82fr)_20rem] lg:items-center lg:gap-8 lg:py-8 transition-all duration-300 hover:bg-slate-100/50 hover:px-4 rounded-lg -mx-4"
                        >
                            <p className="text-lg font-semibold tracking-[0.22em] text-sky-700">
                                {project.number}
                            </p>

                            <div>
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                    {project.category}
                                </p>
                                <h3 className="text-xl font-semibold leading-8 tracking-tight text-slate-950 sm:text-2xl">
                                    {project.title}
                                </h3>
                            </div>

                            <div>
                                <p className="text-sm leading-7 text-slate-600">
                                    {project.description}
                                </p>
                                <div className="mt-4 border-t border-slate-200 pt-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                                        Supported By
                                    </p>
                                    <p className="mt-2 text-sm font-medium leading-6 text-slate-800">
                                        {project.agency}
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-48 overflow-hidden border border-slate-200 bg-slate-200 lg:h-44">
                                <Image
                                    src={project.image}
                                    alt={project.imageAlt}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 320px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
