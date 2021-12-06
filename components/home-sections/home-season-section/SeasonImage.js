import React from 'react'

export const SeasonImage = ({ image, indx }) => {

    const errorImage = <div className={`w-full h-full flex flex-col bg-bordercolor items-center group-hover:scale-110 transition duration-500 ${indx % 2 == 0 ? 'bg-opacity-50' : ''}`}>
        <img src='/ic-logo.svg' className='m-auto w-full h-full grayscale' />
    </div>;

    if (!image) return errorImage;

    if (!image[0].directus_files_id) return errorImage;

    return (
        <img src={`https://panel.westjavatravel.com/assets/${image[0].directus_files_id}?key=season-thumbnail`} className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-500' />
    )
}
