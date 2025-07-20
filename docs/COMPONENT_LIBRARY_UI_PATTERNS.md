# 🧩 COMPONENT LIBRARY & UI PATTERNS

## 🎨 **Design System Overview**

### **Visual Design Principles**
- **Industrial Professional**: Clean, trustworthy appearance cho B2B sector
- **Mobile-First**: Responsive design cho mobile, tablet, desktop
- **Accessibility**: WCAG-compliant components với Radix UI
- **Performance**: Optimized components với lazy loading
- **Consistency**: Unified color palette, typography, spacing

## 🏗️ **Layout Components**

### **Header Component**
```typescript
// components/layout/Header.tsx
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-blue-600">
              Thiết Bị Công Nghiệp Việt Anh
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">Trang chủ</Link>
            <Link href="/san-pham">Sản phẩm</Link>
            <Link href="/gioi-thieu">Giới thiệu</Link>
            <Link href="/lien-he">Liên hệ</Link>
          </nav>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="font-semibold">0901 234 567</span>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

// Key Features:
- Sticky positioning cho easy navigation
- Mobile-responsive với hamburger menu
- Contact info prominently displayed
- Clean, professional styling
```

### **Footer Component**
```typescript
// components/layout/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3>Thiết Bị Công Nghiệp Việt Anh</h3>
            <p>Chuyên cung cấp bánh xe đẩy, xe đẩy hàng chất lượng cao</p>
            <div className="space-y-2 mt-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>0901 234 567</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4>Liên kết nhanh</h4>
            <ul className="space-y-2 mt-4">
              <li><Link href="/san-pham">Sản phẩm</Link></li>
              <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
              <li><Link href="/lien-he">Liên hệ</Link></li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4>Giờ làm việc</h4>
            <div className="space-y-1 mt-4">
              <p>T2-T6: 8:00 - 17:30</p>
              <p>T7: 8:00 - 12:00</p>
              <p>CN: Nghỉ</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-gray-400">
            © 2024 Thiết Bị Công Nghiệp Việt Anh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

## 🎯 **Homepage Sections**

### **Hero Section**
```typescript
// components/sections/HeroSection.tsx
export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Bánh Xe Đẩy 
              <span className="text-blue-600"> Chất Lượng Cao</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Chuyên cung cấp bánh xe đẩy công nghiệp, xe đẩy hàng với 
              9+ năm kinh nghiệm tại TP.HCM
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">9+</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Dự án hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-sm text-gray-600">Khách hàng</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="flex-1">
                <Link href="/san-pham">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Xem sản phẩm
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Phone className="w-5 h-5 mr-2" />
                Liên hệ ngay
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <ImageWithFallback
              src="/images/hero/hero-main.jpg"
              alt="Bánh xe đẩy chất lượng cao"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Key Features:
- Gradient background cho visual appeal
- Company value proposition clearly stated
- Social proof với company stats
- Dual CTAs cho different user intents
- Hero image với fallback system
```

### **Category Grid**
```typescript
// components/sections/CategoryGrid.tsx
export default function CategoryGrid() {
  const featuredCategories = mockCategories.filter(cat => cat.featured)
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Danh Mục Sản Phẩm
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các loại bánh xe đẩy và xe đẩy hàng 
            phù hợp với mọi nhu cầu công nghiệp
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all">
              <Link href={`/san-pham/${category.id}`}>
                <div className="p-6">
                  {/* Category Image */}
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  
                  {/* Category Info */}
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {category.description}
                  </p>
                  
                  {/* Product Count */}
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">
                      {category.productCount} sản phẩm
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-8">
          <Button asChild variant="outline" size="lg">
            <Link href="/san-pham">
              Xem tất cả sản phẩm
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Key Features:
- Grid layout responsive trên all devices
- Hover effects cho better interactivity
- Product count badges cho clarity
- Clear CTA to full product catalog
```

## 🛍️ **Product Components**

### **Product Card**
```typescript
// components/ProductCard.tsx
interface ProductCardProps {
  product: Product
  showCategory?: boolean
  className?: string
}

export default function ProductCard({ 
  product, 
  showCategory = true, 
  className = "" 
}: ProductCardProps) {
  const category = mockCategories.find(cat => cat.id === product.categoryId)
  
  return (
    <Card className={`group hover:shadow-lg transition-all ${className}`}>
      <div className="relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.featured && (
            <Badge variant="default" className="bg-yellow-500">
              <Star className="w-3 h-3 mr-1" />
              Nổi bật
            </Badge>
          )}
          {product.discount && (
            <Badge variant="destructive">
              -{product.discount}%
            </Badge>
          )}
        </div>
        
        {/* Stock Status */}
        <div className="absolute top-2 right-2">
          <Badge variant={product.inStock ? "default" : "secondary"}>
            {product.inStock ? "Còn hàng" : "Liên hệ"}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        {/* Category Badge */}
        {showCategory && category && (
          <Badge variant="outline" className="mb-2">
            {category.name}
          </Badge>
        )}
        
        {/* Product Name */}
        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 line-clamp-2">
          {product.name}
        </h3>
        
        {/* Key Specifications */}
        <div className="space-y-1 mb-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Tải trọng:</span>
            <span className="font-medium">{product.specifications.loadCapacity}</span>
          </div>
          <div className="flex justify-between">
            <span>Đường kính:</span>
            <span className="font-medium">{product.specifications.wheelDiameter}</span>
          </div>
          <div className="flex justify-between">
            <span>Chất liệu:</span>
            <span className="font-medium">{product.specifications.material}</span>
          </div>
        </div>
        
        {/* Pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-blue-600">
              {product.price.toLocaleString('vi-VN')}đ
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}đ
              </span>
            )}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="w-4 h-4 mr-1" />
            Chi tiết
          </Button>
          <Button size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-1" />
            Liên hệ
          </Button>
        </div>
      </div>
    </Card>
  )
}

// Key Features:
- Comprehensive product information display
- Visual hierarchy với badges và pricing
- Hover effects cho better UX
- Responsive design
- Action-oriented CTAs
```

## 🖼️ **Image Components**

### **ImageWithFallback**
```typescript
// components/ui/ImageWithFallback.tsx
interface ImageWithFallbackProps extends React.ComponentProps<typeof Image> {
  fallbackSrc?: string
  fallbackText?: string
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc,
  fallbackText,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = React.useState(src)
  const [hasError, setHasError] = React.useState(false)
  
  React.useEffect(() => {
    setImgSrc(src)
    setHasError(false)
  }, [src])
  
  const handleError = () => {
    if (!hasError) {
      if (fallbackSrc) {
        setImgSrc(fallbackSrc)
      }
      setHasError(true)
    } else {
      // Show placeholder
      return (
        <PlaceholderImage 
          text={fallbackText || alt}
          className={className}
          {...props}
        />
      )
    }
  }
  
  if (hasError && !fallbackSrc) {
    return (
      <PlaceholderImage 
        text={fallbackText || alt}
        className={className}
        {...props}
      />
    )
  }
  
  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  )
}

// Key Features:
- Multi-level fallback system
- Automatic error handling
- Seamless user experience
- Maintains layout stability
```

### **PlaceholderImage**
```typescript
// components/ui/PlaceholderImage.tsx
interface PlaceholderImageProps {
  text?: string
  width?: number
  height?: number
  className?: string
}

export default function PlaceholderImage({
  text = "Hình ảnh",
  width = 300,
  height = 300,
  className = ""
}: PlaceholderImageProps) {
  return (
    <div 
      className={`
        flex items-center justify-center 
        bg-gradient-to-br from-gray-100 to-gray-200 
        border-2 border-dashed border-gray-300 
        rounded-lg
        ${className}
      `}
      style={{ width, height }}
    >
      <div className="text-center p-4">
        {/* Company Logo */}
        <div className="w-12 h-12 mx-auto mb-2 bg-blue-100 rounded-full flex items-center justify-center">
          <Package className="w-6 h-6 text-blue-600" />
        </div>
        
        {/* Placeholder Text */}
        <div className="text-sm text-gray-600 font-medium">
          {text}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Thiết Bị Công Nghiệp Việt Anh
        </div>
      </div>
    </div>
  )
}

// Key Features:
- Company branding even trong placeholders
- Professional appearance
- Consistent styling
- Informative messaging
```

## 🎨 **UI Component Library**

### **Button Variants**
```typescript
// components/ui/button.tsx (Shadcn-based)
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 bg-white hover:bg-gray-50",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        ghost: "hover:bg-gray-100 hover:text-gray-900",
        link: "text-blue-600 underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    }
  }
)

// Usage patterns trong project:
- Primary actions: variant="default" (blue)
- Secondary actions: variant="outline" 
- Destructive actions: variant="destructive" (red)
- Navigation: variant="ghost"
```

### **Badge Component**
```typescript
// components/ui/badge.tsx
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-transparent bg-blue-600 text-white",
        secondary: "border-transparent bg-gray-100 text-gray-900",
        destructive: "border-transparent bg-red-600 text-white",
        outline: "text-gray-900 border-gray-200"
      }
    }
  }
)

// Usage trong project:
- Stock status: "Còn hàng" (green), "Liên hệ" (gray)
- Product features: "Nổi bật" (yellow), "Giảm giá" (red)
- Categories: Product count badges
```

### **Card Component**
```typescript
// components/ui/card.tsx
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm",
        className
      )}
      {...props}
    />
  )
)

// Usage patterns:
- Product cards: hover:shadow-lg transition
- Category cards: group hover effects  
- Content sections: bg-white với subtle shadows
```

---

**🎯 Component Strategy**: Reusable, accessible, consistent components tạo professional industrial website với excellent user experience.
