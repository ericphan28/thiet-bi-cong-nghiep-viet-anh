import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CategoryGrid from '@/components/sections/CategoryGrid'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import AboutSection from '@/components/sections/AboutSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata: Metadata = {
  title: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp',
  description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng chất lượng cao tại TP.HCM. Giá tốt, giao hàng nhanh.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutSection />
      <ProcessSection />
      <ContactCTA />
    </>
  )
}
