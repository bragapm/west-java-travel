import React from 'react'
import { TabComponent } from '../CustomComponent/TabComponent'
import { HomeSectionTitle } from '../CustomComponent/TextComponent/HomeSectionTitle'
import MemoIcLeaf from '../CustomIcons/IcLeaf'
import MemoIcRainy from '../CustomIcons/IcRainy'
import MemoIcSun from '../CustomIcons/IcSun'

export const HomeSeasonSection = () => {
    return (
        <section className='md:py-20 py-16 z-20 relative'>
            <div className='flex flex-col z-10 px-5 md:px-20'>
                <HomeSectionTitle title='Season highlight' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[650px] md:leading-tight z-10'>Nikmati Setiap Musim Di Jawa Barat</h3>
                <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.</p>
            </div>
            <div className='flex flex-col'>
                <TabComponent
                    className='md:items-end md:-translate-y-16'
                    labels={[
                        <div key='1' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcLeaf />All Season</div>,
                        <div key='2' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcSun />Dry</div>,
                        <div key='3' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcRainy />Rainy</div>,
                    ]}
                    labelsClassName='px-5 md:pr-20 md:w-[40vw]'
                    children={[
                        <div key='1' className='pt-8 flex flex-row max-w-[100vw] overflow-scroll pb-5'>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Januari</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Rainy</p>
                                </div>
                                <img src='img-home-jan.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Februari</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Winter</p>
                                </div>
                                <img src='img-home-feb.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Maret</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-maret.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>April</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-april.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Mei</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-may.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                        </div>,
                        <div key='2' className='pt-8 flex flex-row max-w-[100vw] overflow-scroll pb-5'>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Januari</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Rainy</p>
                                </div>
                                <img src='img-home-jan.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Februari</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Winter</p>
                                </div>
                                <img src='img-home-feb.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Maret</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-maret.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>April</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-april.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Mei</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-may.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                        </div>,
                        <div key='3' className='pt-8 flex flex-row max-w-[100vw] overflow-scroll pb-5'>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Januari</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Rainy</p>
                                </div>
                                <img src='img-home-jan.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Februari</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Winter</p>
                                </div>
                                <img src='img-home-feb.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Maret</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-maret.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>April</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-april.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                            <div className='h-[293px] md:h-[450px] w-[50vw] md:w-[20vw] flex-none overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end items-center p-4 md:pb-10 z-10'>
                                    <h3 className='uppercase text-yellow text-shadow font-montserrat font-bold text-base md:text-1.5xl'>Mei</h3>
                                    <p className='uppercase text-white font-karla font-bold text-sm md:text-base mt-2'>Summer</p>
                                </div>
                                <img src='img-home-may.jpg' alt='img-home-jan.jpg' className='w-full h-full object-cover object-left group-hover:scale-110 transition duration-500' />
                            </div>
                        </div>,
                    ]}
                />
            </div>
        </section>
    )
}
