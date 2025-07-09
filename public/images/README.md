# Image Assets - Bánh xe đẩy HCM

## 📁 Cấu trúc thư mục đã tạo

```
public/images/
├── categories/              # Icons danh mục sản phẩm (400x400px)
├── hero/                   # Banner hero section (1920x1080px)
├── products/               # Hình ảnh sản phẩm chi tiết
│   ├── banh-xe-tai-nhe/   # Bánh xe tải nhẹ (30-50kg)
│   ├── banh-xe-tai-trung/ # Bánh xe tải trung (70-130kg)
│   ├── banh-xe-tai-nang/  # Bánh xe tải nặng (150-400kg)
│   ├── banh-xe-giam-chan/ # Bánh xe giảm chấn
│   ├── banh-xe-gian-giao/ # Bánh xe gián giáo
│   ├── banh-xe-tang-chinh/# Bánh xe tăng chính
│   ├── banh-xe-y-te/      # Bánh xe y tế - bệnh viện
│   ├── banh-xe-sieu-tai/  # Bánh xe siêu tải
│   ├── xe-day-hang/       # Xe đẩy hàng HOD
│   └── phu-kien/          # Phụ kiện
└── process/                # Quy trình làm việc (1200x800px)
```

## 🎯 Hướng dẫn tạo/thu thập hình ảnh

### 1. Hero Banner (Ưu tiên cao)
**Cần tạo ngay:**
- `hero/hero-main.jpg` - Banner chính với bánh xe công nghiệp (1920x1080px)
- `hero/hero-mobile.jpg` - Version mobile (750x1334px)

**Ý tưởng content:**
- Bánh xe công nghiệp chất lượng cao
- Xưởng sản xuất hoặc kho hàng
- Text overlay: "Bánh xe đẩy chất lượng cao tại TP.HCM"

### 2. Category Icons (Ưu tiên cao)
**File cần tạo:**
- `categories/banh-xe-tai-nhe.png` (400x400px)
- `categories/banh-xe-tai-trung.png`
- `categories/banh-xe-tai-nang.png`
- `categories/banh-xe-y-te.png`
- `categories/xe-day-hang.png`

**Style:**
- Background trong suốt
- Icon style đồng nhất
- Màu sắc: Blue (#2563EB) primary

### 3. Featured Products (Ưu tiên trung)
**Mỗi sản phẩm cần:**
- `main.jpg` - Ảnh chính (800x800px)
- `detail-1.jpg` - Góc cạnh chi tiết
- `detail-2.jpg` - Thông số kỹ thuật
- `specs.jpg` - Bảng thông số

### 4. Process Section (Ưu tiên thấp)
- `process/step-1-consultation.jpg` - Tư vấn khách hàng
- `process/step-2-selection.jpg` - Chọn sản phẩm từ kho
- `process/step-3-delivery.jpg` - Đóng gói giao hàng
- `process/step-4-support.jpg` - Hỗ trợ sau bán

## 🚀 Quick Start - Tạo ảnh tạm

### Option 1: Unsplash API (Recommend)
```bash
# Thêm vào .env.local
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_key_here
```

### Option 2: Placeholder Service
```javascript
// Sử dụng trong component
<img src="https://picsum.photos/800/600?random=1" alt="Product" />
```

### Option 3: AI Generated (Recommend)
Sử dụng:
- **DALL-E 3**: Tạo ảnh chất lượng cao
- **Midjourney**: Style chuyên nghiệp
- **Stable Diffusion**: Free option

**Prompt suggestions:**
```
"Industrial wheel caster, professional product photo, white background, high quality, 4K"
"Modern warehouse with industrial carts, professional lighting, clean background"
"Customer consultation in industrial equipment showroom, professional setting"
```

## 📸 Chụp ảnh thật (Nếu có)

### Setup cơ bản:
1. **Lighting**: Ánh sáng đều, tránh bóng cứng
2. **Background**: Trắng hoặc xám nhạt
3. **Góc chụp**: 45° và 90° cho sản phẩm
4. **Resolution**: Tối thiểu 2000x2000px

### Equipment:
- Camera/Phone với chế độ Portrait
- Tripod hoặc giá đỡ
- Softbox hoặc đèn LED
- Background trắng/xám

## 🔧 Tools để xử lý ảnh

### Free Tools:
- **GIMP**: Chỉnh sửa chuyên nghiệp
- **Canva**: Template sẵn có
- **Remove.bg**: Xóa background
- **TinyPNG**: Nén ảnh

### Paid Tools:
- **Photoshop**: Professional editing
- **Figma**: UI/Icon design
- **Sketch**: Mac-only design tool

## 📋 Checklist triển khai

### Phase 1: Essential (Week 1)
- [ ] Hero banner chính
- [ ] 5 category icons chính
- [ ] 8-10 product images cho featured products
- [ ] Update PlaceholderImage component

### Phase 2: Complete (Week 2-3)
- [ ] Tất cả product variants (cố định, xoay, có khóa)
- [ ] Process step images
- [ ] About section images
- [ ] Testimonial photos

### Phase 3: Optimize (Week 4)
- [ ] WebP format conversion
- [ ] Responsive image sets
- [ ] Lazy loading implementation
- [ ] SEO optimization

## 📞 Support

Nếu cần hỗ trợ:
1. Tạo issue trong project
2. Tag @team-design hoặc @team-development
3. Specify: image type, size, và use case

---

**Note**: Hiện tại đang sử dụng PlaceholderImage component. Khi có ảnh thật, chỉ cần thay đổi đường dẫn trong component.
