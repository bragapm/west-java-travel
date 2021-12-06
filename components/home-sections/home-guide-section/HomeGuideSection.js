import React from 'react'
import useSWR from 'swr'
import { HomeSectionTitle } from '../../custom-component/TextComponent/HomeSectionTitle'
import MemoIcArrow from '../../custom-icons/IcArrow'
import { GuideItems } from './GuideItems'


export const HomeGuideSection = () => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_guide`);

    if (error) return <div />
    if (!data) return <div>Loading...</div>
    if (!data.data) return <div />
    if (data.data.length == 0) return <div />

    return (
        <section className='px-5 md:px-20 pb-20 relative'>
            <div className='flex flex-col z-10'>
                <HomeSectionTitle title='Travel Guide' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[700px] md:leading-tight z-10 capitalize max-w-[250px]'>Tips Wisata Idaman di Jawa Barat</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8 space-y-8 md:px-9 md:gap-x-5 z-10'>
                {(data.data).map((guide, indx) => {
                    return <GuideItems key={indx} guide={guide} />
                })}
            </div>
            <div className='flex flex-col items-end absolute -right-6 md:-right-16 top-10 md:top-0 z-0'>
                <div className='flex flex-row mr-10 md:mr-20 items-end'>
                    <div className='bg-red rounded-full w-1 md:w-2.5 h-1 md:h-2.5 mr-5 md:mr-20' />
                    <div className='bg-green rounded-full w-2.5 md:w-[1.563rem] h-2.5 md:h-[1.563rem] mr-4 md:mr-8 mb-10 md:mb-[4.625rem]' />
                    <div className='bg-orange rounded-full w-4 md:w-10 h-4 md:h-10 mr-7 md:mr-14 mb-4' />
                    <div className='bg-blue rounded-full w-6 md:w-[3.75rem] h-6 md:h-[3.75rem] mb-10 md:mb-16' />
                </div>
                <div className='bg-yellow rounded-full w-24 md:w-[15.688rem] h-24 md:h-[15.688rem]' />
            </div>
        </section>
    )
}
