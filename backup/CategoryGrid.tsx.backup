'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'
import { mockCategories } from '@/lib/mock-data'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Khám phá bộ sưu tập đa dạng các loại bánh xe và xe đẩy chất lượng cao
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi cung cấp đầy đủ các loại bánh xe từ tải nhẹ đến siêu tải, 
            phù hợp với mọi nhu cầu sử dụng từ gia đình đến công nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockCategories.map((category) => (
            <Link 
              key={category.id} 
              href={`/san-pham/${category.slug}`}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border-0 overflow-hidden">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={`/images/categories/${category.slug}.jpg`}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                  
                  {/* Category Icon */}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-2xl shadow-lg">
                      {category.icon}
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {category.featured && (
                    <Badge className="absolute top-4 right-4 bg-red-500 hover:bg-red-600">
                      Nổi bật
                    </Badge>
                  )}
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                    {category.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {category.productCount} sản phẩm
                    </Badge>
                    
                    <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700">
                      Xem thêm
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}