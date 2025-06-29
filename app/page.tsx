import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black" style={{ cursor: 'none' }}>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
