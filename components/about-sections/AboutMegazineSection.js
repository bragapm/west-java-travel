import React from 'react'
import useSWR from 'swr'

export const AboutMegazineSection = ({ megazineSectionRef, megazineTopSectionRef }) => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/majalah_trip?fields=*,majalah_trip_files.directus_files_id`);

    if (error) return <div />
    if (!data) return <div />
    if (data.data == undefined) return <div />

    return (
        <div ref={megazineTopSectionRef} id='megazine-section' className='flex flex-col overflow-hidden relative'>
            <div className='md:px-20'>
                <div className='h-px w-full flex-none bg-bordercolor mt-3 mb-8' />
            </div>
            <h2 className='capitalize font-nothing-you-could-do text-blue text-3.5xl md:text-4.5xl mx-5 md:mx-20 md:mt-16'>smiling west java</h2>
            <h2 className='font-bold font-montserrat text-dark text-3xl md:text-5.5xl mx-5 md:mx-20'>Megazine Article & News</h2>
            <p className='text-neutral font-karla text-sm md:text-lg mx-5 md:mx-20 pt-3 md:pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien sapien semper laoreet duis facilisis</p>
            <div className='flex flex-col items-end absolute -right-6 md:-right-16 top-72 md:top-20 z-0'>
                <div className='flex flex-row mr-10 md:mr-20 items-end'>
                    <div className='bg-red rounded-full w-1 md:w-2.5 h-1 md:h-2.5 mr-5 md:mr-20' />
                    <div className='bg-green rounded-full w-2.5 md:w-[1.563rem] h-2.5 md:h-[1.563rem] mr-4 md:mr-8 mb-10 md:mb-[4.625rem]' />
                    <div className='bg-orange rounded-full w-4 md:w-10 h-4 md:h-10 mr-7 md:mr-14 mb-4' />
                    <div className='bg-blue rounded-full w-6 md:w-[3.75rem] h-6 md:h-[3.75rem] mb-10 md:mb-16' />
                </div>
                <div className='bg-yellow rounded-full w-24 md:w-[15.688rem] h-24 md:h-[15.688rem]' />
            </div>
            <div className='w-full h-[900px] md:h-[338px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] z-0 mt-[153px] md:mt-[131px] px-5 md:px-20' >
                <div className='flex flex-col md:flex-row -translate-y-28 md:-translate-y-20 space-y-16 md:space-y-0 md:justify-between md:space-x-10'>
                    <div className='flex flex-col md:flex-row md:items-end md:flex-1'>
                        <div className='w-[150px] md:w-[253px] overflow-hidden rounded-md shadow-lg md:flex-none'>
                            <img src='/img-sample-megazine.jpg' alt='img-megazone' className='object-cover w-full h-full' />
                        </div>
                        <div className='flex flex-col md:pl-8 md:pb-6'>
                            <h4 className='text-primary font-bold font-karla text-sm md:text-base mt-8'>{data.data[0].id}</h4>
                            <h3 className='text-dark font-montserrat font-bold mt-1.5 md:text-xl'>{data.data[0].judul}</h3>
                            <p className='text-neutral font-karla text-sm md:text-base mt-2.5 twoline-text'>{data.data[0].deskripsi}</p>
                            <a target="_blank" href={`https://panel.westjavatravel.com/assets/${data.data[0].majalah_trip_files[0].directus_files_id}`} className='uppercase text-white bg-[#011F56] flex-none mr-auto py-4 px-6 rounded-full font-karla font-bold text-sm mt-6'>Read the book</a>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row md:items-end md:flex-1'>
                        <div className='w-[150px] md:w-[253px] overflow-hidden rounded-md shadow-lg md:flex-none'>
                            <img src='/img-sample-megazine.jpg' alt='img-megazone' className='object-cover w-full h-full' />
                        </div>
                        <div className='flex flex-col md:pl-8 md:pb-6'>
                            <h4 className='text-primary font-bold font-karla text-sm md:text-base mt-8'>{data.data[1].id}</h4>
                            <h3 className='text-dark font-montserrat font-bold mt-1.5 md:text-xl'>{data.data[1].judul}</h3>
                            <p className='text-neutral font-karla text-sm md:text-base mt-2.5 twoline-text'>{data.data[1].deskripsi}</p>
                            <a target="_blank" href={`https://panel.westjavatravel.com/assets/${data.data[0].majalah_trip_files[0].directus_files_id}`} className='uppercase text-white bg-[#011F56] flex-none mr-auto py-4 px-6 rounded-full font-karla font-bold text-sm mt-6'>Read the book</a>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={megazineSectionRef} id='magazine-section'/>
        </div>
    );
}
