import { Metadata } from 'next'
import { companyInfo, testimonials, stats, processSteps } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Giới thiệu - ${companyInfo.name}`,
  description: `Tìm hiểu về ${companyInfo.name} - đơn vị hàng đầu chuyên cung cấp bánh xe đẩy chất lượng cao tại TP.HCM. Với nhiều năm kinh nghiệm và uy tín trong ngành.`,
  keywords: 'giới thiệu công ty, bánh xe đẩy HCM, công ty uy tín, kinh nghiệm lâu năm',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                Thành lập từ 2015
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Về {companyInfo.shortName}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Chúng tôi tự hào là đơn vị hàng đầu tại TP.HCM chuyên cung cấp các sản phẩm 
                bánh xe đẩy chất lượng cao, phục vụ đa dạng nhu cầu từ công nghiệp đến gia đình.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/san-pham">
                    Xem Sản Phẩm
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/lien-he">
                    Liên Hệ Ngay
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/images/hero/company-building.jpg"
                  alt={`Trụ sở ${companyInfo.name}`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stats.experience}
              </div>
              <p className="text-gray-600 font-medium">Năm kinh nghiệm</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {stats.customers}
              </div>
              <p className="text-gray-600 font-medium">Khách hàng hài lòng</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {stats.products}
              </div>
              <p className="text-gray-600 font-medium">Sản phẩm đã giao</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                50+
              </div>
              <p className="text-gray-600 font-medium">Đối tác tin cậy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Câu Chuyện Của Chúng Tôi</h2>
              <p className="text-xl text-gray-600">
                Hành trình xây dựng thương hiệu uy tín trong ngành bánh xe đẩy
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Khởi Đầu & Sứ Mệnh</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Được thành lập từ năm 2015, {companyInfo.name} bắt đầu từ ý tưởng đơn giản: 
                  cung cấp những sản phẩm bánh xe đẩy chất lượng cao với giá cả hợp lý, 
                  giúp các doanh nghiệp và gia đình có được những giải pháp vận chuyển tốt nhất.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Với đội ngũ có nhiều năm kinh nghiệm trong ngành, chúng tôi hiểu rõ nhu cầu 
                  đa dạng của khách hàng và cam kết mang đến những sản phẩm phù hợp nhất.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="/images/hero/team-working.jpg"
                    alt="Đội ngũ nhân viên chuyên nghiệp"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src="/images/hero/warehouse.jpg"
                    alt="Kho hàng hiện đại"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold mb-4">Phát Triển & Cam Kết</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Sau 10 năm hoạt động, chúng tôi đã phục vụ hơn 500 
                  khách hàng và giao hơn 1000 sản phẩm chất lượng.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Chúng tôi không ngừng đầu tư vào công nghệ, cải tiến quy trình để mang đến 
                  dịch vụ tốt nhất cho khách hàng. Sự hài lòng của quý khách chính là động lực 
                  để chúng tôi tiếp tục phát triển.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dịch Vụ Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600">
              Cam kết mang đến giải pháp toàn diện cho mọi nhu cầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyInfo.services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">
                      {index === 0 && '🛒'}
                      {index === 1 && '🚚'}
                      {index === 2 && '🔧'}
                      {index === 3 && '💡'}
                      {index === 4 && '🏆'}
                      {index >= 5 && '⭐'}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service}</h3>
                  <p className="text-gray-600 text-sm">
                    {index === 0 && 'Đa dạng sản phẩm chất lượng cao từ các thương hiệu uy tín'}
                    {index === 1 && 'Giao hàng nhanh chóng trong vòng 24-48h tại TP.HCM'}
                    {index === 2 && 'Hỗ trợ lắp đặt và bảo hành chuyên nghiệp'}
                    {index === 3 && 'Tư vấn miễn phí giải pháp phù hợp nhất'}
                    {index === 4 && 'Cam kết chất lượng với giá cả cạnh tranh'}
                    {index >= 5 && 'Dịch vụ chăm sóc khách hàng tận tình'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy Trình Làm Việc</h2>
            <p className="text-xl text-gray-600">
              Quy trình chuyên nghiệp đảm bảo chất lượng dịch vụ tốt nhất
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Chứng Nhận & Uy Tín</h2>
            <p className="text-xl text-gray-600">
              Được công nhận bởi các tổ chức uy tín trong ngành
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {companyInfo.certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h3 className="font-semibold text-sm">{cert}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Khách Hàng Nói Gì Về Chúng Tôi</h2>
            <p className="text-xl text-gray-600">
              Sự hài lòng của khách hàng là niềm tự hào của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xl">👤</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sẵn Sàng Hợp Tác Cùng Chúng Tôi?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Hãy để {companyInfo.shortName} đồng hành cùng bạn trong việc tìm kiếm 
            những giải pháp bánh xe đẩy tốt nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/lien-he">
                📞 Liên Hệ Ngay
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/san-pham">
                🛒 Xem Sản Phẩm
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
