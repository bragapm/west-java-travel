import Head from 'next/head';
import { Footer } from '../components/Footer'
import { HomeMapSection } from '../components/home-sections/home-map-section/HomeMapSection'
import { HomeAboutSection } from '../components/home-sections/HomeAboutSection'
import { HomeAttractionSection } from '../components/home-sections/HomeAttractionSection'
import { HomeDestinationSection } from '../components/home-sections/HomeDestinationSection'
import { HomeGuideSection } from '../components/home-sections/home-guide-section/HomeGuideSection'
import { HomeHeroSection } from '../components/home-sections/HomeHeroSection'
import { HomeInspirationSection } from '../components/home-sections/HomeInspirationSection'
import { HomeSeasonSection } from '../components/home-sections/home-season-section/HomeSeasonSection'
import { HomeStorySection } from '../components/home-sections/HomeStorySection'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>West Java Travel</title>
      </Head>
      <Navbar activePage='home' />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeMapSection />
      <HomeDestinationSection />
      <HomeSeasonSection />
      <HomeAttractionSection />
      {/* <HomeMustVisitSection /> */}
      <HomeStorySection />
      <HomeInspirationSection />
      <HomeGuideSection />
      <Footer />
    </div>
  )
}
