import React from 'react'
import { MustVisitImage } from './MustVisitImage'

export const MustVisitItem = ({ destination }) => {
    return (
        <div className='flex flex-row md:flex-col md:max-w-[284px]'>
            <MustVisitImage image={destination.images == null ? null : destination.images.length > 0 ? destination.images : null} />
            <div className='flex flex-col pl-4 md:pl-0 md:pt-4'>
                <h6 className='capitalize font-montserrat font-bold text-dark text-sm md:text-base'>{destination.nama_objek}</h6>
                <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-1.5 oneline-text md:twoline-text'>{(destination.activity_recommendation ?? ['Healing']).toString()}</p>
                {/* <div className='flex flex-row space-x-2'>
                    <img src='ic-star.svg' alt='ic-star' />
                    <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'><span className='font-bold'>4.0</span> (38 Ulasan)</p>
                </div> */}
            </div>
        </div>
    )
}
