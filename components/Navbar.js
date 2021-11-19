import React, { useEffect, useRef, useState } from 'react'
import MemoIcArrowIos from './custom-icons/IcArrowIos';
import MemoIcMenu from './custom-icons/IcMenu';
import Link from 'next/link';


export const Navbar = ({ activePage }) => {
    const tipTop = useRef(null);
    const [isTipTop, setisTipTop] = useState(true);
    const [isShowMobileNavOptions, setisShowMobileNavOptions] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.25,
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setisTipTop(true);
                } else {
                    setisTipTop(false);
                }
            },
            options);

        if (tipTop && tipTop.current) {
            observer.observe(tipTop.current);
        }

        return () => observer.disconnect();
    }, [tipTop])

    return (
        <div className='flex flex-col relative'>
            <div ref={tipTop} />
            <div className={`flex flex-row justify-between fixed top-0 left-0 right-0 z-40 p-5 md:px-20 ${activePage != 'home' ? `bg-white ${isTipTop ? 'shadow-none' : 'shadow-lg'}` : `${isTipTop ? 'bg-transparent md:bg-gradient-to-b md:from-[#00000099] md:to-transparent' : 'bg-white shadow-lg'}`}  transition-all duration-300 items-center`}>
                <img src='/ic-logo.svg' className={`${isTipTop ? 'md:w-[120px]' : 'md:w-[60px]'} transition-all duration-300`} />
                <button
                    onClick={() => {
                        setisShowMobileNavOptions(true);
                    }}
                >
                    <MemoIcMenu className={`${activePage != 'home' ? 'text-primary' : `${isTipTop ? 'text-white' : 'text-primary'}`} transition-all duration-300 md:hidden`} />
                </button>
                <div className='md:flex flex-row space-x-[3.125rem] hidden'>
                    <Link href='/'>
                        <a className={`uppercase font-karla hover:opacity-70 ${activePage != 'home' ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}>home</a>
                    </Link>
                    <Link href='/where-to-go/central west java'>
                        <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'where-to-go' ? 'text-primary font-bold' : `${activePage != 'home' ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>Where To Go</a>
                    </Link>
                    <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'plan-your-trip' ? 'text-primary font-bold' : `${activePage != 'home' ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>Plan Your Trip</a>
                    <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'travel-tips' ? 'text-primary font-bold' : `${activePage != 'home' ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>Travel Tips</a>
                    <Link href='/about'>
                        <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'about' ? 'text-primary font-bold' : `${activePage != 'home' ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>About</a>
                    </Link>
                    <div className={`uppercase font-karla hover:opacity-70 ${activePage != 'home' ? 'text-neutral border-neutral' : `${isTipTop ? 'text-white text-shadow border-white' : 'text-neutral border-neutral'}`} flex flex-row items-center border-l `}>
                        <span className='mr-2 ml-4'>🇮🇩</span>
                        ID
                        <MemoIcArrowIos className={`ml-3 ${activePage != 'home' ? 'text-neutral' : `${isTipTop ? 'text-white' : 'text-neutral'}`}`} />
                    </div>
                </div>
            </div>
            <div className={`h-screen w-screen flex-col flex justify-between bg-white fixed top-0 left-0 z-40 ${isShowMobileNavOptions ? 'full-clip' : 'circle-clip'} transition-clip-path duration-500`}>
                <div className='flex flex-row justify-between p-5 border-b border-bordercolor'>
                    <img src='/ic-logo.svg' className={`${isTipTop ? 'md:w-[120px]' : 'md:w-[60px]'} transition-all duration-300`} />
                    <button
                        onClick={() => {
                            setisShowMobileNavOptions(false);
                        }}
                    >
                        <img src='/ic-close.svg' alt='ic-close' />
                    </button>
                </div>
                <div className='flex flex-col space-y-8 items-center'>
                    <Link href='/'>
                        <a className={`uppercase font-karla text-lg hover:opacity-70 ${activePage == 'home' ? 'text-primary font-bold' : 'text-neutral font-normal'}`}>home</a>
                    </Link>
                    <Link href='/where-to-go/central west java'>
                        <a className={`uppercase font-karla text-lg hover:opacity-70 ${activePage == 'where-to-go' ? 'text-primary font-bold' : 'text-neutral font-normal'}`}>Where To Go</a>
                    </Link>
                    <a className={`uppercase font-karla text-lg hover:opacity-70 ${activePage == 'plan-your-trip' ? 'text-primary font-bold' : 'text-neutral font-normal'}`}>Plan Your Trip</a>
                    <a className={`uppercase font-karla text-lg hover:opacity-70 ${activePage == 'travel-tips' ? 'text-primary font-bold' : 'text-neutral font-normal'}`}>Travel Tips</a>
                    <Link href='/about'>
                        <a className={`uppercase font-karla text-lg hover:opacity-70 ${activePage == 'about' ? 'text-primary font-bold' : 'text-neutral font-normal'}`}>About</a>
                    </Link>
                </div>
                <div className='flex flex-row justify-between p-5 items-center'>
                    <h4 className='uppercase font-karla text-neutral text-lg'>Bahasa</h4>
                    <div className='flex flex-row space-x-1.5'>
                        <button className='p-2.5 rounded'>🇮🇩</button>
                        <button className='p-2.5 rounded'>🇬🇧</button>
                        <button className='p-2.5 rounded'>🇳🇱</button>
                        <button className='p-2.5 rounded'>🇸🇦</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
