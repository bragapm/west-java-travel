import React from 'react'
import useSWR from 'swr'
import { SeasonItem } from './SeasonItem';
import { SeasonLoadingState } from './SeasonLoadingState';

export const SeasonTab = ({ season }) => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?fields=*,images.directus_files_id&filter[season][_eq]=${season}`);

    if (error) return <SeasonLoadingState />
    if (!data) return <SeasonLoadingState />
    if (!data.data) return <SeasonLoadingState />
    if (data.data.length == 0) return <SeasonLoadingState />


    return (
        <div className='pt-8 flex flex-row max-w-[100vw] overflow-scroll pb-5'>
            {data.data.map((seasonData, indx) => {
                return <SeasonItem key={indx} indx={indx} seasonData={seasonData} />
            })}
        </div>
    )
}
