import React from 'react';
import { HomeGallerySection } from './HomeGallerySection';
import { HomeSectionTitle } from '../CustomComponent/TextComponent/HomeSectionTitle';


export const HomeAboutSection = () => {
    return (
        <section className='flex flex-col mt-9 relative'>
            <div className='flex flex-col items-end absolute -right-6 md:-right-16 top-80 md:top-40 z-0'>
                <div className='flex flex-row mr-10 md:mr-20 items-end'>
                    <div className='bg-red rounded-full w-1 md:w-2.5 h-1 md:h-2.5 mr-5 md:mr-20' />
                    <div className='bg-green rounded-full w-2.5 md:w-[1.563rem] h-2.5 md:h-[1.563rem] mr-4 md:mr-8 mb-10 md:mb-[4.625rem]' />
                    <div className='bg-orange rounded-full w-4 md:w-10 h-4 md:h-10 mr-7 md:mr-14 mb-4' />
                    <div className='bg-blue rounded-full w-6 md:w-[3.75rem] h-6 md:h-[3.75rem] mb-10 md:mb-16' />
                </div>
                <div className='bg-yellow rounded-full w-24 md:w-[15.688rem] h-24 md:h-[15.688rem]' />
            </div>
            <div className='flex flex-col z-10'>
                <HomeSectionTitle title='ABOUT US' />
                <p className='text-primary font-karla font-bold'></p>
                <h1 className='text-dark font-montserrat font-light text-3xl md:text-5.5xl mt-5'>Kenapa Berlibur Di</h1>
                <h1 className='text-dark font-montserrat font-bold italic text-5.5xl md:text-7.5xl md:-translate-y-4'>Jawa Barat</h1>
                <h1 className='text-neutral font-karla max-w-[50rem] mt-5 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien sapien semper laoreet duis facilisis nisl risus vel. Velit nisl tincidunt dictum urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien sapien semper laoreet duis facilisis nisl risus vel. Velit nisl tincidunt dictum urna molestie.</h1>
                <HomeGallerySection />
            </div>
        </section>
    )
}
