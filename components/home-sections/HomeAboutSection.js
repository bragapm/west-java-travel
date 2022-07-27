import React from 'react';
import { HomeGallerySection } from './HomeGallerySection';
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle';


export const HomeAboutSection = () => {
    return (
        <section className='flex flex-col mt-9 relative pt-10 md:pt-0'>
            <div className='flex flex-col items-end absolute -right-6 md:-right-16 top-80 md:top-40 z-0'>
                <div className='flex flex-row mr-10 md:mr-20 items-end'>
                    <div className='bg-red rounded-full w-1 md:w-2.5 h-1 md:h-2.5 mr-5 md:mr-20' />
                    <div className='bg-green rounded-full w-2.5 md:w-[1.563rem] h-2.5 md:h-[1.563rem] mr-4 md:mr-8 mb-10 md:mb-[4.625rem]' />
                    <div className='bg-orange rounded-full w-4 md:w-10 h-4 md:h-10 mr-7 md:mr-14 mb-4' />
                    <div className='bg-blue rounded-full w-6 md:w-[3.75rem] h-6 md:h-[3.75rem] mb-10 md:mb-16' />
                </div>
                <div className='bg-yellow rounded-full w-24 md:w-[15.688rem] h-24 md:h-[15.688rem]' />
            </div>
            <div className='flex flex-col z-10 px-5 md:px-20'>
                <HomeSectionTitle title='ABOUT US' />
                <h1 className='text-dark font-montserrat font-light text-3xl md:text-5.5xl mt-5 md:ml-9'>Kenapa Berlibur Di</h1>
                <h1 className='text-dark font-montserrat font-bold italic text-5.5xl md:text-7.5xl md:ml-9'>Jawa Barat</h1>
                <h1 className='text-neutral font-karla max-w-[50rem] mt-5 text-sm md:text-base md:ml-9 md:leading-8'>Jawa Barat mungkin bukan tempat yang pertama kali terpikirkan saat berkunjung ke Indonesia. Namun nyatanya, tempat ini merupakan hidden gem di Indonesia. Berbatasan dengan Laut Jawa di Utara dan Samudera Hindia di Selatan, Jawa Barat memiliki pesona tersendiri. Keanekaragaman budaya, keindahan alam dan keramahan masyarakatnya akan memberikan Anda pengalaman yang berbeda dan menakjubkan.</h1>
            </div>
            <HomeGallerySection />

        </section>
    )
}
