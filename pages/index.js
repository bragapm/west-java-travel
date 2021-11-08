import { HomeAboutSection } from '../components/HomeComponent/HomeAboutSection'
import { HomeAttractionSection } from '../components/HomeComponent/HomeAttractionSection'
import { HomeDestinationSection } from '../components/HomeComponent/HomeDestinationSection'
import { HomeHeroSection } from '../components/HomeComponent/HomeHeroSection'
import { HomeMapSection } from '../components/HomeComponent/HomeMapSection'
import { HomeMustVisitSection } from '../components/HomeComponent/HomeMustVisitSection'
import { HomeSeasonSection } from '../components/HomeComponent/HomeSeasonSection'

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
    </div>
  )
}
