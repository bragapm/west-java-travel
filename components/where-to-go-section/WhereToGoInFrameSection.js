import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

export const WhereToGoInFrameSection = ({ inFrameSectionRef, regionId }) => {

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?filter[region][_eq]=${regionId}&fields=*,images.directus_files_id`);

    const [images, setimages] = useState([]);

    useEffect(() => {
        var allImages = [];

        if (data) {
            if (data.data) {
                for (let i = 0; i < data.data.length; i++) {
                    if (data.data[i].images.length != 0) {
                        for (let j = 0; j < data.data[i].images.length; j++) {
                            if (data.data[i].images[j] != null) {
                                allImages.push(data.data[i].images[j]);
                            }
                        }
                    }
                }

                console.log(allImages);

                setimages([...allImages]);
            }
        }

        return;
    }, [data])


    if (error) return <div></div>
    if (!data) return <div></div>
    if (data.data == undefined) return <div></div>
    if (data.data.length == 0) return <div></div>

    if (images.length == 0) return <div></div>


    return (
        <section className='flex flex-col z-10 px-5 md:px-20 mb-10' ref={inFrameSectionRef} id='in-frame-section'>
            <h4 className='capitalize font-montserrat font-bold text-dark text-lg md:text-2.5xl z-10'>Central West Java in Frame</h4>
            <div className='w-full h-px bg-bordercolor my-6 md:my-7' />
            <div className='flex flex-col md:flex-col-reverse items-center md:items-end'>
                <div className='grid grid-cols-6 z-10 gap-2.5 md:gap-3.5 w-full'>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:col-span-1 md:row-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[0] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[0].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:row-span-2'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[1] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[1].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[2] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[2].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-6 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[3] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[3].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[4] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[4].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[5] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[5].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[6] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[6].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-2 md:row-span-2'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[7] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[7].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-3 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[8] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[8].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[9] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[9].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[10] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[10].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                    <div className='rounded-md overflow-hidden relative col-span-2 md:md:col-span-1'>
                        <img onError={(e) => {
                            e.target.src = '/img-placeholder.png'
                        }} src={images[11] == null ? '/img-placeholder.png' : `https://panel.westjavatravel.com/assets/${images[11].directus_files_id}?key=inframe`} className='w-full h-full object-cover' />
                    </div>
                </div>
                {/* <button className='flex flex-row uppercase gap-x-2.5 font-karla text-dark font-bold text-sm md:text-lg py-4 px-6 items-center border border-bordercolor rounded-full max-w-[150px] md:max-w-[180px] mt-6 md:mt-0 z-20 md:mb-16 bg-white'>
                    <img src='/img-instagram.png' alt='ic-instagram' className='w-[14px] md:w-[20px] h-[14px] md:h-[20px]' />
                    follow us
                </button> */}
            </div>
        </section>
    )
}
