import React from 'react'
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle'

export const HomeDestinationSection = () => {
    return (
        <section className='px-5 md:px-20 md:py-10 relative overflow-visible'>
            <div className='w-[500px] h-[1011px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] rounded-tl-[100px] absolute top-0 right-0 md:flex flex-col justify-end items-end hidden z-0'>
                <div className='flex flex-row items-end'>
                    <div className='rounded-full bg-green w-[20px] h-[20px] mr-3' />
                    <div className='rounded-full bg-blue w-[238px] h-[238px] mr-4' />
                </div>
                <div className='rounded-full bg-orange w-[40px] h-[40px] mr-10 mt-10' />
            </div>
            <div className='w-[295px] md:w-[500px] h-[756px] md:h-[568px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] rounded-tr-[100px] absolute top-[890px] md:top-[650px] left-0 z-0' />
            <div className='flex flex-col z-10'>
                <HomeSectionTitle title='DESTINATION' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 md:max-w-[650px] md:leading-tight z-10'>Temukan Yang Terbaik Dari Jawa Barat</h3>
            </div>
            <div className='flex flex-col md:flex-col-reverse items-center md:items-end md:-translate-y-20 z-10'>
                <div className='flex flex-col md:flex-row mt-8 space-y-5 w-full md:space-y-0 md:px-9'>
                    <div className='md:w-[25%]'>
                        <div className='flex flex-col space-y-5 md:mr-2.5'>
                            <div className='h-[200px] md:h-[270px] rounded-2lg  overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Northern west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </div>
                            <div className='h-[200px] md:h-[270px] rounded-2lg  overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Southern west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='img-home-southern.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[50%]'>
                        <div className='h-[200px] md:h-[560px] rounded-2lg overflow-hidden relative md:mx-2.5 group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                <h4 className='uppercase text-yellow text-shadow text-lg md:text-2.5xl font-montserrat font-bold'>Central west java</h4>
                                <p className='uppercase font-karla text-white text-sm md:text-base'>14 destination options</p>
                            </div>
                            <img src='img-home-central.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>
                    <div className='md:w-[25%]'>
                        <div className='flex flex-col space-y-5 md:ml-2.5'>
                            <div className='h-[200px] md:h-[270px] rounded-2lg  overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>eastern west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='img-home-eastern.jpg' alt='img-mountain' className='w-full h-full object-cover group-hover:scale-125 transition duration-500' />
                            </div>
                            <div className='h-[200px] md:h-[270px] rounded-2lg  overflow-hidden relative group'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>western west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='img-home-western.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </div>
                        </div>
                    </div>
                </div>
                <a className='uppercase text-white font-karla text-sm bg-secondary mt-6 max-w-[174px] py-4 px-6 rounded-full text-center md:mr-9 z-10'>more in west java</a>
            </div>
        </section>
    )
}
