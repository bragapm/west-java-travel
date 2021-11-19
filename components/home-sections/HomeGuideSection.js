import React from 'react'
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle'
import MemoIcArrow from '../custom-icons/IcArrow'

export const HomeGuideSection = () => {
    return (
        <section className='px-5 md:px-20 pb-20 relative'>
            <div className='flex flex-col z-10'>
                <HomeSectionTitle title='Travel Guide' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[700px] md:leading-tight z-10 capitalize max-w-[250px]'>Tips Wisata Idaman di Jawa Barat</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8 space-y-8 md:px-9 md:gap-x-5 z-10'>
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                    <div className='flex flex-col md:-translate-y-8'>
                        <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                        <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                        <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                            <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                            <MemoIcArrow className='text-primary'/>
                        </button>
                    </div>
                    <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                        <img src='img-sample-home-story.jpg' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                    <div className='flex flex-col md:-translate-y-8'>
                        <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                        <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                        <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                            <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                            <MemoIcArrow className='text-primary'/>
                        </button>
                    </div>
                    <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                        <img src='img-sample-home-story.jpg' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                    <div className='flex flex-col md:-translate-y-8'>
                        <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                        <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                        <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                            <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                            <MemoIcArrow className='text-primary'/>
                        </button>
                    </div>
                    <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                        <img src='img-sample-home-story.jpg' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                    <div className='flex flex-col md:-translate-y-8'>
                        <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                        <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                        <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                            <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                            <MemoIcArrow className='text-primary'/>
                        </button>
                    </div>
                    <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                        <img src='img-sample-home-story.jpg' className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-end absolute -right-6 md:-right-16 top-10 md:top-0 z-0'>
                <div className='flex flex-row mr-10 md:mr-20 items-end'>
                    <div className='bg-red rounded-full w-1 md:w-2.5 h-1 md:h-2.5 mr-5 md:mr-20' />
                    <div className='bg-green rounded-full w-2.5 md:w-[1.563rem] h-2.5 md:h-[1.563rem] mr-4 md:mr-8 mb-10 md:mb-[4.625rem]' />
                    <div className='bg-orange rounded-full w-4 md:w-10 h-4 md:h-10 mr-7 md:mr-14 mb-4' />
                    <div className='bg-blue rounded-full w-6 md:w-[3.75rem] h-6 md:h-[3.75rem] mb-10 md:mb-16' />
                </div>
                <div className='bg-yellow rounded-full w-24 md:w-[15.688rem] h-24 md:h-[15.688rem]' />
            </div> 
        </section>
    )
}
