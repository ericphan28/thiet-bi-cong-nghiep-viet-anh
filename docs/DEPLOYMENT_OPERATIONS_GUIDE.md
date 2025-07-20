# 🚀 DEPLOYMENT & OPERATIONS GUIDE

## 🏗️ **Current Deployment Status**

### **Development Environment**
```bash
# Local development setup
Node.js: v18+ required
Package Manager: npm
Framework: Next.js 15.3.5
Port: http://localhost:3000

# Development commands
npm run dev          # Start development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code quality check
```

### **Production Readiness Checklist**
```typescript
✅ Static Site Generation (SSG) enabled
✅ Image optimization configured
✅ SEO metadata implemented
✅ Responsive design completed
✅ Error handling implemented
✅ Performance optimized
✅ TypeScript strict mode
✅ ESLint configured
✅ Mock data system ready

🔄 Pending for production:
- Domain setup
- Hosting environment
- Analytics integration
- Contact form backend
- SSL certificate
- CDN configuration
```

## ☁️ **Azure Deployment Strategy**

### **Recommended Azure Services**
```typescript
// Azure Static Web Apps (Recommended)
const azureConfig = {
  service: "Azure Static Web Apps",
  framework: "Next.js",
  buildCommand: "npm run build",
  outputDirectory: ".next",
  
  features: {
    automaticDeployment: true,    // GitHub integration
    customDomains: true,          // Custom domain support
    globalCDN: true,              // Worldwide distribution
    authentication: false,       // Not needed for this project
    apiRoutes: false,            // Static site only
    staging: true                // Preview deployments
  },
  
  pricing: {
    tier: "Free",                // Perfect for small business
    bandwidth: "100GB/month",    // Sufficient traffic
    builds: "Unlimited",         // CI/CD included
    customDomains: "Free"        // No additional cost
  }
}

// Alternative: Azure App Service
const appServiceConfig = {
  service: "Azure App Service",
  runtime: "Node.js 18 LTS",
  tier: "Basic B1",             // $13/month
  features: {
    autoScaling: true,
    customDomains: true,
    sslCertificates: true,
    applicationInsights: true
  }
}
```

### **Azure Deployment Steps**
```bash
# 1. Install Azure CLI
npm install -g @azure/static-web-apps-cli

# 2. Login to Azure
az login

# 3. Create Static Web App
az staticwebapp create \
  --name "thietbicongnghiepvietanh" \
  --resource-group "rg-vietanh-prod" \
  --source "https://github.com/username/vietanh-website" \
  --location "East Asia" \
  --branch "main" \
  --app-location "/" \
  --output-location ".next"

# 4. Configure custom domain
az staticwebapp hostname set \
  --name "thietbicongnghiepvietanh" \
  --hostname "thietbicongnghiepvietanh.com"
```

## 🔧 **Build Configuration**

### **Next.js Production Config**
```typescript
// next.config.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Azure Static Web Apps
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,  // For static export
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // SEO & PWA
  generateEtags: false,
  poweredByHeader: false,
  
  // Static generation
  generateStaticParams: true,
  
  // Environment
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
}

export default nextConfig
```

### **Package.json Scripts**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy:azure": "npm run build && swa deploy .next --env production"
  }
}
```

## 📊 **Performance Optimization**

### **Lighthouse Scores Target**
```typescript
const performanceTargets = {
  performance: 95,      // Fast loading
  accessibility: 100,   // Fully accessible
  bestPractices: 100,   // Modern web standards
  seo: 100,            // Search engine optimized
  pwa: 90              // Progressive web app features
}

// Current optimizations:
✅ Image optimization với next/image
✅ Code splitting với dynamic imports
✅ Font optimization với next/font
✅ CSS optimization với Tailwind purging
✅ Bundle size optimization
✅ Static generation cho tất cả pages
```

### **Core Web Vitals**
```typescript
const coreWebVitals = {
  LCP: "<2.5s",         // Largest Contentful Paint
  FID: "<100ms",        // First Input Delay  
  CLS: "<0.1",          // Cumulative Layout Shift
  
  strategies: [
    "Image optimization với WebP format",
    "Critical CSS inlining", 
    "Preload key resources",
    "Optimize font loading",
    "Minimize JavaScript bundles"
  ]
}
```

## 🔐 **Security Configuration**

### **Security Headers**
```typescript
// next.config.ts security headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection', 
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

