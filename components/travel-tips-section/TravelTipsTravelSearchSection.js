import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import Pagination from '../custom-component/Pagination';
import { DestinationErrorState } from '../home-sections/home-map-section/DestinationErrorState';
import { TravelTipsItems } from './TravelTipsItems';

export const TravelTipsTravelSearchSection = () => {

    const [activePage, setactivePage] = useState(1);
    const [activeTopic, setactiveTopic] = useState('')
    const [totalData, settotalData] = useState(10);
    const [searchValue, setsearchValue] = useState('');



    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_tips?fields=*,travel_tips_files.directus_files_id&limit=5&page=${activePage}${activeTopic}${searchValue == '' ? '' : `&search=${searchValue}`}`);
    const { data: total } = useSWR(`https://panel.westjavatravel.com/items/travel_tips?aggregate[count]=id${activeTopic}${searchValue == '' ? '' : `&search=${searchValue}`}`);

    useEffect(() => {
        if (total) {
            if (total.data) {
                settotalData(total.data[0].count.id);
            }
        }
    }, [total])

    const errorCondition = <DestinationErrorState title='Terjadi kesalahan' desctiption='Terjadi sebuah kesalahan, gagal mengambil data' />

    return (
        <section className='mb-16 md:px-20'>
            <div className='w-full h-px bg-bordercolor' />
            <h3 className='text-dark font-bold font-montserrat text-xl md:text-1.5xl mt-8 mx-5 md:hidden'>Travel Tips Pilihan</h3>
            <div className='flex flex-col md:flex-row-reverse'>
                <div className='flex flex-col md:w-4/12'>
                    <h4 className='text-dark font-bold font-montserrat text-lg hidden md:block ml-10 mt-10'>Cari Travel Tips</h4>
                    <div className='px-5 md:pl-10 md:pr-0'>
                        <div className='flex-row flex bg-[#F2F4F5] rounded-md p-4 mt-5 w-full'>
                            <input
                                placeholder='Cari travel tips disini...'
                                value={searchValue}
                                onChange={(e) => {
                                    setsearchValue(e.target.value);
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
                    </div>
                    <h4 className='text-dark font-bold font-montserrat text-lg hidden md:block ml-10 mt-8'>Rekomendasi Tips</h4>
                    <div className='flex flex-row mt-5 overflow-scroll md:overflow-hidden md:flex-wrap px-5 md:pl-10 md:pr-0 gap-2 md:gap-y-3'>
                        <button
                            onClick={() => {
                                if (activeTopic === '&filter[topik][_contains]=Transportations') {
                                    setactiveTopic('')
                                } else {
                                    setactiveTopic('&filter[topik][_contains]=Transportations')
                                }
                            }}
                            className={`uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none ${activeTopic == '&filter[topik][_contains]=Transportations' ? 'bg-primary text-white' : ''}`}
                        >Transportations
                        </button>
                        <button
                            onClick={() => {
                                if (activeTopic === '&filter[topik][_contains]=Shopping') {
                                    setactiveTopic('')
                                } else {
                                    setactiveTopic('&filter[topik][_contains]=Shopping')
                                }
                            }}
                            className={`uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none ${activeTopic == '&filter[topik][_contains]=Shopping' ? 'bg-primary text-white' : ''}`}
                        >Shopping
                        </button>
                        <button
                            onClick={() => {
                                if (activeTopic === '&filter[topik][_contains]=Best Time') {
                                    setactiveTopic('')
                                } else {
                                    setactiveTopic('&filter[topik][_contains]=Best Time')
                                }
                            }}
                            className={`uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none ${activeTopic == '&filter[topik][_contains]=Best Time' ? 'bg-primary text-white' : ''}`}
                        >Best Time
                        </button>
                        <button
                            onClick={() => {
                                if (activeTopic === '&filter[topik][_contains]=Tips') {
                                    setactiveTopic('')
                                } else {
                                    setactiveTopic('&filter[topik][_contains]=Tips')
                                }
                            }}
                            className={`uppercase font-karla font-bold text-neutral text-sm px-4 py-3 border border-bordercolor rounded-full flex-none ${activeTopic == '&filter[topik][_contains]=Tips' ? 'bg-primary text-white' : ''}`}
                        >Tips
                        </button>
                    </div>
                </div>
                <div className='flex flex-col pt-10 px-5 md:pr-10 md:pl-0 gap-8 md:gap-14 md:w-8/12 md:items-start md:border-r md:border-bordercolor'>
                    <h3 className='text-dark font-bold font-montserrat text-xl md:text-1.5xl hidden md:block'>Travel Tips Pilihan</h3>
                    {error ? errorCondition : <TravelTipsItems data={data} />}
                    <div className='mt-2 md:mt-4' />
                    <Pagination currentPage={activePage} total={totalData} pageSize={10} getCurrent={setactivePage} />
                </div>
            </div>
        </section>
    )
}