import React from 'react'
import ReactMarkdown from 'react-markdown'
import MemoIcArrow from '../../custom-icons/IcArrow'
import { GuideImage } from './GuideImage'
import Link from 'next/link'

export const GuideItems = ({ guide }) => {
    return (
        <Link href={`/guide/${guide.id}`}>
            <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10 cursor-pointer'>
                <div className='flex flex-col md:-translate-y-8 max-w-10 overflow-hidden'>
                    <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>{guide.judul}</h5>
                    <ReactMarkdown className='font-karla text-neutral text-sm mt-2.5 twoline-text max-h-[40px]'>{guide.isi_artikel}</ReactMarkdown>
                    <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                        <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                        <MemoIcArrow className='text-primary' />
                    </button>
                </div>
                <GuideImage />
            </div>
        </Link>
    )
}
