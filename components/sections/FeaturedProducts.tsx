'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { mockProducts } from '@/lib/mock-data'
import ProductCard from '@/components/ProductCard'

export default function FeaturedProducts() {
  const featuredProducts = mockProducts.filter(product => product.featured)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sản phẩm nổi bật
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Những sản phẩm được khách hàng tin tưởng và lựa chọn nhiều nhất
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/san-pham">
              Xem tất cả sản phẩm →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
