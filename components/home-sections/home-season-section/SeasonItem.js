import React from 'react'
import { SeasonImage } from './SeasonImage'

export const SeasonItem = ({ seasonData }) => {


    return (
        <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                <h3 className='uppercase text-center twoline-text text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>{seasonData.nama_objek}</h3>
                <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>{!seasonData.visit_date ? 'Anytime' : seasonData.visit_date.length <= 1 ? seasonData.visit_date[0] : `${seasonData.visit_date[0]} - ${seasonData.visit_date[seasonData.visit_date.length - 1]}`}</p>
            </div>
            <SeasonImage image={seasonData.images == null ? null : seasonData.images.length > 0 ? seasonData.images : null}/>
        </div>
    )
}
