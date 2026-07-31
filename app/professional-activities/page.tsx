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
    {
        title: 'Life Skills',
        detail: 'Course Coordinator',
    },
];


// Board affiliations — three new entries at top, existing four below
const editorialBoards = [
    'Scientific Reports – Senior Editor',
    'Indian Journal of Remote Sensing – Subject Editor',
    'PLOS Climate – Subject Editor',
    'ACM Journal on Computing and Sustainable Societies (JCSS) – Area Editor',
];

export default function ProfessionalActivities() {
    return (
        <main className="page-shell">
            <section className="page-hero">
                <div className="page-container py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
                    <div className="max-w-4xl animate-fade-in-up delay-100">
                        <p className="eyebrow-pill mb-4 text-xs font-semibold uppercase tracking-[0.3em]">
                            Professional Activities
                        </p>
                        <h1
                            className="font-bold leading-[1.1] tracking-tight text-slate-950"
                            style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
                        >
                            Academic service and professional engagement
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Contributions through professional societies, course coordination,
                            journal peer review and editorial-board responsibilities across
                            geospatial science, environment and urban infrastructure
                        </p>
                    </div>
                </div>
            </section>

            <section className="page-container py-12 md:px-6 lg:px-8 lg:py-16 animate-fade-in-up delay-300">
                <div className="content-panel p-5 sm:p-7 lg:p-8">
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
                                    className="grid grid-cols-[2.5rem_1fr] gap-3 py-5 transition-all duration-300 hover:bg-white/80 hover:shadow-sm rounded-xl group"
                                >
                                    <span className="pt-1 text-sm font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div className="min-w-0">
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
                                    className="polish-card p-5 transition-all duration-300 hover:-translate-y-1 rounded-xl"
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
                                <li key={board} className="flex gap-4 py-6 transition-all duration-300 hover:bg-white/80 hover:shadow-sm rounded-xl group">
                                    <span className="shrink-0 text-sm font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <p className="font-medium leading-7 text-slate-800 min-w-0 break-words">{board}</p>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
                </div>
            </section>
        </main>
    );
}
