import React from 'react'
import useSWR from 'swr'
import { GuideItems } from '../home-sections/home-guide-section/GuideItems';

export const TravelTipsGuideSection = () => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_guide`);

    if (error) return <div />
    if (!data) return <div />
    if (!data.data) return <div />
    if (data.data.length == 0) return <div />

    return (
        <section className='flex flex-col md:px-20'>
            <div className='w-full h-px bg-bordercolor' />
            <div className='flex flex-col my-8 md:my-10 mx-5 md:mx-0'>
                <h4 className='capitalize font-montserrat font-bold text-dark text-xl md:text-2xl z-10'>Travel Guide</h4>
                <div className='grid grid-cols-1 md:grid-cols-4 mt-8 md:mt-0 space-y-8 md:gap-x-5 z-10'>
                    {(data.data).map((guide, indx) => {
                        return <GuideItems key={indx} guide={guide} />
                    })}
                </div>
            </div>
        </section>
    )
}
