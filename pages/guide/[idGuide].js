import Head from 'next/head';
import { Footer } from "../../components/Footer";
import { GuideContentSection } from "../../components/guide-section/GuideContentSection";
import { GuideHeadSection } from "../../components/guide-section/GuideHeadSection";
import { Navbar } from "../../components/Navbar";

export async function getStaticPaths() {
    let res = await fetch(
        `https://panel.westjavatravel.com/items/travel_guide?fields=id`
    );
    res = await res.json();

    return {
        paths: res.data.map((el) => ({
            params: { idGuide: el.id.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const id = params.idGuide;

    const data = await fetch(
        `https://panel.westjavatravel.com/items/travel_guide?filter[id][_eq]=${id}`
    );

    return {
        props: { data: await data.json() },
    };
}

export default function GuideDetail({ data }) {

    return (
        <div>
            <Head>
                <title>West Java Travel</title>
            </Head>
            <Navbar activePage='home' />
            <GuideHeadSection guide={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <GuideContentSection guide={!data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <Footer />
        </div>
    )
}