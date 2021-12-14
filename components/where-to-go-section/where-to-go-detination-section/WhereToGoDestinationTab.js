import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import useSWR from 'swr'
import { DestinationErrorState } from '../../home-sections/home-map-section/DestinationErrorState';
import { WhereToGoDestinationImage } from './WhereToGoDestinationImage';
import Pagination from '../../custom-component/Pagination';

export const WhereToGoDestinationTab = ({ sector, activeRegion }) => {

    const [activePage, setactivePage] = useState(1);
    const [totalData, settotalData] = useState(10);

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?${sector}${activeRegion}&fields=*,images.directus_files_id&limit=5&page=${activePage}`);
    const { data: total } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?${sector}${activeRegion}&aggregate[count]=id`);

    useEffect(() => {
        if (total) {
            if (total.data) {
                settotalData(total.data[0].count.id);
            }
        }
    }, [total])

    if (error) return <DestinationErrorState title='Terjadi kesalahan' desctiption='Terjadi sebuah kesalahan, gagal mengambil data' />
    if (!data) return <DestinationErrorState title='Tidak ada destinasi' desctiption='Belum ditemukan destinasi untuk wilayah Southern West Java' />
    if (data.data == undefined) return <DestinationErrorState title='Terjadi kesalahan' desctiption='Terjadi sebuah kesalahan, gagal mengambil data' />
    if (data.data.length == 0) return <DestinationErrorState title='Tidak ada destinasi' desctiption='Belum ditemukan destinasi untuk wilayah Southern West Java' />

    return (
        <div className='mb-16 flex flex-col items-start'>
            <button onClick={() => { }} className='py-4 w-full rounded-full border border-bordercolor flex flex-row justify-center items-center mt-4 md:hidden'>
                <img src='/ic-filter.svg' alt='ic-filter' />
                <span className='uppercase font-karla font-bold text-dark ml-4'>Filter Atraksi</span>
            </button>
            <div className='mt-5 md:mt-12 space-y-3 md:space-y-6 mb-10'>
                {data.data.map((destination, idx) => {
                    return <Link key={idx} href='/destination/idDestination'>
                        <a className='flex flex-row space-x-4 items-start hover:bg-bordercolor hover:bg-opacity-20 transition-all p-4'>
                            <WhereToGoDestinationImage image={destination.images.length > 0 ? destination.images : null} />
                            <div className='flex flex-col pl-2 md:pl-0 md:pt-4'>
                                <h6 className='capitalize font-montserrat font-bold text-dark text-sm md:text-xl'>{destination.nama_objek}</h6>
                                <p className='font-karla text-neutral text-xs md:text-base mt-1.5 mb-1.5 oneline-text md:twoline-text'>{destination.history ?? 'Deskripsi untuk destinasi ini belum tersedia. Cek info mengenai destinasi ini di halaman detail'}</p>
                                <div className='flex flex-row'>
                                    {/* <div className='flex flex-row space-x-2'>
                                        <img src='/ic-star.svg' alt='ic-star' />
                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'><span className='font-bold'>4.0</span> (38 Ulasan)</p>
                                    </div> */}
                                    <div className='flex-row space-x-2 flex'>
                                        <img src='/ic-location.svg' alt='ic-star' />
                                        <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 mb-2'>{destination.address == null ? 'Alamat untuk destinasi ini belum tersedia. Cek info mengenai destinasi ini di halaman detail' : destination.address}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                })}
            </div>
            <Pagination currentPage={activePage} total={totalData} pageSize={5} getCurrent={setactivePage} />
        </div>
    )
}
