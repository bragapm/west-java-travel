import React from 'react'
import MemoIcArrow from '../custom-icons/IcArrow'

export const TravelTipsGuideSection = () => {
    return (
        <section className='flex flex-col md:px-20'>
            <div className='w-full h-px bg-bordercolor' />
            <div className='flex flex-col my-8 md:my-10 mx-5 md:mx-0'>
                <h4 className='capitalize font-montserrat font-bold text-dark text-xl md:text-2xl z-10'>Travel Guide</h4>
                <div className='grid grid-cols-1 md:grid-cols-4 mt-8 md:mt-0 space-y-8 md:gap-x-5 z-10'>
                    <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                        <div className='flex flex-col md:-translate-y-8'>
                            <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                            <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                            <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                                <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                                <MemoIcArrow className='text-primary' />
                            </button>
                        </div>
                        <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                            <img src='/img-sample-home-story.jpg' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                        <div className='flex flex-col md:-translate-y-8'>
                            <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                            <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                            <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                                <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                                <MemoIcArrow className='text-primary' />
                            </button>
                        </div>
                        <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                            <img src='/img-sample-home-story.jpg' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                        <div className='flex flex-col md:-translate-y-8'>
                            <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                            <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                            <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                                <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                                <MemoIcArrow className='text-primary' />
                            </button>
                        </div>
                        <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                            <img src='/img-sample-home-story.jpg' className='w-full h-full object-cover' />
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-col-reverse gap-x-8 md:gap-x-0 z-10'>
                        <div className='flex flex-col md:-translate-y-8'>
                            <h5 className='font-montserrat font-bold text-dark text-sm md:text-base md:bg-white md:pt-3 md:pr-3 md:max-w-[238px] md:rounded-tr-xl oneline-text'>Visa Information</h5>
                            <p className='font-karla text-neutral text-sm mt-2.5 twoline-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit</p>
                            <button className='mt-2.5 flex flex-row max-w-[100px] items-center gap-x-2'>
                                <p className='font-karla font-bold text-primary text-sm capitalize'>Read more</p>
                                <MemoIcArrow className='text-primary' />
                            </button>
                        </div>
                        <div className='overflow-hidden flex-none md:w-full w-[80px] h-[80px] md:h-[216px] rounded-md md:rounded-2lg'>
                            <img src='/img-sample-home-story.jpg' className='w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