### **Environment Security**
```bash
# Environment variables for production
NEXT_PUBLIC_SITE_URL=https://thietbicongnghiepvietanh.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CONTACT_EMAIL=contact@thietbicongnghiepvietanh.com

# Secure handling
- No sensitive data trong client-side code
- Environment-specific configurations
- Secure contact form submission
```

## 📈 **Monitoring & Analytics**

### **Google Analytics Setup**
```typescript
// Google Analytics 4 integration
const gtag = {
  GA_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  
  // Page view tracking
  pageview: (url: string) => {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  },
  
  // Event tracking
  event: ({ action, category, label, value }: any) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track business events:
- Product page views
- Category browsing
- Contact form submissions
- Phone number clicks
- Download brochure requests
```

### **Azure Application Insights**
```typescript
// Application monitoring
const appInsights = {
  instrumentationKey: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  
  tracking: {
    pageViews: true,           // Page navigation
    userSessions: true,        // User behavior
    dependencies: true,        // External calls
    exceptions: true,          // Error tracking
    customEvents: true         // Business metrics
  },
  
  businessMetrics: [
    "product_view",           // Product interest
    "category_browse",        // Category engagement
    "contact_form_submit",    // Lead generation
    "phone_click",           // Direct contact
    "quote_request"          // Business inquiry
  ]
}
```

## 🔄 **CI/CD Pipeline**

### **GitHub Actions Workflow**
```yaml
# .github/workflows/azure-static-web-apps.yml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches: [ main ]

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run lint
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Azure Static Web Apps
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: ".next"
```

## 🌐 **Domain Configuration**

### **DNS Setup**
```typescript
// DNS records for thietbicongnghiepvietanh.com
const dnsRecords = [
  {
    type: "CNAME",
    name: "www",
    value: "gentle-sea-0XXXXXXXXX.azurestaticapps.net"
  },
  {
    type: "ALIAS", 
    name: "@",
    value: "gentle-sea-0XXXXXXXXX.azurestaticapps.net"
  },
  {
    type: "TXT",
    name: "@", 
    value: "azure-domain-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }
]

// SSL certificate
- Automatic SSL via Azure Static Web Apps
- Let's Encrypt certificate
- Auto-renewal enabled
```

## 📧 **Contact Form Backend**

### **Azure Functions Integration**
```typescript
// api/contact.ts (Azure Functions)
import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body
    
    // Validate input
    if (!name || !email || !message) {
      context.res = {
        status: 400,
        body: "Missing required fields"
      }
      return
    }
    
    // Send email notification
    await sendNotification({
      to: "contact@thietbicongnghiepvietanh.com",
      subject: `Liên hệ mới từ ${name}`,
      body: `
        Tên: ${name}
        Email: ${email}
        Điện thoại: ${phone}
        Tin nhắn: ${message}
      `
    })
    
    context.res = {
      status: 200,
      body: "Message sent successfully"
    }
  }
}

export default httpTrigger
```

## 🔧 **Maintenance & Updates**

### **Update Schedule**
```typescript
const maintenanceSchedule = {
  weekly: [
    "Monitor website performance",
    "Check broken links",
    "Review analytics data",
    "Update product information"
  ],
  
  monthly: [
    "Update dependencies",
    "Review SEO performance", 
    "Backup website data",
    "Security vulnerability scan"
  ],
  
  quarterly: [
    "Performance optimization",
    "Content strategy review",
    "User experience improvements",
    "Technology stack updates"
  ]
}
```

### **Rollback Strategy**
```bash
# Git-based rollback
git revert <commit-hash>
git push origin main

# Azure Static Web Apps automatic rollback
az staticwebapp environment show --name "thietbicongnghiepvietanh"
az staticwebapp environment delete --name "thietbicongnghiepvietanh" --environment-name "staging"
```

---

**🎯 Deployment Goal**: Zero-downtime, high-performance website trên Azure với automated CI/CD pipeline và comprehensive monitoring cho optimal business results.
