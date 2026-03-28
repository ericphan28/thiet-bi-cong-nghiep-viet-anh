export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  productCount: number
  color: string
  featured: boolean
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  categoryId: string
  images: string[]
  specifications: Record<string, string>
  inStock: boolean
  featured: boolean
  contactInfo: {
    message: string
    hotline: string
    action: string
  }
  variants?: {
    type: string
    availability: 'available' | 'preorder' | 'contact'
  }[]
}

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Bánh xe tải nhẹ',
    slug: 'banh-xe-tai-nhe',
    description: 'Bánh xe chịu tải 30-50kg, phù hợp cho xe đẩy nhẹ và gia đình',
    icon: '🔵',
    productCount: 15,
    color: 'from-blue-500 to-blue-600',
    featured: true
  },
  {
    id: '2',
    name: 'Bánh xe tải trung',
    slug: 'banh-xe-tai-trung',
    description: 'Bánh xe chịu tải 70-130kg, phù hợp cho ứng dụng thương mại',
    icon: '🟠',
    productCount: 24,
    color: 'from-orange-500 to-orange-600',
    featured: true
  },
  {
    id: '3',
    name: 'Bánh xe tải nặng',
    slug: 'banh-xe-tai-nang',
    description: 'Bánh xe chịu tải 150-400kg, chuyên dụng cho công nghiệp nặng',
    icon: '🔴',
    productCount: 18,
    color: 'from-red-500 to-red-600',
    featured: true
  },
  {
    id: '4',
    name: 'Bánh xe giảm chấn',
    slug: 'banh-xe-giam-chan',
    description: 'Bánh xe có hệ thống giảm chấn, vận hành êm ái',
    icon: '🟣',
    productCount: 12,
    color: 'from-purple-500 to-purple-600',
    featured: true
  },
  {
    id: '5',
    name: 'Bánh xe y tế',
    slug: 'banh-xe-y-te',
    description: 'Bánh xe chuyên dụng cho thiết bị y tế và bệnh viện',
    icon: '🏥',
    productCount: 8,
    color: 'from-green-500 to-green-600',
    featured: true
  },
  {
    id: '6',
    name: 'Xe đẩy hàng',
    slug: 'xe-day-hang',
    description: 'Xe đẩy hàng hoàn chỉnh với nhiều kích thước và tải trọng',
    icon: '🛒',
    productCount: 20,
    color: 'from-cyan-500 to-cyan-600',
    featured: false
  },
  {
    id: '7',
    name: 'Bánh xe siêu tải',
    slug: 'banh-xe-sieu-tai',
    description: 'Bánh xe chịu tải cực cao trên 500kg, cho ứng dụng đặc biệt',
    icon: '⚫',
    productCount: 6,
    color: 'from-gray-500 to-gray-600',
    featured: false
  },
  {
    id: '8',
    name: 'Phụ kiện bánh xe',
    slug: 'phu-kien-banh-xe',
    description: 'Khóa bánh xe, bearing, trục và các phụ kiện đi kèm',
    icon: '🔧',
    productCount: 25,
    color: 'from-amber-500 to-amber-600',
    featured: false
  }
]

