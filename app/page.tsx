  import HeroSection from '../components/hero-section'
  import HowItWorks from '../components/how-it-works'
  import FeaturesSection from '../components/features'
  import IntegrationsSection from '../components/integrations'
  import StatsSection from '../components/stats'
  import CommunitySection from '../components/community'
  import WaitList from '../components/waitlist'
  import FaqSection from '../components/faqs'
  import FooterSection from '@/components/footer'


  export default function Home() {
    return (
      <>
        <HeroSection />
        <HowItWorks />
        <FeaturesSection />
        <IntegrationsSection />
        <StatsSection />
        
        <div className="horizontal-sections">
          <div className="horizontal-section">
            <CommunitySection />
          </div>
          <div className="horizontal-section">
            <WaitList />
          </div>
        </div>
        <FaqSection />
        <FooterSection />
      </>
    )
  }