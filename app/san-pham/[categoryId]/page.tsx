import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { mockCategories, mockProducts, companyInfo } from '@/lib/mock-data'
import ProductCard from '@/components/ProductCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import Link from 'next/link'

interface CategoryPageProps {
  params: Promise<{
    categoryId: string
  }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categoryId } = await params
  const category = mockCategories.find(c => c.id === categoryId)
  
  if (!category) {
    return {
      title: 'Danh mục không tồn tại',
    }
  }

  return {
    title: `${category.name} - ${companyInfo.name}`,
    description: `${category.description}. Khám phá các sản phẩm ${category.name.toLowerCase()} chất lượng cao tại ${companyInfo.name}.`,
    keywords: `${category.name}, bánh xe đẩy, ${category.slug}`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  const category = mockCategories.find(c => c.id === categoryId)
  const categoryProducts = mockProducts.filter(p => p.categoryId === categoryId)

  if (!category) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Hero */}
      <section className={`bg-gradient-to-r ${category.color} text-white py-16`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{category.icon}</span>
                <Badge variant="secondary" className="text-sm">
                  {categoryProducts.length} sản phẩm
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {category.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#products">
                    Xem Sản Phẩm
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <a href={`tel:${companyInfo.contact.phone[0]}`}>
                    📞 Tư Vấn Ngay
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <ImageWithFallback
                  src={`/images/categories/${category.slug}.jpg`}
                  alt={category.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
            <span>/</span>
            <Link href="/san-pham" className="hover:text-blue-600">Sản phẩm</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{category.name}</span>
          </nav>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Sản Phẩm {category.name}</h2>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sm">
                {categoryProducts.length} sản phẩm
              </Badge>
            </div>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Chưa có sản phẩm</h3>
              <p className="text-gray-600 mb-6">
                Danh mục này hiện chưa có sản phẩm. Vui lòng liên hệ để biết thêm thông tin.
              </p>
              <Button asChild>
                <Link href="/lien-he">Liên Hệ Tư Vấn</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Danh Mục Khác</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockCategories
              .filter(c => c.id !== category.id)
              .slice(0, 8)
              .map((otherCategory) => (
                <Link key={otherCategory.id} href={`/san-pham/${otherCategory.id}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <div className="relative aspect-square mb-3 overflow-hidden rounded-lg">
                        <ImageWithFallback
                          src={`/images/categories/${otherCategory.slug}.jpg`}
                          alt={otherCategory.name}
                          width={200}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-semibold text-sm group-hover:text-blue-600 transition-colors">
                        {otherCategory.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {mockProducts.filter(p => p.categoryId === otherCategory.id).length} sản phẩm
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần Tư Vấn Chi Tiết?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Đội ngũ chuyên viên của chúng tôi sẵn sàng tư vấn chi tiết về các sản phẩm {category.name.toLowerCase()} 
            phù hợp với nhu cầu của bạn.
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

// Generate static params for all categories
export function generateStaticParams() {
  return mockCategories.map((category) => ({
    categoryId: category.id,
  }))
}
