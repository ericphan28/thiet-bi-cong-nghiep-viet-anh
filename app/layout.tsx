import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FloatingContact from '@/components/FloatingContact'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000"

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp chất lượng cao',
    template: '%s | Bánh xe đẩy HCM',
  },
  description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng công nghiệp chất lượng cao tại TP.HCM và Bình Dương. Bánh xe PU, cao su, inox, bánh xe y tế, tải nặng. Giá tốt, giao hàng nhanh 24h. Hotline: 0933408565',
  keywords: [
    'bánh xe đẩy', 'xe đẩy hàng', 'bánh xe công nghiệp', 'bánh xe PU',
    'bánh xe cao su', 'bánh xe tải nặng', 'bánh xe y tế', 'bánh xe giảm chấn',
    'bánh xe đẩy HCM', 'bánh xe đẩy Bình Dương', 'caster wheel Vietnam',
    'mua bánh xe đẩy', 'bánh xe đẩy giá sỉ', 'bánh xe chịu tải',
  ],
  authors: [{ name: 'Công ty TNHH Thiết bị Công nghiệp Việt Anh' }],
  creator: 'Bánh xe đẩy HCM',
  publisher: 'Công ty TNHH Thiết bị Công nghiệp Việt Anh',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp chất lượng cao',
    description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng công nghiệp chất lượng cao tại TP.HCM. Giá tốt, giao hàng 24h. Hotline: 0933408565',
    url: 'https://banhxedayhcm.com',
    siteName: 'Bánh xe đẩy HCM',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bánh xe đẩy HCM - Chuyên cung cấp bánh xe công nghiệp',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://banhxedayhcm.com',
  },
  verification: {
    // Thêm Google Search Console verification code ở đây
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* Google Analytics - Thay G-XXXXXXXXXX bằng ID thật */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('consent', 'default', { analytics_storage: 'granted' });
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}
