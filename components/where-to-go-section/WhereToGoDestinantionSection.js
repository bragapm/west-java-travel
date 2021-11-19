import React, { useState } from 'react'
import Pagination from '../custom-component/Pagination';
import { TabComponent } from '../custom-component/TabComponent';
import { CheckBoxTileButton } from '../custom-component/FieldComponent/CheckBoxTileButton';
import MemoIcAccomodation from '../custom-icons/IcAccomodation'
import MemoIcDestination from '../custom-icons/IcDestination'
import MemoIcRestaurant from '../custom-icons/IcRestaurant'

const destination = [
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
    { title: 'Green Canyon', description: 'Adventure, Nature, Rural Life' },
];

export const WhereToGoDestinantionSection = () => {
    const [activePage, setactivePage] = useState(1);
    const [activeFilter, setactiveFilter] = useState([]);

    return (
        <section>
            <div className='md:px-20'>
                <div className='w-full h-px bg-bordercolor mt-8 mb-8' />
            </div>
            <div className='flex flex-col md:flex-row space-y-16 md:space-y-0 mb-16 px-5 md:px-20'>
                <div className='flex flex-col md:w-8/12 md:items-start md:border-r md:border-bordercolor md:pr-12'>
                    <h3 className='capitalize font-bold font-montserrat text-dark text-xl md:text-2.5xl mb-5'>Pilihan Destinasi terbaik di Central West Java</h3>
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
                        labels={['Destination', 'Restaurant', 'Accomodation']}
                        labels={[
                            <div key='1' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcDestination className='md:block hidden' />Destination</div>,
                            <div key='2' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcRestaurant className='md:block hidden' />Restaurant</div>,
                            <div key='3' className='flex flex-row items-center justify-center gap-x-2 md:gap-x-2.5'><MemoIcAccomodation className='md:block hidden' />Accomodation</div>,
                        ]}
                        children={[
                            <div key='1' className='mb-16'>
                                <button onClick={() => { }} className='py-4 w-full rounded-full border border-bordercolor flex flex-row justify-center items-center mt-4 md:hidden'>
                                    <img src='/ic-filter.svg' alt='ic-filter' />
                                    <span className='uppercase font-karla font-bold text-dark ml-4'>Filter Atraksi</span>
                                </button>
                                <div className='mt-5 md:mt-12 space-y-3 md:space-y-12'>
                                    {destination.map((data, idx) => {
                                        return <div key={idx} className='flex flex-row space-x-4 items-start'>
                                            <div className='w-[80px] md:w-[160px] h-[70px] md:h-[144px] rounded-md md:rounded-2lg overflow-hidden flex-none'>
                                                <img src='/img-home-jan.jpg' className='w-full h-full object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
                                            </div>
                                            <div className='flex flex-col pl-4 md:pl-0 md:pt-4'>
                                                <h6 className='capitalize font-montserrat font-bold text-dark text-sm md:text-xl'>Green Canyon</h6>
                                                <p className='font-karla text-neutral text-xs md:text-base mt-1.5 mb-1.5 oneline-text md:twoline-text'>Situ Patenggang adalah suatu danau yang terletak di kawasan objek wisata alam Bandung Selatan, tepatnya di Ciwidey</p>
                                                <div className='flex flex-row'>
                                                    <div className='flex flex-row space-x-2'>
                                                        <img src='/ic-star.svg' alt='ic-star' />
                                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'><span className='font-bold'>4.0</span> (38 Ulasan)</p>
                                                    </div>
                                                    <div className='md:flex flex-row space-x-2 ml-6 hidden'>
                                                        <img src='/ic-location.svg' alt='ic-star' />
                                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'>Kabupaten Bandung</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>,
                            <div key='2' className='mb-16'>
                                <button onClick={() => { }} className='py-4 w-full rounded-full border border-bordercolor flex flex-row justify-center items-center mt-4 md:hidden'>
                                    <img src='/ic-filter.svg' alt='ic-filter' />
                                    <span className='uppercase font-karla font-bold text-dark ml-4'>Filter Atraksi</span>
                                </button>
                                <div className='mt-5 md:mt-12 space-y-3 md:space-y-12'>
                                    {destination.map((data, idx) => {
                                        return <div key={idx} className='flex flex-row space-x-4 items-start'>
                                            <div className='w-[80px] md:w-[160px] h-[70px] md:h-[144px] rounded-md md:rounded-2lg overflow-hidden flex-none'>
                                                <img src='/img-home-jan.jpg' className='w-full h-full object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
                                            </div>
                                            <div className='flex flex-col pl-4 md:pl-0 md:pt-4'>
                                                <h6 className='capitalize font-montserrat font-bold text-dark text-sm md:text-xl'>Green Canyon</h6>
                                                <p className='font-karla text-neutral text-xs md:text-base mt-1.5 mb-1.5 oneline-text md:twoline-text'>Situ Patenggang adalah suatu danau yang terletak di kawasan objek wisata alam Bandung Selatan, tepatnya di Ciwidey</p>
                                                <div className='flex flex-row'>
                                                    <div className='flex flex-row space-x-2'>
                                                        <img src='/ic-star.svg' alt='ic-star' />
                                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'><span className='font-bold'>4.0</span> (38 Ulasan)</p>
                                                    </div>
                                                    <div className='md:flex flex-row space-x-2 ml-6 hidden'>
                                                        <img src='/ic-location.svg' alt='ic-star' />
                                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'>Kabupaten Bandung</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>,
                            <div key='3' className='mb-16'>
                                <button onClick={() => { }} className='py-4 w-full rounded-full border border-bordercolor flex flex-row justify-center items-center mt-4 md:hidden'>
                                    <img src='/ic-filter.svg' alt='ic-filter' />
                                    <span className='uppercase font-karla font-bold text-dark ml-4'>Filter Atraksi</span>
                                </button>
                                <div className='mt-5 md:mt-12 space-y-3 md:space-y-12'>
                                    {destination.map((data, idx) => {
                                        return <div key={idx} className='flex flex-row space-x-4 items-start'>
                                            <div className='w-[80px] md:w-[160px] h-[70px] md:h-[144px] rounded-md md:rounded-2lg overflow-hidden flex-none'>
                                                <img src='/img-home-jan.jpg' className='w-full h-full object-cover rounded-md md:rounded-2lg hover:scale-110 transition duration-300' />
                                            </div>
                                            <div className='flex flex-col pl-4 md:pl-0 md:pt-4'>
                                                <h6 className='capitalize font-montserrat font-bold text-dark text-sm md:text-xl'>Green Canyon</h6>
                                                <p className='font-karla text-neutral text-xs md:text-base mt-1.5 mb-1.5 oneline-text md:twoline-text'>Situ Patenggang adalah suatu danau yang terletak di kawasan objek wisata alam Bandung Selatan, tepatnya di Ciwidey</p>
                                                <div className='flex flex-row'>
                                                    <div className='flex flex-row space-x-2'>
                                                        <img src='/ic-star.svg' alt='ic-star' />
                                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'><span className='font-bold'>4.0</span> (38 Ulasan)</p>
                                                    </div>
                                                    <div className='md:flex flex-row space-x-2 ml-6 hidden'>
                                                        <img src='/ic-location.svg' alt='ic-star' />
                                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'>Kabupaten Bandung</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>,
                        ]}
                    />
                    <Pagination currentPage={activePage} total={50} pageSize={10} getCurrent={setactivePage} />
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
                        <div className='h-[150px] rounded-2lg  overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Northern west java</h4>
                                <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                            </div>
                            <img src='/img-home-mountain.jpg' alt='img-mountain' className='w-full h-full object-cover object-center group-hover:scale-125 transition duration-500' />
                        </div>
                        <div className='h-[150px] rounded-2lg  overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>Southern west java</h4>
                                <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                            </div>
                            <img src='/img-home-southern.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                        <div className='h-[150px] rounded-2lg overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                <h4 className='uppercase text-yellow text-shadow text-lg md:text-2.5xl font-montserrat font-bold'>Central west java</h4>
                                <p className='uppercase font-karla text-white text-sm md:text-base'>14 destination options</p>
                            </div>
                            <img src='/img-home-central.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                        <div className='h-[150px] rounded-2lg  overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>eastern west java</h4>
                                <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                            </div>
                            <img src='/img-home-eastern.jpg' alt='img-mountain' className='w-full h-full object-cover group-hover:scale-125 transition duration-500' />
                        </div>
                        <div className='h-[150px] rounded-2lg  overflow-hidden relative group'>
                            <div className='bg-gradient-to-t from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-5 py-6 z-10'>
                                <h4 className='uppercase text-yellow text-shadow text-lg md:text-xl font-montserrat font-bold'>western west java</h4>
                                <p className='uppercase font-karla text-white text-sm'>14 destination options</p>
                            </div>
                            <img src='/img-home-western.jpg' alt='img-mountain' className='w-full h-full object-cover object-right group-hover:scale-125 transition duration-500' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
