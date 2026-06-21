'use client';

import { useState, useEffect } from 'react';
import { Image as IKImage, ImageKitProvider } from '@imagekit/next';

type DoctoralStudent = {
    name: string;
    status: 'Awarded' | 'Current';
    tenure: string;
    startYear: string;
    endYear: string; // 'current' for ongoing students
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
    startYear: string;
    endYear: string;
    currentJob: string;
    images?: string[];
};

const RS_FOLDER = '/images/rs';
const ALUMNI_FOLDER = '/images/alumni';

const doctoralStudents: DoctoralStudent[] = [
    {
        name: 'Tanaya Sarmah',
        status: 'Awarded',
        tenure: 'Autumn 2016 – Spring 2021',
        startYear: '2016',
        endYear: '2021',
        researchArea: 'Disaster Research – Urban Floods',
        qualification: 'M.U.R.P. (Town & Regional Planning)',
        thesisTitle:
            'A Methodology for Prioritizing Critical Infrastructures for Urban Flood-Prone Areas: A Case of Guwahati, Assam',
        currentJob: 'Assistant Professor, Indian Institute of Technology Roorkee',
        images: [`${RS_FOLDER}/1.jpg`],
    },
    {
        name: 'Chandan M C',
        status: 'Awarded',
        tenure: 'Spring 2016 – Spring 2021',
        startYear: '2016',
        endYear: '2021',
        researchArea: 'Urban Pattern Data Mining and Modelling',
        qualification: 'M.Tech. (Remote Sensing and GIS)',
        thesisTitle:
            'Urban Land Use Modelling and Developing a Framework of Spatial Decision Support System for Indian Cities',
        currentJob: 'Assistant Professor, National Institute of Technology Suratkal',
        images: [`${RS_FOLDER}/2.jpg`],
    },
    {
        name: 'Prakash P S',
        status: 'Awarded',
        tenure: 'Spring 2017 – Autumn 2021',
        startYear: '2017',
        endYear: '2021',
        researchArea: 'Building Extraction Using Deep Learning Methods',
        qualification: 'M.Tech. (Remote Sensing and GIS)',
        thesisTitle: 'Urban Structure Extraction Using Soft Computing Techniques',
        currentJob:
            'Research Associate, Irish Centre for High End Computing (ICHEC), NUI Galway',
        images: [`${RS_FOLDER}/3.jpg`],
    },
    {
        name: 'Nimish Gupta',
        status: 'Awarded',
        tenure: 'Autumn 2017 – Autumn 2022',
        startYear: '2017',
        endYear: '2022',
        researchArea: 'Land Surface Temperature Modelling',
        qualification: 'M.Tech. (Environmental Science and Technology)',
        thesisTitle:
            'Estimating and Forecasting Land Surface Temperature Responses to Altering Urban Landscape',
        currentJob:
            'Senior Associate, Adaptation and Risk Analysis Team, CSTEP',
        images: [`${RS_FOLDER}/4.jpg`],
    },
    {
        name: 'Aishwarya Narendr',
        status: 'Awarded',
        tenure: 'Spring 2018 – Autumn 2023',
        startYear: '2018',
        endYear: '2023',
        researchArea: 'Disaster Management in Coastal Regions',
        qualification: 'MCP',
        thesisTitle:
            'Flood Resilient Scenario Modelling (FReSMO) For Assessing Coastal Flood Risk Of Built Infrastructure',
        currentJob:
            'Analyst – Research and Knowledge Management, Coalition for Disaster Resilient Infrastructure',
        images: [`${RS_FOLDER}/5.jpg`],
    },
    {
        name: 'Ram Thilak',
        status: 'Current',
        tenure: 'Autumn 2018 –',
        startYear: '2018',
        endYear: 'current',
        researchArea: 'Hyperspectral Image Segmentation and Classification',
        qualification: 'M.Tech, Remote Sensing and Geographic Information System',
        currentJob: 'Assistant Professor, Reva Institute of Technology',
        email: 'ramthilak@iitkgp.ac.in',
        images: [`${RS_FOLDER}/6.jpg`],
    },
    {
        name: 'Madhumita Dey',
        status: 'Awarded',
        tenure: 'Autumn 2020 – Autumn 2024',
        startYear: '2020',
        endYear: '2024',
        researchArea: 'Feature Extraction of Transport Infrastructure',
        qualification: 'Integrated Geoinformatics (B.Tech – M.Tech)',
        thesisTitle:
            'Developing a Framework for Road Feature Information Extraction from Remotely Sensed Data',
        currentJob: 'Research Scientist, TCS',
        images: [`${RS_FOLDER}/7.png`],
    },
    {
        name: 'Aniruddha Khatua',
        status: 'Awarded',
        tenure: 'Autumn 2021 – Autumn 2025',
        startYear: '2021',
        endYear: '2025',
        researchArea: 'Transport Emission Analysis Using RS Techniques',
        qualification: 'M.Tech, Remote Sensing and Geographic Information System',
        thesisTitle:
            'Developing Deep Learning-Based Methods for Enhanced Integration of Land Use and Transportation Model',
        currentJob: 'Assistant Professor, SGT University',
        images: [`${RS_FOLDER}/8.jpg`],
    },
    {
        name: 'Anita Gautam',
        status: 'Current',
        tenure: 'Autumn 2021 –',
        startYear: '2021',
        endYear: 'current',
        researchArea: 'Urban Remote Sensing',
        qualification: 'M.Tech, Remote Sensing',
        email: 'gautama076@kgpian.iitkgp.ac.in',
        images: [`${RS_FOLDER}/9.jpg`],
    },
    {
        name: 'Anurag Aman Kaushal',
        status: 'Awarded',
        tenure: 'Autumn 2021 – Autumn 2026',
        startYear: '2021',
        endYear: '2026',
        researchArea:
            'Scientific Validation of Vastu Shastra Through Building IEQ and Energy Efficiency Studies',
        qualification: 'M.Arch, School of Planning and Architecture, Bhopal',
        thesisTitle:
            'Thermal Comfort in Vastu Compliant vs Vastu Non-Compliant Residential Buildings: Development of a Vastu Based Assessment Framework',
        currentJob: 'Assistant Professor, SPA Bhopal',
        images: [`${RS_FOLDER}/10.jpg`],
    },
    {
        name: 'Rajesh Singh Rana',
        status: 'Current',
        tenure: 'Autumn 2024 –',
        startYear: '2024',
        endYear: 'current',
        researchArea: 'Land Surface Temperature and Heat',
        qualification: 'M.Sc, Remote Sensing & GIS',
        email: 'rajeshsr.24@kgpian.iitkgp.ac.in',
        images: [`${RS_FOLDER}/11.jpg`],
    },
    {
        name: 'Apratim Bhattacharya',
        status: 'Current',
        tenure: 'Autumn 2024 –',
        startYear: '2024',
        endYear: 'current',
        researchArea: 'Urban Sensing and Development of Onboard Analytics',
        qualification:
            'M.Tech, Infrastructure Design and Management, IIT Kharagpur; M.Tech, Geoinformatics, IIEST Shibpur',
        email: 'apratimbhat.24@kgpian.iitkgp.ac.in',
        images: [`${RS_FOLDER}/12.jpg`],
    },
    {
        name: 'Sukanya Mukherjee',
        status: 'Current',
        tenure: 'Autumn 2025 –',
        startYear: '2025',
        endYear: 'current',
        researchArea: 'Flood Analytics and Hazard',
        qualification:
            'M.Sc, Geography, University of Calcutta; M.Tech, Remote Sensing and GIS, Indian Institute of Remote Sensing',
        email: 'SUKANYAM10425@KGPIAN.IITKGP.AC.IN',
        images: [`${RS_FOLDER}/13.jpg`],
    },
];

