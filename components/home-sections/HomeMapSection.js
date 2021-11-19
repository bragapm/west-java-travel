import { fromJSON } from 'postcss'
import React from 'react'
import { BorderedDropDownButton } from '../custom-component/FieldComponent/BorderedDropDownButton';
import { TabComponent } from '../custom-component/TabComponent';
import { HomeSectionTitle } from '../custom-component/TextComponent/HomeSectionTitle'
import MemoHomeMap from './HomeMap';

const destination = [
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
    { title: 'Green Canyon', description: 'Ngarai yang diapit oleh dua bukit dengan bebatuan dan rimbunnya pepohonan menyajikan atraksi alam yang khas dan menantang' },
];

export const HomeMapSection = () => {
    return (
        <section className='flex flex-col md:flex-row px-5 md:px-20 md:pb-20'>
            <div className='flex flex-col'>
                <HomeSectionTitle title='INTERACTIVE MAP' />
                <h3 className='font-bold text-dark font-montserrat text-2xl md:text-5.5xl mt-6 md:pl-9'>Jelajahi Jawa Barat</h3>
                <p className='font-karla text-sm md:text-base text-neutral mt-4 md:pl-9 md:pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing.</p>
                <MemoHomeMap className='scale-60 md:scale-125 scale -translate-x-28 md:translate-x-0 -translate-y-10 md:translate-y-24' />
            </div>
            <div className='flex flex-col -translate-y-20 md:translate-y-0 md:pl-40 md:pr-8'>
                <BorderedDropDownButton
                    options={[
                        { label: 'All Cities in West Java' },
                        { label: 'Bandung' },
                        { label: 'Sukabumi' },
                        { label: 'Bogor' },
                    ]}
                />
                <TabComponent
                    labels={['Destination', 'Restaurant', 'Accomodation']}
                    children={[
                        <div key='1' className='relative'>
                            <div className='max-h-[600px] overflow-scroll mt-5'>
                                {destination.map((data, idx) => {
                                    return <div key={idx} className='flex flex-row space-x-5 p-5 items-start'>
                                        <img src='img-sample-destination.png' alt={`img-${data.title}`} className='rounded-md md:rounded-2lg' />
                                        <div className='flex flex-col'>
                                            <h4 className='font-montserrat text-dark font-bold text-sm md:text-base'>{data.title}</h4>
                                            <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 overflow-ellipsis overflow-hidden max-h-16'>{data.description}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className='w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-4' />
                        </div>,
                        <div key='2' className='relative'>
                            <div className='max-h-[600px] overflow-scroll mt-5'>
                                {destination.map((data, idx) => {
                                    return <div key={idx} className='flex flex-row space-x-5 p-5 items-start'>
                                        <img src='img-sample-destination.png' alt={`img-${data.title}`} className='rounded-md md:rounded-2lg' />
                                        <div className='flex flex-col'>
                                            <h4 className='font-montserrat text-dark font-bold text-sm md:text-base'>{data.title}</h4>
                                            <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 overflow-ellipsis overflow-hidden max-h-16'>{data.description}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className='w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-4' />
                        </div>,
                        <div key='3' className='relative'>
                            <div className='max-h-[600px] overflow-scroll mt-5'>
                                {destination.map((data, idx) => {
                                    return <div key={idx} className='flex flex-row space-x-5 p-5 items-start'>
                                        <img src='img-sample-destination.png' alt={`img-${data.title}`} className='rounded-md md:rounded-2lg' />
                                        <div className='flex flex-col'>
                                            <h4 className='font-montserrat text-dark font-bold text-sm md:text-base'>{data.title}</h4>
                                            <p className='font-karla text-neutral text-xs md:text-sm mt-1.5 overflow-ellipsis overflow-hidden max-h-16'>{data.description}</p>
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className='w-full h-32 bg-gradient-to-t from-white to-transparent absolute -bottom-4' />
                        </div>,
                    ]}
                />
            </div>
        </section>
    )
}
