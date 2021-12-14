import React from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import MemoIcArrow from '../../custom-icons/IcArrow'
import { MustVisitItem } from './MustVisitItem'


export const MustVisitRegionSection = ({ region, regionId }) => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?filter[region][_eq]=${regionId}&fields=*,images.directus_files_id&limit=3`);

    if (error) return <div></div>
    if (!data) return <div></div>
    if (data.data == undefined) return <div></div>
    if (data.data.length == 0) return <div></div>


    return (
        <div className='flex flex-col md:flex-row py-5 md:justify-between'>
            <div className='flex flex-col md:w-4/12 md:pr-16'>
                <h5 className='capitalize font-montserrat font-bold text-dark mb-2.5 md:text-xl'>{region}</h5>
                <p className='font-karla text-neutral text-sm md:text-base'>Tempat untuk dikunjungi, jalan untuk dijelajahi, dan pengalaman khas.</p>
                <Link href={`/where-to-go/${region}`}>
                    <a className='mt-8 py-4 px-6 rounded-full border border-bordercolor max-w-[127px] font-karla font-bold text-sm md:flex flex-row justify-between hidden'>
                        SEE ALL
                        <MemoIcArrow />
                    </a>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row pt-8 md:pt-0 space-y-4 md:space-y-0 md:space-x-5'>
                {data.data.map((destination, indx) => {
                    return <MustVisitItem key={indx} destination={destination} />
                })}
            </div>
        </div>
    )
}
