import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { usePageInteractions } from './usePageInteractions';

// import video1 from '../assets/electric-video.mp4';
import img2 from '../assets/Image Apr 29, 2026, 12_02_58 PM.png';
import img3 from '../assets/Image Apr 29, 2026, 03_26_01 PM.png';

const Blogs = () => {
    const rootRef = useRef(null);
    usePageInteractions({ rootRef, carouselTitle: 'Our Customers Are Our Success', faqTitle: 'Your Questions, Answered' });

    return (
        <main ref={rootRef}>
            <div className="w-full" id="हीरो सेक्शन">
                <section className="w-full" style={{ marginTop: 'calc(-1 * 96px)', contain: 'layout style paint' }}>
                    <div className="relative" style={{ paddingTop: '96px' }}>
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-0 py-8 @desktop:flex-row @desktop:items-stretch" style={{ zIndex: '10' }}>
                            <div style={{ '--bg-color': 'rgba(0%, 0%, 0%, 0.04764)' }} className="bg-(--bg-color) w-full p-6 @tablet:p-8 @desktop:w-1/2 @desktop:shrink-0 @desktop:px-14 @desktop:py-16 rounded-t-3xl @desktop:rounded-t-none @desktop:rounded-l-3xl">
                                <div className="flex h-full flex-col gap-6">
                                    <div className="flex flex-col items-start gap-4">
                                        <h1 id="blogs-main-title" className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing) !text-black" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)' }}>
                                            Industry Insights & Electra Updates
                                        </h1>
                                        <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#fcfcfb' }}>
                                            Stay informed with the latest news, safety standards, and innovations in the electrical wires and cables industry.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-start @tablet:justify-start">
                                        <Link data-slot="button" label="Latest Articles" style={{ '--bg-color': '#E8A317', '--hover-bg-color': '#da990f', color: '#000' }} className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-error-border aria-invalid:ring-error-interactive-bg border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-5 py-2.5 rounded-3xl" to="#latest-articles">
                                            <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#000' }}>
                                                Latest Articles
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative aspect-4/3 w-full overflow-hidden @desktop:aspect-auto @desktop:w-1/2 @desktop:shrink-0 rounded-b-3xl @desktop:rounded-b-none @desktop:rounded-r-3xl">
                                <div className="relative h-full w-full overflow-hidden">
                                    <img alt="Electra Wires Blog Hero" fetchPriority="high" loading="eager" decoding="async" data-nimg="fill" style={{ position: 'absolute', height: '100%', width: '100%', left: '0', top: '0', right: '0', bottom: '0', objectFit: 'cover', objectPosition: '50% 50%', color: 'transparent', transformOrigin: '50% 50%', transform: 'scale(1)' }} sizes="(max-width: 1024px) 100vw, 50vw" src="/hero-product-new.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full" id="latest-articles">
                <section className="w-full" style={{ contain: 'layout style paint' }}>
                    <div className="relative">
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: '#FFF8E4' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-8 py-16 @tablet:py-24 @tablet:gap-14" style={{ zIndex: '10' }}>
                            <div className="flex flex-col gap-8 @desktop:flex-row @desktop:items-end @desktop:justify-between">
                                <div className="flex flex-col gap-4 @tablet:max-w-2/3 @desktop:max-w-1/2">
                                    <div className="flex items-baseline gap-1">
                                        <div className="flex items-center">
                                            <div className="h-0 w-4 border-t" style={{ borderColor: '#1b1b16' }}></div>
                                        </div>
                                        <span className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-label-md-font-size)', '--typography-font-weight': 'var(--typography-label-md-font-weight)', '--typography-line-height': 'var(--typography-label-md-line-height)', '--typography-letter-spacing': 'var(--typography-label-md-letter-spacing)', '--typography-font-family': 'var(--typography-label-md-font-family)', color: '#1b1b16' }}>
                                            Our Blog
                                        </span>
                                    </div>
                                    <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-sm-font-size)', '--typography-font-weight': 'var(--typography-display-sm-font-weight)', '--typography-line-height': 'var(--typography-display-sm-line-height)', '--typography-letter-spacing': 'var(--typography-display-sm-letter-spacing)', '--typography-font-family': 'var(--typography-display-sm-font-family)', color: '#060603' }}>
                                        Latest News & Articles
                                    </h2>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div className="grid grid-cols-1 @tablet:grid-cols-2 @desktop:grid-cols-3 gap-6 w-full">
                                    {/* Blog Card 1 */}
                                    <div className="flex flex-col gap-5">
                                        <div className="overflow-hidden rounded-[28px] bg-[#f4efe2]" style={{ aspectRatio: '1535 / 1024' }}>
                                       <video
  src="/src/assets/electric-video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="h-full w-full object-contain"
