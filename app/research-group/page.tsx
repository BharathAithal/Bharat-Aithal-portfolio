type DoctoralStudent = {
    name: string;
    status: 'Awarded' | 'Current';
    tenure: string;
    researchArea: string;
    qualification: string;
    thesisTitle?: string;
    currentJob?: string;
    email?: string;
    images?: string[];
};

type PostdocFellow = {
    name: string;
    tenure: string;
    currentJob: string;
    images?: string[];
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUDXYPUQmvluD6X8VqWFGG0wnN_SH9aOUcJV7GRGL6neMC7xN4t5OSWxX9Ahpjb9letNDBuXFsQLVVjM6uXMKtMXGEIM-qdyXEz1Uu__IqLMcWcaIThOYlPqvbYUIp-Q4re4qIM9kve2xpqbaQkgmvR1oc3EGKXr-43QUYtQdHoikUxhO-PpNIyS_dvM57vAlnAKuGiyLt6SS57DB_mwr65F7FvFAfwHE8-ezok=w1280',
            'https://lh3.googleusercontent.com/sitesv/AA5AbUB_vCSLji9LEOk03SdcAAQpnUxGfO-sL12XmFqgJZXHsFLryZYUyYHBENf359GYSFbX-ljQX-6_MDzyUzc9TOooFVEZnYVKh8dNTF5RSobAyi2hRV7rko-u-Aiew1SS1IeTyRuzBN-aKf2BhqFnmsHPWBYvJGvhDyFcWWnFayagitgdLcgER2GzDC4gAiKT8Nhb_NiIsajJrzQ=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUBX-YN7emn8I63K5a4A2vTOt9992K2AxvL4ibZTIiYFCHhYxE-KtRYDuRqlTZuKlQWoWXynx011bN_svzqJ3Yhp0FKwfCumvIuMNIsmC3gAQXQGaEd2WUh89ISfFNOfQ8xeFY0Q8__FbQ8dwnyyuXiUEIB-8Ai8fMoPWupA03J20oH0A5ZhBdDQ-xmznKqbvFeXqVkkbYyX=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUCpwckNBEFd55nVAhmVVfEeqpODwl527OHrO35fsg6Sd38SZM8tmUacBc8eb9q0SPZlweWJt0pdIyiUblBPOwX_pxq2S7SMoI1qSU_25RW7-zpSQ8zSy32K9IYgu96ZF6iSADlW9plKlbkKZax9qTPNmrqOEtIuKq_Hpoi5YMH2EdjHPrMUpTvcmfq_LlYCEjsQI3M7bJDb=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUA8re4K71FQIQ5NIjxDcYitLeGuPFo_PVPdG2EdMzfHQoRpCKnUOE9kOXNjfqyFkkzdi4ARFT_HPEvfI6oLQQW9njCjkSaARiPkdFQScsCCUYPPXd-txl9R0-w1soOyic9Jc-mnyYA8vNwFKuOpvkpYY9GThBsu8OFQOM1QIMeqAZrLuXZpBeBRYS8qGtCOlXYLEPzdrqIc=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUDddzQ6UX7YCK1biovuOMmvfZlmw_Jazr_yCio_sQ6PUyzP9dEBUv5QDStnzT9VmwcvoTzGq3Jk52ZVv8wGVkWV2J_TgMmE7tqOpFzZbbFaapMb4Vta1nsdb9QOVteyfpc2CQCMwRIIJZUbtnHBrhANsdcbgaW3sTtp8kepfbM85pqvRqfIOmRYepT60n3xyYgjv9rC9zADzYc=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUBvj4ugrH3Yj-ZHK-RbAH3TboxCsu-1-P5QO2pddg-7-LdhajLCAj7U36e4YHgT85FnVXTI9SzoRMrGgbCXV1Jb3GS8zL2mz9_6LLwyAIunxVosSj9ABwkHCoAnBTeS_LdbdME2pwyfN-T3cqqDEznQDE5C68QF4Kp6XoYRK7beRALqkP004577Cjz0eTetNnIHIwRcCP0MsQuunPrsXd9sB0KsMm7lUsm5DFw=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUDmdUjoJJuZyK9QFI1wfYfobcmZjaVO4XEl5H9fnm7coXvDaxBcWvdIShH7atWC3V6ArsCScQbP_Qdcvwc5cDElvIuvNbE1qcpjE6aUDitYvUnbF1roqXpi-4HxTURNAQlL1bjN367D91J2RSCmj2M3euf5TnZ2e_Z5dzHvq2_w0V8RX1I0jxQys9BKWdvXqamcyut6uMnIdt4NFaEK2EMx5RN5sx-RYDV0osM=w1280'
        ],
    },
    {
        name: 'Anita Gautam',
        status: 'Current',
        tenure: 'Autumn 2021 –',
        researchArea: 'Urban Remote Sensing',
        qualification: 'M.Tech, Remote Sensing',
        email: 'gautama076@kgpian.iitkgp.ac.in',
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUB4LVergxUbVRP0BCARKEgoNSdposb6Hn11Ft8-6ytJTPa-8HQCPd64tcidwl2_OHEiJqMb_vt5qgm6h5ruztbdqqJ43CNHiP2n4bTOfEtybUtq14GHDIDlvmeW-KYnFuMuclpOtD9doVjGkLD14yjvZWU4c0FEncHXBPA2v5DExiKCxUGfVfgZj0jLXTF23hRn2ahtedIFZCmAebmZzLsVTQd-SkUDoUwTGLQ=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUCv_s8jCs8kw7iQN03jBmwqoNBFdWRp_cMdJIT-2HB7qSL05agLtteGsF1mMzP9Aa81DbdwsSUwnrheEAlUP7Okt8cug_2iNOuKt8liarPM74Ut-Ga5qVpbfS5ukrlekA4aO0h5Cl51m4L23PSZn6v-fhxoCzj0Tyb5SjKLLYBar304Oh5UdhgzXL6i81IDhEesMib_plEQj-GlK0Bi9oZkkQaYsmNL8YKJ-KM=w1280'
        ],
    },
    {
        name: 'Rajesh Singh Rana',
        status: 'Current',
        tenure: 'Autumn 2024 –',
        researchArea: 'Land Surface Temperature and Heat',
        qualification: 'M.Sc, Remote Sensing & GIS',
        email: 'rajeshsr.24@kgpian.iitkgp.ac.in',
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUCmHF2JQQRosX5HZeJkqfOd64hak9yf7NhCTqz0-LifdjhABs7hwKQ8Ho2tucDL47hAUp-HDRKNUivtdG_HhFjZo30QPzGJcljt7qktm_SDKD7M9Tfz8xVCGtwWZoM2aOp4utAtcL9SY5TdEDi1HfaQsITPOSwJi4h87l-PNOPl6WxucvX5-HABAnZUuwadLiPhc0kPWCcbnTWwJlRmUJ4-dALqV6p7n4eA=w1280'
        ],
    },
    {
        name: 'Apratim Bhattacharya',
        status: 'Current',
        tenure: 'Autumn 2024 –',
        researchArea: 'Urban Sensing and Development of Onboard Analytics',
        qualification:
            'M.Tech, Infrastructure Design and Management, IIT Kharagpur; M.Tech, Geoinformatics, IIEST Shibpur',
        email: 'apratimbhat.24@kgpian.iitkgp.ac.in',
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUApzlgQKex8khlCnamMziKIv0ybqcDmcjmEPQk5yWm1SpPmnTYFfTMIjtSCCQxKsXZunum7maIWJOVqcwyos_TaJ-HJaHS7Fa6r2mIy-C09RrnoGKuuHmcluqeGksggAf9qra8RVI9eN8ir02XMdUu-ERg50OboND656FtOuVUqkL2jY5CWf1ZMjOVZckSQ76cExK6gkKXLF41HCCTnByWNHTUZQExy2GFI8HI=w1280',
            'https://lh3.googleusercontent.com/sitesv/AA5AbUAepcbmYlpRMKSllcGrBIJcVsxuV4qnAuYkXfKFyJPgnoi4HO7eKSvmtp0FuV5GjugolJZcg5UDCdiSMS3NvZ0ExyWAE9fBnh8SmHjOFYJINoHOsWxoAUEtv0ONh5es4I_W6pDervCwEwmTLVDrUF83MFtP_5sKMp136u_BCLYz-SAtlgmMZjdPPmYdGH5GZGs57YzxM4hX0q_7F=w1280'
        ],
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
        images: [
            'https://lh3.googleusercontent.com/sitesv/AA5AbUAaAnmIGgBlpXdF5lbtq0GxYnyRD3YdB8r4-wRBHcb0ug1NNeQ2l5MZilrBDjb7u8s0Lgu-RbgdbqdclMwmezmMqLWufCKf8-2GffJnjqNn0hV9uJtSkhr6UGax3f6RuPbqxUYERkGRxUIEzC2Ve1bP6CPuVVCFQGn9u1h1MIZneEKnhtXKR-PEzgL1PshtN_WzR71aV8HZL9MAOZB_nkIYnzB7lzYdhd6t=w1280'
        ],
    },
];

