# Hướng dẫn tổ chức hình ảnh cho Website Bánh xe đẩy HCM

## 🏗️ Cấu trúc thư mục

```
public/images/
├── hero/                           # Hình ảnh banner chính
│   ├── hero-main.jpg              # Banner hero chính (1920x1080)
│   ├── hero-mobile.jpg            # Banner hero mobile (750x1334)
│   └── hero-workshop.jpg          # Hình xưởng sản xuất
│
├── categories/                     # Hình ảnh danh mục
│   ├── banh-xe-tai-nhe.jpg       # Icon danh mục tải nhẹ
│   ├── banh-xe-tai-trung.jpg     # Icon danh mục tải trung
│   ├── banh-xe-tai-nang.jpg      # Icon danh mục tải nặng
│   ├── banh-xe-giam-chan.jpg     # Icon danh mục giảm chấn
│   ├── banh-xe-gian-giao.jpg     # Icon danh mục gián giáo
│   ├── banh-xe-tang-chinh.jpg    # Icon danh mục tăng chính
│   ├── banh-xe-y-te.jpg          # Icon danh mục y tế
│   ├── banh-xe-sieu-tai.jpg      # Icon danh mục siêu tải
│   └── xe-day-hang.jpg           # Icon danh mục xe đẩy
│
├── products/                       # Hình ảnh sản phẩm chi tiết
│   ├── banh-xe-tai-nhe/          # Bánh xe tải nhẹ (30-50kg)
│   │   ├── co-dinh/              # Loại cố định
│   │   │   ├── main.jpg          # Ảnh chính
│   │   │   ├── detail-1.jpg      # Ảnh chi tiết 1
│   │   │   ├── detail-2.jpg      # Ảnh chi tiết 2
│   │   │   └── specs.jpg         # Ảnh thông số kỹ thuật
│   │   ├── xoay/                 # Loại xoay
│   │   └── co-khoa/              # Loại có khóa
│   │
│   ├── banh-xe-tai-trung/        # Bánh xe tải trung (70-130kg)
│   │   ├── co-dinh/
│   │   ├── xoay/
│   │   └── co-khoa/
│   │
│   ├── banh-xe-tai-nang/         # Bánh xe tải nặng (150-400kg)
│   │   ├── co-dinh/
│   │   ├── xoay/
│   │   └── co-khoa/
│   │
│   ├── banh-xe-giam-chan/        # Bánh xe giảm chấn
│   │   ├── main.jpg
│   │   ├── detail-1.jpg
│   │   └── specs.jpg
│   │
│   ├── banh-xe-gian-giao/        # Bánh xe gián giáo
│   ├── banh-xe-tang-chinh/       # Bánh xe tăng chính
│   ├── banh-xe-y-te/             # Bánh xe y tế - bệnh viện
│   ├── banh-xe-sieu-tai/         # Bánh xe siêu tải
│   ├── xe-day-hang/              # Xe đẩy hàng HOD
│   └── phu-kien/                 # Phụ kiện
│
├── about/                          # Hình ảnh giới thiệu
│   ├── workshop.jpg              # Xưởng sản xuất
│   ├── team.jpg                  # Đội ngũ nhân viên
│   ├── quality.jpg              # Kiểm tra chất lượng
│   └── warehouse.jpg            # Kho hàng
│
├── process/                        # Hình ảnh quy trình
│   ├── step-1-consultation.jpg   # Bước 1: Tư vấn
│   ├── step-2-selection.jpg      # Bước 2: Chọn sản phẩm
│   ├── step-3-delivery.jpg       # Bước 3: Giao hàng
│   └── step-4-support.jpg        # Bước 4: Hỗ trợ
│
├── testimonials/                   # Hình ảnh khách hàng
│   ├── customer-1.jpg
│   ├── customer-2.jpg
│   └── customer-3.jpg
│
└── contact/                        # Hình ảnh liên hệ
    ├── showroom.jpg              # Showroom
    ├── map.jpg                   # Bản đồ
    └── office.jpg                # Văn phòng

```

## 📐 Quy chuẩn kích thước hình ảnh

