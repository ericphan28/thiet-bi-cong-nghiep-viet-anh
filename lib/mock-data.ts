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
    name: 'BÃ¡nh xe táº£i nháº¹',
    slug: 'banh-xe-tai-nhe',
    description: 'BÃ¡nh xe chá»‹u táº£i 30-50kg, phÃ¹ há»£p cho xe Ä‘áº©y nháº¹ vÃ  gia Ä‘Ã¬nh',
    icon: 'ðŸ”µ',
    productCount: 15,
    color: 'from-blue-500 to-blue-600',
    featured: true
  },
  {
    id: '2',
    name: 'BÃ¡nh xe táº£i trung',
    slug: 'banh-xe-tai-trung',
    description: 'BÃ¡nh xe chá»‹u táº£i 70-130kg, phÃ¹ há»£p cho á»©ng dá»¥ng thÆ°Æ¡ng máº¡i',
    icon: 'ðŸŸ ',
    productCount: 24,
    color: 'from-orange-500 to-orange-600',
    featured: true
  },
  {
    id: '3',
    name: 'BÃ¡nh xe táº£i náº·ng',
    slug: 'banh-xe-tai-nang',
    description: 'BÃ¡nh xe chá»‹u táº£i 150-400kg, chuyÃªn dá»¥ng cho cÃ´ng nghiá»‡p náº·ng',
    icon: 'ðŸ”´',
    productCount: 18,
    color: 'from-red-500 to-red-600',
    featured: true
  },
  {
    id: '4',
    name: 'BÃ¡nh xe giáº£m cháº¥n',
    slug: 'banh-xe-giam-chan',
    description: 'BÃ¡nh xe cÃ³ há»‡ thá»‘ng giáº£m cháº¥n, váº­n hÃ nh Ãªm Ã¡i',
    icon: 'ðŸŸ£',
    productCount: 12,
    color: 'from-purple-500 to-purple-600',
    featured: true
  },
  {
    id: '5',
    name: 'BÃ¡nh xe y táº¿',
    slug: 'banh-xe-y-te',
    description: 'BÃ¡nh xe chuyÃªn dá»¥ng cho thiáº¿t bá»‹ y táº¿ vÃ  bá»‡nh viá»‡n',
    icon: 'ðŸ¥',
    productCount: 8,
    color: 'from-green-500 to-green-600',
    featured: true
  },
  {
    id: '6',
    name: 'Xe Ä‘áº©y hÃ ng',
    slug: 'xe-day-hang',
    description: 'Xe Ä‘áº©y hÃ ng hoÃ n chá»‰nh vá»›i nhiá»u kÃ­ch thÆ°á»›c vÃ  táº£i trá»ng',
    icon: 'ðŸ›’',
    productCount: 20,
    color: 'from-cyan-500 to-cyan-600',
    featured: false
  },
  {
    id: '7',
    name: 'BÃ¡nh xe siÃªu táº£i',
    slug: 'banh-xe-sieu-tai',
    description: 'BÃ¡nh xe chá»‹u táº£i cá»±c cao trÃªn 500kg, cho á»©ng dá»¥ng Ä‘áº·c biá»‡t',
    icon: 'âš«',
    productCount: 6,
    color: 'from-gray-500 to-gray-600',
    featured: false
  },
  {
    id: '8',
    name: 'Phá»¥ kiá»‡n bÃ¡nh xe',
    slug: 'phu-kien-banh-xe',
    description: 'KhÃ³a bÃ¡nh xe, bearing, trá»¥c vÃ  cÃ¡c phá»¥ kiá»‡n Ä‘i kÃ¨m',
    icon: 'ðŸ”§',
    productCount: 25,
    color: 'from-amber-500 to-amber-600',
    featured: false
  }
]

