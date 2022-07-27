import React from 'react'
import Link from 'next/link';
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle'

export const HomeDestinationSection = () => {
    return (
        <section className='px-5 md:px-20 py-16 relative overflow-visible' id='destination-section'>
            <div className='w-[500px] h-[1011px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] rounded-tl-[100px] absolute top-0 right-0 xl:flex flex-col justify-end items-end hidden z-0'>
                <div className='flex flex-row items-end'>
                    <div className='rounded-full bg-green w-[20px] h-[20px] mr-3' />
                    <div className='rounded-full bg-blue w-[238px] h-[238px] mr-4' />
                </div>
                <div className='rounded-full bg-orange w-[40px] h-[40px] mr-10 mt-10' />
            </div>
            <div className='w-[295px] xl:w-[500px] h-[756px] xl:h-[568px] bg-gradient-to-b from-[#E4ECF4] to-pink-[#E4ECF4] rounded-tr-[100px] absolute top-[890px] xl:top-[650px] left-0 z-0' />
            <div className='flex flex-col z-10'>
                <HomeSectionTitle title='DESTINATION' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9 xl:max-w-[650px] xl:leading-tight z-10'>Destinasi di Jawa Barat</h3>
                <p className='font-karla text-sm xl:text-base text-neutral mt-4 md:pl-9 xl:mt-5 md:max-w-[650px]'>Jawa Barat memiliki berbagai macam destinasi wisata yang tersebar di 27 kota/kabupaten. Beberapa destinasi merupakan destinasi unggulan yang diakui dunia!</p>
            </div>
            <div className='flex flex-col xl:flex-col-reverse items-center xl:items-end xl:-translate-y-20 z-10'>
                <div className='flex flex-col xl:flex-row mt-8 space-y-5 w-full xl:space-y-0 md:px-9'>
                    <div className='xl:w-[25%]'>
                        <div className='flex flex-col space-y-5 xl:mr-2.5'>
                            <Link href='/where-to-go/northern west java'>
                                <div className='h-[200px] xl:h-[270px] rounded-2lg  overflow-hidden relative group cursor-pointer'>
                                    <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                        <h4 className='uppercase text-yellow text-shadow text-lg xl:text-xl font-montserrat font-bold'>Northern west java</h4>
                                        {/* <p className='uppercase font-karla text-white text-sm'>14 destination options</p> */}
                                    </div>
                                    <img src='img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                                </div>
                            </Link>
                            <Link href='/where-to-go/shouthern west java'>
                                <div className='h-[200px] xl:h-[270px] rounded-2lg  overflow-hidden relative group cursor-pointer'>
                                    <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                        <h4 className='uppercase text-yellow text-shadow text-lg xl:text-xl font-montserrat font-bold'>Southern west java</h4>
                                        {/* <p className='uppercase font-karla text-white text-sm'>14 destination options</p> */}
                                    </div>
                                    <img src='img-home-southern.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='xl:w-[50%]'>
                        <Link href='/where-to-go/central west java'>
                            <div className='h-[200px] xl:h-[560px] rounded-2lg overflow-hidden relative xl:mx-2.5 group cursor-pointer'>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg xl:text-2.5xl font-montserrat font-bold'>Central west java</h4>
                                    {/* <p className='uppercase font-karla text-white text-sm xl:text-base'>14 destination options</p> */}
                                </div>
                                <img src='img-home-central.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </div>
                        </Link>
                    </div>
                    <div className='xl:w-[25%]'>
                        <div className='flex flex-col space-y-5 xl:ml-2.5'>
                            <Link href='/where-to-go/eastern west java'>
                                <div className='h-[200px] xl:h-[270px] rounded-2lg  overflow-hidden relative group cursor-pointer'>
                                    <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                        <h4 className='uppercase text-yellow text-shadow text-lg xl:text-xl font-montserrat font-bold'>eastern west java</h4>
                                        {/* <p className='uppercase font-karla text-white text-sm'>14 destination options</p> */}
                                    </div>
                                    <img src='img-home-eastern.jpg' alt='img-mountain' className='w-full h-full object-cover group-hover:scale-125 transition duration-500' />
                                </div>
                            </Link>
                            <Link href='/where-to-go/western west java'>
                                <div className='h-[200px] xl:h-[270px] rounded-2lg  overflow-hidden relative group cursor-pointer'>
                                    <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                        <h4 className='uppercase text-yellow text-shadow text-lg xl:text-xl font-montserrat font-bold'>western west java</h4>
                                        {/* <p className='uppercase font-karla text-white text-sm'>14 destination options</p> */}
                                    </div>
                                    <img src='img-home-western.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <a className='uppercase text-white font-karla text-sm bg-secondary mt-6 max-w-[174px] py-4 px-6 rounded-full text-center xl:mr-9 z-10'>more in west java</a>
            </div>
        </section>
    )
}
