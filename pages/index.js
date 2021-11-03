import { HomeAboutSection } from '../components/HomeComponent/HomeAboutSection'
import { HomeHeroSection } from '../components/HomeComponent/HomeHeroSection'
import { HomeMapSection } from '../components/HomeComponent/HomeMapSection'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeMapSection />
    </div>
  )
}
