import React, { useState } from 'react'
import { BorderedDropDownButton } from '../../custom-component/FieldComponent/BorderedDropDownButton';
import { TabComponent } from '../../custom-component/TabComponent';
import { HomeSectionTitle } from '../../custom-component/TextComponent/HomeSectionTitle'
import { DestinationTab } from './DestinationTab';
import MemoHomeMap from './HomeMap';

export const HomeMapSection = () => {
    const [activeRegion, setactiveRegion] = useState({ label: 'All Cities in West Java', value: '' });
    const [activeHoverRegion, setactiveHoverRegion] = useState(null);

    return (
        <section className='flex flex-col md:flex-row px-5 md:px-20 md:pb-20'>
            <div className='flex flex-col'>
                <HomeSectionTitle title='INTERACTIVE MAP' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9'>Jelajahi Jawa Barat</h3>
                <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.</p>
                <MemoHomeMap
                    activeHoverRegion={activeHoverRegion}
                    className='scale-60 md:scale-125 scale -translate-x-28 md:translate-x-6 -translate-y-10 md:translate-y-24'
                />
            </div>
            <div className='flex flex-col -translate-y-20 md:translate-y-0 md:pl-40 md:pr-8 w-full'>
                <BorderedDropDownButton
                    options={[
                        { label: 'All Cities in West Java', value: '' },
                        { label: 'Central West Java', value: '&filter[region][_eq]=5' },
                        { label: 'Northern West Java', value: '&filter[region][_eq]=4' },
                        { label: 'Southern West Java', value: '&filter[region][_eq]=1' },
                        { label: 'Eastern West Java', value: '&filter[region][_eq]=2' },
                        { label: 'Western West Java', value: '&filter[region][_eq]=3' },
                    ]}
                    activeValue={activeRegion}
                    setactiveValue={setactiveRegion}
                />
                <TabComponent
                    labels={['Destination', 'Restaurant', 'Accomodation']}
                    children={[
                        <DestinationTab
                            key='1'
                            activeRegion={activeRegion.value}
                            sector='filter[sector][_in]=["Destination"]'
                            setactiveHoverRegion={setactiveHoverRegion}
                        />,
                        <DestinationTab
                            key='2'
                            activeRegion={activeRegion.value}
                            sector='filter[sector][_in]=["Restaurant"]'
                            setactiveHoverRegion={setactiveHoverRegion}
                        />,
                        <DestinationTab
                            key='3'
                            activeRegion={activeRegion.value}
                            sector='filter[sector][_in]=["Accomodation"]'
                            setactiveHoverRegion={setactiveHoverRegion}
                        />,
                    ]}
                />
            </div>
        </section>
    )
}
