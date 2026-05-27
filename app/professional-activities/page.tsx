const memberships = [
    {
        organization: 'Institute of Electrical and Electronics Engineers (IEEE)',
        role: 'Senior Member',
    },
    {
        organization: 'Indian Society of Remote Sensing (ISRS)',
        role: 'Life Member',
    },
    {
        organization: 'The Institution of Engineers (India) (IEI)',
        role: 'MIE, Chartered Engineer',
    },
    {
        organization: 'American Geophysical Union (AGU)',
        role: 'Member',
    },
    {
        organization: 'The Indian Science Congress Association (ISCA)',
        role: 'Life Member',
    },
    {
        organization: 'Indian Society of Geomatics',
        role: 'Life Member',
    },
    {
        organization: 'Indian Meteorological Society',
        role: 'Life Member',
    },
    {
        organization: 'The Institute of Doctors Engineers and Scientists (IDES)',
        role: 'Member',
    },
    {
        organization: 'International Association of Engineers (IAENG)',
        role: 'Member',
    },
];

const coordinatedCourses = [
    {
        title: 'Remote Sensing, GIS and Image Processing in Urban Infrastructure Management',
        detail: 'Autumn / Spring | Credits 3:1:0',
    },
    {
        title: 'Virtual Reality Lab',
        detail: 'Spring | Credits 0:0:4',
    },
    {
        title: 'Environmental and Natural Resources Driven Infrastructure Management',
        detail: 'Spring / Autumn | Credits 3:0:0',
    },
    {
        title: 'Simulation Lab',
        detail: 'Autumn | Credits 0:0:4',
    },
    {
        title: 'Environmental Impact Assessment',
        detail: 'Spring 2017',
    },
    {
        title: 'Do It Yourself Lab',
        detail: '2020 - Present',
    },
];

const reviewerJournals = [
    'IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing (J-STARS)',
    'Remote Sensing of Environment',
    'Cities',
    'Journal of Environmental Management',
    'Journal of Environmental Engineering and Landscape Management',
    'Landscape and Urban Planning',
    'IEEE Geosciences',
    'Journal of The Institution of Engineers (India): Series C',
    'The Egyptian Journal of Remote Sensing and Space Sciences',
    'Urban Design International',
    'Current Science',
    'SpringerPlus',
];

const editorialBoards = [
    'Imperial International Journal',
    'International Journal of Computer Sciences and its Applications',
    'SF Journal of Environmental and Earth Science, Science Forecast Publication',
    'Open Urban Studies and Demography Journal',
];

const highlights = [
    { value: '09', label: 'Professional Memberships' },
    { value: '06', label: 'Coordinated Courses & Labs' },
    { value: '12', label: 'Reviewing Venues' },
    { value: '04', label: 'Editorial Roles' },
];

export default function ProfessionalActivities() {
    return (
        <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_24rem] lg:px-8 lg:py-16">
                    <div className="max-w-4xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                            Professional Activities
                        </p>
                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Academic service and professional engagement
                        </h1>
                        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Contributions through professional societies, course coordination,
                            journal peer review and editorial-board responsibilities across
                            geospatial science, environment and urban infrastructure.
                        </p>
                    </div>

                    <aside className="border-t-2 border-slate-900 pt-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pl-8 lg:pt-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Engagement Overview
                        </p>
                        <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                            {highlights.map((item) => (
                                <div key={item.label} className="flex items-center justify-between gap-5 py-4">
                                    <dt className="text-sm leading-6 text-slate-600">{item.label}</dt>
                                    <dd className="shrink-0 text-lg font-semibold text-slate-950">
                                        {item.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </aside>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
                    <section aria-labelledby="memberships-heading">
                        <div className="border-b border-slate-300 pb-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                                Member
                            </p>
                            <h2
                                id="memberships-heading"
                                className="mt-3 text-2xl font-semibold tracking-tight text-slate-950"
                            >
                                Professional Memberships
                            </h2>
                        </div>

                        <ol className="divide-y divide-slate-200 border-b border-slate-300">
                            {memberships.map((membership, index) => (
                                <li
                                    key={membership.organization}
                                    className="grid grid-cols-[2.5rem_1fr] gap-3 py-5"
                                >
                                    <span className="pt-1 text-sm font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="font-semibold leading-7 text-slate-950">
                                            {membership.organization}
                                        </h3>
                                        <p className="mt-1 text-sm font-medium text-slate-600">
                                            {membership.role}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section aria-labelledby="courses-heading">
                        <div className="border-b border-slate-300 pb-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                                Course Coordinator
                            </p>
                            <h2
                                id="courses-heading"
                                className="mt-3 text-2xl font-semibold tracking-tight text-slate-950"
                            >
                                Teaching and Laboratory Coordination
                            </h2>
                        </div>

                        <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                            {coordinatedCourses.map((course, index) => (
                                <li
                                    key={course.title}
                                    className="border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300"
                                >
                                    <p className="text-sm font-semibold tracking-[0.16em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </p>
                                    <h3 className="mt-4 text-base font-semibold leading-7 text-slate-950">
                                        {course.title}
                                    </h3>
                                    <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-600">
                                        {course.detail}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>

                <div className="mt-14 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-[1.18fr_0.82fr] lg:gap-14">
                    <section aria-labelledby="reviewer-heading">
                        <div className="border-b border-slate-300 pb-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                                Reviewer
                            </p>
                            <h2
                                id="reviewer-heading"
                                className="mt-3 text-2xl font-semibold tracking-tight text-slate-950"
                            >
                                Journals and Publications
                            </h2>
                        </div>

                        <ol className="grid border-b border-slate-300 sm:grid-cols-2">
                            {reviewerJournals.map((journal, index) => (
                                <li
                                    key={journal}
                                    className="flex gap-4 border-b border-slate-200 py-5 last:border-b-0 sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                                >
                                    <span className="shrink-0 text-sm font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <p className="text-sm font-medium leading-7 text-slate-800">
                                        {journal}
                                    </p>
                                </li>
                            ))}
                        </ol>
                    </section>

                    <section aria-labelledby="editorial-heading">
                        <div className="border-b border-slate-300 pb-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">
                                Reviewer Board / Editorial Board
                            </p>
                            <h2
                                id="editorial-heading"
                                className="mt-3 text-2xl font-semibold tracking-tight text-slate-950"
                            >
                                Board Affiliations
                            </h2>
                        </div>

                        <ol className="divide-y divide-slate-200 border-b border-slate-300">
                            {editorialBoards.map((board, index) => (
                                <li key={board} className="flex gap-4 py-6">
                                    <span className="shrink-0 text-sm font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <p className="font-medium leading-7 text-slate-800">{board}</p>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
            </section>
        </main>
    );
}
