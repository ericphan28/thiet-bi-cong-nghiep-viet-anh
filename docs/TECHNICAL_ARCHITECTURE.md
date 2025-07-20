# 🏗️ TECHNICAL ARCHITECTURE

## 📋 **System Architecture**

### **Frontend Stack**
```typescript
// Core Technologies
"next": "15.3.5"           // React framework với App Router
"react": "^19.0.0"         // Latest React with concurrent features
"typescript": "^5"         // Type safety
"tailwindcss": "^3.4.1"   // Utility-first CSS
"@radix-ui/*": "latest"    // Accessible UI components
"lucide-react": "^0.511.0" // Icon library
```

### **Project Structure Deep Dive**

```
d:/Thang/vietanh/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout với Header/Footer
│   ├── page.tsx                   # Homepage (/)
│   ├── globals.css                # Global Tailwind styles
│   ├── san-pham/
│   │   ├── page.tsx              # Products listing (/san-pham)
│   │   └── [categoryId]/
│   │       └── page.tsx          # Category detail (/san-pham/1)
│   ├── gioi-thieu/
│   │   └── page.tsx              # About page (/gioi-thieu)
│   └── lien-he/
│       └── page.tsx              # Contact page (/lien-he)
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navigation + company info
│   │   └── Footer.tsx            # Footer với contact details
│   ├── sections/                 # Homepage sections
│   │   ├── HeroSection.tsx       # Main hero với CTA
│   │   ├── CategoryGrid.tsx      # Product categories display
│   │   ├── FeaturedProducts.tsx  # Highlighted products
│   │   ├── AboutSection.tsx      # Company introduction
│   │   ├── ContactCTA.tsx        # Contact call-to-action
│   │   └── ProcessSection.tsx    # Work process steps
│   ├── ui/                       # Reusable UI components
│   │   ├── button.tsx            # Button variants
│   │   ├── card.tsx              # Card container
│   │   ├── badge.tsx             # Status badges
│   │   ├── input.tsx, label.tsx  # Form components
│   │   ├── dropdown-menu.tsx     # Dropdown menus
│   │   ├── checkbox.tsx          # Checkbox input
│   │   ├── ImageWithFallback.tsx # Smart image component
│   │   └── PlaceholderImage.tsx  # Placeholder system
│   └── ProductCard.tsx           # Product display card
├── lib/
│   ├── mock-data.ts              # All business data
│   └── utils.ts                  # Utility functions
├── public/
│   └── images/                   # Static assets
│       ├── categories/           # Category thumbnails
│       ├── products/             # Product images
│       ├── hero/                 # Homepage banners
│       ├── testimonials/         # Customer photos
│       └── contact/              # Contact page images
├── docs/                         # Documentation
├── backup/                       # Backup components
└── scripts/                      # Utility scripts
```

## 🔧 **Component Architecture**

### **Layout System**
```typescript
// app/layout.tsx - Root layout
export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />           // Sticky navigation
        <main>{children}</main>
        <Footer />           // Company info footer
      </body>
    </html>
  )
}
```

### **Page Components**
```typescript
// Tất cả pages đều follow pattern:
1. Metadata export cho SEO
2. Async server components (Next.js 15)
3. Responsive sections
4. Call-to-action components
```

### **UI Component Hierarchy**
```
ProductCard
├── ImageWithFallback
│   └── PlaceholderImage (fallback)
├── Badge (discount, featured, stock)
├── Button (variants selection)
└── Card (container)

ImageWithFallback
├── Next Image (primary)
└── PlaceholderImage (fallback)
    ├── SVG placeholder
    └── Text overlay
```

## 💾 **Data Management**

### **Mock Data Structure**
```typescript
// lib/mock-data.ts
export const mockCategories: Category[] = [...]     // 8 categories
export const mockProducts: Product[] = [...]        // 24 products  
export const testimonials = [...]                   // Customer reviews
export const companyInfo = {...}                    // Business info
export const stats = {...}                          // Company statistics
export const processSteps = [...]                   // Work process
```

### **Data Flow**
```
Page Component
├── Import from mock-data.ts
├── Filter/transform data
├── Pass to child components
└── Render with TypeScript safety
```

### **Image System**
```typescript
// Smart fallback chain:
1. Provided image URL
2. Structured path: /images/products/{categoryId}/{slug}/main.jpg
3. Category image: /images/categories/{category-slug}.jpg
4. Placeholder SVG với company branding
```

## 🎨 **Styling Architecture**

### **Tailwind CSS Configuration**
```javascript
// tailwind.config.ts
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: { /* Custom blue palette */ },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### **Component Styling Patterns**
```typescript
// Consistent patterns:
- Card layouts: "bg-white rounded-lg shadow-sm hover:shadow-lg"
- Buttons: Blue primary, outline secondary
- Typography: text-gray-600 for body, text-gray-900 for headings
- Spacing: Consistent padding/margin với Tailwind scale
```

## 🔗 **Routing System**

### **App Router Structure**
```typescript
// Static Routes
/                    // Homepage
/san-pham           // Products listing
/gioi-thieu         // About page
/lien-he            // Contact page

// Dynamic Routes  
/san-pham/[categoryId]   // Category detail pages
```

### **Dynamic Route Implementation**
```typescript
// app/san-pham/[categoryId]/page.tsx
interface CategoryPageProps {
  params: Promise<{ categoryId: string }>  // Next.js 15 async params
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params
  // ... component logic
}

// Static generation
export function generateStaticParams() {
  return mockCategories.map((category) => ({
    categoryId: category.id,
  }))
}
```

## 🚀 **Build & Performance**

### **Next.js Optimization**
- **Static Generation**: Pre-rendered tại build time
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Unused code elimination

### **Bundle Analysis**
```bash
# Production build stats
npm run build

# Build output:
✓ Compiled successfully in ~5s
Route                    Size     First Load JS
┌ ○ /                    1.2 kB     87.3 kB
├ ○ /gioi-thieu         890 B      88.1 kB  
├ ○ /lien-he            1.1 kB     88.2 kB
├ ○ /san-pham           950 B      88.0 kB
└ ○ /san-pham/[categoryId]  920 B  88.0 kB
```

## 🛡️ **Type Safety**

### **TypeScript Configuration**
```json
// tsconfig.json highlights
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

### **Interface Definitions**
```typescript
// All major interfaces exported from lib/mock-data.ts
export interface Category { ... }
export interface Product { ... }
export interface CompanyInfo { ... }
export interface Testimonial { ... }
```

## 🎯 **Development Workflow**

### **Local Development**
```bash
npm run dev         # http://localhost:3000
npm run build       # Production build
npm run start       # Production server
npm run lint        # ESLint check
```

### **Code Quality**
- **ESLint**: Configured với Next.js rules
- **TypeScript**: Strict mode enabled
- **Prettier**: Code formatting (via ESLint)

## 📱 **Responsive Design**

### **Breakpoint Strategy**
```css
/* Tailwind breakpoints used: */
sm: 640px     /* Tablet portrait */
md: 768px     /* Tablet landscape */  
lg: 1024px    /* Desktop */
xl: 1280px    /* Large desktop */
```

### **Mobile-First Components**
- Grid layouts: 1 col mobile → 2-4 cols desktop
- Navigation: Hamburger menu on mobile
- Forms: Stacked on mobile, side-by-side on desktop

---

**🔍 Architecture Goal**: Maintainable, scalable, performant website với excellent developer experience và user experience.