export const mockProducts: Product[] = [
  // BÃ¡nh xe táº£i nháº¹ (30-50kg)
  {
    id: 'p1',
    name: 'BÃ¡nh xe táº£i nháº¹ 75mm',
    slug: 'banh-xe-tai-nhe-75mm',
    description: 'BÃ¡nh xe táº£i nháº¹ 75mm, chá»‹u táº£i 50kg, phÃ¹ há»£p cho xe Ä‘áº©y gia Ä‘Ã¬nh',
    categoryId: '1',
    images: ['/images/products/banh-xe-tai-nhe/75mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '75mm',
      'Chá»‹u táº£i': '50kg',
      'Cháº¥t liá»‡u': 'PU + thÃ©p',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '6 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    },
    variants: [
      { type: 'Cá»‘ Ä‘á»‹nh', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'CÃ³ khÃ³a', availability: 'available' }
    ]
  },

  // BÃ¡nh xe táº£i trung (70-130kg)
  {
    id: 'p2',
    name: 'BÃ¡nh xe táº£i trung 100mm',
    slug: 'banh-xe-tai-trung-100mm',
    description: 'BÃ¡nh xe táº£i trung 100mm, chá»‹u táº£i 120kg, á»©ng dá»¥ng thÆ°Æ¡ng máº¡i',
    categoryId: '2',
    images: ['/images/products/banh-xe-tai-trung/100mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '100mm',
      'Chá»‹u táº£i': '120kg',
      'Cháº¥t liá»‡u': 'PU + thÃ©p',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '12 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    },
    variants: [
      { type: 'Cá»‘ Ä‘á»‹nh', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'CÃ³ khÃ³a', availability: 'available' }
    ]
  },

  {
    id: 'p3',
    name: 'BÃ¡nh xe táº£i trung 125mm',
    slug: 'banh-xe-tai-trung-125mm',
    description: 'BÃ¡nh xe táº£i trung 125mm, chá»‹u táº£i 150kg, bá»n bá»‰ vÃ  á»•n Ä‘á»‹nh',
    categoryId: '2',
    images: ['/images/products/banh-xe-tai-trung/125mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '125mm',
      'Chá»‹u táº£i': '150kg',
      'Cháº¥t liá»‡u': 'PU + thÃ©p',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '12 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    },
    variants: [
      { type: 'Cá»‘ Ä‘á»‹nh', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'CÃ³ khÃ³a', availability: 'available' }
    ]
  },

  // BÃ¡nh xe táº£i náº·ng (150-400kg)
  {
    id: 'p4',
    name: 'BÃ¡nh xe táº£i náº·ng 150mm',
    slug: 'banh-xe-tai-nang-150mm',
    description: 'BÃ¡nh xe táº£i náº·ng 150mm, chá»‹u táº£i 200kg, cho cÃ´ng nghiá»‡p náº·ng',
    categoryId: '3',
    images: ['/images/products/banh-xe-tai-nang/150mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '150mm',
      'Chá»‹u táº£i': '200kg',
      'Cháº¥t liá»‡u': 'PU + thÃ©p cÆ°á»ng lá»±c',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '18 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    },
    variants: [
      { type: 'Cá»‘ Ä‘á»‹nh', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'CÃ³ khÃ³a', availability: 'available' }
    ]
  },

  {
    id: 'p5',
    name: 'BÃ¡nh xe táº£i náº·ng 200mm',
    slug: 'banh-xe-tai-nang-200mm',
    description: 'BÃ¡nh xe táº£i náº·ng 200mm, chá»‹u táº£i 300kg, size lá»›n nháº¥t',
    categoryId: '3',
    images: ['/images/products/banh-xe-tai-nang/200mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '200mm',
      'Chá»‹u táº£i': '300kg',
      'Cháº¥t liá»‡u': 'PU + thÃ©p cÆ°á»ng lá»±c',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '18 thÃ¡ng'
    },
    inStock: true,
    featured: false,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    },
    variants: [
      { type: 'Cá»‘ Ä‘á»‹nh', availability: 'available' },
      { type: 'Xoay', availability: 'available' },
      { type: 'CÃ³ khÃ³a', availability: 'available' }
    ]
  },

  // BÃ¡nh xe giáº£m cháº¥n
  {
    id: 'p6',
    name: 'BÃ¡nh xe giáº£m cháº¥n 125mm',
    slug: 'banh-xe-giam-chan-125mm',
    description: 'BÃ¡nh xe cÃ³ há»‡ thá»‘ng giáº£m cháº¥n, váº­n hÃ nh Ãªm Ã¡i vÃ  khÃ´ng á»“n',
    categoryId: '4',
    images: ['/images/products/banh-xe-giam-chan/125mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '125mm',
      'Chá»‹u táº£i': '150kg',
      'Cháº¥t liá»‡u': 'PU + spring steel',
      'TÃ­nh nÄƒng': 'Giáº£m cháº¥n',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '24 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    }
  },

  // BÃ¡nh xe y táº¿
  {
    id: 'p7',
    name: 'BÃ¡nh xe y táº¿ 125mm',
    slug: 'banh-xe-y-te-125mm',
    description: 'BÃ¡nh xe chuyÃªn dá»¥ng cho thiáº¿t bá»‹ y táº¿, giÆ°á»ng bá»‡nh vÃ  xe lÄƒn',
    categoryId: '5',
    images: ['/images/products/banh-xe-y-te/125mm-main.jpg'],
    specifications: {
      'ÄÆ°á»ng kÃ­nh': '125mm',
      'Chá»‹u táº£i': '120kg',
      'Cháº¥t liá»‡u': 'Inox 304 + cao su y táº¿',
      'TÃ­nh nÄƒng': 'KhÃ¡ng khuáº©n, Ãªm Ã¡i',
      'Xuáº¥t xá»©': 'Viá»‡t Nam',
      'Báº£o hÃ nh': '24 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    }
  },

  // Xe Ä‘áº©y hÃ ng
  {
    id: 'p8',
    name: 'Xe Ä‘áº©y hÃ ng 4 bÃ¡nh 300kg',
    slug: 'xe-day-hang-4-banh-300kg',
    description: 'Xe Ä‘áº©y 4 bÃ¡nh chá»‹u táº£i 300kg, thÃ¢n xe tá»« thÃ©p khÃ´ng gá»‰',
    categoryId: '6',
    images: ['/images/products/xe-day-hang/4-banh-300kg-main.jpg'],
    specifications: {
      'Chá»‹u táº£i': '300kg',
      'KÃ­ch thÆ°á»›c': '600x400x800mm',
      'Cháº¥t liá»‡u': 'ThÃ©p khÃ´ng gá»‰',
      'Sá»‘ bÃ¡nh xe': '4',
      'Loáº¡i bÃ¡nh xe': 'PU 125mm',
      'Báº£o hÃ nh': '18 thÃ¡ng'
    },
    inStock: true,
    featured: true,
    contactInfo: {
      message: 'LiÃªn há»‡ Ä‘á»ƒ bÃ¡o giÃ¡ tá»‘t nháº¥t',
      hotline: '0933408565',
      action: 'YÃªu cáº§u bÃ¡o giÃ¡'
    }
  }
]

export const testimonials = [
  {
    id: 't1',
    name: 'Anh Minh - KCN TÃ¢n BÃ¬nh',
    content: 'BÃ¡nh xe cháº¥t lÆ°á»£ng tá»‘t, giÃ¡ cáº£ há»£p lÃ½. ÄÃ£ mua 50 chiáº¿c cho nhÃ  mÃ¡y, ráº¥t hÃ i lÃ²ng vá»›i cháº¥t lÆ°á»£ng vÃ  dá»‹ch vá»¥.',
    rating: 5,
    company: 'CÃ´ng ty TNHH ABC Manufacturing',
    product: 'BÃ¡nh xe táº£i trung 125mm',
    avatar: '/images/testimonials/customer-1.jpg'
  },
  {
    id: 't2',
    name: 'Chá»‹ Lan - Bá»‡nh viá»‡n Quáº­n 7',
    content: 'BÃ¡nh xe y táº¿ cháº¥t lÆ°á»£ng cao, váº­n hÃ nh Ãªm Ã¡i vÃ  khÃ´ng á»“n. Ráº¥t phÃ¹ há»£p cho mÃ´i trÆ°á»ng bá»‡nh viá»‡n.',
    rating: 5,
    company: 'Bá»‡nh viá»‡n Äa khoa Quáº­n 7',
    product: 'BÃ¡nh xe y táº¿ 125mm',
    avatar: '/images/testimonials/customer-2.jpg'
  },
  {
    id: 't3',
    name: 'Anh Tuáº¥n - BÃ¬nh DÆ°Æ¡ng',
    content: 'TÆ° váº¥n nhiá»‡t tÃ¬nh, giao hÃ ng nhanh chÃ³ng. Sáº£n pháº©m Ä‘Ãºng nhÆ° cam káº¿t, sáº½ tiáº¿p tá»¥c há»£p tÃ¡c lÃ¢u dÃ i.',
    rating: 5,
    company: 'NhÃ  mÃ¡y Dá»‡t may DEF',
    product: 'Xe Ä‘áº©y 4 bÃ¡nh 300kg',
    avatar: '/images/testimonials/customer-3.jpg'
  }
]

export const companyInfo = {
  name: 'CÃ´ng ty TNHH Thiáº¿t bá»‹ CÃ´ng nghiá»‡p Viá»‡t Anh',
  shortName: 'BÃ¡nh xe Ä‘áº©y HCM',
  businessLicense: '3703306910',
  address: {
    street: '4/6 Ä‘Æ°á»ng LÃª Thá»‹ Ãšt, Kp Chiá»u Liá»u',
    district: 'DÄ© An',
    city: 'BÃ¬nh DÆ°Æ¡ng',
    full: '4/6 Ä‘Æ°á»ng LÃª Thá»‹ Ãšt, Kp Chiá»u Liá»u, DÄ© An, BÃ¬nh DÆ°Æ¡ng'
  },
  contact: {
    name: 'Nguyá»…n VÄƒn Nam',
    phone: ['0933408565', '0946656975'],
    email: 'nguyennam82dian@gmail.com',
    website: 'https://banhxedayhcm.com'
  },
  workingHours: {
    weekdays: '8:00 - 17:00',
    saturday: '8:00 - 12:00',
    sunday: 'Nghá»‰'
  },
  services: [
    'TÆ° váº¥n miá»…n phÃ­',
    'Giao hÃ ng táº­n nÆ¡i trong 24h',
    'Báº£o hÃ nh chÃ­nh hÃ£ng',
    'Há»— trá»£ ká»¹ thuáº­t',
    'Thanh toÃ¡n linh hoáº¡t'
  ],
  certifications: [
    'Giáº¥y phÃ©p kinh doanh',
    'ISO 9001:2015',
    'Chá»©ng nháº­n cháº¥t lÆ°á»£ng'
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
    title: 'TÆ° váº¥n miá»…n phÃ­',
    description: 'Nháº­n tÆ° váº¥n tá»« chuyÃªn gia vá» sáº£n pháº©m phÃ¹ há»£p',
    icon: 'ðŸ“ž',
    image: '/images/process/consultation.jpg'
  },
  {
    id: 'step2',
    title: 'Chá»n sáº£n pháº©m',
    description: 'Lá»±a chá»n sáº£n pháº©m tá»« kho hÃ ng Ä‘a dáº¡ng',
    icon: 'ðŸ›’',
    image: '/images/process/selection.jpg'
  },
  {
    id: 'step3',
    title: 'Giao hÃ ng nhanh',
    description: 'Giao hÃ ng trong 24h táº¡i TP.HCM vÃ  cÃ¡c tá»‰nh lÃ¢n cáº­n',
    icon: 'ðŸšš',
    image: '/images/process/delivery.jpg'
  },
  {
    id: 'step4',
    title: 'Há»— trá»£ sau bÃ¡n',
    description: 'Báº£o hÃ nh vÃ  há»— trá»£ ká»¹ thuáº­t trong suá»‘t quÃ¡ trÃ¬nh sá»­ dá»¥ng',
    icon: 'ðŸ”§',
    image: '/images/process/support.jpg'
  }
]
