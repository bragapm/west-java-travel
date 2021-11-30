import React from 'react'

export const DestinationDetailHeadSection = () => {
    return (
        <section>
            <img src='/img-about-thumbnail.jpg' className='h-[306px] md:h-[500px] w-full object-cover' />
            <div className='flex flex-col items-start md:items-center px-5 md:px-80'>
                <h2 className='capitalize text-dark font-bold font-montserrat mt-6 text-2xl md:text-5xl text-center'>Kawah Putih Ciwidey</h2>
                <p className='mt-4 text-sm md:text-1.5xl text-neutral font-karla md:text-center'>White Crater, The Magical Splendor and Hypnotizing Ambience of a Crater</p>
                <div className='w-full h-px bg-bordercolor mt-8 hidden md:block' />
                <div className='flex flex-col md:flex-row md:justify-between mt-6 md:mt-8 w-full'>
                    <div className='flex flex-row space-x-2 flex-none'>
                        <img src='/ic-star.svg' alt='ic-star' />
                        <p className='font-karla text-neutral text-sm md:text-lg flex flex-row flex-none items-center'><span className='font-bold mr-1'>4.0</span> (38 Ulasan)</p>
                    </div>
                    <div className='flex flex-row gap-2.5 mt-6 md:mt-0'>
                        <img src='/ic-facebook.svg' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-twitter.svg' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-instagram.svg' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-whatsapp.svg' className='hover:-translate-y-1 transition-all' />
                        <img src='/ic-link.svg' className='hover:-translate-y-1 transition-all' />
                    </div>
                </div>
                <div className='w-full h-px bg-bordercolor mt-8 md:hidden' />
            </div>
        </section>
    )
}
