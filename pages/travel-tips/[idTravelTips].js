import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { DetailTravelTipsContentSection } from "../../components/travel-tips-section/DetailTravelTipsContentSection";
import { DetailTravelTipsHeadSection } from "../../components/travel-tips-section/DetailTravelTipsHeadSection";
import { DetailTravelTipsOthersSection } from "../../components/travel-tips-section/DetailTravelTipsOthersSection";

export default function TravelTipsDetail() {
    return (
        <div className='smooth-scroll'>
            <Navbar activePage='home' />
            <DetailTravelTipsHeadSection />
            <DetailTravelTipsContentSection />
            <DetailTravelTipsOthersSection />
            <Footer />
        </div>
    )
}