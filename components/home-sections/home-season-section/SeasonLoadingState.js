import React from 'react'

export const SeasonLoadingState = () => {
    return (
        <div className='pt-8 flex flex-row max-w-[100vw] overflow-scroll pb-5 animate-pulse'>
            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden bg-bordercolor bg-opacity-50' />
            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden bg-bordercolor' />
            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden bg-bordercolor bg-opacity-50' />
            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden bg-bordercolor' />
            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden bg-bordercolor bg-opacity-50' />
        </div>
    )
}
