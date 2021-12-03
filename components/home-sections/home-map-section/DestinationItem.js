import React from 'react'
import { DestinationImage } from './DestinationImage';

export const DestinationItem = ({ destination, setactiveHoverRegion }) => {
    return (
        <div
            onMouseEnter={() => {
                setactiveHoverRegion(destination.region);
            }}
            onMouseLeave={() => {
                setactiveHoverRegion(0);
            }}
            className='flex flex-row space-x-5 p-5 items-start hover:bg-bordercolor hover:bg-opacity-20'
        >
            <DestinationImage image={destination.images.length > 0 ? destination.images : null} />
            <div className='flex flex-col'>
                <h4 className='font-montserrat text-dark font-bold text-sm md:text-base'>{destination.nama_objek}</h4>
                <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 overflow-ellipsis overflow-hidden max-h-16'>{destination.history ?? 'Deskripsi untuk destinasi ini tidak tersedia'}</p>
            </div>
        </div>
    )
}
