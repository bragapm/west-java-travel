import React from 'react'
import MemoIcArrow from '../../custom-icons/IcArrow'
import { MustVisitRegionSection } from './MustVisitRegionSection';

export const HomeMustVisitSection = () => {

    return (
        <section className='px-5 md:px-20'>
            <h4 className='capitalize font-montserrat font-bold text-lg md:text-2.5xl text-dark'>Tempat Terbaik di Jawa Barat</h4>
            <div className='w-full h-px bg-bordercolor mt-6' />
            <div className='flex flex-col divide-y divide-bordercolor md:divide-transparent'>
                <MustVisitRegionSection region='northern west java' regionId='4' />
                <MustVisitRegionSection region='southern west java' regionId='1' />
                <MustVisitRegionSection region='eastern west java' regionId='2' />
                <MustVisitRegionSection region='western west java' regionId='3' />
                <MustVisitRegionSection region='central west java' regionId='5' />
            </div>
        </section>
    );
}
