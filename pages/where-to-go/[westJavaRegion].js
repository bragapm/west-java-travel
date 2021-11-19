import { Navbar } from "../../components/Navbar";
import { Footer } from '../../components/Footer'
import { NavigationDropDownButton } from "../../components/custom-component/FieldComponent/NavigationDropDownButton";
import { WhereToGoDemografiSection } from "../../components/where-to-go-section/WhereToGoDemografiSection";
import { HomeSectionTitle } from "../../components/custom-component/TextComponent/HomeSectionTitle";
import { useEffect, useRef, useState } from "react";
import { WhereToGoDestinantionSection } from "../../components/where-to-go-section/WhereToGoDestinantionSection";


export default function WhereToGo() {
    const thumbnailRef = useRef();
    const demografiSectionRef = useRef();
    const [activeSection, setactiveSection] = useState('thumbnail');

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

        if (thumbnailRef && thumbnailRef.current) {
            observer.observe(thumbnailRef.current);
        }

        return () => observer.disconnect();
    }, [])

    return (
        <div className='smooth-scroll'>
            <Navbar activePage='where-to-go' />
            <div className='pt-20 md:pt-36' id='thumbnail'>
                <div className='w-full overflow-hidden md:px-[7.5rem]'>
                    <img src='/img-about-thumbnail.jpg' className='w-full h-full object-cover md:rounded-3xl' />
                </div>
            </div>
            <div className='flex flex-row items-start'>
                <div className='pt-10 px-5 md:px-20 md:w-8/12 md:-translate-y-24 md:bg-white md:rounded-tr-[1.875rem]'>
                    <HomeSectionTitle title='where to go' />
                    <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-5 md:pl-9 md:leading-tight z-10 capitalize'>central west java</h3>
                    <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:mt-5'>White Crater, The Magical Splendor and Hypnotizing Ambience of a Crater</p>
                    <div className='flex flex-col md:flex-row mt-8 space-y-6 md:space-y-0 md:space-x-10 md:pl-9'>
                        <div className='flex flex-row'>
                            <img src='/ic-destination.svg' alt='ic-destination' className='mr-4' />
                            <div className='flex flex-col'>
                                <h4 className='font-montserrat text-dark md:text-lg font-bold'>30</h4>
                                <p className='uppercase font-karla font-bold text-neutral opacity-50 text-xs md:text-base'>Destination</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <img src='/ic-restaurant.svg' alt='ic-restaurant' className='mr-4' />
                            <div className='flex flex-col'>
                                <h4 className='font-montserrat text-dark md:text-lg font-bold'>76</h4>
                                <p className='uppercase font-karla font-bold text-neutral opacity-50 text-xs md:text-base'>Restaurant</p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <img src='/ic-bed.svg' alt='ic-bed' className='mr-4' />
                            <div className='flex flex-col'>
                                <h4 className='font-montserrat text-dark md:text-lg font-bold'>14</h4>
                                <p className='uppercase font-karla font-bold text-neutral opacity-50 text-xs md:text-base'>accomodation</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-px bg-bordercolor mt-8 mb-8 md:mb-0 md:ml-9' />
                    <NavigationDropDownButton
                        className='md:hidden'
                        options={[
                            { label: 'History', href: '#history-section' },
                            { label: 'Megazine', href: '#megazine-section' },
                            { label: 'Brochure', href: '#brochure-section' },
                        ]}
                    />
                    <WhereToGoDemografiSection demografiSectionRef={demografiSectionRef} />
                </div>
                <div className='hidden md:flex flex-row items-center sticky top-0 pb-32 w-4/12 justify-center pr-20 pt-28'>
                    <div className='w-[5px] h-[252px] bg-[#CBD9EA] mr-10 rounded-full'>
                        <div className='w-[5px] h-[36px] bg-primary rounded-full mt-16'></div>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='capitalize font-montserrat font-bold text-dark text-xl pb-5'>Lompat ke menu</h4>
                        <a href='#history-section' className='pb-5 font-montserrat text-dark text-opacity-50 font-bold text-xl flex flex-row items-center'>
                            01
                            <span className='font-karla text-neutral ml-5'>Demografi</span>
                        </a>
                        <a href='#megazine-section' className='pb-5 font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'>
                            02
                            <span className='font-karla text-neutral font-normal ml-5'>Destinasi & Atraksi</span>
                        </a>
                        <a href='#brochure-section' className='pb-5 font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'>
                            03
                            <span className='font-karla text-neutral font-normal ml-5'>Southern West Java In Frame</span>
                        </a>
                        <a href='#brochure-section' className='font-montserrat text-neutral text-opacity-40 font-bold text-xl flex flex-row items-center'>
                            04
                            <span className='font-karla text-neutral font-normal ml-5'>Trip Ideas</span>
                        </a>
                    </div>
                </div>
            </div>
            <WhereToGoDestinantionSection />
            <Footer />
        </div>
    )
}
