import { fromJSON } from 'postcss'
import React from 'react'
import { HomeSectionTitle } from '../CustomComponent/TextComponent/HomeSectionTitle'
import MemoHomeMap from './HomeMap';

export const HomeMapSection = () => {
    return (
        <section className='flex flex-col px-5'>
            <div className='flex flex-col'>
                <HomeSectionTitle title='INTERACTIVE MAP' />
                <h3 className='font-bold text-dark font-montserrat text-2xl mt-6'>Jelajahi Jawa Barat</h3>
                <p className='font-karla text-sm text-neutral mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.</p>
                <MemoHomeMap className='scale-60 scale -translate-x-28 -translate-y-10'/>
            </div>
            <div className='flex flex-col'>

            </div>
        </section>
    )
}
