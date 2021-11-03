import React from 'react'

export const HomeSectionTitle = ({ title }) => {
    return (
        <div className='flex flex-row'>
            <div className='w-[1.875rem] h-0.5 bg-primary mr-2.5 mt-2.5' />
            <p className='text-primary font-karla font-bold text-sm md:text-base'>{title}</p>
        </div>
    )
}
