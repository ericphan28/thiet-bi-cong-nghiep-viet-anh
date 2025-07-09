import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp',
  description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng chất lượng cao tại TP.HCM. Bánh xe PU, cao su, inox. Giá tốt, giao hàng nhanh.',
  keywords: 'bánh xe đẩy, xe đẩy hàng, bánh xe công nghiệp, bánh xe PU, bánh xe cao su, TP.HCM',
  openGraph: {
    title: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp',
    description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng chất lượng cao tại TP.HCM',
    url: 'https://banhxedayhcm.com',
    siteName: 'Bánh xe đẩy HCM',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bánh xe đẩy HCM',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
