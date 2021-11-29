import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { TravelTipsGuideSection } from "../../components/travel-tips-section/TravelTipsGuideSection";
import { TravelTipsRecommendationSection } from "../../components/travel-tips-section/TravelTipsRecommendationSection";
import { TravelTipsTravelSearchSection } from "../../components/travel-tips-section/TravelTipsTravelSearchSection";

export default function TravelTips() {
    return (
        <div className='overflow-hidden'>
            <Navbar activePage='travel-tips' />
            <TravelTipsRecommendationSection />
            <TravelTipsGuideSection />
            <TravelTipsTravelSearchSection />
            <Footer />
        </div>
    )
}