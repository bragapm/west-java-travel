import React from 'react'
import useSWR from 'swr'
import { DestinationErrorState } from './DestinationErrorState';
import { DestinationItem } from './DestinationItem';
import { DestinationLoadingState } from './DestinationLoadingState';


export const DestinationTab = ({ activeRegion, sector, setactiveHoverRegion }) => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?${sector}${activeRegion}&fields=*,images.directus_files_id`);

    if (error) return <DestinationErrorState message='Terjadi sebuah kesalahan, gagal mengambil data' />
    if (!data) return <DestinationLoadingState />

    if (data.data.length == 0) return <DestinationErrorState message='Belum ada tujuan wisata untuk kategori dan daerah ini' />

    return (
        <section className='relative'>
            <div className='h-[600px] overflow-scroll mt-5 pb-10'>
                {data.data.map((data, indx) => {
                    return <DestinationItem
                        key={indx}
                        destination={data}
                        setactiveHoverRegion={setactiveHoverRegion}
                    />
                })}
            </div>
            <div className='w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-4' />
        </section>
    )
}
