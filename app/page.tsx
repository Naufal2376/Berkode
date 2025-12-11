import HeroSection from "@/components/sections/HeroSection"
import ServicesSection from "@/components/sections/ServicesSection"
import WorksSection from "@/components/sections/WorksSection"
import TechStackSection from "@/components/sections/TechStackSection"
import ProcessSection from "@/components/sections/ProcessSection" // NEW
import FaqSection from "@/components/sections/FaqSection" // NEW
import FooterSection from "@/components/sections/FooterSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ServicesSection />
      <ProcessSection />
      <WorksSection />
      <FaqSection />
      <FooterSection />
    </>
  )
}
