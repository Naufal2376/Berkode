import HeroSection from "@/components/sections/HeroSection"
import StatsSection from "@/components/sections/StatsSection"
import TechStackSection from "@/components/sections/TechStackSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WorksSection from "@/components/sections/WorksSection"
import TeamSection from "@/components/sections/TeamSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import ProcessSection from "@/components/sections/ProcessSection"
import FaqSection from "@/components/sections/FaqSection"
import FooterSection from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <TechStackSection />
      <ServicesSection />
      <WorksSection />
      <TeamSection />
      <TestimonialsSection />
      <ProcessSection />
      <FaqSection />
      <FooterSection />
    </>
  )
}
