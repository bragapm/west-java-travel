import React from 'react';
import { HomeGallerySection } from './HomeGallerySection';


export const HomeAboutSection = () => {
    return (
        <section className='flex flex-col mt-9 relative'>
            <div className='flex flex-row items-start px-40'>
                <div className='w-[1.875rem] h-0.5 bg-primary mr-2.5 mt-2.5' />
                <div className='flex flex-col'>
                    <p className='text-primary font-karla font-bold'>ABOUT US</p>
                    <h1 className='text-dark font-montserrat font-light text-5.5xl'>Kenapa Berlibur Di</h1>
                    <h1 className='text-dark font-montserrat font-bold italic text-7.5xl -translate-y-4'>Jawa Barat</h1>
                    <h1 className='text-neutral font-karla max-w-[50rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien sapien semper laoreet duis facilisis nisl risus vel. Velit nisl tincidunt dictum urna molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien sapien semper laoreet duis facilisis nisl risus vel. Velit nisl tincidunt dictum urna molestie.</h1>
                </div>
            </div>
            <HomeGallerySection />
            <div className='flex flex-col items-end absolute -right-16 top-40 z-0'>
                <div className='flex flex-row mr-20 items-end'>
                <div className='bg-red rounded-full w-2.5 h-2.5 mr-20'/>
                <div className='bg-green rounded-full w-[1.563rem] h-[1.563rem] mr-8 mb-[4.625rem]'/>
                <div className='bg-orange rounded-full w-10 h-10 mr-14 mb-4'/>
                <div className='bg-blue rounded-full w-[3.75rem] h-[3.75rem] mb-16'/>
                </div>
                <div className='bg-yellow rounded-full w-[15.688rem] h-[15.688rem]'/>
            </div>
        </section>
    )
}
