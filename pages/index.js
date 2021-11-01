import { HomeAboutSection } from '../components/HomeAboutSection'
import { HomeHeroSection } from '../components/HomeHeroSection'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <HomeHeroSection />
      <HomeAboutSection />
    </div>
  )
}
