import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { animate } from "motion"

const dummyTravelRecommendationData = [
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty....'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty....'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty....'
    },
];

export const TravelTipsRecommendationSection = () => {

    const [activeRecommendationItem, setactiveRecommendationItem] = useState(0);

    useEffect(() => {
        animate(
            '.recommendation-item',
            { x: activeRecommendationItem * -270 },
            {
                duration: 0.5,
                easing: "ease-in-out"
            }
        );


    }, [activeRecommendationItem])

    return (
        <section className='pt-20 md:pt-36'>
            <div className='flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-bordercolor'>
                <Link href='/travel-tips/idTravelTips'>
                    <a className='flex flex-col mx-5 mb-5 md:ml-20 md:mr-10 md:w-7/12 items-center hover:bg-bordercolor hover:bg-opacity-20 transition-all'>
                        <img src='/img-about-thumbnail.jpg' className='mt-7 md:mt-0 rounded-lg h-[159.75px] md:h-[330px] w-full object-cover' />
                        <h3 className='font-bold font-montserrat text-lg md:text-3.5xl md:leading-10 text-dark text-center mt-5 capitalize md:max-w-[589px] twoline-text'>Judul artikel Smiling west java happiness all around</h3>
                        <p className='font-karla text-neutral text-sm md:text-base text-center mt-2.5 md:mt-3 md:max-w-[589px]'>Suasana sejuk dan pemandangan hijau di berbagai sudut dataran tinggi di Bandung sangat cocok jadi tempat rileksasi pikiran. </p>
                        <div className='mt-4 mb-8 flex flex-row items-center justify-center'>
                            <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs md:text-sm text-neutral'>topik 1</p>
                            <p className='font-karla text-neutral text-xs md:text-sm ml-4'>07 Oktober 2021</p>
                        </div>
                    </a>
                </Link>
                <div className='flex flex-col pt-8 md:pt-0 md:w-5/12 md:h-[600px]'>
                    <h3 className='font-bold text-dark text-xl md:text-2xl font-montserrat mb-5 md:mb-8 ml-5 md:ml-12'>Rekomendasi Tips</h3>
                    <div className='recommendation-item flex flex-row md:flex-col gap-4 px-5 md:pr-20 md:pl-10 md:h-full md:justify-between md:pb-20'>
                        {dummyTravelRecommendationData.map((recommendation, indx) => {
                            return <Link key={indx} href='/travel-tips/idTravelTips'>
                                <a
                                    className='flex flex-col md:flex-row-reverse flex-none max-w-[254px] md:max-w-full md:justify-between hover:bg-bordercolor hover:bg-opacity-20 transition-all md:p-2'>
                                    <img src='/img-about-thumbnail.jpg' className='rounded-md h-[160px] md:h-[80px] w-full md:w-[80px] object-cover mb-4 md:ml-20' />
                                    <div className='flex flex-col'>
                                        <h4 className='font-bold font-montserrat text-dark text-sm md:text-base mb-2.5 md:mb-3 twoline-text'>{recommendation.title}</h4>
                                        <p className='font-karla text-neutral text-xs md:text-sm mb-2.5 md:mb-3 twoline-text'>{recommendation.description}</p>
                                        <div className='flex flex-row items-center'>
                                            <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs text-neutral'>topik 1</p>
                                            <p className='font-karla text-neutral text-xs ml-4'>07 Oktober 2021</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        })}
                    </div>
                    <div className='flex md:hidden flex-row justify-end mx-5 space-x-2.5 my-8'>
                        <button
                            onClick={() => {
                                if (activeRecommendationItem > 0) {
                                    setactiveRecommendationItem(activeRecommendationItem - 1);
                                }
                            }}
                            className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'
                        >
                            <img src='/ic-arrow-rounded.svg' />
                        </button>
                        <button
                            onClick={() => {
                                if (activeRecommendationItem < (dummyTravelRecommendationData.length - 1)) {
                                    setactiveRecommendationItem(activeRecommendationItem + 1);
                                }
                            }}
                            className='w-[33.33px] md:w-[41.67px] h-[33.33px] md:h-[41.67px] rounded-full'
                        >
                            <img src='/ic-arrow-rounded.svg' className='transform rotate-180' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
