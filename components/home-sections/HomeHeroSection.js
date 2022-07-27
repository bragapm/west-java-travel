import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, stagger } from 'motion';
import MemoIcCirlceArrow from '../custom-icons/IcCirlceArrow';

const animationProperies = {
    duration: 10,
    delay: 1,
    repeat: Infinity,
    easing: 'linear'
};

export const HomeHeroSection = () => {
    const heroTitle = useRef();
    const heroDesc = useRef();
    const heroCarousel = useRef();
    const heroImgCarousel = useRef();

    useEffect(() => {
        if (heroTitle.current) {
            const itemHeight = heroTitle.current.clientHeight / 4;
            animate(
                heroTitle.current,
                { y: [0, -itemHeight, null, null, -(itemHeight * 2), null, null, -(itemHeight * 3), null, null] },
                animationProperies
            );
        }

        if (heroDesc.current) {
            const itemHeight = heroDesc.current.clientHeight / 4;
            animate(
                heroDesc.current,
                { y: [0, -itemHeight, null, null, -(itemHeight * 2), null, null, -(itemHeight * 3), null, null] },
                animationProperies
            );
        }

        if (heroCarousel.current) {
            const itemWidth = heroImgCarousel.current.clientWidth;

            animate(
                heroCarousel.current,
                { x: [0, -itemWidth, null, null, -(itemWidth * 2), null, null, -(itemWidth * 3), null, null] },
                animationProperies
            );
        }

        animate(
            '.hero-img-1',
            { opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
            animationProperies
        );

        animate(
            '.hero-img-2',
            { opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
            animationProperies
        );

        animate(
            '.hero-img-3',
            { opacity: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1] },
            animationProperies
        );

        animate(
            '.hero-img-4',
            { opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1] },
            animationProperies
        );

        animate(
            '.hero-carousel-1',
            {
                scale: [1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                opacity: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                x: [-20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            animationProperies
        );

        animate(
            '.hero-carousel-2',
            {
                scale: [1, 1.2, 1.2, 1.2, 1, 1, 1, 1, 1, 1],
                opacity: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
                x: [0, -20, -20, -20, 0, 0, 0, 0, 0, 0],
            },
            animationProperies
        );

        animate(
            '.hero-carousel-3',
            {
                scale: [1, 1, 1, 1, 1.2, 1.2, 1.2, 1, 1, 1],
                opacity: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                x: [0, 0, 0, 0, -20, -20, -20, 0, 0, 0],
            },
            animationProperies
        );

        animate(
            '.hero-carousel-4',
            {
                scale: [1, 1, 1, 1, 1, 1, 1, 1.2, 1.2, 1.2],
                x: [0, 0, 0, 0, 0, 0, 0, -20, -20, -20],
            },
            animationProperies
        );

        animate(
            '.hero-title-1',
            {
                opacity: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
            },
            animationProperies
        );

        animate(
            '.hero-title-2',
            {
                opacity: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
            },
            animationProperies
        );

        animate(
            '.hero-title-3',
            {
                opacity: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            },
            animationProperies
        );

        return;
    }, []);


    return (
        <section className='h-[110vh] relative'>
            <div className='w-screen h-[110vh] relative custom-overlay'>
                <Image
                    src='/v1635751512/west-java-travel/img-hero-1_t7jpua.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-1'
                    quality={75}
                    priority={true}
                />
                <Image
                    src='/v1635751520/west-java-travel/img-hero-2_dk8hmk.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-2'
                    quality={75}
                    priority={true}
                />
                <Image
                    src='/v1635751523/west-java-travel/img-hero-3_rz0d8f.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-3'
                    quality={75}
                    priority={true}
                />
                <Image
                    src='/v1635751512/west-java-travel/img-hero-1_t7jpua.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-4'
                    quality={75}
                    priority={true}
                />
            </div>
            <div className='w-screen h-[5vh] px-18 absolute bottom-0 hidden md:block'>
                <div className='bg-white w-full h-full rounded-t-[2rem]' />
            </div>
            <div className='w-screen h-screen absolute top-0 flex flex-col justify-center xl:pl-20 pt-28'>
                <div className='flex flex-col xl:flex-row items-center'>
                    <div className='flex flex-col xl:pb-4 xl:pr-0 pr-5 px-5 md:px-0 xl:mt-[-5em]'>
                        <div className='xl:max-h-[9rem] lg:max-h-[6rem] max-h-[5rem] overflow-hidden'>
                            <div ref={heroTitle} className='flex flex-col'>
                                <h1 className='hero-title-1 xl:text-7xl lg:text-5xl text-4xl text-center xl:text-left md:text-center sm:text-center font-bold font-montserrat text-gradient pt-1 uppercase twoline-text whitespace-nowrap'>Gunung<br />Padang Site</h1>
                                <h1 className='hero-title-2 xl:text-7xl lg:text-5xl text-4xl text-center xl:text-left md:text-center sm:text-center font-bold font-montserrat text-gradient pt-1 uppercase twoline-text whitespace-nowrap'>Tangkuban<br />Perahu</h1>
                                <h1 className='hero-title-3 xl:text-7xl lg:text-5xl text-4xl text-center xl:text-left md:text-center sm:text-center font-bold font-montserrat text-gradient pt-1 uppercase twoline-text whitespace-nowrap'>Green Canyon<br />Pangandaran</h1>
                                <h1 className='hero-title-1 xl:text-7xl lg:text-5xl text-4xl text-center xl:text-left md:text-center sm:text-center font-bold font-montserrat text-gradient pt-1 uppercase twoline-text whitespace-nowrap'>Gunung<br />Padang Site</h1>
                            </div>
                        </div>
                        <div className='md:max-h-14 max-h-[4.5rem] overflow-hidden mt-3 md:mt-6'>
                            <div ref={heroDesc} className='flex flex-col'>
                                <h1 className='md:text-lg xl:text-left text-center md:text-center sm:text-center text-white max-w-[36.5rem] font-karla twoline-text'>The Gunung Padang site is a prehistoric megalithic relic in the form of a staircase located on the border of Gunung Padang and Panggulaan Hamlets, Cianjur Regency, West Java.</h1>
                                <h1 className='md:text-lg xl:text-left text-center md:text-center sm:text-center text-white max-w-[36.5rem] font-karla twoline-text'>Sitting elegantly while enjoying the panorama of northern Bandung, from the distance Tangkuban Parahu Mountain standing elegantly. </h1>
                                <h1 className='md:text-lg xl:text-left text-center md:text-center sm:text-center text-white max-w-[36.5rem] font-karla twoline-text'>Green Canyon is located at the Kertayasa Village, in the Ciamis Regency, West Java Province, about 31 km or 45 minutes drive from Pangandaran Beach.</h1>
                                <h1 className='md:text-lg xl:text-left text-center md:text-center sm:text-center text-white max-w-[36.5rem] font-karla twoline-text'>The Gunung Padang site is a prehistoric megalithic relic in the form of a staircase located on the border of Gunung Padang and Panggulaan Hamlets, Cianjur Regency, West Java.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='py-16 lg:py-20 xl:py-24 overflow-hidden w-full'>
                        <div ref={heroCarousel} className='flex md:flex-row ml-16 md:ml-40'>
                            <div ref={heroImgCarousel} className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-1 p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-1.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-2 p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-2.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-3 p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-3.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-4 p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-1.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-2.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-3.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-1 p-1 md:p-2 rounded-xl'>
                                <img src='/img-hero-carousel-1.jpg' alt='img-carousel' className='w-[100%] rounded-2lg md:rounded-2xl shadow-2xl p-1 md:p-2 bg-white' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center xl:items-start flex-col-reverse md:px-0 px-5 xl:flex-row xl:-translate-y-28 pr-5 xl:pr-0 space-y-3 space-x-0 xl:space-y-0 xl:space-x-3 xl:mt-[-4em]'>
                    <a href='#map-section' className='text-karla bg-white px-4 md:px-6 py-[1.125rem] mt-6 xl:mt-0 rounded-full text-base md:text-lg font-bold text-dark flex flex-row items-center justify-center w-[250px]'>
                        DISCOVER MORE
                    </a>
                    <a href='#destination-section' className='text-karla bg-glassmorphic px-4 md:px-6 py-[1.125rem] mt-6 xl:mt-0 rounded-full text-base md:text-lg font-bold text-white flex flex-row items-center justify-center w-[250px]'>
                        EXPLORE NOW
                        <MemoIcCirlceArrow className='text-white ml-4' />
                    </a>
                </div>
            </div>
        </section>
    );
}
