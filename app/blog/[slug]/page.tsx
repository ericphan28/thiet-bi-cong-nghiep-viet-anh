import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { blogPosts, blogCategories } from '@/lib/blog-data'
import { BreadcrumbSchema } from '@/components/JsonLd'
import { Clock, User, ArrowLeft, Phone } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return { title: 'Bài viết không tồn tại' }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://banhxedayhcm.com/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const categoryInfo = blogCategories.find(c => c.id === post.category)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2)

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        // Headers
        if (line.startsWith('## ')) {
          return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.replace('## ', '')}</h2>
        }
        if (line.startsWith('### ')) {
          return <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.replace('### ', '')}</h3>
        }
        // List items
        if (line.startsWith('- ')) {
          return <li key={i} className="text-gray-700 ml-4 mb-1">{line.replace('- ', '')}</li>
        }
        // Numbered list
        if (/^\d+\.\s/.test(line)) {
          return <li key={i} className="text-gray-700 ml-4 mb-1 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>
        }
        // Table header separator - skip
        if (line.startsWith('|--') || line.startsWith('| --')) return null
        // Table rows
        if (line.startsWith('|')) {
          const cells = line.split('|').filter(c => c.trim())
          if (cells.length > 0) {
            return (
              <div key={i} className="grid grid-cols-2 gap-2 py-2 border-b border-gray-100 text-sm">
                {cells.map((cell, j) => (
                  <div key={j} className={j === 0 ? 'font-medium text-gray-700' : 'text-gray-600'}>
                    {cell.trim()}
                  </div>
                ))}
              </div>
            )
          }
        }
        // Empty line
        if (line.trim() === '') return <div key={i} className="h-3" />
        // Bold text
        const boldProcessed = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Regular paragraph
        return <p key={i} className="text-gray-700 leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: boldProcessed }} />
      })
      .filter(Boolean)
  }

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    datePublished: post.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Bánh xe đẩy HCM',
    },
    mainEntityOfPage: `https://banhxedayhcm.com/blog/${post.slug}`,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Trang chủ', url: 'https://banhxedayhcm.com' },
        { name: 'Blog', url: 'https://banhxedayhcm.com/blog' },
        { name: post.title, url: `https://banhxedayhcm.com/blog/${post.slug}` },
      ]} />

      {/* Header image */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Quay lại Blog
          </Link>
          <div className="max-w-3xl">
            {categoryInfo && (
              <Badge className={`mb-4 ${categoryInfo.color}`}>
                {categoryInfo.name}
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {post.readTime} phút đọc
              </span>
              <span>{post.publishedAt}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <article className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8 prose prose-blue max-w-none">
                {renderContent(post.content)}
              </CardContent>
            </Card>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-white">
                  #{tag}
                </Badge>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* CTA */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <Phone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Cần tư vấn?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Gọi ngay để được tư vấn miễn phí từ chuyên gia
                </p>
                <a
                  href="tel:0933408565"
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-2"
                >
                  📞 0933408565
                </a>
                <a
                  href="https://zalo.me/0933408565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  💬 Chat Zalo
                </a>
              </CardContent>
            </Card>

            {/* Related posts */}
            {relatedPosts.length > 0 && (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Bài viết liên quan</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(rp => (
                      <Link key={rp.id} href={`/blog/${rp.slug}`} className="block group">
                        <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors text-sm line-clamp-2">
                          {rp.title}
                        </h4>
                        <span className="text-xs text-gray-500">{rp.readTime} phút đọc</span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Quick links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4">Danh mục sản phẩm</h3>
                <div className="space-y-2">
                  <Link href="/san-pham/1" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">→ Bánh xe tải nhẹ</Link>
                  <Link href="/san-pham/2" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">→ Bánh xe tải trung</Link>
                  <Link href="/san-pham/3" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">→ Bánh xe tải nặng</Link>
                  <Link href="/san-pham/4" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">→ Bánh xe giảm chấn</Link>
                  <Link href="/san-pham/5" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">→ Bánh xe y tế</Link>
                  <Link href="/san-pham/6" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">→ Xe đẩy hàng</Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
