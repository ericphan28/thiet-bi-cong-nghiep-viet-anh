import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import CategoryGrid from '@/components/sections/CategoryGrid'
import FeaturedProducts from '@/components/sections/FeaturedProducts'
import AboutSection from '@/components/sections/AboutSection'
import ProcessSection from '@/components/sections/ProcessSection'
import ContactCTA from '@/components/sections/ContactCTA'
import { OrganizationSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp chất lượng cao',
  description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng công nghiệp tại TP.HCM và Bình Dương. Bánh xe tải nhẹ, tải trung, tải nặng, y tế, giảm chấn. Giao hàng 24h. Hotline: 0933408565',
  alternates: {
    canonical: 'https://banhxedayhcm.com',
  },
}

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutSection />
      <ProcessSection />
      <ContactCTA />
    </>
  )
}
