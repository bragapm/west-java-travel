import { Footer } from '../components/Footer'
import { HomeAboutSection } from '../components/HomeSections/HomeAboutSection'
import { HomeAttractionSection } from '../components/HomeSections/HomeAttractionSection'
import { HomeDestinationSection } from '../components/HomeSections/HomeDestinationSection'
import { HomeGuideSection } from '../components/HomeSections/HomeGuideSection'
import { HomeHeroSection } from '../components/HomeSections/HomeHeroSection'
import { HomeInspirationSection } from '../components/HomeSections/HomeInspirationSection'
import { HomeMapSection } from '../components/HomeSections/HomeMapSection'
import { HomeMustVisitSection } from '../components/HomeSections/HomeMustVisitSection'
import { HomeSeasonSection } from '../components/HomeSections/HomeSeasonSection'
import { HomeStorySection } from '../components/HomeSections/HomeStorySection'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Navbar activePage='home'/>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeMapSection />
      <HomeDestinationSection />
      <HomeSeasonSection />
      <HomeAttractionSection />
      <HomeMustVisitSection />
      <HomeStorySection />
      <HomeInspirationSection />
      <HomeGuideSection />
      <Footer />
    </div>
  )
}
