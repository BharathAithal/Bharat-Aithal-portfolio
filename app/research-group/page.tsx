type DoctoralStudent = {
    name: string;
    status: 'Awarded' | 'Current';
    tenure: string;
    researchArea: string;
    qualification: string;
    thesisTitle?: string;
    currentJob?: string;
    email?: string;
};

type PostdocFellow = {
    name: string;
    tenure: string;
    currentJob: string;
};

const doctoralStudents: DoctoralStudent[] = [
    {
        name: 'Tanaya Sarmah',
        status: 'Awarded',
        tenure: 'Autumn 2016 – Spring 2021',
        researchArea: 'Disaster Research – Urban Floods',
        qualification: 'M.U.R.P. (Town & Regional Planning)',
        thesisTitle:
            'A Methodology for Prioritizing Critical Infrastructures for Urban Flood-Prone Areas: A Case of Guwahati, Assam',
        currentJob: 'Assistant Professor, Indian Institute of Technology Roorkee',
    },
    {
        name: 'Chandan M C',
        status: 'Awarded',
        tenure: 'Spring 2016 – Spring 2021',
        researchArea: 'Urban Pattern Data Mining and Modelling',
        qualification: 'M.Tech. (Remote Sensing and GIS)',
        thesisTitle:
            'Urban Land Use Modelling and Developing a Framework of Spatial Decision Support System for Indian Cities',
        currentJob: 'Assistant Professor, National Institute of Technology Suratkal',
    },
    {
        name: 'Prakash P S',
        status: 'Awarded',
        tenure: 'Spring 2017 – Autumn 2021',
        researchArea: 'Building Extraction Using Deep Learning Methods',
        qualification: 'M.Tech. (Remote Sensing and GIS)',
        thesisTitle: 'Urban Structure Extraction Using Soft Computing Techniques',
        currentJob:
            'Research Associate, Irish Centre for High End Computing (ICHEC), NUI Galway',
    },
    {
        name: 'Nimish Gupta',
        status: 'Awarded',
        tenure: 'Autumn 2017 – Autumn 2022',
        researchArea: 'Land Surface Temperature Modelling',
        qualification: 'M.Tech. (Environmental Science and Technology)',
        thesisTitle:
            'Estimating and Forecasting Land Surface Temperature Responses to Altering Urban Landscape',
        currentJob:
            'Senior Associate, Adaptation and Risk Analysis Team, CSTEP',
    },
    {
        name: 'Aishwarya Narendr',
        status: 'Awarded',
        tenure: 'Spring 2018 – Autumn 2023',
        researchArea: 'Disaster Management in Coastal Regions',
        qualification: 'MCP',
        thesisTitle:
            'Flood Resilient Scenario Modelling (FReSMO) For Assessing Coastal Flood Risk Of Built Infrastructure',
        currentJob:
            'Analyst – Research and Knowledge Management, Coalition for Disaster Resilient Infrastructure',
    },
    {
        name: 'Ram Thilak',
        status: 'Current',
        tenure: 'Autumn 2018 –',
        researchArea: 'Hyperspectral Image Segmentation and Classification',
        qualification: 'M.Tech, Remote Sensing and Geographic Information System',
        currentJob: 'Assistant Professor, Reva Institute of Technology',
        email: 'ramthilak@iitkgp.ac.in',
    },
    {
        name: 'Madhumita Dey',
        status: 'Awarded',
        tenure: 'Autumn 2020 – Autumn 2024',
        researchArea: 'Feature Extraction of Transport Infrastructure',
        qualification: 'Integrated Geoinformatics (B.Tech – M.Tech)',
        thesisTitle:
            'Developing a Framework for Road Feature Information Extraction from Remotely Sensed Data',
        currentJob: 'Assistant Professor, Amity University',
    },
    {
        name: 'Aniruddha Khatua',
        status: 'Awarded',
        tenure: 'Autumn 2021 – Autumn 2025',
        researchArea: 'Transport Emission Analysis Using RS Techniques',
        qualification: 'M.Tech, Remote Sensing and Geographic Information System',
        thesisTitle:
            'Developing Deep Learning-Based Methods for Enhanced Integration of Land Use and Transportation Model',
        currentJob: 'Assistant Professor, SGT University',
    },
    {
        name: 'Anita Gautam',
        status: 'Current',
        tenure: 'Autumn 2021 –',
        researchArea: 'Urban Remote Sensing',
        qualification: 'M.Tech, Remote Sensing',
        email: 'gautama076@kgpian.iitkgp.ac.in',
    },
    {
        name: 'Anurag Aman Kaushal',
        status: 'Current',
        tenure: 'Autumn 2021 –',
        researchArea:
            'Scientific Validation of Vastu Shastra Through Building IEQ and Energy Efficiency Studies',
        qualification: 'M.Arch, School of Planning and Architecture, Bhopal',
        thesisTitle:
            'Thermal Comfort in Vastu Compliant vs Vastu Non-Compliant Residential Buildings: Development of a Vastu Based Assessment Framework',
        currentJob: 'Assistant Professor, SPA Bhopal',
    },
    {
        name: 'Rajesh Singh Rana',
        status: 'Current',
        tenure: 'Autumn 2024 –',
        researchArea: 'Land Surface Temperature and Heat',
        qualification: 'M.Sc, Remote Sensing & GIS',
        email: 'rajeshsr.24@kgpian.iitkgp.ac.in',
    },
    {
        name: 'Apratim Bhattacharya',
        status: 'Current',
        tenure: 'Autumn 2024 –',
        researchArea: 'Urban Sensing and Development of Onboard Analytics',
        qualification:
            'M.Tech, Infrastructure Design and Management, IIT Kharagpur; M.Tech, Geoinformatics, IIEST Shibpur',
        email: 'apratimbhat.24@kgpian.iitkgp.ac.in',
    },
    {
        name: 'Sukanya Mukherjee',
        status: 'Current',
        tenure: 'Autumn 2025 –',
        researchArea: 'Flood Analytics and Hazard',
        qualification:
            'M.Sc, Geography, University of Calcutta; M.Tech, Remote Sensing and GIS, Indian Institute of Remote Sensing',
        email: 'SUKANYAM10425@KGPIAN.IITKGP.AC.IN',
    },
];

