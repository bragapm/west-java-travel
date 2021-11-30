import React from 'react'

export const DestinationDetailGallerySection = () => {
    return (
        <section className='flex flex-col z-10 px-5 md:px-20 mb-20 md:mb-40 md:items-center'>
            <div className='w-full h-px bg-bordercolor mt-16 hidden md:block' />
            <h4 className='capitalize font-montserrat font-bold text-dark text-lg md:text-2.5xl z-10 md:mb-16 mt-16 mb-6'>Galeri Kawah Putih</h4>
            <div className='flex flex-col md:flex-col-reverse items-center md:items-end'>
                <div className='grid grid-cols-6 z-10 gap-2.5 md:gap-3.5 w-full'>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:col-span-1 md:row-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:row-span-2'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-6 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-2 md:row-span-2'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img src='/img-home-may.jpg' className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}
