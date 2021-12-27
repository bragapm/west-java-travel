import React from 'react'
import MemoIcInstagram from '../custom-icons/IcInstagram'
import useSWR from 'swr'

export const HomeInspirationSection = () => {

    const { data, error } = useSWR('https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=IGQVJYcW15eTdobzY5YktWeE1iTHR5cUdwZAllqUFV6R3FMREVrSENkd2JxYmp1ZA25FcEM5VlJ1c1VRQWdPTi1Dd1o2MEo4WXRnWXNhRW9UUkRibUtJRkxuZAHk3OUxNOXNjQjVId2VIR0ZAOcExTWXdCdQZDZD');

    if (error) return <div />

    return (
        <section className='flex flex-col z-10 px-5 md:px-20 mb-10'>
            <h4 className='capitalize font-montserrat font-bold text-dark text-lg md:text-2.5xl z-10 w-40'>#SmilingWestJava</h4>
            <div className='w-full h-px bg-bordercolor my-6 md:my-7' />
            <div className='flex flex-col md:flex-col-reverse items-center md:items-end md:-translate-y-28'>
                <div className='grid grid-cols-6 z-10 gap-2.5 md:gap-3.5 w-full'>
                    <a
                        href={data ? data.data ? data.data[0] ? data.data[0].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:col-span-1 md:row-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[0] ? data.data[0].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[1] ? data.data[1].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:row-span-2 md:max-h-[404px] max-h-[335px]'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[1] ? data.data[1].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[2] ? data.data[2].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[2] ? data.data[2].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[3] ? data.data[3].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-6 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[3] ? data.data[3].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[4] ? data.data[4].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[4] ? data.data[4].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[5] ? data.data[5].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[5] ? data.data[5].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[6] ? data.data[6].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[6] ? data.data[6].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[7] ? data.data[7].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-2 md:row-span-2 md:max-h-[404px] max-h-[335px]'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[7] ? data.data[7].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[8] ? data.data[8].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[8] ? data.data[8].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[9] ? data.data[9].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[9] ? data.data[9].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[10] ? data.data[10].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[10] ? data.data[10].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                    <a
                        href={data ? data.data ? data.data[11] ? data.data[11].permalink : null : null : null}
                        target='_blank'
                        className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img
                            onError={(e) => {
                                e.target.src = '/img-placeholder.png'
                            }}
                            src={data ? data.data ? data.data[11] ? data.data[11].media_url : '/img-placeholder.png' : '/img-placeholder.png' : '/img-placeholder.png'}
                            className='w-full h-full object-cover'
                        />
                        <MemoIcInstagram className='text-white absolute top-3 right-3 md:top-4 md:right-4 z-20 md:scale-125' />
                    </a>
                </div>
                <a
                    href='https://www.instagram.com/westjava.travel/'
                    target='_blank'
                    className='flex flex-row uppercase gap-x-2.5 font-karla text-dark font-bold text-sm md:text-lg py-4 px-6 items-center border border-bordercolor rounded-full max-w-[150px] md:max-w-[180px] mt-6 md:mt-0 z-20 md:mb-16 bg-white cursor-pointer z-20'>
                    <img src='img-instagram.png' alt='ic-instagram' className='w-[14px] md:w-[20px] h-[14px] md:h-[20px]' />
                    follow us
                </a>
            </div>
        </section>
    )
}