export const mockProducts: Product[] = [
  // Bánh xe tải nhẹ (30-50kg)
  {
    id: 'p1',
    name: 'Bánh xe tải nhẹ 75mm',
    slug: 'banh-xe-tai-nhe-75mm',
    description: 'Bánh xe tải nhẹ 75mm, chịu tải 50kg, phù hợp cho xe đẩy gia đình',
    categoryId: '1',
    images: ['/images/products/banh-xe-tai-nhe/75mm-main.jpg'],
    specifications: {
      'Đường kính': '75mm',
      'Chịu tải': '50kg',
      'Chất liệu': 'PU + thép',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '6 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    },
    variants: [
      { type: 'Cố định', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'Có khóa', availability: 'available' }
    ]
  },

  // Bánh xe tải trung (70-130kg)
  {
    id: 'p2',
    name: 'Bánh xe tải trung 100mm',
    slug: 'banh-xe-tai-trung-100mm',
    description: 'Bánh xe tải trung 100mm, chịu tải 120kg, ứng dụng thương mại',
    categoryId: '2',
    images: ['/images/products/banh-xe-tai-trung/100mm-main.jpg'],
    specifications: {
      'Đường kính': '100mm',
      'Chịu tải': '120kg',
      'Chất liệu': 'PU + thép',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '12 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    },
    variants: [
      { type: 'Cố định', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'Có khóa', availability: 'available' }
    ]
  },

  {
    id: 'p3',
    name: 'Bánh xe tải trung 125mm',
    slug: 'banh-xe-tai-trung-125mm',
    description: 'Bánh xe tải trung 125mm, chịu tải 150kg, bền bỉ và ổn định',
    categoryId: '2',
    images: ['/images/products/banh-xe-tai-trung/125mm-main.jpg'],
    specifications: {
      'Đường kính': '125mm',
      'Chịu tải': '150kg',
      'Chất liệu': 'PU + thép',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '12 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    },
    variants: [
      { type: 'Cố định', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'Có khóa', availability: 'available' }
    ]
  },

  // Bánh xe tải nặng (150-400kg)
  {
    id: 'p4',
    name: 'Bánh xe tải nặng 150mm',
    slug: 'banh-xe-tai-nang-150mm',
    description: 'Bánh xe tải nặng 150mm, chịu tải 200kg, cho công nghiệp nặng',
    categoryId: '3',
    images: ['/images/products/banh-xe-tai-nang/150mm-main.jpg'],
    specifications: {
      'Đường kính': '150mm',
      'Chịu tải': '200kg',
      'Chất liệu': 'PU + thép cường lực',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '18 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    },
    variants: [
      { type: 'Cố định', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'Có khóa', availability: 'available' }
    ]
  },

  {
    id: 'p5',
    name: 'Bánh xe tải nặng 200mm',
    slug: 'banh-xe-tai-nang-200mm',
    description: 'Bánh xe tải nặng 200mm, chịu tải 300kg, size lớn nhất',
    categoryId: '3',
    images: ['/images/products/banh-xe-tai-nang/200mm-main.jpg'],
    specifications: {
      'Đường kính': '200mm',
      'Chịu tải': '300kg',
      'Chất liệu': 'PU + thép cường lực',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '18 tháng'
    },
    inStock: true,
    featured: false,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    },
    variants: [
      { type: 'Cố định', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'Có khóa', availability: 'available' }
    ]
  },

  // Bánh xe giảm chấn
  {
    id: 'p6',
    name: 'Bánh xe giảm chấn 125mm',
    slug: 'banh-xe-giam-chan-125mm',
    description: 'Bánh xe có hệ thống giảm chấn, vận hành êm ái và không ồn',
    categoryId: '4',
    images: ['/images/products/banh-xe-giam-chan/125mm-main.jpg'],
    specifications: {
      'Đường kính': '125mm',
      'Chịu tải': '150kg',
      'Chất liệu': 'PU + spring steel',
      'Tính năng': 'Giảm chấn',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '24 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    }
  },

  // Bánh xe y tế
  {
    id: 'p7',
    name: 'Bánh xe y tế 125mm',
    slug: 'banh-xe-y-te-125mm',
    description: 'Bánh xe chuyên dụng cho thiết bị y tế, giường bệnh và xe lăn',
    categoryId: '5',
    images: ['/images/products/banh-xe-y-te/125mm-main.jpg'],
    specifications: {
      'Đường kính': '125mm',
      'Chịu tải': '120kg',
      'Chất liệu': 'Inox 304 + cao su y tế',
      'Tính năng': 'Kháng khuẩn, êm ái',
      'Xuất xứ': 'Việt Nam',
      'Bảo hành': '24 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    }
  },

  // Xe đẩy hàng
  {
    id: 'p8',
    name: 'Xe đẩy hàng 4 bánh 300kg',
    slug: 'xe-day-hang-4-banh-300kg',
    description: 'Xe đẩy 4 bánh chịu tải 300kg, thân xe từ thép không gỉ',
    categoryId: '6',
    images: ['/images/products/xe-day-hang/4-banh-300kg-main.jpg'],
    specifications: {
      'Chịu tải': '300kg',
      'Kích thước': '600x400x800mm',
      'Chất liệu': 'Thép không gỉ',
      'Số bánh xe': '4',
      'Loại bánh xe': 'PU 125mm',
      'Bảo hành': '18 tháng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'Liên hệ để báo giá tốt nhất',
      hotline: '0933408565',
      action: 'Yêu cầu báo giá'
    }
  }
]

export const testimonials = [
  {
    id: 't1',
    name: 'Anh Minh - KCN Tân Bình',
    content: 'Bánh xe chất lượng tốt, giá cả hợp lý. Đã mua 50 chiếc cho nhà máy, rất hài lòng với chất lượng và dịch vụ.',
    rating: 5,
    company: 'Công ty TNHH ABC Manufacturing',
    product: 'Bánh xe tải trung 125mm',
    avatar: '/images/testimonials/customer-1.jpg'
  },
  {
    id: 't2',
    name: 'Chị Lan - Bệnh viện Quận 7',
    content: 'Bánh xe y tế chất lượng cao, vận hành êm ái và không ồn. Rất phù hợp cho môi trường bệnh viện.',
    rating: 5,
    company: 'Bệnh viện Đa khoa Quận 7',
    product: 'Bánh xe y tế 125mm',
    avatar: '/images/testimonials/customer-2.jpg'
  },
  {
    id: 't3',
    name: 'Anh Tuấn - Bình Dương',
    content: 'Tư vấn nhiệt tình, giao hàng nhanh chóng. Sản phẩm đúng như cam kết, sẽ tiếp tục hợp tác lâu dài.',
    rating: 5,
    company: 'Nhà máy Dệt may DEF',
    product: 'Xe đẩy 4 bánh 300kg',
    avatar: '/images/testimonials/customer-3.jpg'
  }
]

export const companyInfo = {
  name: 'Công ty TNHH Thiết bị Công nghiệp Việt Anh',
  shortName: 'Bánh xe đẩy HCM',
  businessLicense: '3703306910',
  address: {
    street: '4/6 đường Lê Thị Út, Kp Chiều Liều',
    district: 'Dĩ An',
    city: 'Bình Dương',
    full: '4/6 đường Lê Thị Út, Kp Chiều Liều, Dĩ An, Bình Dương'
  },
  contact: {
    name: 'Nguyễn Văn Nam',
    phone: ['0933408565', '0946656975'],
    email: 'nguyennam82dian@gmail.com',
    website: 'https://banhxedayhcm.com'
  },
  workingHours: {
    weekdays: '8:00 - 17:00',
    saturday: '8:00 - 12:00',
    sunday: 'Nghỉ'
  },
  services: [
    'Tư vấn miễn phí',
    'Giao hàng tận nơi trong 24h',
    'Bảo hành chính hãng',
    'Hỗ trợ kỹ thuật',
    'Thanh toán linh hoạt'
  ],
  certifications: [
    'Giấy phép kinh doanh',
    'ISO 9001:2015',
    'Chứng nhận chất lượng'
  ],
  socialMedia: {
    facebook: 'https://facebook.com/banhxedayhcm',
    zalo: '0933408565',
    youtube: 'https://youtube.com/@banhxedayhcm',
    instagram: 'https://instagram.com/banhxedayhcm',
    tiktok: 'https://tiktok.com/@banhxedayhcm'
  }
}

export const stats = {
  customers: '500+',
  products: '1000+',
  experience: '10+',
  delivery: '24h'
}

export const processSteps = [
  {
    id: 'step1',
    title: 'Tư vấn miễn phí',
    description: 'Nhận tư vấn từ chuyên gia về sản phẩm phù hợp',
    icon: '📞',
    image: '/images/process/consultation.jpg'
  },
  {
    id: 'step2',
    title: 'Chọn sản phẩm',
    description: 'Lựa chọn sản phẩm từ kho hàng đa dạng',
    icon: '🛒',
    image: '/images/process/selection.jpg'
  },
  {
    id: 'step3',
    title: 'Giao hàng nhanh',
    description: 'Giao hàng trong 24h tại TP.HCM và các tỉnh lân cận',
    icon: '🚚',
    image: '/images/process/delivery.jpg'
  },
  {
    id: 'step4',
    title: 'Hỗ trợ sau bán',
    description: 'Bảo hành và hỗ trợ kỹ thuật trong suốt quá trình sử dụng',
    icon: '🔧',
    image: '/images/process/support.jpg'
  }
]