const postdocFellows: PostdocFellow[] = [
    {
        name: 'Dr. Vinay S',
        tenure: 'March 2020 – July 2021',
        currentJob: 'Associate Professor, Alva Institute of Technology, Mangalore',
    },
];

const alumniPG: string[] = [
    'Abhimanyu', 'Akshit Shah', 'Aher Abhishek Yashwant', 'Gaurav S',
    'Shafia Ahamad', 'Dharini Jha', 'Mohit Verma', 'Anusha K',
    'Lalitha A', 'Debashree S', 'Sudeep Banad', 'Parul Yadav',
    'Nishant RT', 'Vishal S', 'Lalit Mudholkar', 'Gargi Dwivedi',
    'Shantanu Anand', 'Harsh', 'Chaitanya', 'Dhrubojit',
    'Girish', 'Navjoth', 'Praneta N', 'Vijay Devendra Patil',
    'Souvick Sasmal', 'Shubhi Nunna', 'Suchit EP', 'Abhishek C Siva Sai',
    'Ipshita Jhirwal', 'Rutuja Patil', 'Angki Pazing', 'Nikunj Aagar',
    'Vikash Kumar', 'Dipansh Sah',
];

const summerInterns: string[] = [
    'Shrawani S', 'Bhumikha P', 'Satarupa M', 'Aishwarya N',
    'Sowmya K Das', 'Navabharati N', 'Anshul S', 'Kamal K',
    'Sarthak K', 'Viraj T', 'Shivam U', 'Sakshi T',
    'Arjav R', 'Mansi U', 'Juthi Bhattacharyya', 'Eekshitha Somisetty',
    'Janhavi Soni', 'Mohit Kollipara', 'Jyotishman Chakraborty', 'Prakriti Gupta',
    'Nameesh', 'Nandgopal', 'Durba Das', 'Debosmita Mondal',
    'Aaditya Anand', 'Sumit Kumar', 'Priyanka Karmakar', 'Anoushka Anand',
    'Rhine Nath', 'Aishwarya N',
];

const highlights = [
    { value: '13', label: 'Doctoral Students' },
    { value: '08', label: 'Awarded PhDs' },
    { value: '01', label: 'Postdoctoral Fellow' },
    { value: '34', label: 'Alumni (Post Graduates)' },
];

