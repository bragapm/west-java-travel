import React from 'react'
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle'

export const HomeAttractionSection = () => {
    return (
        <section className='mb-10 relative'>
            <div className='w-full h-[315px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] absolute bottom-0 left-0 z-0 hidden md:block' />
            <div className='flex flex-col z-10 px-5 md:px-20'>
                <HomeSectionTitle title='attraction' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[700px] md:leading-tight z-10 capitalize'>Hal-Hal terbaik untuk dilakukan di jawa barat</h3>
            </div>
            <div className='flex flex-col z-10'>
                <div className='flex flex-row overflow-hidden mt-10 mb-5 md:mb-8'>
                    <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group ml-5 md:ml-28'>
                        <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                            <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>adventure</h4>
                        </div>
                        <img src='img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                    </div>
                    <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group ml-2 md:ml-4'>
                        <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                            <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Coast & Beach</h4>
                        </div>
                        <img src='img-home-beach.jpg' alt='img-beach' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                    </div>
                    <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group ml-2 md:ml-4'>
                        <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                            <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>nature</h4>
                        </div>
                        <img src='img-home-eastern.jpg' alt='img-nature' className='w-full h-full object-cover group-hover:scale-125 transition duration-500' />
                    </div>
                    <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group ml-2 md:ml-4'>
                        <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                            <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Urban Life</h4>
                        </div>
                        <img src='img-home-urban.jpg' alt='img-urban' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                    </div>
                    <div className='flex-none h-[214px] w-[142px] md:w-[298px] md:h-[450px] rounded-md md:rounded-2lg overflow-hidden relative group ml-2 md:ml-4'>
                        <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end p-4 md:pb-10 z-10 items-center'>
                            <h4 className='uppercase text-yellow text-shadow text-xs md:text-1.5xl font-montserrat font-bold'>Shopping</h4>
                        </div>
                        <img src='img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                    </div>
                </div>
                <div className='flex flex-row justify-end mx-5 md:mx-20 space-x-2.5 md:space-x-4 z-10'>
                    <button className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'>
                        <img src='ic-arrow-rounded.svg' />
                    </button>
                    <button className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'>
                        <img src='ic-arrow-rounded.svg' className='transform rotate-180' />
                    </button>
                </div>
            </div>
        </section>
    )
}
