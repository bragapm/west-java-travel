import React from 'react'
import { TabComponent } from '../../custom-component/TabComponent'
import { HomeSectionTitle } from '../../custom-component/TextComponent/HomeSectionTitle'
import MemoIcLeaf from '../../custom-icons/IcLeaf'
import MemoIcRainy from '../../custom-icons/IcRainy'
import MemoIcSun from '../../custom-icons/IcSun'
import { SeasonTab } from './SeasonTab'

export const HomeSeasonSection = () => {
    return (
        <section className='md:py-20 py-16 z-20 relative'>
            <div className='flex flex-col z-10 px-5 md:px-20'>
                <HomeSectionTitle title='Season highlight' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[650px] md:leading-tight z-10'>Nikmati Setiap Musim Di Jawa Barat</h3>
                <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:max-w-[650px]'>Anda dapat menikmati Musim Hujan yang sejuk dan Musim Panas yang cerah di Jawa Barat</p>
            </div>
            <div className='flex flex-col'>
                <TabComponent
                    className='md:-translate-y-16'
                    labels={[
                        <div key='1' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcLeaf />All Season</div>,
                        <div key='2' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcSun />Dry</div>,
                        <div key='3' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcRainy />Wet</div>,
                    ]}
                    labelsClassName='px-5 md:pr-20 md:w-[40vw] md:ml-auto'
                    children={[
                        <SeasonTab key='1' season='All Season' />,
                        <SeasonTab key='2' season='Dry Season' />,
                        <SeasonTab key='3' season='Wet Season' />,
                    ]}
                />
            </div>
        </section>
    )
}
