import React, { useState } from 'react'
import Link from 'next/link';
import Pagination from '../custom-component/Pagination';

export const TravelTipsTravelSearchSection = () => {
    const [activePage, setactivePage] = useState(1);

    return (
        <section className='mb-16 md:px-20'>
            <div className='w-full h-px bg-bordercolor' />
            <h3 className='text-dark font-bold font-montserrat text-xl md:text-1.5xl mt-8 mx-5 md:hidden'>Travel Tips Pilihan</h3>
            <div className='flex flex-col md:flex-row-reverse'>
                <div className='flex flex-col md:w-4/12'>
                    <h4 className='text-dark font-bold font-montserrat text-lg hidden md:block ml-10 mt-10'>Cari Travel Tips</h4>
                    <div className='px-5 md:pl-10 md:pr-0'>
                        <div className='flex-row flex bg-[#F2F4F5] rounded-md p-4 mt-5 w-full'>
                            <input
                                placeholder='Cari travel tips disini...'
                                onChange={(e) => {
                                }}
                                onKeyDown={({ key }) => {
                                    if (key === "Enter") {

                                        // return router.push(`/search/${searchCategory.label.toLowerCase()}/${searchValue}`)
                                    }
                                    return null;
                                }}
                                className="flex-1 text-sm form-input block bg-transparent text-black font-karla focus:outline-none focus:ring-none placeholder-neutral placeholder-opacity-50"
                            />
                            <img src='/ic-search.svg' alt='ic-search' className='ml-3' />
                        </div>
                    </div>
                    <h4 className='text-dark font-bold font-montserrat text-lg hidden md:block ml-10 mt-8'>Rekomendasi Tips</h4>
                    <div className='flex flex-row mt-5 overflow-scroll md:overflow-hidden md:flex-wrap px-5 md:pl-10 md:pr-0 gap-2 md:gap-y-3'>
                        <button className='uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none'>topik satu</button>
                        <button className='uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none'>topik dua</button>
                        <button className='uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none'>topik tiga</button>
                        <button className='uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none'>topik empat</button>
                        <button className='uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none'>topik lima</button>
                    </div>
                </div>
                <div className='flex flex-col pt-10 px-5 md:pr-10 md:pl-0 gap-8 md:gap-14 md:w-8/12 md:items-start md:border-r md:border-bordercolor'>
                    <h3 className='text-dark font-bold font-montserrat text-xl md:text-1.5xl hidden md:block'>Travel Tips Pilihan</h3>
                    {dummyTravelTips.map((recommendation, indx) => {
                        return <Link href='/travel-tips/idTravelTips'>
                            <a
                                key={indx}
                                className='flex flex-row'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold font-montserrat text-dark text-sm md:text-xl mb-2.5 twoline-text '>{recommendation.title}</h4>
                                    <p className='font-karla text-neutral text-xs md:text-base mb-2.5 twoline-text'>{recommendation.description}</p>
                                    <div className='flex flex-row items-center'>
                                        <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs text-neutral'>topik 1</p>
                                        <p className='font-karla text-neutral text-xs ml-4'>07 Oktober 2021</p>
                                    </div>
                                </div>
                                <img src='/img-about-thumbnail.jpg' className='rounded-md h-[80px] md:h-[140px] w-[80px] md:w-[140px] object-cover ml-8 md:ml-20' />

                            </a>
                            </Link>
                    })}
                    <div className='mt-2 md:mt-4' />
                    <Pagination currentPage={activePage} total={50} pageSize={10} getCurrent={setactivePage} />
                </div>
            </div>
        </section>
    )
}

const dummyTravelTips = [
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
];