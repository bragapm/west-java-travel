import React from 'react'

export const DestinationErrorState = ({ message }) => {
    return (
        <div className='w-full h-[600px] flex flex-col items-center justify-center'>
            <img src='/ic-logo.svg' className='w-[100px] grayscale' />
            <div className='w-80'>
                <h4 className='font-bold font-montserrat text-neutral text-lg mt-3 text-center flex flex-col'>{message}</h4>
            </div>
        </div>
    )
}
