import React from 'react'

export const DetailTravelTipsOthersSection = () => {
    return (
        <section className='md:px-80'>
            <h2 className='text-dark font-bold font-montserrat text-xl md:text-3xl mx-5 md:mx-0 mt-20 mb-4 md:mb-5'>Anda juga mungkin akan menyukai...</h2>
            <div className='w-full h-px bg-bordercolor mb-8 md:mb-10' />
            <div className='flex flex-col gap-8 md:gap-14 px-5 md:px-0 pb-16'>
                {dummyTravelTips.map((recommendation, indx) => {
                    return <div
                        key={indx}
                        className='flex flex-row'>
                        <div className='flex flex-col'>
                            <h4 className='font-bold font-montserrat text-dark text-sm md:text-xl mb-2.5 twoline-text'>{recommendation.title}</h4>
                            <p className='font-karla text-neutral text-xs md:text-base mb-2.5 twoline-text'>{recommendation.description}</p>
                            <div className='flex flex-row items-center'>
                                <p className='px-4 py-2.5 rounded-full uppercase bg-[#E4ECF4] font-karla font-bold text-xs text-neutral'>topik 1</p>
                                <p className='font-karla text-neutral text-xs ml-4'>07 Oktober 2021</p>
                            </div>
                        </div>
                        <img src='/img-about-thumbnail.jpg' className='rounded-md h-[80px] md:h-[140px] w-[80px] md:w-[140px] object-cover ml-8 md:ml-20' />

                    </div>
                })}
            </div>
        </section>
    )
}

const dummyTravelTips = [
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
    {
        title: 'Smiling west java happiness all around all around',
        description: 'Smiling West Java present the natural beauty Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur dolor sit Smiling West Java'
    },
];