const researchAssistants: string[] = [];

const researchAssistantImage = 'https://lh3.googleusercontent.com/sitesv/AA5AbUDb8MoXgi_Nhas4uTZqR_mndUnv4chD7QjPot0ZKum-X2T7FakjSgFjzSLqJBBq6uwWz7H3vOiy8gDwErsIr5JRiLje5eELY1sb6qxHfO4aPOppf-kRSu7t_JFAR9hjVLHYLBKng3heE8VMUGEG18sO388v83-cbdzgWIGwMwJ9noJaKSqTYdOhEf0E2Tv6FTYJapkZJHzyNBToQ1KpQvEVIrg7pmRILsVDwqA=w1280';

const alumniPG: string[] = [
    'Abhimanyu Akshit Shah',
    'Aher Abhishek Yashwant',
    'Gaurav S',
    'Shafia Ahamad',
    'Dharini Jha',
    'Mohit Verma',
    'Anusha K',
    'Lalitha A',
    'Debashree S',
    'Sudeep Banad',
    'Parul Yadav',
    'Nishant RT',
    'Vishal S',
    'Lalit Mudholkar',
    'Gargi Dwivedi',
    'Shantanu Anand',
    'Harsh',
    'Chaitanya',
    'Dhrubojit',
    'Girish',
    'Navjoth',
    'Praneta N',
    'Vijay Devendra Patil',
    'Souvick Sasmal',
    'Shubhi Nunna',
    'Suchit EP',
    'Abhishek C Siva Sai',
    'Ipshita Jhirwal',
    'Rutuja Patil',
    'Angki Pazing',
    'Nikunj Aagar',
    'Vikash Kumar',
    'Dipansh Sah',
];

