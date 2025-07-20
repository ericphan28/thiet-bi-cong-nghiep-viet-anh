# 📊 DATA MODELS & BUSINESS LOGIC

## 🏢 **Business Context**

### **Company Profile**
```typescript
// Thiết Bị Công Nghiệp Việt Anh
export const companyInfo = {
  name: "Thiết Bị Công Nghiệp Việt Anh",
  establishedYear: 2015,
  specialization: "Bánh xe đẩy công nghiệp, xe đẩy hàng",
  location: "TP. Hồ Chí Minh, Việt Nam",
  targetMarket: "B2B - Nhà máy, kho bãi, bệnh viện, siêu thị",
  
  contact: {
    hotline: "0901 234 567",
    email: "contact@thietbicongnghiepvietanh.com",
    address: "123 Đường ABC, Quận 1, TP.HCM",
    website: "thietbicongnghiepvietanh.com"
  },
  
  businessHours: {
    weekdays: "8:00 - 17:30",
    saturday: "8:00 - 12:00", 
    sunday: "Nghỉ"
  }
}
```

### **Company Statistics**
```typescript
export const stats = {
  experience: "9+ năm kinh nghiệm",
  projectsCompleted: "500+ dự án",
  happyCustomers: "200+ khách hàng",
  coverage: "Toàn quốc"
}
```

## 🛒 **Product Catalog Structure**

### **Category Model**
```typescript
export interface Category {
  id: string                    // Unique identifier
  name: string                  // Display name
  slug: string                  // URL-friendly name
  description: string           // Category description
  image: string                 // Category thumbnail
  productCount: number          // Number of products
  featured: boolean             // Show on homepage
  specifications?: string[]     // Key features
  applications?: string[]       // Use cases
}

// 8 Main Categories:
1. banh-xe-tai-nhe      // Bánh xe tải nhẹ (30-75kg)
2. banh-xe-tai-trung    // Bánh xe tải trung (100-200kg)  
3. banh-xe-tai-nang     // Bánh xe tải nặng (300-500kg)
4. banh-xe-giam-chan    // Bánh xe giảm chấn
5. banh-xe-y-te         // Bánh xe y tế (hospital grade)
6. banh-xe-sieu-tai     // Bánh xe siêu tải (1000kg+)
7. xe-day-hang          // Xe đẩy hàng hoàn chỉnh
8. phu-kien             // Phụ kiện & linh kiện
```

### **Product Model**
```typescript
export interface Product {
  id: string                    // Unique identifier
  name: string                  // Product name
  slug: string                  // URL-friendly name
  categoryId: string            // Category reference
  image: string                 // Main product image
  images?: string[]             // Additional images
  
  // Business Information
  price: number                 // VND pricing
  originalPrice?: number        // Before discount
  discount?: number             // Discount percentage
  inStock: boolean              // Availability
  featured: boolean             // Homepage featured
  
  // Product Details
  description: string           // Detailed description
  specifications: {             // Technical specs
    loadCapacity: string        // e.g., "100kg"
    wheelDiameter: string       // e.g., "100mm"
    material: string            // e.g., "Cao su"
    wheelType: string           // e.g., "Bánh đôi"
    bearingType?: string        // e.g., "Vòng bi thép"
    surfaceHardness?: string    // e.g., "Shore A 85"
    temperatureRange?: string   // e.g., "-30°C đến +80°C"
  }
  
  // Business Logic
  applications: string[]        // Use cases
  advantages: string[]          // Key benefits
  variants?: ProductVariant[]   // Color/size options
  relatedProducts?: string[]    // Cross-selling
  tags?: string[]               // Search optimization
}
```

### **Product Variants**
```typescript
export interface ProductVariant {
  id: string                    // Variant identifier
  name: string                  // Variant name (color, size)
  price?: number                // Different pricing
  image?: string                // Variant-specific image
  specifications?: Partial<ProductSpecifications>
  inStock: boolean
}

// Example variants:
- Colors: "Đen", "Xám", "Xanh"
- Sizes: "75mm", "100mm", "125mm", "150mm"
- Materials: "Cao su", "PU", "Nylon", "Gang"
```

## 🎯 **Business Rules**

### **Pricing Strategy**
```typescript
// Pricing logic embedded in mock data
const pricingRules = {
  // Basic wheels: 150,000 - 500,000 VND
  basicWheels: { min: 150000, max: 500000 },
  
  // Heavy duty: 500,000 - 2,000,000 VND  
  heavyDuty: { min: 500000, max: 2000000 },
  
  // Complete carts: 2,000,000 - 15,000,000 VND
  completeCarts: { min: 2000000, max: 15000000 },
  
  // Discounts: 5-20% for featured products
  discountRange: { min: 5, max: 20 }
}
```

