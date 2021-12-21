import { DestinationDetailContentSection } from "../../components/destination-detail/DestinationDetailContentSection";
import { DestinationDetailGallerySection } from "../../components/destination-detail/DestinationDetailGallerySection";
import { DestinationDetailHeadSection } from "../../components/destination-detail/DestinationDetailHeadSection";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export async function getStaticPaths() {
    let res = await fetch(
        `https://panel.westjavatravel.com/items/objek_wisata?fields=id`
    );
    res = await res.json();

    return {
        paths: res.data.map((el) => ({
            params: { idDestination: el.id.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.idDestination;

    const data = await fetch(
        `https://panel.westjavatravel.com/items/objek_wisata?filter[id][_eq]=${id}&fields=*,images.directus_files_id`
    );

    return {
        props: { data: await data.json() },
    };
}

export default function DestinationDetail({ data }) {    
    return (
        <div className='smooth-scroll'>
            <Navbar activePage='home' />
            <DestinationDetailHeadSection destination={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <DestinationDetailContentSection destination={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <DestinationDetailGallerySection destination={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <Footer />
        </div>
    )
}