function SectionHeading({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: string;
    description?: string;
}) {
    return (
        <div className="border-b border-slate-300 pb-5">
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

function StudentRow({ student, index }: { student: DoctoralStudent; index: number }) {
    return (
        <li className="grid gap-3 py-6 sm:grid-cols-[2.6rem_8rem_1fr_auto] sm:gap-5 sm:items-start">
            <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Placeholder for photo — replace with <Image> when ready */}
            <div className="hidden sm:block h-24 w-28 shrink-0 bg-slate-100 flex items-center justify-center text-slate-400 text-xs tracking-wide uppercase">
                Photo
            </div>

            <div>
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold leading-7 text-slate-950">{student.name}</h3>
                    <span
                        className={`border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] ${
                            student.status === 'Awarded'
                                ? 'border-emerald-100 bg-emerald-50 text-emerald-700'
                                : 'border-sky-100 bg-sky-50 text-sky-700'
                        }`}
                    >
                        {student.status === 'Awarded' ? 'PhD Awarded' : 'Current'}
                    </span>
                </div>
                <p className="mt-1 text-sm font-medium text-sky-700">{student.researchArea}</p>
                <p className="mt-1 text-sm text-slate-500">{student.qualification}</p>
                {student.thesisTitle && (
                    <p className="mt-2 text-sm leading-7 text-slate-600 italic">
                        &ldquo;{student.thesisTitle}&rdquo;
                    </p>
                )}
                {student.currentJob && (
                    <p className="mt-2 text-sm text-slate-600">{student.currentJob}</p>
                )}
                {student.email && (
                    <a
                        href={`mailto:${student.email}`}
                        className="mt-1 inline-block text-sm text-sky-600 hover:underline"
                    >
                        {student.email}
                    </a>
                )}
            </div>

            <p className="text-sm font-medium text-slate-500 sm:text-right whitespace-nowrap">
                {student.tenure}
            </p>
        </li>
    );
}

export default function ResearchGroup() {
    const awardedStudents = doctoralStudents.filter((s) => s.status === 'Awarded');
    const currentStudents = doctoralStudents.filter((s) => s.status === 'Current');

    return (
        <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="border-b border-slate-200 bg-white">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1fr_24rem] lg:px-8 lg:py-16">
                    <div className="max-w-4xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                            Research Group
                        </p>
                        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Doctoral students, fellows and alumni
                        </h1>
                        <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                            Current and previous doctoral researchers, postdoctoral fellows,
                            and alumni working across urban remote sensing, disaster
                            management, land surface modelling, and open geospatial
                            technologies.
                        </p>
                    </div>

                    <aside className="border-t-2 border-slate-900 pt-6 lg:border-t-0 lg:border-l lg:border-slate-200 lg:pl-8 lg:pt-0">
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                            Group Overview
                        </p>
                        <dl className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-center justify-between gap-5 py-4"
                                >
                                    <dt className="text-sm leading-6 text-slate-600">
                                        {item.label}
                                    </dt>
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
                {/* Current Doctoral Students */}
                <SectionHeading
                    eyebrow="Doctoral Students"
                    title="Current Research Scholars"
                    description="Students currently pursuing doctoral research under the group's supervision at IIT Kharagpur."
                />
                <ol className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                    {currentStudents.map((student, index) => (
                        <StudentRow key={student.name} student={student} index={index} />
                    ))}
                </ol>

                {/* Awarded Doctoral Students */}
                <div className="mt-14">
                    <SectionHeading
                        eyebrow="Doctoral Students"
                        title="PhD Awarded"
                        description="Scholars who have successfully defended their doctoral theses and gone on to academic and research positions."
                    />
                    <ol className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                        {awardedStudents.map((student, index) => (
                            <StudentRow key={student.name} student={student} index={index} />
                        ))}
                    </ol>
                </div>

                {/* Postdoctoral Fellows */}
                <div className="mt-14 border-t border-slate-300 pt-12">
                    <SectionHeading
                        eyebrow="Postdoctoral Research"
                        title="Postdoctoral Fellows"
                    />
                    <ol className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                        {postdocFellows.map((fellow, index) => (
                            <li
                                key={fellow.name}
                                className="grid gap-3 py-5 sm:grid-cols-[2.6rem_1fr_auto] sm:gap-5"
                            >
                                <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="font-semibold leading-7 text-slate-950">
                                        {fellow.name}
                                    </h3>
                                    <p className="mt-1 text-sm leading-7 text-slate-600">
                                        {fellow.currentJob}
                                    </p>
                                </div>
                                <p className="text-sm font-medium leading-7 text-slate-500 sm:text-right">
                                    {fellow.tenure}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* Alumni & Interns */}
                <div className="mt-14 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-2 lg:gap-14">
                    <section>
                        <SectionHeading
                            eyebrow="Alumni"
                            title="Post Graduates – IIT Kharagpur (RCGSIDM)"
                        />
                        <ul className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                            {alumniPG.map((name, index) => (
                                <li
                                    key={name}
                                    className="flex items-center gap-4 py-3"
                                >
                                    <span className="w-10 shrink-0 text-xs font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-slate-700">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <SectionHeading
                            eyebrow="Interns"
                            title="Summer & Thesis Interns"
                            description="Completed and current internship scholars contributing to the group's research initiatives."
                        />
                        <ul className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                            {summerInterns.map((name, index) => (
                                <li
                                    key={`${name}-${index}`}
                                    className="flex items-center gap-4 py-3"
                                >
                                    <span className="w-10 shrink-0 text-xs font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-slate-700">{name}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </section>
        </main>
    );
}