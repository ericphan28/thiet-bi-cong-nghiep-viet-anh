# 📋 PROJECT OVERVIEW - Bánh xe đẩy HCM

## 🎯 **Project Summary**
Website landing page hoàn chỉnh cho **Bánh xe đẩy HCM** - công ty chuyên cung cấp bánh xe đẩy, xe đẩy hàng chất lượng cao tại TP.HCM. Website được phát triển bằng **Next.js 15**, **TypeScript**, và **Tailwind CSS**.

## 🏢 **Business Context**
- **Công ty**: Bánh xe đẩy HCM (banhxedayhcm.com)
- **Ngành nghề**: Cung cấp bánh xe đẩy công nghiệp, y tế, gia dụng
- **Thị trường**: TP.HCM và các tỉnh lân cận
- **Khách hàng**: Doanh nghiệp, bệnh viện, nhà máy, cá nhân

## 📊 **Technical Stack**
```json
{
  "framework": "Next.js 15.3.5",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "ui_library": "Radix UI",
  "icons": "Lucide React",
  "build_tool": "Next.js built-in",
  "deployment": "Ready for Vercel/Netlify"
}
```

## 🏗️ **Architecture Overview**
```
📁 Project Structure:
├── app/                    # App Router (Next.js 15)
│   ├── page.tsx           # 🏠 Homepage
│   ├── san-pham/         # 🛍️ Products
│   ├── gioi-thieu/       # 🏢 About
│   └── lien-he/          # 📞 Contact
├── components/            # React Components
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page Sections
│   ├── ui/              # UI Primitives
│   └── ProductCard.tsx   # Product Display
├── lib/                  # Utilities & Data
│   ├── mock-data.ts     # Business Data
│   └── utils.ts         # Helper Functions
└── public/              # Static Assets
    └── images/          # Image Structure
```

## 🎨 **Design System**
- **Primary Color**: Blue (#2563eb)
- **Typography**: Inter font family
- **Components**: Card-based layouts
- **Responsive**: Mobile-first approach
- **Animations**: Smooth hover effects

## 📱 **Pages & Features**

### **🏠 Homepage** (`/`)
- Hero section với CTA
- Danh mục sản phẩm grid
- Sản phẩm nổi bật
- Giới thiệu công ty
- Testimonials khách hàng
- Process steps
- Contact CTA

### **🛍️ Products Page** (`/san-pham`)
- Tổng quan tất cả sản phẩm
- Filter theo danh mục
- Product cards với variants
- Dynamic routing `/san-pham/[categoryId]`

### **🏢 About Page** (`/gioi-thieu`)
- Company story & mission
- Statistics & achievements
- Services provided
- Team & certifications
- Customer testimonials

### **📞 Contact Page** (`/lien-he`)
- Contact form với validation
- Company information
- Multiple contact methods
- Social media links
- Working hours & location

## 💾 **Data Structure**

### **Categories** (8 loại)
```typescript
interface Category {
  id: string;           // "1", "2", etc.
  name: string;         // "Bánh xe tải nhẹ"
  slug: string;         // "banh-xe-tai-nhe"
  description: string;  // Detailed description
  icon: string;         // Emoji icon
  productCount: number; // Number of products
  color: string;        // Gradient color class
  featured: boolean;    // Is featured category
}
```

### **Products** (24 sản phẩm)
```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  categoryId: string;
  images: string[];
  specifications: Record<string, string>;
  inStock: boolean;
  featured: boolean;
  discount?: number;
  variants?: {
    type: string;
    price: number;
  }[];
}
```

### **Company Info**
```typescript
interface CompanyInfo {
  name: string;              // "Công ty TNHH Thiết bị Công nghiệp Việt Anh"
  shortName: string;         // "Việt Anh"
  businessLicense: string;   // License number
  address: {
    street: string;
    district: string;
    city: string;
    full: string;
  };
  contact: {
    name: string;
    phone: string[];
    email: string;
    website: string;
  };
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  certifications: string[];
  socialMedia: {
    facebook: string;
    zalo: string;
    youtube: string;
    instagram: string;
  };
}
```

## 🖼️ **Image System**
- **Fallback mechanism**: Tự động fallback khi thiếu ảnh
- **Placeholder system**: Smart placeholder generation
- **Structure**: Organized by category và product
```
public/images/
├── categories/          # Category images
├── products/           # Product images by category
├── hero/              # Homepage hero images
├── testimonials/      # Customer photos
└── contact/           # Contact page images
```

## 🎯 **Key Components**

### **ProductCard** - Hiển thị sản phẩm
- Product image với fallback
- Variants selection
- Price display (VNĐ format)
- Specifications preview
- CTA buttons

### **ImageWithFallback** - Smart image loading
- Automatic fallback khi ảnh lỗi
- Placeholder generation
- Performance optimized

### **Layout Components**
- **Header**: Navigation + contact info
- **Footer**: Company details + links

### **UI Components** (Radix UI based)
- Button, Card, Badge, Input, Label
- Dropdown, Checkbox
- Consistent design system

## 🔧 **Development Notes**

### **Next.js 15 Compatibility**
- **Async params**: Dynamic routes sử dụng `await params`
- **App Router**: Fully migrated từ Pages Router
- **TypeScript**: Strict mode enabled

### **Build & Deploy**
```bash
npm install     # Install dependencies
npm run dev     # Development server
npm run build   # Production build
npm run start   # Production server
npm run lint    # Code linting
```

### **Environment Setup**
- No authentication required
- No external APIs
- Mock data only
- Ready for immediate deployment

## 📈 **Business Goals Achieved**
1. **Professional presence**: Modern, trustworthy design
2. **Product showcase**: Clear product categorization
3. **Lead generation**: Multiple contact points
4. **SEO optimized**: Proper meta tags và structure
5. **Mobile friendly**: Responsive across devices
6. **Performance**: Fast loading, optimized

## 🚀 **Deployment Ready**
- ✅ Build successful (no errors)
- ✅ TypeScript compilation clean
- ✅ ESLint validation passed
- ✅ All pages functional
- ✅ Responsive design tested
- ✅ SEO meta tags complete

## 🔮 **Future Enhancements**
- Shopping cart functionality
- User authentication system
- Admin panel for content management
- Payment integration
- Inventory management
- Customer review system
- Blog/news section

---

**📝 Note**: Project hoàn toàn độc lập, không phụ thuộc external services, sẵn sàng deploy và sử dụng ngay.
