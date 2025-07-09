'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                🏭 Chuyên gia bánh xe công nghiệp
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bánh xe đẩy
                <span className="text-blue-600 block">chất lượng cao</span>
                tại TP.HCM
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Chuyên cung cấp bánh xe công nghiệp, xe đẩy hàng với chất lượng Nhật Bản. 
                Bảo hành 24 tháng, giao hàng trong 24h tại TP.HCM.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Sản phẩm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Giao hàng</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/san-pham">
                  🛒 Xem sản phẩm
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link href="/lien-he">
                  📞 Tư vấn miễn phí
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <PlaceholderImage 
                width={600} 
                height={500} 
                text="Hero Banner - Bánh xe đẩy công nghiệp"
                className="w-full h-full"
                bgColor="bg-gradient-to-br from-blue-100 to-blue-200"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  ✅
                </div>
                <div>
                  <div className="font-semibold">Chất lượng đảm bảo</div>
                  <div className="text-sm text-gray-600">Bảo hành 24 tháng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
