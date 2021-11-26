import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, stagger } from 'motion';
import MemoIcCirlceArrow from '../custom-icons/IcCirlceArrow';

const animationProperies = {
    duration: 7,
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
            <div className='w-screen h-[110vh] relative'>
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
            <div className='w-screen h-[10vh] px-20 absolute bottom-0 hidden md:block'>
                <div className='bg-white w-full h-full rounded-t-3xl' />
            </div>
            <div className='w-screen h-screen absolute top-0 flex flex-col justify-center md:pl-20 pt-28'>
                <div className='flex flex-col md:flex-row items-start md:items-center'>
                    <div className='flex flex-col md:pb-24 md:pr-0 pr-10 px-5 md:px-0'>
                        <div className='md:max-h-[12rem] max-h-[6rem] overflow-hidden'>
                            <div ref={heroTitle} className='flex flex-col'>
                                <h1 className='hero-title-1 md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 1<br />MADASARI</h1>
                                <h1 className='hero-title-2 md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 2<br />MADASARI</h1>
                                <h1 className='hero-title-3 md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 3<br />MADASARI</h1>
                                <h1 className='hero-title-4 md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 1<br />MADASARI</h1>
                            </div>
                        </div>
                        <div className='md:max-h-14 max-h-[4.5rem] overflow-hidden mt-3 md:mt-6'>
                            <div ref={heroDesc} className='flex flex-col'>
                                <h1 className='md:text-lg text-white max-w-[36.5rem] font-karla'>Pantai berpasir hitam alami dengan batu indah, yang memiliki aktivitas perkemahan & restoran lobster segar.</h1>
                                <h1 className='md:text-lg text-white max-w-[36.5rem] font-karla'>Pantai berpasir hitam alami dengan batu indah, yang memiliki aktivitas perkemahan & restoran lobster segar.</h1>
                                <h1 className='md:text-lg text-white max-w-[36.5rem] font-karla'>Pantai berpasir hitam alami dengan batu indah, yang memiliki aktivitas perkemahan & restoran lobster segar.</h1>
                                <h1 className='md:text-lg text-white max-w-[36.5rem] font-karla'>Pantai berpasir hitam alami dengan batu indah, yang memiliki aktivitas perkemahan & restoran lobster segar.</h1>
                            </div>
                        </div>
                    </div>
                    <div className='py-8 md:py-16 overflow-hidden w-full'>
                        <div ref={heroCarousel} className='flex md:flex-row ml-16 md:ml-40'>
                            <div ref={heroImgCarousel} className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-1 pr-2 md:pr-0'>
                                <img src='img-hero-carousel-1.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-2 pr-2 md:pr-0'>
                                <img src='img-hero-carousel-2.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-3 pr-2 md:pr-0'>
                                <img src='img-hero-carousel-3.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-4 pr-2 md:pr-0'>
                                <img src='img-hero-carousel-1.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] pr-2 md:pr-0'>
                                <img src='img-hero-carousel-2.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] pr-2 md:pr-0'>
                                <img src='img-hero-carousel-3.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                            <div className='min-w-[8rem] md:min-w-[16.875rem] hero-carousel-1 pr-2 md:pr-0'>
                                <img src='img-hero-carousel-1.png' alt='img-carousel' className='rounded-2lg' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:px-0 px-5 md:flex-row md:-translate-y-28 pr-5 md:pr-0 space-y-3 space-x-0 md:space-y-0 md:space-x-3'>
                    <button className='text-karla bg-white mb-4 md:mb-0 px-4 md:px-6 py-[1.125rem] rounded-full text-base md:text-lg font-bold text-dark mt-3 md:mt-0'>
                        DISCOVER MORE
                    </button>
                    <button className='text-karla bg-glassmorphic px-4 md:px-6 py-[1.125rem] rounded-full text-base md:text-lg font-bold text-white flex flex-row items-center justify-center'>
                        EXPLORE NOW
                        <MemoIcCirlceArrow className='text-white ml-4' />
                    </button>
                </div>
            </div>
        </section>
    );
}