### 🎯 Hero Section
- **Banner chính**: 1920x1080px (16:9)
- **Banner mobile**: 750x1334px (9:16)
- **Format**: JPG, WebP (tối ưu)
- **Chất lượng**: 85-90%

### 🏷️ Category Icons
- **Kích thước**: 400x400px (1:1)
- **Format**: PNG với background trong suốt
- **Style**: Icon đồng bộ, màu sắc nhất quán

### 🛞 Product Images
- **Ảnh chính**: 800x800px (1:1)
- **Ảnh chi tiết**: 600x600px (1:1)
- **Ảnh specs**: 800x600px (4:3)
- **Format**: JPG, WebP
- **Background**: Trắng hoặc trong suốt

### 🏢 About & Process
- **Kích thước**: 1200x800px (3:2)
- **Format**: JPG
- **Style**: Chuyên nghiệp, sáng

## 🎨 Quy tắc thiết kế

### Màu sắc chủ đạo
- **Primary**: #2563EB (Blue-600)
- **Secondary**: #1E40AF (Blue-700) 
- **Accent**: #10B981 (Green-500)
- **Gray**: #6B7280 (Gray-500)

### Typography trên ảnh
- **Font**: Inter, Roboto
- **Màu text**: Trắng với shadow hoặc overlay
- **Kích thước**: Responsive theo thiết bị

### Style chung
- **Phong cách**: Hiện đại, tối giản
- **Ánh sáng**: Sáng, rõ nét
- **Background**: Trắng, xám nhạt hoặc gradient

## 📱 Responsive Images

### Desktop (1920px+)
- Hero: 1920x1080px
- Product: 800x800px
- Category: 400x400px

### Tablet (768px - 1919px)
- Hero: 1200x675px
- Product: 600x600px
- Category: 300x300px

### Mobile (< 768px)
- Hero: 750x422px
- Product: 400x400px
- Category: 200x200px

## 🔧 Tối ưu hóa

### Compression
- **JPG**: 85-90% quality
- **PNG**: TinyPNG compression
- **WebP**: 80-85% quality

### Loading
- **Lazy loading**: Cho tất cả ảnh sau fold
- **Preload**: Hero image và logo
- **Srcset**: Responsive images

### SEO
- **Alt text**: Mô tả chi tiết bằng tiếng Việt
- **File names**: Tên có nghĩa, không dấu
- **Schema markup**: Product schema

## 📝 Naming Convention

### Quy tắc đặt tên file
```
[category]-[product-name]-[variant]-[type].[ext]

Ví dụ:
- banh-xe-tai-nhe-co-dinh-main.jpg
- banh-xe-tai-trung-xoay-detail-1.jpg
- xe-day-hang-hod-specs.jpg
```

### Thư mục
- Tên thư mục: lowercase, dấu gạch ngang
- Không dấu tiếng Việt
- Ngắn gọn, dễ hiểu

## 🚀 Implementation Steps

### Bước 1: Chuẩn bị ảnh
1. Thu thập ảnh sản phẩm từ nhà cung cấp
2. Chụp ảnh showroom, kho hàng
3. Tạo ảnh đồ họa cho categories

### Bước 2: Xử lý ảnh
1. Resize theo quy chuẩn
2. Optimize compression
3. Tạo multiple formats (JPG, WebP)
4. Generate responsive variants

### Bước 3: Upload và test
1. Upload theo cấu trúc thư mục
2. Update component code
3. Test loading performance
4. Validate SEO meta

### Bước 4: Monitor
1. Check Core Web Vitals
2. Monitor loading speed
3. A/B test image quality vs size
4. Update based on user feedback

## 📊 Performance Targets

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Image optimization**: > 90% reduction from original

## 🔗 Tools Recommended

### Image Processing
- **TinyPNG**: PNG compression
- **Squoosh**: Google's image optimizer
- **ImageOptim**: Batch optimization
- **Photoshop**: Professional editing

### Performance Testing
- **PageSpeed Insights**: Google's tool
- **GTmetrix**: Detailed analysis
- **WebP Converter**: Format conversion
- **Lighthouse**: Core Web Vitals

---

## 📞 Liên hệ hỗ trợ

Nếu cần hỗ trợ về việc tối ưu hình ảnh hoặc cấu trúc file, vui lòng liên hệ team development.
