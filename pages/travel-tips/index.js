import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { TravelTipsGuideSection } from "../../components/travel-tips-section/TravelTipsGuideSection";
import { TravelTipsRecommendationSection } from "../../components/travel-tips-section/TravelTipsRecommendationSection";

export default function TravelTips() {
    return (
        <div className='overflow-hidden'>
            <Navbar activePage='travel-tips' />
            <TravelTipsRecommendationSection />
            <TravelTipsGuideSection />
            <Footer />
        </div>
    )
}