/>
                                            {/* <img alt="Why Fire Retardant Wires Are Essential" loading="lazy" decoding="async" className="h-full w-full object-contain" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%', color: 'transparent' }} src={img1} /> */}
                                        </div>
                                        <div className="flex flex-col gap-3 px-1">
                                            <span className="text-sm font-semibold text-[#da990f]">Safety Guidelines • May 15, 2026</span>
                                            <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>
                                                Why Fire Retardant Wires Are Essential for Homes
                                            </h3>
                                            <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                Explore the critical differences between standard wires and FR-LSH cables. Learn how making the right choice can save lives during an electrical emergency.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Blog Card 2 */}
                                    <div className="flex flex-col gap-5">
                                        <div className="overflow-hidden rounded-[28px] bg-[#f4efe2]" style={{ aspectRatio: '1535 / 1024' }}>
                                            <img alt="Understanding Industrial Power Loads" loading="lazy" decoding="async" className="h-full w-full object-contain" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%', color: 'transparent' }} src={img2} />
                                        </div>
                                        <div className="flex flex-col gap-3 px-1">
                                            <span className="text-sm font-semibold text-[#da990f]">Industrial Use • April 28, 2026</span>
                                            <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>
                                                Understanding Industrial Power Loads & Armoured Cables
                                            </h3>
                                            <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                A comprehensive guide to selecting the right heavy-duty armoured cables for manufacturing plants to handle fluctuating power demands reliably.
                                            </p>
                                        </div>
                                    </div>
                                    {/* Blog Card 3 */}
                                    <div className="flex flex-col gap-5">
                                        <div className="overflow-hidden rounded-[28px] bg-[#f4efe2]" style={{ aspectRatio: '1535 / 1024' }}>
                                            <img alt="The Future of Solar Integration" loading="lazy" decoding="async" className="h-full w-full object-contain" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: '50% 50%', color: 'transparent' }} src={img3} />
                                        </div>
                                        <div className="flex flex-col gap-3 px-1">
                                            <span className="text-sm font-semibold text-[#da990f]">Renewable Energy • March 12, 2026</span>
                                            <h3 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-heading-sm-font-size)', '--typography-font-weight': 'var(--typography-heading-sm-font-weight)', '--typography-line-height': 'var(--typography-heading-sm-line-height)', '--typography-letter-spacing': 'var(--typography-heading-sm-letter-spacing)', '--typography-font-family': 'var(--typography-heading-sm-font-family)', color: '#060603' }}>
                                                The Future of Solar Integration: UV-Resistant Wiring
                                            </h3>
                                            <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#1b1b16' }}>
                                                As solar energy adoption rises, the demand for high-quality, weather-proof PV cables is at an all-time high. Find out what makes them indispensable.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="w-full" id="कॉल टू एक्शन">
                <section className="w-full relative" style={{ contain: 'layout style paint' }}>
                    <div className="relative" style={{ paddingBottom: '488px' }}>
                        <div className="absolute inset-0" style={{ borderRadius: 'inherit', background: 'linear-gradient(180deg, transparent 0%, transparent 100%), #0F0F0079' }}></div>
                        <div className="relative mx-auto max-w-[1536px] px-6 flex flex-col gap-4 py-16 @tablet:py-24 items-center justify-center text-center" style={{ zIndex: '10' }}>
                            <div className="flex flex-col max-w-2xl items-center">
                                <h2 className="[font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-display-md-font-size)', '--typography-font-weight': 'var(--typography-display-md-font-weight)', '--typography-line-height': 'var(--typography-display-md-line-height)', '--typography-letter-spacing': 'var(--typography-display-md-letter-spacing)', '--typography-font-family': 'var(--typography-display-md-font-family)', color: '#f9f9f2' }}>
                                    Subscribe to Our Newsletter
                                </h2>
                            </div>
                            <div className="flex max-w-2xl flex-col gap-8">
                                <p className="whitespace-pre-line [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-md-font-size)', '--typography-font-weight': 'var(--typography-body-md-font-weight)', '--typography-line-height': 'var(--typography-body-md-line-height)', '--typography-letter-spacing': 'var(--typography-body-md-letter-spacing)', '--typography-font-family': 'var(--typography-body-md-font-family)', color: '#e5e6de' }}>
                                    Get the latest industry insights and updates directly in your inbox.
                                </p>
                                <div className="grid grid-cols-1 gap-4 @tablet:flex @tablet:flex-row items-center @tablet:justify-center">
                                    <Link data-slot="button" label="Contact Us" style={{ '--bg-color': '#E8A317', '--hover-bg-color': '#da990f', color: '#000' }} className="inline-flex shrink-0 cursor-pointer items-center justify-center bg-(--bg-color) whitespace-nowrap transition-all outline-none hover:bg-(--hover-bg-color) focus-visible:border-primary-border focus-visible:ring-[3px] focus-visible:ring-primary-interactive-bg border border-(--bg-color) hover:border-(--hover-bg-color) gap-2 px-5 py-2.5 rounded-3xl" to="/contact">
                                        <span className="min-w-0 overflow-hidden text-ellipsis [font-family:var(--typography-font-family)] [font-size:var(--typography-font-size)] leading-(--typography-line-height) font-(--typography-font-weight) tracking-(--typography-letter-spacing)" style={{ '--typography-font-size': 'var(--typography-body-sm-em-font-size)', '--typography-font-weight': 'var(--typography-body-sm-em-font-weight)', '--typography-line-height': 'var(--typography-body-sm-em-line-height)', '--typography-letter-spacing': 'var(--typography-body-sm-em-letter-spacing)', '--typography-font-family': 'var(--typography-body-sm-em-font-family)', color: '#000' }}>
                                            Contact Us
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Blogs;
