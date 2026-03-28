import { companyInfo } from '@/lib/mock-data'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    description: 'Chuyên cung cấp bánh xe đẩy, xe đẩy hàng công nghiệp chất lượng cao tại TP.HCM và Bình Dương',
    url: 'https://banhxedayhcm.com',
    telephone: companyInfo.contact.phone[0],
    email: companyInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.district,
      addressRegion: companyInfo.address.city,
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.8976,
      longitude: 106.7500,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '12:00',
      },
    ],
    sameAs: [
      companyInfo.socialMedia.facebook,
      companyInfo.socialMedia.youtube,
    ],
    priceRange: '$$',
    image: 'https://banhxedayhcm.com/images/og-image.jpg',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ProductSchemaProps {
  name: string
  description: string
  image?: string
  sku: string
  category: string
}

export function ProductSchema({ name, description, image, sku, category }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image || 'https://banhxedayhcm.com/images/og-image.jpg',
    sku,
    category,
    brand: {
      '@type': 'Brand',
      name: 'Bánh xe đẩy HCM',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'VND',
      seller: {
        '@type': 'Organization',
        name: companyInfo.name,
      },
    },
    manufacturer: {
      '@type': 'Organization',
      name: companyInfo.name,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
