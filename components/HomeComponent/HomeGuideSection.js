import React from 'react'
import { HomeSectionTitle } from '../CustomComponent/TextComponent/HomeSectionTitle'
import MemoIcArrow from '../CustomIcons/IcArrow'

export const HomeGuideSection = () => {
    return (
        <section className='px-5 md:px-20 pb-20'>
            <div className='flex flex-col z-10'>
                <HomeSectionTitle title='Travel Guide' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[700px] md:leading-tight z-10 capitalize max-w-[250px]'>Tips Wisata Idaman di Jawa Barat</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 mt-8 space-y-8 md:px-9 md:gap-x-5'>
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0'>
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
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0'>
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
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0'>
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
                <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0'>
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
        </section>
    )
}
