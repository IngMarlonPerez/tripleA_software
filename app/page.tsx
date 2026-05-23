import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import MetricsSection from '@/components/sections/MetricsSection'
import ServicesSection from '@/components/sections/ServicesSection'
import PortfolioSection from '@/components/sections/PortfolioSection'
import TechStackSection from '@/components/sections/TechStackSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'TripleSoftware — Desarrollo de Software a Medida en Ecuador',
  description:
    'Empresa ecuatoriana especializada en desarrollo de software a medida, aplicaciones web y móviles, ERP e integración de sistemas. Filial de Tecnograpp.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
