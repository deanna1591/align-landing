import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import AnimatedShowcase from '@/components/AnimatedShowcase'
import ProofRow from '@/components/ProofRow'
import OneScreen from '@/components/OneScreen'
import FeatureGallery from '@/components/FeatureGallery'
import ScreenShowcase from '@/components/ScreenShowcase'
import Storyboard from '@/components/Storyboard'
import Community from '@/components/Community'
import FAQ from '@/components/FAQ'
import EarlyAccess from '@/components/EarlyAccess'
import SiteFooter from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AnimatedShowcase />
        <ProofRow />
        <OneScreen />
        <FeatureGallery />
        <ScreenShowcase />
        <Storyboard />
        <Community />
        <FAQ />
        <EarlyAccess />
      </main>
      <SiteFooter />
    </>
  )
}
