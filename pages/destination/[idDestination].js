import { DestinationDetailContentSection } from "../../components/destination-detail/DestinationDetailContentSection";
import { DestinationDetailGallerySection } from "../../components/destination-detail/DestinationDetailGallerySection";
import { DestinationDetailHeadSection } from "../../components/destination-detail/DestinationDetailHeadSection";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import useSWR from 'swr';
import { useRouter } from "next/dist/client/router";

export default function DestinationDetail() {
    const router = useRouter();

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/objek_wisata?filter[id][_eq]=${router.query.idDestination}&fields=*,images.directus_files_id`);

    return (
        <div className='smooth-scroll'>
            <Navbar activePage='home' />
            <DestinationDetailHeadSection destination={error ? null : !data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <DestinationDetailContentSection destination={error ? null : !data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <DestinationDetailGallerySection destination={error ? null : !data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <Footer />
        </div>
    )
}