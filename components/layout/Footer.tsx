import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle, Youtube } from 'lucide-react'
import { companyInfo } from '@/lib/mock-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white text-xl font-bold">
                B
              </div>
              <div>
                <div className="text-lg font-bold">{companyInfo.shortName}</div>
                <div className="text-sm text-gray-400">Chất lượng đảm bảo</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Chuyên cung cấp bánh xe đẩy, xe đẩy hàng chất lượng cao. 
              Cam kết sản phẩm chính hãng, giá tốt nhất thị trường.
            </p>
            <div className="text-sm text-gray-400">
              <div>GPKD: {companyInfo.businessLicense}</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  {companyInfo.address.full}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  {companyInfo.contact.phone.map((phone, index) => (
                    <div key={index}>
                      <a href={`tel:${phone}`} className="text-gray-300 hover:text-white transition-colors">
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>T2-T6: {companyInfo.workingHours.weekdays}</div>
                  <div>T7: {companyInfo.workingHours.saturday}</div>
                  <div>CN: {companyInfo.workingHours.sunday}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dịch vụ</h3>
            <ul className="space-y-2">
              {companyInfo.services.map((service, index) => (
                <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Theo dõi chúng tôi</h3>
            <div className="flex space-x-4">
              <a href={companyInfo.socialMedia.facebook} className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={`https://zalo.me/${companyInfo.socialMedia.zalo}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href={companyInfo.socialMedia.youtube} className="text-gray-400 hover:text-red-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Liên kết nhanh</h4>
              <div className="space-y-1">
                <Link href="/san-pham" className="block text-sm text-gray-300 hover:text-white transition-colors">
                  Sản phẩm
                </Link>
                <Link href="/blog" className="block text-sm text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="/gioi-thieu" className="block text-sm text-gray-300 hover:text-white transition-colors">
                  Giới thiệu
                </Link>
                <Link href="/lien-he" className="block text-sm text-gray-300 hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div>
              © {currentYear} {companyInfo.name}. Tất cả quyền được bảo lưu.
            </div>
            <div className="mt-2 md:mt-0">
              Thiết kế bởi <span className="text-blue-400">Bánh xe đẩy HCM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}