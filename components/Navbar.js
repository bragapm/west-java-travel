import React, { useEffect, useRef, useState } from 'react'
import MemoIcArrowIos from './CustomIcons/IcArrowIos';
import MemoIcMenu from './CustomIcons/IcMenu';
import Link from 'next/link';


export const Navbar = ({ activePage }) => {
    const tipTop = useRef(null);
    const [isTipTop, setisTipTop] = useState(true);

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
        <div className='flex flex-col'>
            <div ref={tipTop} />
            <div className={`flex flex-row justify-between fixed top-0 left-0 right-0 z-40 p-5 md:px-20 ${activePage != null ? `bg-white ${isTipTop ? 'shadow-none' : 'shadow-lg'}` : `${isTipTop ? 'bg-transparent md:bg-gradient-to-b md:from-[#00000099] md:to-transparent' : 'bg-white shadow-lg'}`}  transition-all duration-300 items-center`}>
                <img src='/ic-logo.svg' className={`${isTipTop ? 'md:w-[120px]' : 'md:w-[60px]'} transition-all duration-300`} />
                <MemoIcMenu className={`${activePage != null ? 'text-primary' : `${isTipTop ? 'text-white' : 'text-primary'}`} transition-all duration-300 md:hidden`} />
                <div className='md:flex flex-row space-x-[3.125rem] hidden'>
                    <Link href='/'>
                        <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'home' ? 'text-primary font-bold' : `${activePage != null ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>home</a>
                    </Link>
                    <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'home' ? 'text-primary font-bold' : `${activePage != null ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>Where To Go</a>
                    <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'home' ? 'text-primary font-bold' : `${activePage != null ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>Plan Your Trip</a>
                    <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'home' ? 'text-primary font-bold' : `${activePage != null ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>Plan Your Trip</a>
                    <Link href='/about'>
                        <a className={`uppercase font-karla hover:opacity-70 ${activePage == 'about' ? 'text-primary font-bold' : `${activePage != null ? 'text-neutral' : `${isTipTop ? 'text-white text-shadow' : 'text-neutral'}`}`}`}>About</a>
                    </Link>
                    <div className={`uppercase font-karla hover:opacity-70 ${activePage != null ? 'text-neutral border-neutral' : `${isTipTop ? 'text-white text-shadow border-white' : 'text-neutral border-neutral'}`} flex flex-row items-center border-l `}>
                        <span className='mr-2 ml-4'>🇮🇩</span>
                        ID
                        <MemoIcArrowIos className={`ml-3 ${activePage != null ? 'text-neutral' : `${isTipTop ? 'text-white' : 'text-neutral'}`}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
