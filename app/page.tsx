import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FlavorsSection } from "@/components/flavors-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FlavorsSection />
        <BenefitsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
