import React from 'react'
import useSWR from 'swr'
import { DestinationErrorState } from '../home-sections/home-map-section/DestinationErrorState';
import { TravelTipsItems } from './TravelTipsItems';


export const DetailTravelTipsOthersSection = ({ }) => {
    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_tips?fields=*,travel_tips_files.directus_files_id&limit=5`);

    const errorCondition = <DestinationErrorState title='Terjadi kesalahan' desctiption='Terjadi sebuah kesalahan, gagal mengambil data' />

    return (
        <section className='md:px-80'>
            <h2 className='text-dark font-bold font-montserrat text-xl md:text-3xl mx-5 md:mx-0 mt-20 mb-4 md:mb-5'>Anda juga mungkin akan menyukai...</h2>
            <div className='w-full h-px bg-bordercolor mb-8 md:mb-10' />
            <div className='flex flex-col gap-8 md:gap-14 px-5 md:px-0 pb-16'>
                {error ? errorCondition : <TravelTipsItems data={data} />}
            </div>
        </section>
    )
}
