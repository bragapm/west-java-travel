import React from 'react'
import MemoIcInstagram from '../CustomIcons/IcInstagram'

export const HomeInspirationSection = () => {
    return (
        <section className='flex flex-col z-10 px-5 md:px-20 mb-10'>
            <h4 className='capitalize font-montserrat font-bold text-dark text-lg md:text-2.5xl z-10'>Inspirasi Perjalanan</h4>
            <div className='w-full h-px bg-bordercolor my-6 md:my-7' />
            <div className='flex flex-col md:flex-col-reverse items-center md:items-end md:-translate-y-28'>
                <div className='grid grid-cols-6 z-10 gap-2.5 md:gap-3.5 w-full'>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:col-span-1 md:row-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:row-span-2'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-6 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-2 md:row-span-2'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='img-home-may.jpg' className='w-full h-full object-cover' />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </div>
                </div>
                <button className='flex flex-row uppercase gap-x-2.5 font-karla text-dark font-bold text-sm md:text-lg py-4 px-6 items-center border border-bordercolor rounded-full max-w-[150px] md:max-w-[180px] mt-6 md:mt-0 z-20 md:mb-16 bg-white'>
                    <img src='img-instagram.png' alt='ic-instagram' className='w-[14px] md:w-[20px] h-[14px] md:h-[20px]' />
                follow us
            </button>
            </div>
        </section>
    )
}
