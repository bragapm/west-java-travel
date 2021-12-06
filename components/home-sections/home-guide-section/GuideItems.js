import React from 'react'
import MemoIcArrow from '../../custom-icons/IcArrow'

export const GuideItems = ({ guide }) => {
    return (
        <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
            <div className='flex flex-col md:-translate-y-8'>
                <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>{guide.judul}</h5>
                <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>{guide.isi_artikel}</p>
                <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                    <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                    <MemoIcArrow className='text-primary' />
                </button>
            </div>
            <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                <img src={`https://panel.westjavatravel.com/assets/${guide.thumbnail}`} className='w-full h-full object-cover' />
            </div>
        </div>
    )
}
