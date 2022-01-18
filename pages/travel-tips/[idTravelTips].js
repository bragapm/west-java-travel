import Head from 'next/head';
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { DetailTravelTipsContentSection } from "../../components/travel-tips-section/DetailTravelTipsContentSection";
import { DetailTravelTipsHeadSection } from "../../components/travel-tips-section/DetailTravelTipsHeadSection";
import { DetailTravelTipsOthersSection } from "../../components/travel-tips-section/DetailTravelTipsOthersSection";


export async function getStaticPaths() {
    let res = await fetch(
        `https://panel.westjavatravel.com/items/travel_tips?fields=id`
    );
    res = await res.json();

    return {
        paths: res.data.map((el) => ({
            params: { idTravelTips: el.id.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.idTravelTips;

    const data = await fetch(
        `https://panel.westjavatravel.com/items/travel_tips?filter[id][_eq]=${id}&fields=*,travel_tips_files.directus_files_id`
    );

    return {
        props: { data: await data.json() },
    };
}

export default function TravelTipsDetail({ data }) {
    return (
        <div>
            <Head>
                <title>West Java Travel</title>
            </Head>
            <Navbar activePage='home' />
            <DetailTravelTipsHeadSection data={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <DetailTravelTipsContentSection data={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <DetailTravelTipsOthersSection />
            <Footer />
        </div>
    )
}