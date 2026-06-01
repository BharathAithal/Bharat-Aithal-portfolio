const profileLinks = [
    {
        label: "Google Scholar",
        href: "https://scholar.google.co.in/citations?user=j-trcFUAAAAJ&hl=en&oi=ao",
    },
    {
        label: "ResearchGate",
        href: "https://www.researchgate.net/profile/Dr_Bharath_Aithal",
    },
    {
        label: "ORCID",
        href: "https://orcid.org/0000-0002-4323-6254",
    },
    {
        label: "SWAUT Website",
        href: "http://swaut.co.in/about-us",
    },
];

const academicIds = [
    { label: "Researcher ID", value: "Q-7182-2016" },
    { label: "Scopus ID", value: "55311646000" },
];

export default function Contact() {
    return (
        <main className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#f1f5f9_48%,#eef2f7_100%)] text-slate-900">
            <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl animate-float-1" />
            <div className="pointer-events-none absolute right-[-6rem] top-32 h-80 w-80 rounded-full bg-violet-100/50 blur-3xl animate-float-2" />
            <div className="pointer-events-none absolute bottom-16 left-1/3 h-52 w-52 rounded-full bg-cyan-50/70 blur-3xl animate-float-3" />

            <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
                <div className="mb-10 max-w-3xl lg:mb-12 animate-fade-in-up delay-100">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
                         Contact
                    </p>
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                        Prof. Bharath H Aithal
                    </h1>
                    <p className="mt-4 text-lg leading-8 text-slate-500">
                        Associate Professor, Ranbir & Chitra Gupta School of Infrastructure
                        Design and Management, IIT Kharagpur.
                    </p>
                </div>

                <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-7 animate-fade-in-up delay-200">
                    <div className="space-y-5">
                        <article className="rounded-[1.5rem] border border-white/80 bg-white/75 p-7 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Office Information
                            </h2>
                            <div className="mt-6 grid gap-5 text-slate-600">
                                <div className="sm:col-span-1">
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                                        Position
                                    </p>
                                    <p className="mt-2 text-base leading-7">Associate Professor</p>
                                </div>

                                <div className="sm:col-span-1">
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                                        School
                                    </p>
                                    <p className="mt-2 text-base leading-7">
                                        Ranbir & Chitra Gupta School of Infrastructure Design and
                                        Management (RCG SIDM)
                                    </p>
                                </div>

                                <div className="sm:col-span-2">
                                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                                        Address
                                    </p>
                                    <p className="mt-2 text-base leading-7">
                                        Third Floor, Indian Institute of Technology Kharagpur,
                                        West Bengal, India 731302
                                    </p>
                                </div>
                            </div>
                        </article>

                        <div className="grid gap-5 md:grid-cols-2">
                            <article className="rounded-[1.5rem] border border-white/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                                    Phone
                                </p>
                                <a
                                    href="tel:+913222284944"
                                    className="mt-3 block text-lg font-semibold text-slate-900 transition hover:text-sky-600"
                                >
                                    +91-3222-284944
                                </a>
                            </article>

                            <article className="rounded-[1.5rem] border border-white/80 bg-white/75 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.07)] backdrop-blur transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                                    Email
                                </p>
                                <a
                                    href="mailto:bharath@infra.iitkgp.ac.in"
                                    className="mt-3 block text-lg font-semibold text-slate-900 transition hover:text-sky-600 break-all"
                                >
                                    bharath@infra.iitkgp.ac.in
                                </a>
                            </article>
                        </div>

                        <article className="rounded-[1.5rem] border border-white/80 bg-white/75 p-7 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Academic Profiles
                            </h2>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {profileLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-sky-300 hover:text-sky-600 hover:shadow-sm hover:-translate-y-0.5"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {academicIds.map((item) => (
                                    <div
                                        key={item.label}
                                        className="rounded-[1rem] border border-slate-200 bg-slate-50/80 px-5 py-4"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                            {item.label}
                                        </p>
                                        <p className="mt-2 text-base font-semibold text-slate-900">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>

                    <div className="space-y-5">
                        <article className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/75 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                            <div className="border-b border-slate-200/80 px-7 py-6">
                                <h2 className="text-2xl font-semibold text-slate-900">
                                    Location Map
                                </h2>
                                <p className="mt-2 text-sm leading-7 text-slate-500">
                                    Indian Institute of Technology Kharagpur, West Bengal, India.
                                </p>
                            </div>

                            <div className="h-[24rem] w-full">
                                <iframe
                                    title="IIT Kharagpur map"
                                    src="https://www.google.com/maps?q=Ranbir%20and%20Chitra%20Gupta%20School%20of%20Infrastructure%20Design%20and%20Management%20IIT%20Kharagpur&z=16&output=embed"
                                    className="h-full w-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </article>

                        <article className="rounded-[1.5rem] border border-white/80 bg-white/75 p-7 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                            <h2 className="text-2xl font-semibold text-slate-900">
                                Quick Details
                            </h2>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                        Institution
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        Indian Institute of Technology Kharagpur
                                    </p>
                                </div>

                                <div className="rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                        Office Floor
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        Third Floor, RCG SIDM
                                    </p>
                                </div>

                                <div className="rounded-[1rem] border border-slate-200 bg-white/80 px-5 py-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                        Region
                                    </p>
                                    <p className="mt-2 text-base font-semibold text-slate-900">
                                        Kharagpur, West Bengal, India 731302
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </main>
    );
}
