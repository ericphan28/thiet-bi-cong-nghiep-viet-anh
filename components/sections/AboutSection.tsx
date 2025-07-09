import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutSection() {
  const features = [
    {
      icon: '🏆',
      title: 'Chất lượng cao',
      description: 'Sản phẩm chính hãng, đạt tiêu chuẩn quốc tế ISO 9001'
    },
    {
      icon: '🚚',
      title: 'Giao hàng nhanh',
      description: 'Giao hàng trong ngày tại TP.HCM, toàn quốc trong 2-3 ngày'
    },
    {
      icon: '🛠️',
      title: 'Bảo hành dài hạn',
      description: 'Bảo hành 24 tháng, hỗ trợ kỹ thuật suốt đời'
    },
    {
      icon: '💰',
      title: 'Giá cả hợp lý',
      description: 'Giá trực tiếp từ nhà sản xuất, không qua trung gian'
    }
  ]

  const stats = [
    { number: '15+', label: 'Năm kinh nghiệm' },
    { number: '500+', label: 'Khách hàng tin tưởng' },
    { number: '1000+', label: 'Sản phẩm đa dạng' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200">
                🏢 Về chúng tôi
              </Badge>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Đối tác tin cậy cho
                <span className="text-blue-600 block">giải pháp bánh xe</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực cung cấp bánh xe và xe đẩy công nghiệp, 
                chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp tại TP.HCM và các tỉnh thành.
              </p>
              
              <p className="text-gray-600">
                Chúng tôi cam kết mang đến những sản phẩm chất lượng cao với giá cả hợp lý, 
                cùng dịch vụ hỗ trợ tận tâm để đáp ứng mọi nhu cầu của khách hàng.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/gioi-thieu">
                📖 Tìm hiểu thêm
              </Link>
            </Button>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tại sao chọn chúng tôi?</h3>
            
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
