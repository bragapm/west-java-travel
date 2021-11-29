import React from 'react'

export const DetailTravelTipsHeadSection = () => {
    return (
        <section>
            <img src='/img-about-thumbnail.jpg' className='h-[306px] md:h-[500px] w-full object-cover' />
            <div className='flex flex-col items-start md:items-center px-5 md:px-80'>
                <div className='mt-10 flex flex-row items-center justify-center'>
                    <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs md:text-sm text-neutral'>topik 1</p>
                    <p className='font-karla text-neutral text-xs md:text-sm ml-4'>07 Oktober 2021</p>
                </div>
                <h2 className='capitalize text-dark font-bold font-montserrat mt-6 text-2xl md:text-5xl text-center'>Judul artikel Smiling west java happiness all around</h2>
                <div className='flex flex-row gap-2.5 mt-6 md:mt-8'>
                    <img src='/ic-facebook.svg' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-twitter.svg' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-instagram.svg' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-whatsapp.svg' className='hover:-translate-y-1 transition-all' />
                    <img src='/ic-link.svg' className='hover:-translate-y-1 transition-all' />
                </div>
                <div className='w-full h-px bg-bordercolor mt-10 md:hidden' />
            </div>
        </section>
    )
}
