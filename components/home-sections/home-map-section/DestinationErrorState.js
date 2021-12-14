import React from 'react'

export const DestinationErrorState = ({ title, desctiption }) => {
    return (
        <div className='w-full h-[600px] flex flex-col items-center justify-center'>
            <img src='/img-empty-destination.png' alt='img empty destination' />
            <div className='w-80 flex flex-col'>
                <h4 className='font-bold font-montserrat text-neutral text-base md:text-lg mt-3 text-center flex flex-col'>{title}</h4>
                <p className='font-karla text-sm md:text-base text-neutral text-center mt-1'>{desctiption}</p>
            </div>
        </div>
    )
}
