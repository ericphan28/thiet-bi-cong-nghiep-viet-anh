'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Product } from '@/lib/mock-data'
import { formatPrice } from '@/lib/utils'
import ImageWithFallback from '@/components/ui/ImageWithFallback'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  
  const currentPrice = product.variants 
    ? product.variants[selectedVariant].price 
    : product.price

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 h-full">
      <CardHeader className="p-4">
        <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
          <ImageWithFallback 
            src={product.images[0] || `/images/products/${product.categoryId}/${product.slug}/main.jpg`}
            alt={product.name}
            width={300} 
            height={300} 
            className="w-full h-full"
          />
          
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              -{product.discount}%
            </Badge>
          )}
          {product.featured && (
            <Badge className="absolute top-2 right-2 bg-blue-500">
              Nổi bật
            </Badge>
          )}
          {product.inStock && (
            <Badge className="absolute bottom-2 left-2 bg-green-500">
              ✓ Còn hàng
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
          {product.name}
        </CardTitle>
        
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        {/* Variants */}
        {product.variants && (
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Loại:</p>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((variant, index) => (
                <Button
                  key={index}
                  variant={selectedVariant === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedVariant(index)}
                  className="text-xs"
                >
                  {variant.type}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            {formatPrice(currentPrice)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Specs */}
        <div className="space-y-1">
          {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
            <div key={key} className="flex justify-between text-xs">
              <span className="text-gray-500">{key}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <div className="w-full space-y-2">
          <Button asChild className="w-full">
            <Link href={`/san-pham/${product.categoryId}/${product.slug}`}>
              Xem chi tiết
            </Link>
          </Button>
          
          <Button variant="outline" className="w-full">
            📞 Liên hệ báo giá
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