### **Stock Management**
```typescript
// Stock status logic
const getStockStatus = (product: Product) => {
  if (product.inStock) {
    return "Còn hàng"          // In stock
  } else {
    return "Liên hệ đặt hàng"  // Contact to order
  }
}

// Stock levels (simulated)
const stockLevels = {
  high: "inStock: true",       // >10 units
  low: "inStock: true",        // 1-10 units  
  out: "inStock: false"        // 0 units
}
```

## 👥 **Customer Data**

### **Testimonials Model**
```typescript
export interface Testimonial {
  id: string
  customerName: string          // Customer name
  company: string               // Company name
  industry: string              // Business sector
  avatar: string                // Customer photo
  content: string               // Review content
  rating: number                // 1-5 stars
  date: string                  // Review date
  projectType: string           // Type of project
  location: string              // Customer location
}

// Industries covered:
- "Sản xuất"         // Manufacturing
- "Logistics"        // Logistics/warehousing  
- "Y tế"            // Healthcare
- "Bán lẻ"          // Retail
- "Thực phẩm"       // Food industry
- "Dệt may"         // Textile
```

## 🔄 **Business Processes**

### **Work Process Model**
```typescript
export const processSteps = [
  {
    step: 1,
    title: "Tư vấn & Khảo sát",
    description: "Khảo sát hiện trường, tư vấn giải pháp phù hợp",
    icon: "MessageCircle",
    duration: "1-2 ngày"
  },
  {
    step: 2, 
    title: "Báo giá & Thiết kế",
    description: "Báo giá chi tiết, thiết kế sản phẩm theo yêu cầu",
    icon: "FileText",
    duration: "2-3 ngày"
  },
  {
    step: 3,
    title: "Sản xuất & Lắp đặt", 
    description: "Sản xuất theo đơn hàng, lắp đặt tại hiện trường",
    icon: "Settings",
    duration: "5-10 ngày"
  },
  {
    step: 4,
    title: "Bảo hành & Hỗ trợ",
    description: "Bảo hành 12 tháng, hỗ trợ kỹ thuật 24/7",
    icon: "Shield",
    duration: "12 tháng"
  }
]
```

### **Lead Generation Logic**
```typescript
// Contact form data structure
interface ContactForm {
  customerName: string
  company: string
  phone: string
  email: string
  productInterest: string[]     // Selected categories
  projectDescription: string
  timeline: string              // Project timeline
  budget?: string               // Budget range
  location: string              // Installation location
}

// Lead scoring (conceptual)
const leadScore = {
  hasCompany: +20,              // B2B indicator
  hasPhone: +15,                // Contact preference
  specificProduct: +25,         // Clear requirement
  hasTimeline: +20,             // Urgent need
  hasBudget: +20               // Qualified buyer
}
```

## 📈 **SEO & Marketing Data**

### **SEO Keywords Strategy**
```typescript
// Primary keywords embedded in content
const seoKeywords = {
  primary: [
    "bánh xe đẩy",
    "bánh xe công nghiệp", 
    "xe đẩy hàng",
    "thiết bị công nghiệp"
  ],
  
  longTail: [
    "bánh xe đẩy tại hcm",
    "xe đẩy hàng giá rẻ",
    "bánh xe tải nặng 500kg",
    "thiết bị công nghiệp việt anh"
  ],
  
  commercial: [
    "mua bánh xe đẩy",
    "đại lý bánh xe công nghiệp",
    "báo giá xe đẩy hàng"
  ]
}
```

### **Content Marketing**
```typescript
// Page content optimized for:
1. Product education    // Technical specifications
2. Trust building      // Company info, testimonials
3. Local SEO          // HCM location references  
4. Conversion         // Clear CTAs, contact forms
```

## 🎨 **Brand Guidelines**

### **Visual Identity**
```typescript
const brandGuidelines = {
  colors: {
    primary: "Blue",           // Professional, trustworthy
    secondary: "Gray",         // Industrial, reliable
    accent: "Green"            // Success, quality
  },
  
  tone: {
    professional: true,        // B2B communication
    trustworthy: true,         // Industrial sector
    helpful: true,             // Customer service
    technical: true            // Product specifications
  },
  
  messaging: {
    quality: "Chất lượng cao",
    reliability: "Tin cậy bền bỉ", 
    service: "Hỗ trợ tận tình",
    experience: "9+ năm kinh nghiệm"
  }
}
```

---

**🎯 Business Goal**: Tạo ra website có thể convert visitors thành leads thông qua việc showcase sản phẩm chất lượng cao và dịch vụ chuyên nghiệp.
