import { Metadata } from 'next'
import { mockCategories, mockProducts, companyInfo } from '@/lib/mock-data'
import ProductCard from '@/components/ProductCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `Tất cả sản phẩm - ${companyInfo.name}`,
  description: `Khám phá toàn bộ sản phẩm bánh xe đẩy chất lượng cao tại ${companyInfo.name}. Bánh xe công nghiệp, y tế, gia dụng với giá tốt nhất thị trường.`,
  keywords: 'bánh xe đẩy, bánh xe công nghiệp, bánh xe y tế, bánh xe tải nặng, bánh xe chất lượng',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sản Phẩm Bánh Xe Đẩy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Khám phá bộ sưu tập đầy đủ các loại bánh xe đẩy chất lượng cao, 
              từ công nghiệp đến y tế, phù hợp với mọi nhu cầu sử dụng.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Danh Mục Sản Phẩm</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockCategories.map((category) => (
              <Link key={category.id} href={`/san-pham/${category.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <CardContent className="p-4 text-center">
                    <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
                      <ImageWithFallback
                        src={`/images/categories/${category.slug}.jpg`}
                        alt={category.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {mockProducts.filter(p => p.categoryId === category.id).length} sản phẩm
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Tất Cả Sản Phẩm</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {mockProducts.length} sản phẩm
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tại Sao Chọn Chúng Tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-semibold mb-2">Chất Lượng Cao</h3>
              <p className="text-gray-600 text-sm">
                Sản phẩm được kiểm định chất lượng nghiêm ngặt, đảm bảo độ bền lâu dài.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-2">Giá Cả Cạnh Tranh</h3>
              <p className="text-gray-600 text-sm">
                Cam kết giá tốt nhất thị trường với chính sách ưu đãi hấp dẫn.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold mb-2">Giao Hàng Nhanh</h3>
              <p className="text-gray-600 text-sm">
                Giao hàng tận nơi nhanh chóng trong vòng 24-48h tại TP.HCM.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold mb-2">Hỗ Trợ Kỹ Thuật</h3>
              <p className="text-gray-600 text-sm">
                Đội ngũ kỹ thuật chuyên nghiệp hỗ trợ tư vấn 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần Tư Vấn Sản Phẩm?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá tốt nhất!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/lien-he">
                📞 Liên Hệ Ngay
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href={`tel:${companyInfo.contact.phone[0]}`}>
                📱 Hotline: {companyInfo.contact.phone[0]}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
