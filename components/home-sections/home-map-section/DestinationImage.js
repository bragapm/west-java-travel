import React from 'react'
import useSWR from 'swr'

export const DestinationImage = ({ image }) => {


    const { data, error } = useSWR(image ? `https://panel.westjavatravel.com/items/objek_wisata_files?filter[id][_eq]=${image[0]}` : null);

    const imageError = <div className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] bg-bordercolor rounded-md md:rounded-2lg flex-none flex items-center'>
        <img src='/ic-logo.svg' className='m-auto grayscale' />
    </div>;

    if (!image) return imageError;
    if (error) return imageError;
    if (!data) return <div className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] bg-bordercolor animate-pulse rounded-md md:rounded-2lg flex-none' />
    if (!data.data[0].directus_files_id) return imageError;

    return (
        <img src={`https://panel.westjavatravel.com/assets/${data.data[0].directus_files_id}?key=small`} alt='img-destination' className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] rounded-md md:rounded-2lg flex-none' />
    )
}
