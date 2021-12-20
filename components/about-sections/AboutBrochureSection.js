import React from 'react'
import useSWR from 'swr'

export const AboutBrochureSection = ({ brochureSectionRef }) => {
    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/brochure_trip?fields=*,brochure_trip_files.directus_files_id`);

    if (error) return <div />
    if (!data) return <div />
    if (data.data == null) return <div />
    if (data.data.length == 0) return <div />

    return (
        <div ref={brochureSectionRef} id='brochure-section' className='flex flex-col px-5 md:px-20 mb-20 md:mb-32 md:mt-10'>
            <h3 className='text-dark font-montserrat font-bold text-lg md:text-2.5xl'>Brochure Information</h3>
            <div className='w-full h-px bg-bordercolor mt-6 mb-8' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-12 md:gap-x-12'>
                {data.data.map((brochure, indx) => {
                    return <div key={indx} className='flex flex-row md:items-center'>
                        <div className='w-[60px] md:w-[140px] h-[80px] md:h-[180px] overflow-hidden rounded-md mr-5 md:mr-12 flex-none'>
                            <img src='/img-sample-brochure.jpg' alt='img-brochure' className='object-cover object-top' />
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='capitalize text-dark font-montserrat font-bold text-sm md:text-xl twoline-text'>{brochure.judul}</h5>
                            <p className='mt-2.5 text-xs md:text-base text-neutral font-karla threeline-text md:twoline-text'>{brochure.deskripsi}</p>
                            <a target="_blank" href={`https://panel.westjavatravel.com/assets/${brochure.brochure_trip_files[0].directus_files_id}`} className='flex flex-row mt-2.5 items-center'>
                                <img src='/ic-download.svg' alt='ic-download' className='mr-2 md:w-4 md:h-4' />
                                <span className='capitalize text-xs md:text-base font-karla font-bold text-primary'>download Brochure</span>
                            </a>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
}
