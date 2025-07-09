import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import { companyInfo } from '@/lib/mock-data'

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Cần tư vấn về sản phẩm?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn lựa chọn sản phẩm phù hợp nhất. 
                Liên hệ ngay để được tư vấn miễn phí!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-8 h-8 text-yellow-300" />
                    <div>
                      <div className="text-sm text-blue-100">Hotline</div>
                      <div className="font-semibold">{companyInfo.contact.phone[0]}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-8 h-8 text-yellow-300" />
                    <div>
                      <div className="text-sm text-blue-100">Email</div>
                      <div className="font-semibold text-sm">{companyInfo.contact.email}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href={`tel:${companyInfo.contact.phone[0]}`}>
                  📞 Gọi ngay
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/lien-he">
                  📧 Gửi yêu cầu
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Company Info */}
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Thông tin công ty</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-100">
                      {companyInfo.address.full}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-blue-100">
                      <div>T2-T6: {companyInfo.workingHours.weekdays}</div>
                      <div>T7: {companyInfo.workingHours.saturday}</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/20">
                  <div className="text-sm text-blue-100">
                    <div className="font-medium text-white">{companyInfo.contact.name}</div>
                    <div>Chuyên viên tư vấn</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {companyInfo.services.slice(0, 4).map((service, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-yellow-300 rounded-full flex-shrink-0"></span>
                  <span className="text-blue-100">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}