const postdocFellows: PostdocFellow[] = [
    {
        name: 'Dr. Vinay S',
        tenure: 'March 2020 – July 2021',
        startYear: '2020',
        endYear: '2021',
        currentJob: 'Associate Professor, Alva Institute of Technology, Mangalore',
        images: [`${RS_FOLDER}/14.jpg`],
    },
];

const researchAssistants: string[] = [];

const researchAssistantImage = `${RS_FOLDER}/15.png`;

const alumniPG: Array<{ name: string; image?: string }> = [
    { name: 'Abhimanyu Akshit Shah', image: `${ALUMNI_FOLDER}/01_Abhimanyu_Akshit_Shah.jpg` },
    { name: 'Aher Abhishek Yashwant', image: `${ALUMNI_FOLDER}/02_Aher_Abhishek_Yashwant.jpg` },
    { name: 'Gaurav S', image: `${ALUMNI_FOLDER}/03_Gaurav_S.jpg` },
    { name: 'Shafia Ahamad', image: `${ALUMNI_FOLDER}/04_Shafia_Ahamad.jpg` },
    { name: 'Dharini Jha', image: `${ALUMNI_FOLDER}/05_Dharini_Jha.jpg` },
    { name: 'Mohit Verma', image: `${ALUMNI_FOLDER}/06_Mohit_Verma.jpg` },
    { name: 'Anusha K', image: `${ALUMNI_FOLDER}/07_Anusha_K.jpg` },
    { name: 'Lalitha A', image: `${ALUMNI_FOLDER}/08_Lalitha_A.png` },
    { name: 'Debashree S', image: `${ALUMNI_FOLDER}/09_Debashree_S.png` },
    { name: 'Sudeep Banad', image: `${ALUMNI_FOLDER}/10_Sudeep_Banad.jpg` },
    { name: 'Parul Yadav', image: `${ALUMNI_FOLDER}/11_Parul_Yadav.jpg` },
    { name: 'Nishant RT', image: `${ALUMNI_FOLDER}/12_Nishant_RT.jpg` },
    { name: 'Vishal S', image: `${ALUMNI_FOLDER}/13_Vishal_S.jpg` },
    { name: 'Lalit Mudholkar', image: `${ALUMNI_FOLDER}/14_Lalit_Mudholkar.jpg` },
    { name: 'Gargi Dwivedi', image: `${ALUMNI_FOLDER}/15_Gargi_Dwivedi.jpg` },
    { name: 'Shantanu Anand', image: `${ALUMNI_FOLDER}/16_Shantanu_Anand.jpg` },
    { name: 'Harsh', image: `${ALUMNI_FOLDER}/17_Harsh.jpg` },
    { name: 'Chaitanya', image: `${ALUMNI_FOLDER}/18_Chaitanya.jpg` },
    { name: 'Dhrubojit', image: `${ALUMNI_FOLDER}/19_Dhrubojit.jpg` },
    { name: 'Girish', image: `${ALUMNI_FOLDER}/20_Girish.jpg` },
    { name: 'Navjoth', image: `${ALUMNI_FOLDER}/21_Navjoth.jpg` },
    { name: 'Praneta N', image: `${ALUMNI_FOLDER}/22_Praneta_N.webp` },
    { name: 'Vijay Devendra Patil', image: `${ALUMNI_FOLDER}/23_Vijay_Devendra_Patil.jpg` },
    { name: 'Souvick Sasmal', image: `${ALUMNI_FOLDER}/24_Souvick_Sasmal.jpg` },
    { name: 'Shubhi Nunna', image: `${ALUMNI_FOLDER}/25_Shubhi_Nunna.jpg` },
    { name: 'Suchit EP', image: `${ALUMNI_FOLDER}/26_Suchit_EP.jpg` },
    { name: 'Abhishek C Siva Sai', image: `${ALUMNI_FOLDER}/27_Abhishek_C_Siva_Sai.jpg` },
    { name: 'Ipshita Jhirwal', image: `${ALUMNI_FOLDER}/28_Ipshita_Jhirwal.jpg` },
    { name: 'Rutuja Patil', image: `${ALUMNI_FOLDER}/29_Rutuja_Patil.jpg` },
    { name: 'Angki Pazing', image: `${ALUMNI_FOLDER}/30_Angki_Pazing.jpg` },
    { name: 'Nikunj Aagar', image: `${ALUMNI_FOLDER}/31_Nikunj_Aagar.jpeg` },
    { name: 'Vikash Kumar', image: `${ALUMNI_FOLDER}/32_Vikash_Kumar.jpeg` },
    { name: 'Dipansh Sah', image: `${ALUMNI_FOLDER}/33_Dipansh_Sah.jpeg` },
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

function yearRange(startYear: string, endYear: string): string {
    return endYear === 'current' ? `${startYear} – current` : `${startYear} – ${endYear}`;
}

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
    const range = yearRange(student.startYear, student.endYear);

    return (
        <li className="group py-6 transition-all duration-300 hover:bg-slate-100/50 sm:hover:px-4 rounded-lg sm:-mx-4">
            {/* Mobile layout */}
            <div className="flex items-start gap-3 sm:hidden">
                <span className="text-sm font-semibold tracking-[0.14em] text-sky-700 shrink-0 pt-1">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold leading-7 text-slate-950 text-base">{student.name}</h3>
                        {student.status === 'Awarded' && (
                            <span className="border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-700">
                                PhD Awarded
                            </span>
                        )}
                    </div>
                    <p className="mt-1 text-sm font-medium text-sky-700">{student.researchArea}</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                        {student.qualification}
                        <span className="ml-2 text-slate-400">({range})</span>
                    </p>
                    {student.thesisTitle && (
                        <p className="mt-2 text-sm leading-6 text-slate-600 italic">&ldquo;{student.thesisTitle}&rdquo;</p>
                    )}
                    {student.currentJob && (
                        <p className="mt-1 text-sm text-slate-600">
                            <span className="font-semibold text-slate-700">Current Position:</span>{' '}
                            {student.currentJob}
                        </p>
                    )}
                    {student.email && (
                        <a href={`mailto:${student.email}`} className="mt-1 inline-block text-sm text-sky-600 hover:underline break-all">
                            {student.email}
                        </a>
                    )}
                    <p className="mt-2 text-xs font-medium text-slate-400">{student.tenure}</p>
                </div>
                {student.images && student.images.length > 0 && (
                    <div className="h-16 w-16 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden rounded">
                        <IKImage
                            src={student.images[0]}
                            alt={student.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </div>

            {/* Desktop/tablet layout */}
            <div className="hidden sm:grid sm:grid-cols-[2.6rem_8rem_1fr] sm:gap-5 sm:items-start">
                <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="h-24 w-28 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                    {student.images && student.images.length > 0 ? (
                        <IKImage
                            src={student.images[0]}
                            alt={student.name}
                            width={112}
                            height={96}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <p className="mt-1 text-sm text-slate-500">
                        {student.qualification}
                        <span className="ml-2 text-slate-400">({range})</span>
                    </p>
                    {student.thesisTitle && (
                        <p className="mt-2 text-sm leading-7 text-slate-600 italic">
                            &ldquo;{student.thesisTitle}&rdquo;
                        </p>
                    )}
                    {student.currentJob && (
                        <p className="mt-2 text-sm text-slate-600">
                            <span className="font-semibold text-slate-700">Current Position:</span>{' '}
                            {student.currentJob}
                        </p>
                    )}
                    {student.email && (
                        <a
                            href={`mailto:${student.email}`}
                            className="mt-1 inline-block text-sm text-sky-600 hover:underline break-all"
                        >
                            {student.email}
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
}

interface CarouselItem {
    name: string;
    image?: string;
}

function Carousel({ items }: { items: CarouselItem[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(5);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(3);
            } else {
                setItemsPerView(5);
            }
        };
        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    useEffect(() => {
        setCurrentIndex(0);
    }, [itemsPerView]);

    const totalSlides = Math.ceil(items.length / itemsPerView);

    useEffect(() => {
        if (isPaused || totalSlides <= 1) return;
        const interval = window.setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
        }, 3500);
        return () => window.clearInterval(interval);
    }, [isPaused, totalSlides]);

    const currentItems = items.slice(
        currentIndex * itemsPerView,
        (currentIndex + 1) * itemsPerView
    );

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    return (
        <div className="mt-7">
            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {/* Left Arrow */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 hover:bg-slate-100 transition active:scale-95"
                    aria-label="Previous slide"
                    style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}
                >
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Carousel Items */}
                <div className={`grid gap-3 px-12 ${
                    itemsPerView === 1 ? 'grid-cols-1' :
                    itemsPerView === 3 ? 'grid-cols-3' :
                    'grid-cols-5'
                }`}>
                    {currentItems.map((item, idx) => (
                        <div key={`${item.name}-${currentIndex}-${idx}`} className="min-w-0">
                            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
                                <div className="relative bg-slate-50 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                                    {item.image ? (
                                        <IKImage
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 30vw, 18vw"
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-5/6 h-5/6 border-2 border-dashed border-slate-300 rounded flex items-center justify-center p-2">
                                                <p className="text-xs text-slate-500 font-medium text-center break-words">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="px-2 py-2 border-t border-slate-200 bg-white">
                                    <p className="text-xs font-semibold text-slate-900 truncate">
                                        {item.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center rounded-full bg-white shadow-md border border-slate-200 hover:bg-slate-100 transition active:scale-95"
                    aria-label="Next slide"
                    style={{ width: '40px', height: '40px', minWidth: '40px', minHeight: '40px' }}
                >
                    <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {totalSlides > 1 && (
                <div className="slide-counter" aria-live="polite" aria-atomic="true">
                    <span className="current-slide">{currentIndex + 1}</span>
                    {' / '}
                    <span className="total-slides">{totalSlides}</span>
                </div>
            )}
        </div>
    );
}

export default function ResearchGroup() {
    return (
        <ImageKitProvider urlEndpoint="https://ik.imagekit.io/krishdheniya">
            <main className="min-h-[calc(100vh-73px)] bg-slate-50 text-slate-900">
                {/* Hero */}
                <section className="border-b border-slate-200 bg-white">
                    <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-12 lg:px-8 lg:py-16">
                        <div className="max-w-4xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                                Research Group
                            </p>
                            <h1
                                className="font-bold leading-[1.1] tracking-tight text-slate-950"
                                style={{ fontSize: 'clamp(1.75rem, 5vw, 3.75rem)' }}
                            >
                                Doctoral students, fellows and alumni
                            </h1>
                            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                                Current and previous doctoral researchers, postdoctoral fellows,
                                and alumni working across urban remote sensing, disaster
                                management, land surface modelling, and open geospatial
                                technologies.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-12 lg:px-8 lg:py-16 overflow-x-hidden">
                    {/* Doctoral Students */}
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
                                <li key={fellow.name} className="py-5">
                                    {/* Mobile */}
                                    <div className="flex items-start gap-3 sm:hidden">
                                        <span className="text-sm font-semibold tracking-[0.14em] text-sky-700 shrink-0 pt-1">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold leading-7 text-slate-950">{fellow.name}</h3>
                                            <p className="mt-0.5 text-sm text-slate-500">
                                                <span className="text-slate-400">({fellow.tenure})</span>
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-slate-600">
                                                <span className="font-semibold text-slate-700">Current Position:</span>{' '}
                                                {fellow.currentJob}
                                            </p>
                                        </div>
                                        {fellow.images && fellow.images.length > 0 && (
                                            <div className="h-16 w-16 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden rounded">
                                                <IKImage src={fellow.images[0]} alt={fellow.name} width={64} height={64} className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                    {/* Desktop */}
                                    <div className="hidden sm:grid sm:grid-cols-[2.6rem_8rem_1fr] sm:gap-5 sm:items-start">
                                        <span className="text-sm font-semibold tracking-[0.14em] text-sky-700">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="h-24 w-28 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                                            {fellow.images && fellow.images.length > 0 ? (
                                                <IKImage src={fellow.images[0]} alt={fellow.name} width={112} height={96} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs tracking-wide uppercase">Photo</div>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold leading-7 text-slate-950">{fellow.name}</h3>
                                            <p className="mt-1 text-sm text-slate-500">
                                                <span className="text-slate-400">({fellow.tenure})</span>
                                            </p>
                                            <p className="mt-1 text-sm leading-7 text-slate-600">
                                                <span className="font-semibold text-slate-700">Current Position:</span>{' '}
                                                {fellow.currentJob}
                                            </p>
                                        </div>
                                    </div>
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
                                    <div className="h-24 w-28 shrink-0 bg-slate-100 border border-slate-200 overflow-hidden">
                                        <IKImage
                                            src={researchAssistantImage}
                                            alt="Research Assistant"
                                            width={112}
                                            height={96}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <p className="text-sm text-slate-600"></p>
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
                    <div className="mt-14 border-t border-slate-300 pt-12">
                        <SectionHeading
                            eyebrow="Alumni"
                            title="ALUMNI - IIT Kharagpur (RCGSIDM) (Post Graduates)"
                        />
                        <Carousel items={alumniPG} />
                    </div>

                    <div className="mt-14 border-t border-slate-300 pt-12">
                        <SectionHeading
                            eyebrow="Interns"
                            title="Summer and Thesis interns (Completed/Current)"
                            description="Completed and current internship scholars contributing to the group's research initiatives."
                        />
                        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 sm:divide-x sm:divide-slate-200">
                            {/* Left column */}
                            <ol className="sm:pr-10">
                                {summerInterns
                                    .slice(0, Math.ceil(summerInterns.length / 2))
                                    .map((name, idx) => (
                                        <li
                                            key={`left-${idx}`}
                                            className="flex items-baseline gap-4 border-b border-slate-200 py-3"
                                        >
                                            <span className="w-8 shrink-0 text-xs font-semibold tracking-[0.14em] text-sky-700">
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-sm font-medium text-slate-800">
                                                {name}
                                            </span>
                                        </li>
                                    ))}
                            </ol>

                            {/* Right column */}
                            <ol className="sm:pl-10 mt-0">
                                {summerInterns
                                    .slice(Math.ceil(summerInterns.length / 2))
                                    .map((name, idx) => (
                                        <li
                                            key={`right-${idx}`}
                                            className="flex items-baseline gap-4 border-b border-slate-200 py-3"
                                        >
                                            <span className="w-8 shrink-0 text-xs font-semibold tracking-[0.14em] text-sky-700">
                                                {String(Math.ceil(summerInterns.length / 2) + idx + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-sm font-medium text-slate-800">
                                                {name}
                                            </span>
                                        </li>
                                    ))}
                            </ol>
                        </div>
                    </div>
                </section>
            </main>
        </ImageKitProvider>
    );
}