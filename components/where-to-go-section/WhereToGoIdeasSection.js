import React from 'react'
import useSWR from 'swr'
import { GuideItems } from '../home-sections/home-guide-section/GuideItems';

export const WhereToGoIdeasSection = ({ tripIdeasSectionRef }) => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_guide`);

    if (error) return <div />
    if (!data) return <div />
    if (!data.data) return <div />
    if (data.data.length == 0) return <div />

    return (
        <section className='px-5 md:px-20 pb-20' ref={tripIdeasSectionRef} id='trip-ideas-section'>
            <h4 className='capitalize font-montserrat font-bold text-dark text-lg md:text-2.5xl z-10'>Trip Ideas</h4>
            <div className='w-full h-px bg-bordercolor mt-6 md:mt-7' />
            <div className='grid grid-cols-1 md:grid-cols-4 space-y-8 md:gap-x-5 z-10'>
                {(data.data).map((guide, indx) => {
                    return <GuideItems key={indx} guide={guide} />
                })}
            </div>
        </section>
    )
}
