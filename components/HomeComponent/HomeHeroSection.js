import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { animate, stagger } from 'motion';

export const HomeHeroSection = () => {
    const heroTitle = useRef();
    const heroDesc = useRef();
    const heroCarousel = useRef();
    const heroImgCarousel = useRef();

    const animationProperies = {
        duration: 7,
        delay: 1,
        repeat: Infinity,
        easing: 'linear'
    };


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

        const imgHeroRef1 = document.getElementsByClassName('hero-img-1');
        const imgHeroRef2 = document.getElementsByClassName('hero-img-2');
        const imgHeroRef3 = document.getElementsByClassName('hero-img-3');
        const imgHeroRef4 = document.getElementsByClassName('hero-img-4');

        if (imgHeroRef1) {
            animate(
                imgHeroRef1,
                { opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                animationProperies
            );
        }
        if (imgHeroRef2) {
            animate(
                imgHeroRef2,
                { opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                animationProperies
            );
        }
        if (imgHeroRef3) {
            animate(
                imgHeroRef3,
                { opacity: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1] },
                animationProperies
            );
        }
        if (imgHeroRef4) {
            animate(
                imgHeroRef4,
                { opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1] },
                animationProperies
            );
        }

        const imgHeroCarouselRef1 = document.getElementsByClassName('hero-carousel-1');
        const imgHeroCarouselRef2 = document.getElementsByClassName('hero-carousel-2');
        const imgHeroCarouselRef3 = document.getElementsByClassName('hero-carousel-3');
        const imgHeroCarouselRef4 = document.getElementsByClassName('hero-carousel-4');

        if (imgHeroCarouselRef1) {
            animate(
                imgHeroCarouselRef1,
                {
                    scale: [1.2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    opacity: [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                    x: [-20, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                },
                animationProperies
            );
        }
        if (imgHeroCarouselRef2) {
            animate(
                imgHeroCarouselRef2,
                {
                    scale: [1, 1.2, 1.2, 1.2, 1, 1, 1, 1, 1, 1],
                    opacity: [1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
                    x: [0, -20, -20, -20, 0, 0, 0, 0, 0, 0],
                },
                animationProperies
            );
        }
        if (imgHeroCarouselRef3) {
            animate(
                imgHeroCarouselRef3,
                {
                    scale: [1, 1, 1, 1, 1.2, 1.2, 1.2, 1, 1, 1],
                    opacity: [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
                    x: [0, 0, 0, 0, -20, -20, -20, 0, 0, 0],
                },
                animationProperies
            );
        }

        if (imgHeroCarouselRef4) {
            animate(
                imgHeroCarouselRef4,
                {
                    scale: [1, 1, 1, 1, 1, 1, 1, 1.2, 1.2, 1.2],
                    x: [0, 0, 0, 0, 0, 0, 0, -20, -20, -20],
                },
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

        return;
    }, [heroTitle.current, heroDesc.current, heroCarousel.current]);


    return (
        <section className='h-[110vh] relative'>
            <div className='w-screen h-[110vh] relative'>
                <Image
                    src='/v1635751512/west-java-travel/img-hero-1_t7jpua.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-1 absolute'
                    quality={75}
                    priority={true}
                />
                <Image
                    src='/v1635751520/west-java-travel/img-hero-2_dk8hmk.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-2 absolute'
                    quality={75}
                    priority={true}
                />
                <Image
                    src='/v1635751523/west-java-travel/img-hero-3_rz0d8f.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-3 absolute'
                    quality={75}
                    priority={true}
                />
                <Image
                    src='/v1635751512/west-java-travel/img-hero-1_t7jpua.png'
                    alt='img-hero'
                    layout='fill'
                    objectFit='cover'
                    className='hero-img-4 absolute'
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
                                <h1 className='md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 1<br />MADASARI</h1>
                                <h1 className='md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 2<br />MADASARI</h1>
                                <h1 className='md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 3<br />MADASARI</h1>
                                <h1 className='md:text-7.7xl text-4.5xl font-bold font-montserrat text-gradient pt-1'>PANTAI 1<br />MADASARI</h1>
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
                        </div>
                    </div>
                </div>
                <div className='flex flex-col-reverse md:px-0 px-5 md:flex-row md:-translate-y-28 pr-5 md:pr-0 space-y-3 space-x-0 md:space-y-0 md:space-x-3'>
                    <button className='text-karla bg-white px-4 md:px-6 py-[1.125rem] rounded-full text-base md:text-lg font-bold text-dark mt-3 md:mt-0'>
                        DISCOVER MORE
                        </button>
                    <button className='text-karla bg-glassmorphic px-4 md:px-6 py-[1.125rem] rounded-full text-base md:text-lg font-bold text-white flex flex-row items-center justify-center'>
                        EXPLORE NOW
                            <img src='ic-cirlce-arrow.svg' className='ml-4' />
                    </button>
                </div>
            </div>
        </section>
    );
}