const summerInterns: string[] = [
    'Shrawani S',
    'Bhumikha P',
    'Satarupa M',
    'Aishwarya N',
    'Sowmya K Das',
    'Navabharati N',
    'Anshul S',
    'Kamal K',
    'Sarthak k',
    'Viraj T',
    'Shivam U',
    'Sakshi T',
    'Arjav R',
    'Mansi U',
    'Juthi Bhattacharyya',
    'Eekshitha Somisetty',
    'Janhavi Soni',
    'Mohit Kollipara',
    'Jyotishman Chakraborty',
    'Prakriti Gupta',
    'Nameesh',
    'Nandgopal',
    'Durba Das',
    'Debosmita Mondal',
    'Aaditya Anand',
    'Sumit Kumar',
    'Priyanka Karmakar',
    'Anoushka Anand',
    'Rhine Nath',
    'Aishwarya N',
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

            {/* Image or Placeholder */}
            <div className="hidden sm:block h-24 w-28 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                {student.images && student.images.length > 0 ? (
                    <img
                        src={student.images[0]}
                        alt={student.name}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs tracking-wide uppercase">
                        Photo
                    </div>
                )}
            </div>

            <div>
                <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold leading-7 text-slate-950">{student.name}</h3>
                    {student.status === 'Awarded' && (
                        <span className="border border-emerald-100 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">
                            PhD Awarded
                        </span>
                    )}
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
                {/* Doctoral Students (Current and Previous) */}
                <SectionHeading
                    eyebrow="Doctoral Students"
                    title="Doctoral Students (Current and Previous)"
                    description="Current and previous doctoral researchers pursuing and having completed their research at IIT Kharagpur."
                />
                <ol className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                    {doctoralStudents.map((student, index) => (
                        <StudentRow key={student.name} student={student} index={index} />
                    ))}
                </ol>

                {/* Postdoctoral Fellows */}
                <div className="mt-14 border-t border-slate-300 pt-12">
                    <SectionHeading
                        eyebrow="Postdoctoral Research"
                        title="Postdoctoral Research Fellow"
                    />
                    <ol className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                        {postdocFellows.map((fellow, index) => (
                            <li
                                key={fellow.name}
                                className="grid gap-3 py-5 sm:grid-cols-[2.6rem_8rem_1fr_auto] sm:gap-5 sm:items-start"
                            >
                                <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="hidden sm:block h-24 w-28 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                                    {fellow.images && fellow.images.length > 0 ? (
                                        <img
                                            src={fellow.images[0]}
                                            alt={fellow.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs tracking-wide uppercase">
                                            Photo
                                        </div>
                                    )}
                                </div>
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

                {/* Research Assistants */}
                <div className="mt-14 border-t border-slate-300 pt-12">
                    <SectionHeading
                        eyebrow="Research Support"
                        title="Research Assistant (Current)"
                        description="Research assistants currently supporting the group's initiatives."
                    />
                    {researchAssistants.length === 0 ? (
                        <div className="mt-7 p-6 bg-slate-100 rounded border border-slate-300">
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                <div className="h-24 w-28 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden hidden sm:block">
                                    <img
                                        src={researchAssistantImage}
                                        alt="Research Assistant"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-sm text-slate-600">To be filled</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <ol className="mt-7 divide-y divide-slate-200 border-b border-slate-300">
                            {researchAssistants.map((name, index) => (
                                <li key={name} className="flex items-center gap-4 py-3">
                                    <span className="w-10 shrink-0 text-xs font-semibold tracking-[0.14em] text-sky-700">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm text-slate-700">{name}</span>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>

                {/* Alumni & Interns */}
                <div className="mt-14 grid gap-12 border-t border-slate-300 pt-12 lg:grid-cols-2 lg:gap-14">
                    <section>
                        <SectionHeading
                            eyebrow="Alumni"
                            title="ALUMNI - IIT Kharagapur (RCGSIDM) (Post Graduates)"
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
                            title="Summer and Thesis interns (Completed/Current)"
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