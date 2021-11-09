import { HomeAboutSection } from '../components/HomeComponent/HomeAboutSection'
import { HomeAttractionSection } from '../components/HomeComponent/HomeAttractionSection'
import { HomeDestinationSection } from '../components/HomeComponent/HomeDestinationSection'
import { HomeGuideSection } from '../components/HomeComponent/HomeGuideSection'
import { HomeHeroSection } from '../components/HomeComponent/HomeHeroSection'
import { HomeInspirationSection } from '../components/HomeComponent/HomeInspirationSection'
import { HomeMapSection } from '../components/HomeComponent/HomeMapSection'
import { HomeMustVisitSection } from '../components/HomeComponent/HomeMustVisitSection'
import { HomeSeasonSection } from '../components/HomeComponent/HomeSeasonSection'
import { HomeStorySection } from '../components/HomeComponent/HomeStorySection'

export default function Home() {
  return (
    <div className='overflow-hidden'>
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
    </div>
  )
}
