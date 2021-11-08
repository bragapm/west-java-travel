import { HomeAboutSection } from '../components/HomeComponent/HomeAboutSection'
import { HomeDestinationSection } from '../components/HomeComponent/HomeDestinationSection'
import { HomeHeroSection } from '../components/HomeComponent/HomeHeroSection'
import { HomeMapSection } from '../components/HomeComponent/HomeMapSection'
import { HomeSeasonSection } from '../components/HomeComponent/HomeSeasonSection'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeMapSection />
      <HomeDestinationSection />
      <HomeSeasonSection />
    </div>
  )
}
