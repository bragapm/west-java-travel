import { Footer } from "../../components/Footer";
import { GuideContentSection } from "../../components/guide-section/GuideContentSection";
import { GuideHeadSection } from "../../components/guide-section/GuideHeadSection";
import { Navbar } from "../../components/Navbar";
import useSWR from 'swr';
import { useRouter } from "next/dist/client/router";

export default function GuideDetail() {
    const router = useRouter();

    const { data, error } = useSWR(`https://panel.westjavatravel.com/items/travel_guide?filter[id][_eq]=${router.query.idGuide}`);

    return (
        <div className='smooth-scroll'>
            <Navbar activePage='home' />
            <GuideHeadSection guide={error ? null : !data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <GuideContentSection guide={error ? null : !data ? null : data.data == null ? null : data.data.length == 0 ? null : data.data[0]} />
            <Footer />
        </div>
    )
}