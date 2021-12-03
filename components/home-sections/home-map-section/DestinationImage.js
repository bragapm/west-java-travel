import React from 'react'

export const DestinationImage = ({ image }) => {

    const errorImage = <div className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] bg-bordercolor rounded-md md:rounded-2lg flex-none flex items-center'>
        <img src='/ic-logo.svg' className='m-auto grayscale' />
    </div>;

    if (!image) return errorImage;

    if (!image[0].directus_files_id) return errorImage;

    return (
        <img src={`https://panel.westjavatravel.com/assets/${image[0].directus_files_id}?key=small`} alt='img-destination' className='w-[90px] h-[72px] md:w-[100px] md:h-[90px] rounded-md md:rounded-2lg flex-none' />
    )
}
