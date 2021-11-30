import { DestinationDetailContentSection } from "../../components/destination-detail/DestinationDetailContentSection";
import { DestinationDetailGallerySection } from "../../components/destination-detail/DestinationDetailGallerySection";
import { DestinationDetailHeadSection } from "../../components/destination-detail/DestinationDetailHeadSection";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function DestinationDetail() {
    return (
        <div className='smooth-scroll'>
            <Navbar activePage='home' />
            <DestinationDetailHeadSection />
            <DestinationDetailContentSection />
            <DestinationDetailGallerySection />
            <Footer />
        </div>
    )
}