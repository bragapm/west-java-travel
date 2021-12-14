import React, { useState } from 'react'
import Link from 'next/link';
import { TabComponent } from '../../custom-component/TabComponent';
import { CheckBoxTileButton } from '../../custom-component/FieldComponent/CheckBoxTileButton';
import MemoIcAccomodation from '../../custom-icons/IcAccomodation'
import MemoIcDestination from '../../custom-icons/IcDestination'
import MemoIcRestaurant from '../../custom-icons/IcRestaurant'
import { WhereToGoDestinationTab } from './WhereToGoDestinationTab';

export const WhereToGoDestinantionSection = ({ destinationSectionRef, region, regionId }) => {
    const [activeFilter, setactiveFilter] = useState([]);


    return (
        <section ref={destinationSectionRef} id='destination-section'>
            <div className='md:px-20'>
                <div className='w-full h-px bg-bordercolor mt-8 mb-8' />
            </div>
            <div className='flex flex-col md:flex-row space-y-16 md:space-y-0 mb-16 px-5 md:px-20'>
                <div className='flex flex-col md:w-8/12 md:items-start md:border-r md:border-bordercolor md:pr-12'>
                    <h3 className='capitalize font-bold font-montserrat text-dark text-xl md:text-2.5xl mb-5'>Pilihan Destinasi terbaik di <span className='capitalize'>{region}</span> Java</h3>
                    <div className='flex-row flex bg-[#F2F4F5] rounded-md p-4 mb-5 w-full'>
                        <input
                            placeholder='Cari destinasi, culinary, accomodation'
                            onChange={(e) => {
                            }}
                            onKeyDown={({ key }) => {
                                if (key === "Enter") {

                                    // return router.push(`/search/${searchCategory.label.toLowerCase()}/${searchValue}`)
                                }
                                return null;
                            }}
                            className="flex-1 text-sm form-input block bg-transparent text-black font-karla focus:outline-none focus:ring-none placeholder-neutral placeholder-opacity-50"
                        />
                        <img src='/ic-search.svg' alt='ic-search' className='ml-3' />
                    </div>
                    <TabComponent
                        className='w-full'
                        labels={[
                            <div key='1' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcDestination className='md:block hidden' />Destination</div>,
                            <div key='2' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcRestaurant className='md:block hidden' />Restaurant</div>,
                            <div key='3' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcAccomodation className='md:block hidden' />Accomodation</div>,
                        ]}
                        children={[
                            <WhereToGoDestinationTab key='1' sector='filter[sector][_in]=["Destination"]' activeRegion={`&filter[region][_eq]=${regionId}`} />,
                            <WhereToGoDestinationTab key='2' sector='filter[sector][_in]=["Restaurant"]' activeRegion={`&filter[region][_eq]=${regionId}`} />,
                            <WhereToGoDestinationTab key='3' sector='filter[sector][_in]=["Accomodation"]' activeRegion={`&filter[region][_eq]=${regionId}`} />,
                        ]}
                    />
                </div>
                <div className='flex-col flex md:w-4/12 md:pl-12'>
                    <div className='md:flex flex-col hidden'>
                        <h3 className='capitalize font-bold font-montserrat text-dark text-xl mb-6'>Atraksi</h3>
                        <div className='grid grid-cols-2 pb-10'>
                            <CheckBoxTileButton
                                value='Adventure'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Shopping'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Coast & Beach'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Art & Cultures'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Nature'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Rural Life'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Urban Life'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                            <CheckBoxTileButton
                                value='Culinary'
                                setactiveValue={setactiveFilter}
                                activeValue={activeFilter}
                            />
                        </div>
                    </div>
                    <h3 className='capitalize font-bold font-montserrat text-dark text-xl mb-6'>Jelajahi Sisi Lain West Java</h3>
                    <div className='flex-col flex space-y-2.5'>
                        <Link href='/where-to-go/northern west java'>
                            <a className={`h-[150px] rounded-2lg  overflow-hidden relative group ${region == 'northern west java' ? 'hidden' : ''}`}>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Northern west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='/img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-center group-hover:scale-125 transition duration-500' />
                            </a>
                        </Link>
                        <Link href='/where-to-go/shouthern west java'>
                            <a className={`h-[150px] rounded-2lg  overflow-hidden relative group ${region == 'southern west java' ? 'hidden' : ''}`}>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Southern west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='/img-home-southern.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </a>
                        </Link>
                        <Link href='/where-to-go/central west java'>
                            <a className={`h-[150px] rounded-2lg  overflow-hidden relative group ${region == 'central west java' ? 'hidden' : ''}`}>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Central west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='/img-home-central.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </a>
                        </Link>
                        <Link href='/where-to-go/eastern west java'>
                            <a className={`h-[150px] rounded-2lg  overflow-hidden relative group ${region == 'eatern west java' ? 'hidden' : ''}`}>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>eastern west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='/img-home-eastern.jpg' alt='img-mountain' className='w-full h-full object-cover group-hover:scale-125 transition duration-500' />
                            </a>
                        </Link>
                        <Link href='/where-to-go/western west java'>
                            <a className={`h-[150px] rounded-2lg  overflow-hidden relative group ${region == 'western west java' ? 'hidden' : ''}`}>
                                <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                    <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>western west java</h4>
                                    <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                                </div>
                                <img src='/img-home-western.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
