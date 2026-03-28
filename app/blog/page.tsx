import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { BreadcrumbSchema } from '@/components/JsonLd'
import PlaceholderImage from '@/components/ui/PlaceholderImage'
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Kiến thức bánh xe công nghiệp',
  description: 'Chia sẻ kiến thức chuyên sâu về bánh xe đẩy công nghiệp: hướng dẫn chọn mua, so sánh chất liệu, mẹo bảo trì và tin tức ngành. Cập nhật thường xuyên.',
  keywords: [
    'blog bánh xe đẩy', 'kiến thức bánh xe', 'hướng dẫn chọn bánh xe',
    'so sánh bánh xe PU cao su', 'bảo trì bánh xe công nghiệp',
  ],
  alternates: {
    canonical: 'https://banhxedayhcm.com/blog',
  },
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(p => p.featured)
  const recentPosts = blogPosts.filter(p => !p.featured)

  const getCategoryInfo = (categoryId: string) => {
    return blogCategories.find(c => c.id === categoryId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BreadcrumbSchema items={[
        { name: 'Trang chủ', url: 'https://banhxedayhcm.com' },
        { name: 'Blog', url: 'https://banhxedayhcm.com/blog' },
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">
            <BookOpen className="w-4 h-4 mr-1" /> Blog
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kiến thức bánh xe công nghiệp
          </h1>
          <p className="text-xl text-blue-50 max-w-3xl mx-auto">
            Chia sẻ kinh nghiệm, hướng dẫn chọn mua và bảo trì bánh xe đẩy 
            từ đội ngũ chuyên gia với hơn 10 năm kinh nghiệm
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Badge variant="outline" className="bg-white px-4 py-2 text-sm cursor-pointer hover:bg-gray-100">
            Tất cả
          </Badge>
          {blogCategories.map(cat => (
            <Badge key={cat.id} variant="outline" className={`px-4 py-2 text-sm cursor-pointer hover:opacity-80 ${cat.color}`}>
              {cat.name}
            </Badge>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📌 Bài viết nổi bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map(post => {
                const categoryInfo = getCategoryInfo(post.category)
                return (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg bg-gray-100">
                        <PlaceholderImage
                          width={400}
                          height={225}
                          text={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
                        />
                        {categoryInfo && (
                          <Badge className={`absolute top-3 left-3 ${categoryInfo.color}`}>
                            {categoryInfo.name}
                          </Badge>
                        )}
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <User className="w-3 h-3" /> {post.author}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {post.readTime} phút đọc
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Bài viết gần đây</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map(post => {
                const categoryInfo = getCategoryInfo(post.category)
                return (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-5 flex gap-4">
                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                          <PlaceholderImage
                            width={96}
                            height={96}
                            text=""
                            bgColor="bg-gradient-to-br from-gray-50 to-gray-100"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          {categoryInfo && (
                            <Badge className={`text-xs mb-2 ${categoryInfo.color}`}>
                              {categoryInfo.name}
                            </Badge>
                          )}
                          <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span>{post.publishedAt}</span>
                            <span>{post.readTime} phút đọc</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Cần tư vấn thêm?</h2>
          <p className="text-blue-50 mb-6 max-w-xl mx-auto">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn chọn bánh xe phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0933408565"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              📞 Gọi: 0933408565
            </a>
            <a
              href="https://zalo.me/0933408565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              💬 Chat Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
