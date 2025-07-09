import { Card, CardContent } from '@/components/ui/card'
import PlaceholderImage from '@/components/ui/PlaceholderImage'

export default function ProcessSection() {
  const steps = [
    {
      step: '01',
      title: 'Tư vấn & Báo giá',
      description: 'Chúng tôi lắng nghe nhu cầu và tư vấn sản phẩm phù hợp nhất cho bạn',
      image: 'Tư vấn khách hàng'
    },
    {
      step: '02', 
      title: 'Chọn sản phẩm',
      description: 'Khách hàng lựa chọn sản phẩm từ kho hàng đa dạng với nhiều loại bánh xe',
      image: 'Kho hàng bánh xe'
    },
    {
      step: '03',
      title: 'Đóng gói & Giao hàng', 
      description: 'Đóng gói cẩn thận và giao hàng nhanh chóng đến tận nơi',
      image: 'Đóng gói giao hàng'
    },
    {
      step: '04',
      title: 'Hỗ trợ sau bán',
      description: 'Bảo hành chính hãng và hỗ trợ kỹ thuật suốt quá trình sử dụng',
      image: 'Hỗ trợ kỹ thuật'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Quy trình làm việc
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Chúng tôi đảm bảo quy trình làm việc chuyên nghiệp và minh bạch 
            để mang lại trải nghiệm tốt nhất cho khách hàng
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                {/* Step Number */}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 font-bold text-lg rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {item.step}
                </div>

                {/* Placeholder Image */}
                <div className="mb-4 rounded-lg overflow-hidden">
                  <PlaceholderImage 
                    width={280} 
                    height={160} 
                    text={item.image}
                    className="w-full h-40"
                    bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
                    textColor="text-blue-600"
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Arrow for connecting steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"/>
                    </svg>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Sẵn sàng bắt đầu với chúng tôi?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${"+84283890xxxx"}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              📞 Gọi ngay để tư vấn
            </a>
            <a 
              href="mailto:info@banhxedayhcm.com"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              ✉️ Gửi yêu cầu báo giá
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
