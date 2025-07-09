'use client'

import { useState } from 'react'
import { companyInfo } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import ImageWithFallback from '@/components/ui/ImageWithFallback'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    productInterest: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        productInterest: ''
      })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="bg-white/20 text-white mb-4">
              Liên hệ ngay hôm nay
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Đội ngũ chuyên viên của {companyInfo.shortName} sẵn sàng tư vấn và hỗ trợ bạn 
              tìm kiếm giải pháp bánh xe đẩy phù hợp nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Điện Thoại</h3>
                <div className="space-y-1">
                  {companyInfo.contact.phone.map((phone, index) => (
                    <p key={index} className="text-gray-600">
                      <a href={`tel:${phone}`} className="hover:text-blue-600 transition-colors">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-blue-600 transition-colors">
                    {companyInfo.contact.email}
                  </a>
                </p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Địa Chỉ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {companyInfo.address.full}
                </p>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Giờ Làm Việc</h3>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>{companyInfo.workingHours.weekdays}</p>
                  <p>{companyInfo.workingHours.saturday}</p>
                  <p className="text-red-600">{companyInfo.workingHours.sunday}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Gửi Tin Nhắn</CardTitle>
                <p className="text-gray-600">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.
                </p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-semibold text-green-600 mb-2">
                      Cảm ơn bạn đã liên hệ!
                    </h3>
                    <p className="text-gray-600">
                      Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Họ và tên *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nhập họ và tên"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Số điện thoại *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Nhập số điện thoại"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Nhập email"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Công ty</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Tên công ty (nếu có)"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="productInterest">Sản phẩm quan tâm</Label>
                      <select
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Chọn sản phẩm</option>
                        <option value="banh-xe-tai-nhe">Bánh xe tải nhẹ</option>
                        <option value="banh-xe-tai-trung">Bánh xe tải trung</option>
                        <option value="banh-xe-tai-nang">Bánh xe tải nặng</option>
                        <option value="banh-xe-y-te">Bánh xe y tế</option>
                        <option value="banh-xe-giam-chan">Bánh xe giảm chấn</option>
                        <option value="xe-day-hang">Xe đẩy hàng</option>
                        <option value="phu-kien">Phụ kiện</option>
                        <option value="khac">Khác</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Tiêu đề *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Tiêu đề tin nhắn"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Nội dung tin nhắn *</Label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mô tả chi tiết nhu cầu của bạn..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Đang gửi...
                        </>
                      ) : (
                        '📧 Gửi tin nhắn'
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Company Info */}
            <div className="space-y-6">
              {/* Company Image */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="/images/contact/office.jpg"
                      alt={`Văn phòng ${companyInfo.name}`}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Company Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Thông Tin Công Ty</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Tên công ty:</h4>
                    <p className="text-gray-600">{companyInfo.name}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Giấy phép kinh doanh:</h4>
                    <p className="text-gray-600">{companyInfo.businessLicense}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Người liên hệ:</h4>
                    <p className="text-gray-600">{companyInfo.contact.name}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Website:</h4>
                    <p className="text-gray-600">
                      <a href={companyInfo.contact.website} className="text-blue-600 hover:underline">
                        {companyInfo.contact.website}
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Theo Dõi Chúng Tôi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a 
                      href={companyInfo.socialMedia.facebook} 
                      className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📘
                    </a>
                    <a 
                      href={companyInfo.socialMedia.youtube} 
                      className="flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📺
                    </a>
                    <a 
                      href={companyInfo.socialMedia.instagram} 
                      className="flex items-center justify-center w-12 h-12 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📷
                    </a>
                    <a 
                      href={`https://zalo.me/${companyInfo.socialMedia.zalo}`} 
                      className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💬
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vị Trí Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600">
              Ghé thăm showroom để trải nghiệm trực tiếp các sản phẩm
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Đến Với Chúng Tôi</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-600 mt-1">📍</span>
                  <div>
                    <h4 className="font-semibold mb-1">Địa chỉ:</h4>
                    <p className="text-gray-600">{companyInfo.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 mt-1">🚌</span>
                  <div>
                    <h4 className="font-semibold mb-1">Phương tiện công cộng:</h4>
                    <p className="text-gray-600">
                      Xe buýt số 03, 19, 152 - Dừng tại bến xe buýt {companyInfo.address.district}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-purple-600 mt-1">🚗</span>
                  <div>
                    <h4 className="font-semibold mb-1">Đi xe máy/ô tô:</h4>
                    <p className="text-gray-600">
                      Có chỗ đậu xe rộng rãi, thuận tiện cho việc vận chuyển hàng hóa
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(companyInfo.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🗺️ Xem trên Google Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-4xl mb-4">🗺️</div>
                <p className="text-lg font-medium">Google Maps</p>
                <p className="text-sm">{companyInfo.address.district}, {companyInfo.address.city}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Liên Hệ Nhanh</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bạn cần tư vấn ngay? Hãy gọi hotline hoặc nhắn tin cho chúng tôi!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href={`tel:${companyInfo.contact.phone[0]}`}>
                📞 Gọi ngay: {companyInfo.contact.phone[0]}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href={`mailto:${companyInfo.contact.email}`}>
                📧 Gửi email
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/san-pham">
                🛒 Xem sản phẩm
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
