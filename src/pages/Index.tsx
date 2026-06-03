import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { AboutSection } from "@/components/AboutSection"
import { ProcessSection } from "@/components/ProcessSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { FloatingContacts } from "@/components/FloatingContacts"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <FloatingContacts />
    </main>
  )
}
