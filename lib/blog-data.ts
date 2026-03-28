export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: string
  publishedAt: string
  readTime: number
  image: string
  featured: boolean
}

export const blogCategories = [
  { id: 'huong-dan', name: 'Hướng dẫn', color: 'bg-blue-100 text-blue-700' },
  { id: 'kien-thuc', name: 'Kiến thức', color: 'bg-green-100 text-green-700' },
  { id: 'san-pham', name: 'Sản phẩm', color: 'bg-orange-100 text-orange-700' },
  { id: 'tin-tuc', name: 'Tin tức', color: 'bg-purple-100 text-purple-700' },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Cách chọn bánh xe đẩy phù hợp cho nhà xưởng công nghiệp',
    slug: 'cach-chon-banh-xe-day-phu-hop-cho-nha-xuong',
    excerpt: 'Hướng dẫn chi tiết cách lựa chọn bánh xe đẩy phù hợp với môi trường nhà xưởng, kho bãi. Phân tích theo tải trọng, chất liệu mặt sàn và điều kiện vận hành.',
    content: `
## Tại sao việc chọn bánh xe đẩy đúng lại quan trọng?

Trong môi trường công nghiệp, bánh xe đẩy đóng vai trò then chốt trong việc vận chuyển hàng hóa. Chọn sai loại bánh xe có thể dẫn đến:

- **Hỏng sàn nhà xưởng** - bánh xe không phù hợp có thể để lại vết xước hoặc hư hại mặt sàn
- **Giảm năng suất** - bánh xe quá nhỏ hoặc không đúng tải trọng khiến việc đẩy hàng khó khăn
- **Nguy cơ tai nạn lao động** - bánh xe kém chất lượng có thể gãy, vỡ gây nguy hiểm
- **Chi phí bảo trì cao** - phải thay thế thường xuyên do hao mòn nhanh

## Các yếu tố cần xem xét

### 1. Tải trọng
Đây là yếu tố quan trọng nhất. Bạn cần tính toán:
- **Tải trọng tĩnh**: Trọng lượng hàng hóa khi xe đứng yên
- **Tải trọng động**: Trọng lượng khi xe đang di chuyển (thường gấp 1.5-2 lần tải tĩnh)
- **Công thức**: Tải trọng mỗi bánh = (Trọng lượng hàng + Trọng lượng xe) / 3

### 2. Chất liệu mặt sàn
| Loại sàn | Bánh xe phù hợp |
|----------|-----------------|
| Sàn bê tông | PU, cao su, nylon |
| Sàn epoxy | PU mềm, cao su |
| Sàn gạch | PU, cao su mềm |
| Sàn inox/kim loại | Nylon, PU |

### 3. Kích thước bánh xe
- **Bánh nhỏ (50-75mm)**: Xe đẩy nhẹ, văn phòng, gia đình
- **Bánh trung (100-125mm)**: Kho hàng, xưởng sản xuất nhẹ
- **Bánh lớn (150-200mm)**: Công nghiệp nặng, vận chuyển tải trọng lớn

### 4. Loại giá đỡ
- **Cố định**: Chỉ đi thẳng, ổn định hơn
- **Xoay**: Linh hoạt, dễ điều hướng
- **Xoay có khóa**: Kết hợp cả hai ưu điểm

## Lời khuyên từ chuyên gia

Với hơn 10 năm kinh nghiệm, chúng tôi khuyến nghị:

1. **Luôn chọn tải trọng dư 20-30%** so với nhu cầu thực tế
2. **Ưu tiên bánh xe PU** cho hầu hết ứng dụng - bền, êm, không để lại vết
3. **Sử dụng 2 bánh cố định + 2 bánh xoay** cho xe đẩy 4 bánh
4. **Bảo trì định kỳ** 3-6 tháng/lần để kéo dài tuổi thọ

## Liên hệ tư vấn miễn phí

Nếu bạn cần tư vấn chi tiết hơn, hãy liên hệ đội ngũ kỹ thuật của chúng tôi qua hotline **0933408565** hoặc Zalo để được hỗ trợ nhanh nhất.
    `,
    category: 'huong-dan',
    tags: ['bánh xe đẩy', 'nhà xưởng', 'hướng dẫn chọn', 'công nghiệp'],
    author: 'Nguyễn Văn Nam',
    publishedAt: '2026-03-15',
    readTime: 8,
    image: '/images/blog/chon-banh-xe-nha-xuong.jpg',
    featured: true,
  },
  {
    id: 'b2',
    title: 'So sánh bánh xe PU và bánh xe cao su: Loại nào tốt hơn?',
    slug: 'so-sanh-banh-xe-pu-va-cao-su',
    excerpt: 'Phân tích chi tiết ưu nhược điểm của bánh xe PU (Polyurethane) và bánh xe cao su. Giúp bạn đưa ra quyết định đúng đắn cho nhu cầu sử dụng.',
    content: `
## Bánh xe PU là gì?

PU (Polyurethane) là một loại nhựa tổng hợp có độ đàn hồi cao, chịu mài mòn tốt. Bánh xe PU được sử dụng rộng rãi trong công nghiệp nhờ nhiều ưu điểm vượt trội.

## Bánh xe cao su là gì?

Cao su là vật liệu truyền thống, có độ đàn hồi tự nhiên, giảm chấn tốt. Bánh xe cao su phù hợp cho nhiều ứng dụng khác nhau.

## So sánh chi tiết

| Tiêu chí | Bánh xe PU | Bánh xe cao su |
|----------|-----------|---------------|
| **Độ bền** | ⭐⭐⭐⭐⭐ Rất cao | ⭐⭐⭐ Trung bình |
| **Chịu tải** | ⭐⭐⭐⭐⭐ Tốt | ⭐⭐⭐ Khá |
| **Độ êm** | ⭐⭐⭐⭐ Tốt | ⭐⭐⭐⭐⭐ Rất tốt |
| **Chống mài mòn** | ⭐⭐⭐⭐⭐ Xuất sắc | ⭐⭐⭐ Trung bình |
| **Chịu hóa chất** | ⭐⭐⭐⭐ Tốt | ⭐⭐ Kém |
| **Không để vết** | ✅ Có | ❌ Có thể để vết đen |
| **Giá thành** | Cao hơn 20-30% | Thấp hơn |
| **Tuổi thọ** | 3-5 năm | 1-2 năm |

## Khi nào nên dùng bánh xe PU?

- Sàn sạch (epoxy, gạch) - không để lại vết
- Môi trường có hóa chất
- Cần độ bền cao, ít thay thế
- Chịu tải trọng lớn

## Khi nào nên dùng bánh xe cao su?

- Sàn bê tông gồ ghề
- Cần giảm chấn, giảm tiếng ồn tối đa
- Ngân sách hạn chế
- Sử dụng ngoài trời

## Kết luận

**Bánh xe PU** phù hợp cho hầu hết ứng dụng công nghiệp hiện đại. Tuy giá thành cao hơn nhưng tuổi thọ gấp 2-3 lần nên tổng chi phí sở hữu thấp hơn.

**Bánh xe cao su** vẫn là lựa chọn tốt cho môi trường ngoài trời hoặc khi cần giảm chấn tối đa.

Liên hệ **0933408565** để được tư vấn chi tiết và báo giá tốt nhất!
    `,
    category: 'kien-thuc',
    tags: ['bánh xe PU', 'bánh xe cao su', 'so sánh', 'polyurethane'],
    author: 'Nguyễn Văn Nam',
    publishedAt: '2026-03-10',
    readTime: 6,
    image: '/images/blog/so-sanh-pu-cao-su.jpg',
    featured: true,
  },
  {
    id: 'b3',
    title: 'Top 5 loại bánh xe đẩy bán chạy nhất 2026',
    slug: 'top-5-banh-xe-day-ban-chay-nhat-2026',
    excerpt: 'Tổng hợp 5 loại bánh xe đẩy được khách hàng lựa chọn nhiều nhất trong năm 2026, kèm đánh giá chi tiết và giá tham khảo.',
    content: `
## Danh sách bánh xe đẩy bán chạy nhất

Dựa trên dữ liệu bán hàng thực tế, dưới đây là 5 sản phẩm được ưa chuộng nhất tại Bánh xe đẩy HCM.

### 1. Bánh xe tải trung 125mm PU
**Lý do bán chạy**: Kích thước vừa phải, chịu tải 150kg, phù hợp đa số kho hàng và xưởng sản xuất.

- Chất liệu: PU + thép
- Chịu tải: 150kg/bánh
- Bảo hành: 12 tháng

### 2. Bánh xe tải nặng 150mm
**Lý do bán chạy**: Đáp ứng nhu cầu công nghiệp nặng, bền bỉ, ít hao mòn.

- Chất liệu: PU + thép cường lực
- Chịu tải: 200kg/bánh
- Bảo hành: 18 tháng

### 3. Bánh xe y tế 125mm Inox
**Lý do bán chạy**: Nhu cầu trang thiết bị y tế tăng, đạt chuẩn vệ sinh.

- Chất liệu: Inox 304 + cao su y tế
- Chịu tải: 120kg/bánh
- Tính năng: Kháng khuẩn, êm ái

### 4. Bánh xe giảm chấn 125mm
**Lý do bán chạy**: Vận hành êm ái, bảo vệ hàng hóa nhạy cảm.

- Chất liệu: PU + spring steel
- Chịu tải: 150kg/bánh
- Bảo hành: 24 tháng

### 5. Xe đẩy hàng 4 bánh 300kg
**Lý do bán chạy**: Giải pháp trọn bộ, tiện lợi, bền chắc.

- Chất liệu: Thép không gỉ
- Chịu tải: 300kg
- Kích thước: 600x400x800mm

## Tại sao nên chọn mua tại Bánh xe đẩy HCM?

✅ Sản phẩm chính hãng, có bảo hành
✅ Giá sỉ tốt nhất thị trường
✅ Giao hàng nhanh 24h trong TP.HCM
✅ Tư vấn kỹ thuật miễn phí

📞 Hotline: **0933408565** | Zalo: **0933408565**
    `,
    category: 'san-pham',
    tags: ['top sản phẩm', 'bán chạy', '2026', 'bánh xe đẩy'],
    author: 'Nguyễn Văn Nam',
    publishedAt: '2026-03-20',
    readTime: 5,
    image: '/images/blog/top-5-banh-xe-2026.jpg',
    featured: true,
  },
  {
    id: 'b4',
    title: 'Hướng dẫn bảo trì bánh xe đẩy đúng cách để tăng tuổi thọ',
    slug: 'huong-dan-bao-tri-banh-xe-day-dung-cach',
    excerpt: 'Chia sẻ kinh nghiệm bảo trì bánh xe đẩy công nghiệp giúp kéo dài tuổi thọ gấp 2-3 lần. Tiết kiệm chi phí thay thế đáng kể.',
    content: `
## Tại sao cần bảo trì bánh xe đẩy?

Bánh xe đẩy giống như lốp xe hơi - cần được kiểm tra và bảo trì định kỳ để hoạt động tối ưu. Bảo trì đúng cách giúp:

- Tăng tuổi thọ **2-3 lần**
- Giảm lực đẩy, tăng năng suất
- Đảm bảo an toàn lao động
- Tiết kiệm chi phí thay thế

## Lịch bảo trì khuyến nghị

### Hàng tuần
- ✅ Kiểm tra bằng mắt: vết nứt, mòn bất thường
- ✅ Kiểm tra độ xoay: bánh xe có xoay trơn tru không
- ✅ Vệ sinh bụi bẩn, dây, tóc quấn quanh trục

### Hàng tháng
- ✅ Tra dầu/mỡ vào ổ bi
- ✅ Kiểm tra ốc vít giá đỡ
- ✅ Đo độ mòn bánh xe

### 3-6 tháng/lần
- ✅ Kiểm tra tổng thể toàn bộ hệ thống
- ✅ Thay thế bánh xe mòn quá mức
- ✅ Thay ổ bi nếu có tiếng kêu

## Dấu hiệu cần thay bánh xe mới

1. **Mòn không đều** - bánh xe bị lệch, mòn một bên
2. **Vết nứt, rạn** - trên bề mặt PU hoặc cao su
3. **Rung lắc** - ổ bi hỏng, trục cong
4. **Tiếng kêu** - kêu cót két, rin rít khi di chuyển
5. **Khó đẩy** - cần nhiều lực hơn bình thường

## Mẹo kéo dài tuổi thọ

- **Không vượt quá tải trọng** cho phép
- **Tránh va đập mạnh** vào tường, vật cản
- **Không kéo lê** xe khi bánh xe bị khóa
- **Bảo quản nơi khô ráo** khi không sử dụng

Cần hỗ trợ kỹ thuật? Liên hệ **0933408565** - Tư vấn miễn phí!
    `,
    category: 'huong-dan',
    tags: ['bảo trì', 'hướng dẫn', 'tuổi thọ', 'tiết kiệm'],
    author: 'Nguyễn Văn Nam',
    publishedAt: '2026-03-05',
    readTime: 7,
    image: '/images/blog/bao-tri-banh-xe.jpg',
    featured: false,
  },
  {
    id: 'b5',
    title: 'Bánh xe đẩy cho bệnh viện: Tiêu chuẩn và cách chọn mua',
    slug: 'banh-xe-day-cho-benh-vien-tieu-chuan',
    excerpt: 'Tìm hiểu tiêu chuẩn bánh xe dùng trong y tế, bệnh viện. Các yêu cầu đặc biệt về vệ sinh, độ ồn và chất liệu cho môi trường y tế.',
    content: `
## Yêu cầu đặc biệt của bánh xe y tế

Môi trường bệnh viện có những yêu cầu khắt khe hơn so với công nghiệp:

### 1. Tiêu chuẩn vệ sinh
- Chất liệu phải **kháng khuẩn**, dễ vệ sinh
- Không tích tụ bụi bẩn
- Chịu được dung dịch khử trùng

### 2. Độ ồn
- Vận hành **siêu êm** - không gây tiếng ồn
- Quan trọng cho khu vực ICU, phòng mổ, phòng bệnh

### 3. Chất liệu
- **Inox 304** - không gỉ sét, đạt chuẩn y tế
- **Cao su y tế** - không để vết, không mùi
- **Trục sealed bearing** - ngăn bụi, nước

### 4. Thiết kế
- Dễ tháo lắp để vệ sinh
- Không có kẽ hở tích tụ vi khuẩn
- Xoay 360° linh hoạt

## Ứng dụng trong bệnh viện

| Thiết bị | Loại bánh xe phù hợp |
|----------|---------------------|
| Giường bệnh | Bánh xe y tế 125mm, có khóa |
| Xe lăn | Bánh xe cao su y tế 100mm |
| Tủ thuốc di động | Bánh xe inox 75mm |
| Xe đẩy thực phẩm | Bánh xe PU y tế 100mm |
| Máy thở, monitor | Bánh xe giảm chấn 75mm |

## Sản phẩm của chúng tôi

Bánh xe đẩy HCM cung cấp đầy đủ các loại bánh xe chuyên dụng cho y tế:

- ✅ Inox 304 chính hãng
- ✅ Đạt tiêu chuẩn vệ sinh y tế
- ✅ Bảo hành 24 tháng
- ✅ Đã cung cấp cho nhiều bệnh viện lớn

📞 Liên hệ tư vấn: **0933408565**
    `,
    category: 'kien-thuc',
    tags: ['bánh xe y tế', 'bệnh viện', 'tiêu chuẩn', 'inox 304'],
    author: 'Nguyễn Văn Nam',
    publishedAt: '2026-02-28',
    readTime: 6,
    image: '/images/blog/banh-xe-benh-vien.jpg',
    featured: false,
  },
]
