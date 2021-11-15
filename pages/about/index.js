import { AboutHistorySection } from "../../components/AboutComponent/AboutHistorySection";
import { AboutMegazineSection } from "../../components/AboutComponent/AboutMegazineSection";
import { NavigationDropDownButton } from "../../components/CustomComponent/FieldComponent/NavigationDropDownButton";
import { HomeSectionTitle } from "../../components/CustomComponent/TextComponent/HomeSectionTitle";
import { Navbar } from "../../components/Navbar";
import { Footer } from '../../components/Footer'
import { AboutBrochureSection } from "../../components/AboutComponent/AboutBrochureSection";
import { useEffect, useRef, useState } from "react";


export default function About() {
    const megazineSectionRef = useRef();
    const megazineTopSectionRef = useRef();
    const historySectionRef = useRef();
    const brochureSectionRef = useRef();
    const [activeSection, setactiveSection] = useState('history-section')

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2,
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setactiveSection(entry.target.id);
                }
            },
            options);

        if (megazineSectionRef && megazineSectionRef.current) {
            observer.observe(megazineSectionRef.current);
        }
        if (megazineTopSectionRef && megazineTopSectionRef.current) {
            observer.observe(megazineTopSectionRef.current);
        }
        if (historySectionRef && historySectionRef.current) {
            observer.observe(historySectionRef.current);
        }
        if (brochureSectionRef && brochureSectionRef.current) {
            observer.observe(brochureSectionRef.current);
        }

        return () => observer.disconnect();
    }, [megazineSectionRef, historySectionRef, brochureSectionRef, megazineTopSectionRef])

    return (
        <div className='smooth-scroll'>
            <Navbar activePage='about' />
            <div className={`fixed px-20 py-8 gap-x-16 top-[5.4rem] left-0 right-0 z-40 bg-white shadow-lg border-t border-bordercolor w-full h-10 ${activeSection != 'history-section' ? 'md:flex opacity-100' : 'hidden opacity-0'} transition-all duration-300`}>
                <a href='#history-section'  className='font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'>
                    01
                                <span className='font-karla text-neutral font-normal ml-5'>History</span>
                </a>
                <a href='#megazine-section' className={`font-montserrat ${activeSection == 'megazine-section' || activeSection == 'magazine-section' ? 'text-dark text-opacity-50' : 'text-neutral text-opacity-40'} transition-all font-bold text-xl flex flex-row items-center`}>
                    02
                                <span className={`font-karla text-neutral ${activeSection == 'megazine-section' || activeSection == 'magazine-section' ? 'font-bold' : 'font-normal'} transition-all ml-5`}>Megazine</span>
                </a>
                <a href='#brochure-section' className={`font-montserrat ${activeSection == 'brochure-section' ? 'text-dark text-opacity-50' : 'text-neutral text-opacity-40'} transition-all font-bold text-xl flex flex-row items-center`}>
                    03
                                <span className={`font-karla text-neutral ${activeSection == 'brochure-section' ? 'font-bold' : 'font-normal'} transition-all ml-5`}>Brochure</span>
                </a>
            </div>
            <div className='pt-20 md:pt-36'>
                <div className='w-full overflow-hidden md:px-[7.5rem]'>
                    <img src='/img-about-thumbnail.jpg' className='w-full h-full object-cover md:rounded-3xl' />
                </div>
            </div>
            <div className='flex flex-row items-start'>
                <div className='pt-10 px-5 md:px-20 md:w-8/12 md:-translate-y-24 md:bg-white md:rounded-tr-[1.875rem]'>
                    <HomeSectionTitle title='About us' />
                    <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-5 md:pl-9 md:leading-tight z-10 capitalize'>Visit West Java</h3>
                    <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:mt-5'>White Crater, The Magical Splendor and Hypnotizing Ambience of a Crater</p>
                    <div className='w-full h-px bg-bordercolor mt-8 mb-8 md:mb-0 md:ml-9' />
                    <NavigationDropDownButton
                        className='md:hidden'
                        options={[
                            { label: 'History' },
                            { label: 'Megazine' },
                            { label: 'Brochure' },
                        ]}
                    />
                    <AboutHistorySection historySectionRef={historySectionRef} />
                </div>
                <div className='hidden md:flex flex-row items-center sticky top-0 pb-32 w-4/12 justify-center pr-20 pt-28'>
                    <div className='w-[5px] h-[183px] bg-[#CBD9EA] mr-10 rounded-full'>
                        <div className='w-[5px] h-[36px] bg-primary rounded-full mt-12'></div>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='capitalize font-montserrat font-bold text-dark text-xl pb-5'>Lompat ke menu</h4>
                        <a href='#history-section' className='pb-5 font-montserrat text-dark text-opacity-50 font-bold text-xl flex flex-row items-center'>
                            01
                                <span className='font-karla text-neutral ml-5'>History</span>
                        </a>
                        <a href='#megazine-section' className='pb-5 font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'>
                            02
                                <span className='font-karla text-neutral font-normal ml-5'>Megazine</span>
                        </a>
                        <a href='#brochure-section' className='font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'>
                            03
                                <span className='font-karla text-neutral font-normal ml-5'>Brochure</span>
                        </a>
                    </div>
                </div>
            </div>
            <AboutMegazineSection megazineSectionRef={megazineSectionRef} megazineTopSectionRef={megazineTopSectionRef} />
            <AboutBrochureSection brochureSectionRef={brochureSectionRef}/>
            <Footer />
        </div>
    )
}
