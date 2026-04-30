import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageInteractions } from './usePageInteractions';

const About = () => {
    const rootRef = useRef(null);
    usePageInteractions({ rootRef, carouselTitle: 'What Our Clients Say About Us', faqTitle: 'Frequently Asked Questions' });

    const faqs = [
        {
            question: "What types of wires does Electra Wires manufacture?",
            answer: "We manufacture FR PVC wires and industrial cables designed for residential, commercial, and industrial use. All products are fire-resistant and built to the highest safety standards."
        },
        {
            question: "How safe are your wires?",
            answer: "Our wires meet high safety standards and are fully fire-resistant. We leverage 20+ years of manufacturing experience to ensure maximum reliability for house wiring."
        },
        {
            question: "Do you deliver in New Delhi?",
            answer: "Yes, fast delivery is available in New Delhi and surrounding regions for all residential, commercial, and industrial orders."
        },
        {
            question: "What quality control processes do you follow?",
            answer: "We follow strict quality testing for every batch, ensuring durability and full compliance with industrial safety regulations."
        },
        {
            question: "How do I place a bulk order?",
            answer: "You can place bulk orders by contacting us directly via phone or email for custom quotes and project-specific wiring solutions."
        },
        {
            question: "Are your wires suitable for industrial applications?",
            answer: "Yes, our industrial cables are fully supported for heavy-duty use, providing reliable power performance even in high-demand environments."
        },
        {
            question: "Do you offer customized wire solutions?",
            answer: "We offer custom wiring solutions tailored to your specific project needs. Contact our team in New Delhi to discuss your requirements."
        },
        {
            question: "How can I contact Electra Wires?",
            answer: "You can contact Electra Wires via phone or email at neelkanthimpex51@gmail.com for any product inquiries or support."
        }
    ];

    return (
        <main ref={rootRef}>
            <div className="w-full" id="हीरो सेक्शन">
                <section className="w-full grid min-h-screen supports-[min-height:100cqh]:min-h-[100cqh] relative" style={{ marginTop: 'calc(-1 * 96px)' }}>
                    <div className="relative min-h-screen" style={{ paddingTop: '96px', minHeight: 'calc(100vh + 96px)' }}>
                        <div className="h-full w-full overflow-hidden absolute inset-0 z-0">
                            <img alt="Electra Wires premium manufacturing facility" fetchPriority="high" loading="eager" decoding="async" data-nimg="fill" className="absolute inset-0" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%' }} sizes="100vw" src="/_next/2a7608ee-6b78-406b-9e31-41012bcdd24a-DXj661kmTVd4Utqurimb3To8cmqiWA957e.png" />
                        </div>
                        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                            <video style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} className="absolute inset-0 h-full w-full transition-opacity duration-500 " src="https://rjdavx8ozyznxeyh.public.blob.vercel-storage.com/production/websites/infinite-videos/cf9ce7f6-cf79-4a4a-9855-1498a28c98d5-NDtQoOgwFNayffoCzwfjFUSLkf5RRt.mp4" autoPlay muted loop playsInline></video>
                        </div>
                        <div className="absolute inset-0 z-10">
                            <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#0F0F0079' }}></div>
                        </div>
                        <div className="mx-auto max-w-[1536px] px-6 relative flex h-full flex-1 items-end py-16 @tablet:py-24" style={{ zIndex: '20' }}>
                            <div className="flex w-full flex-col gap-8 @desktop:flex-row @desktop:items-end @desktop:justify-between">
                                <div className="flex flex-col gap-8 @desktop:gap-4">
                                    <div className="flex max-w-2xl flex-col gap-4">
                                        <h1 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-md-font-size)', '--typography-font-weight': 'var(--typography-display-md-font-weight)', '--typography-line-height': 'var(--typography-display-md-line-height)', '--typography-letter-spacing': 'var(--typography-display-md-letter-spacing)', '--typography-font-family': 'var(--typography-display-md-font-family)', color: '#ffffff' }}>
                                            20+ Years of Excellence in Electrical Innovation
                                        </h1>
                                    </div>
                                    <div className="@desktop:hidden">
                                        <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                            <Link data-slot="button" label="View Our Products" style={{ '--bg-color': '#E8A317', '--hover-bg-color': '#da990f', color: '#000' }} className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])] :size-4 border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" to="/products">
                                                <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#000' }}>View Our Products</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden @desktop:block">
                                    <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                        <Link data-slot="button" label="View Our Products" style={{ '--bg-color': '#E8A317', '--hover-bg-color': '#da990f', color: '#000' }} className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])] :size-4 border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-5 py-2.5 has-[>svg:first-child]:pr-4 has-[>svg:last-child]:pl-4 has-[>svg:only-child]:px-2.5 rounded-3xl" to="/products">
                                            <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#000' }}>View Our Products</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="कंपनी इतिहास">
                <section className="w-full" style={{ contain: 'layout style paint' }}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex w-full flex-col gap-4 py-16 @tablet:py-24 @tablet:gap-6 items-start text-left" style={{ zIndex: '10' }}>
                            <div className="flex items-baseline gap-1">
                                <div className="flex items-center">
                                    <div className="h-0 w-4 border-t" style={{ borderColor: '#1b1b16' }}></div>
                                </div>
                                <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16' }}>Our Journey</span>
                            </div>
                            <div className="flex w-full flex-col gap-4 @tablet:gap-8 @desktop:flex-row items-start">
                                <h2 className="w-full @tablet:max-w-120 @desktop:basis-1/2 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>
                                    Two Decades of Trust, Quality & Innovation
                                </h2>
                                <p className="whitespace-pre-line w-full @tablet:max-w-2xl text-left @desktop:basis-1/2 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                    Electra Wires was established with a vision to provide safe and high-quality electrical wiring solutions. Over the past 20+ years, we have built a strong reputation by delivering durable and fire-resistant wires for residential, commercial, and industrial applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="हमारी टीम">
                <section className="w-full" style={{ contain: 'layout style paint' }}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-8 py-16 @tablet:py-24 @tablet:gap-16" style={{ zIndex: '10' }}>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-baseline gap-1">
                                    <div className="flex items-center">
                                        <div className="h-0 w-4 border-t" style={{ borderColor: '#1b1b16' }}></div>
                                    </div>
                                    <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16' }}>Our Team</span>
                                </div>
                                <div className="flex flex-col gap-4 @tablet:gap-8 @desktop:flex-row @desktop:justify-between">
                                    <div className="w-full @desktop:basis-1/2">
                                        <div className="max-w-xl">
                                            <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>
                                                Driven by Expertise. Built on Trust.
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col gap-8 @desktop:basis-1/2">
                                        <div className="max-w-xl">
                                            <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                The Electra Wires team delivers high-performance industrial cables and house wiring solutions backed by two decades of manufacturing excellence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-10 @tablet:gap-8 @desktop:grid-cols-2">
                                <div className="flex flex-col gap-6 @tablet:flex-row @tablet:gap-6 @desktop:flex-row @desktop:gap-8">
                                    <div className="shrink-0 @tablet:w-50">
                                        <div className="relative w-full rounded-3xl overflow-hidden h-75 @tablet:h-50 @tablet:w-50">
                                            <img alt="Akash Sharma, Founder" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="h-75 @tablet:h-50 @tablet:w-50" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="(max-width: 640px) 100vw, 200px" src="/_next/917af533-177d-4e38-9a29-47b2d3cce5b2-xlgAzaO6u49l1NphooJ07DydKgudZM3165.png" />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>Akash Sharma</h3>
                                                <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#1b1b16' }}>Founder & Managing Director</p>
                                            </div>
                                            <div className="border-t pt-4" style={{ borderColor: '#777771' }}>
                                                <div className="flex flex-col gap-2">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                        Leads with 20+ years of experience ensuring top-quality manufacturing and safety standards across all FR PVC wiring products.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-6 @tablet:flex-row @tablet:gap-6 @desktop:flex-row @desktop:gap-8">
                                    <div className="shrink-0 @tablet:w-50">
                                        <div className="relative w-full rounded-3xl overflow-hidden h-75 @tablet:h-50 @tablet:w-50">
                                            <img alt="Rajeev Kumar, Quality Manager" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="h-75 @tablet:h-50 @tablet:w-50" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="(max-width: 640px) 100vw, 200px" src="/_next/71227d63-eac7-45f3-b33a-31e289b9d71da798.png" />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col gap-4">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>Rajeev Kumar</h3>
                                                <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#1b1b16' }}>Product Quality Manager</p>
                                            </div>
                                            <div className="border-t pt-4" style={{ borderColor: '#777771' }}>
                                                <div className="flex flex-col gap-2">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                        Ensures strict quality control and product reliability across all wires, maintaining industrial-grade safety for every customer.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="ग्राहक समीक्षा">
                <section className="w-full" style={{ contain: 'layout style paint' }}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-8 py-16 @tablet:py-24" style={{ zIndex: '10' }}>
                            <div className="flex flex-col gap-8 @tablet:flex-row @tablet:items-end @tablet:justify-between @tablet:gap-14">
                                <div className="flex flex-col gap-4 @tablet:max-w-1/2">
                                    <div className="flex items-baseline gap-1">
                                        <div className="flex items-center">
                                            <div className="h-0 w-4 border-t" style={{ borderColor: '#1b1b16' }}></div>
                                        </div>
                                        <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16' }}>Client Testimonials</span>
                                    </div>
                                    <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>
                                        What Our Clients Say About Us
                                    </h2>
                                </div>
                                <div className="gap-3 hidden @tablet:flex">
                                    <button type="button" disabled="" aria-label="Previous" style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--hover-bg-color': '#e0d9c8' }} className="appearance-none text-inherit bg-(--bg-color) hover:bg-(--hover-bg-color) cursor-pointer p-3 disabled:opacity-50 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="size-5" style={{ color: '#000' }}><path fill="currentColor" fillRule="evenodd" d="M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" clipRule="evenodd"></path></svg></button>
                                    <button type="button" disabled="" aria-label="Next" style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--hover-bg-color': '#e0d9c8' }} className="appearance-none text-inherit bg-(--bg-color) hover:bg-(--hover-bg-color) cursor-pointer p-3 disabled:opacity-50 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="size-5" style={{ color: '#000' }}><path fill="currentColor" fillRule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0" clipRule="evenodd"></path></svg></button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 @tablet:gap-14">
                                <div className="relative w-full" role="region" aria-roledescription="carousel">
                                    <div>
                                        <div className="flex -ml-3 cursor-grab active:cursor-grabbing">
                                            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 select-none basis-7/8 pl-3 @tablet:basis-3/4 @desktop:basis-5/9">
                                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col justify-between gap-12 p-6 @tablet:p-10 rounded-3xl">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-lg-font-size)', '--typography-font-weight': 'var(--typography-body-lg-font-weight)', '--typography-line-height': 'var(--typography-body-lg-line-height)', '--typography-letter-spacing': 'var(--typography-body-lg-letter-spacing)', '--typography-font-family': 'var(--typography-body-lg-font-family)', color: '#2f2f29' }}>
                                                        Reliable and durable wires for residential projects.
                                                    </p>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-title-sm-font-size)', '--typography-font-weight': 'var(--typography-title-sm-font-weight)', '--typography-line-height': 'var(--typography-title-sm-line-height)', '--typography-letter-spacing': 'var(--typography-title-sm-letter-spacing)', '--typography-font-family': 'var(--typography-title-sm-font-family)', color: '#000' }}>Rajeev Kumar</p>
                                                            <p className="uppercase [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#2a2a24' }}>Construction Manager, New Delhi</p>
                                                        </div>
                                                        <div className="relative size-16 shrink-0 overflow-hidden @tablet:size-12 rounded-3xl">
                                                            <div className="relative h-full w-full overflow-hidden object-cover">
                                                                <img alt="Rajeev Kumar" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="64px" src="/_next/71227d63-eac7-45f3-b33a-31e289b9d71da798.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 select-none basis-7/8 pl-3 @tablet:basis-3/4 @desktop:basis-5/9">
                                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col justify-between gap-12 p-6 @tablet:p-10 rounded-3xl">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-lg-font-size)', '--typography-font-weight': 'var(--typography-body-lg-font-weight)', '--typography-line-height': 'var(--typography-body-lg-line-height)', '--typography-letter-spacing': 'var(--typography-body-lg-letter-spacing)', '--typography-font-family': 'var(--typography-body-lg-font-family)', color: '#2f2f29' }}>
                                                        Perfect for commercial use. Strong and safe.
                                                    </p>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-title-sm-font-size)', '--typography-font-weight': 'var(--typography-title-sm-font-weight)', '--typography-line-height': 'var(--typography-title-sm-line-height)', '--typography-letter-spacing': 'var(--typography-title-sm-letter-spacing)', '--typography-font-family': 'var(--typography-title-sm-font-family)', color: '#000' }}>Priya Sharma</p>
                                                            <p className="uppercase [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#2a2a24' }}>Property Manager, Gurugram</p>
                                                        </div>
                                                        <div className="relative size-16 shrink-0 overflow-hidden @tablet:size-12 rounded-3xl">
                                                            <div className="relative h-full w-full overflow-hidden object-cover">
                                                                <img alt="Priya Sharma" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="64px" src="/_next/ff0eb2a1-e15b-4f84-81d6-a6e68c73f6d5a9e2.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 select-none basis-7/8 pl-3 @tablet:basis-3/4 @desktop:basis-5/9">
                                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col justify-between gap-12 p-6 @tablet:p-10 rounded-3xl">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-lg-font-size)', '--typography-font-weight': 'var(--typography-body-lg-font-weight)', '--typography-line-height': 'var(--typography-body-lg-line-height)', '--typography-letter-spacing': 'var(--typography-body-lg-letter-spacing)', '--typography-font-family': 'var(--typography-body-lg-font-family)', color: '#2f2f29' }}>
                                                        Trusted for industrial wiring needs.
                                                    </p>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-title-sm-font-size)', '--typography-font-weight': 'var(--typography-title-sm-font-weight)', '--typography-line-height': 'var(--typography-title-sm-line-height)', '--typography-letter-spacing': 'var(--typography-title-sm-letter-spacing)', '--typography-font-family': 'var(--typography-title-sm-font-family)', color: '#000' }}>Amit Patel</p>
                                                            <p className="uppercase [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#2a2a24' }}>Operations Director, Noida</p>
                                                        </div>
                                                        <div className="relative size-16 shrink-0 overflow-hidden @tablet:size-12 rounded-3xl">
                                                            <div className="relative h-full w-full overflow-hidden object-cover">
                                                                <img alt="Amit Patel" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="64px" src="/_next/749dd67b-6d38-476b-b9d4-b4bacd4c0cc2540b.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 select-none basis-7/8 pl-3 @tablet:basis-3/4 @desktop:basis-5/9">
                                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col justify-between gap-12 p-6 @tablet:p-10 rounded-3xl">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-lg-font-size)', '--typography-font-weight': 'var(--typography-body-lg-font-weight)', '--typography-line-height': 'var(--typography-body-lg-line-height)', '--typography-letter-spacing': 'var(--typography-body-lg-letter-spacing)', '--typography-font-family': 'var(--typography-body-lg-font-family)', color: '#2f2f29' }}>
                                                        Excellent quality and performance.
                                                    </p>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-title-sm-font-size)', '--typography-font-weight': 'var(--typography-title-sm-font-weight)', '--typography-line-height': 'var(--typography-title-sm-line-height)', '--typography-letter-spacing': 'var(--typography-title-sm-letter-spacing)', '--typography-font-family': 'var(--typography-title-sm-font-family)', color: '#000' }}>Vikram Singh</p>
                                                            <p className="uppercase [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#2a2a24' }}>Electrical Contractor, Delhi</p>
                                                        </div>
                                                        <div className="relative size-16 shrink-0 overflow-hidden @tablet:size-12 rounded-3xl">
                                                            <div className="relative h-full w-full overflow-hidden object-cover">
                                                                <img alt="Vikram Singh" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="64px" src="/_next/04c9eb37-5dfd-4c51-a0b1-2975827b579d94e5.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="group" aria-roledescription="slide" className="min-w-0 shrink-0 grow-0 select-none basis-7/8 pl-3 @tablet:basis-3/4 @desktop:basis-5/9">
                                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--border-color': '#b0b0a8', borderColor: '#b0b0a8' }} className="bg-(--bg-color) border flex h-full flex-col justify-between gap-12 p-6 @tablet:p-10 rounded-3xl">
                                                    <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-lg-font-size)', '--typography-font-weight': 'var(--typography-body-lg-font-weight)', '--typography-line-height': 'var(--typography-body-lg-line-height)', '--typography-letter-spacing': 'var(--typography-body-lg-letter-spacing)', '--typography-font-family': 'var(--typography-body-lg-font-family)', color: '#2f2f29' }}>
                                                        Highly recommended for safety and durability.
                                                    </p>
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-title-sm-font-size)', '--typography-font-weight': 'var(--typography-title-sm-font-weight)', '--typography-line-height': 'var(--typography-title-sm-line-height)', '--typography-letter-spacing': 'var(--typography-title-sm-letter-spacing)', '--typography-font-family': 'var(--typography-title-sm-font-family)', color: '#000' }}>Neeraj Verma</p>
                                                            <p className="uppercase [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-font-size)', '--typography-font-weight': 'var(--typography-body-sm-font-weight)', '--typography-line-height': 'var(--typography-body-sm-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-font-family)', color: '#2a2a24' }}>Project Director, Delhi</p>
                                                        </div>
                                                        <div className="relative size-16 shrink-0 overflow-hidden @tablet:size-12 rounded-3xl">
                                                            <div className="relative h-full w-full overflow-hidden object-cover">
                                                                <img alt="नीरज वर्मा" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="64px" src="/_next/27d7df10-1ce9-4fe3-8586-04838fe545927f1b.png" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 @tablet:hidden">
                                    <button type="button" disabled="" aria-label="Previous" style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--hover-bg-color': '#e0d9c8' }} className="appearance-none text-inherit bg-(--bg-color) hover:bg-(--hover-bg-color) cursor-pointer p-3 disabled:opacity-50 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="size-5" style={{ color: '#000' }}><path fill="currentColor" fillRule="evenodd" d="M12.707 5.293a1 1 0 0 1 0 1.414L9.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" clipRule="evenodd"></path></svg></button>
                                    <button type="button" disabled="" aria-label="Next" style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)', '--hover-bg-color': '#e0d9c8' }} className="appearance-none text-inherit bg-(--bg-color) hover:bg-(--hover-bg-color) cursor-pointer p-3 disabled:opacity-50 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="size-5" style={{ color: '#000' }}><path fill="currentColor" fillRule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0" clipRule="evenodd"></path></svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="w-full" id="प्रश्न और उत्तर">
                <section className="w-full" style={{ contain: 'layout style paint' }}>
                    <div className="relative" style={{ paddingBottom: '488px' }}>
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: 'transparent' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-12 py-16 @tablet:py-24" style={{ zIndex: '10' }}>
                            <div className="text-center">
                                <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>Frequently Asked Questions</h2>
                            </div>
                            <div className="flex flex-col gap-12 @desktop:grid @desktop:grid-cols-2 @desktop:items-start @desktop:gap-16">
                                <div className="w-full" data-orientation="vertical">
                                    {faqs.map((faq, index) => {
                                        const contentId = `radix-faq-content-${index}`;
                                        const triggerId = `radix-faq-trigger-${index}`;
                                        return (
                                            <div key={index} data-state="closed" data-orientation="vertical">
                                                <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)' }} className="bg-(--bg-color) mb-4 p-6 rounded-3xl">
                                                    <h3 data-orientation="vertical" data-state="closed">
                                                        <button type="button" aria-controls={contentId} aria-expanded="false" data-state="closed" data-orientation="vertical" id={triggerId} className="flex w-full cursor-pointer items-center gap-4 text-left transition-colors duration-200 focus:outline-none group" data-radix-collection-item="">
                                                            <span className="flex-1 [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-em-font-size)', '--typography-font-weight': 'var(--typography-body-md-em-font-weight)', '--typography-line-height': 'var(--typography-body-md-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-em-font-family)', color: '#000' }}>
                                                                {faq.question}
                                                            </span>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" width="24" height="24" className="transition-transform duration-200 group-data-[state=open]:rotate-180" style={{ color: '#261100' }}>
                                                                <path fill="currentColor" fillRule="evenodd" d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414" clipRule="evenodd"></path>
                                                            </svg>
                                                        </button>
                                                    </h3>
                                                    <div data-state="closed" id={contentId} hidden="" role="region" aria-labelledby={triggerId} data-orientation="vertical" className="overflow-hidden transition-all duration-200 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" style={{ '--radix-accordion-content-height': 'var(--radix-collapsible-content-height)', '--radix-accordion-content-width': 'var(--radix-collapsible-content-width)' }}>
                                                        <div className="pt-2 pb-2">
                                                            <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="hidden @desktop:block rounded-3xl sticky top-0 aspect-square overflow-hidden">
                                    <div className="relative rounded-3xl overflow-hidden h-full w-full object-cover">
                                        <img alt="HVAC technician consulting with homeowner using tablet to review energy efficiency upgrade options in sunny living room" fetchPriority="auto" loading="lazy" decoding="async" data-nimg="fill" className="h-full w-full object-cover" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '33% 50%', color: 'transparent', transformOrigin: '33% 50%', transform: 'scale(1)' }} sizes="(max-width: 1024px) 100vw, 50vw" src="/_next/99ad47bc-f8db-468f-8cdd-5425f37ddda3-y9dWOToRsj7M4YNrnuT3sDU4PgD3Hn6aae.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
