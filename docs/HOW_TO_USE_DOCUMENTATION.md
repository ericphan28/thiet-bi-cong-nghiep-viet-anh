# 📖 HƯỚNG DẪN SỬ DỤNG TÀI LIỆU PROJECT

## 🎯 **Mục đích**
File này hướng dẫn cách tham chiếu và sử dụng bộ tài liệu documentation của project **Bánh xe đẩy HCM** trong các chat session mới với GitHub Copilot.

---

## 📚 **Bộ Tài Liệu Hiện Có**

### 1. **PROJECT_OVERVIEW.md** 📋
- **Mục đích**: Tổng quan toàn bộ project
- **Nội dung**: Business context, technical stack, architecture, pages & features
- **Khi nào dùng**: Bắt đầu chat session mới, hiểu tổng quan project

### 2. **TECHNICAL_ARCHITECTURE.md** 🏗️
- **Mục đích**: Kiến trúc kỹ thuật chi tiết
- **Nội dung**: System architecture, component hierarchy, build configuration
- **Khi nào dùng**: Làm việc với code, debug, optimize performance

### 3. **DATA_MODELS_BUSINESS_LOGIC.md** 📊
- **Mục đích**: Business logic và data structure
- **Nội dung**: Category/Product models, pricing rules, customer data
- **Khi nào dùng**: Thêm/sửa data, business rules, SEO content

### 4. **COMPONENT_LIBRARY_UI_PATTERNS.md** 🧩
- **Mục đích**: UI components và design patterns
- **Nội dung**: Layout components, UI library, design system
- **Khi nào dùng**: Làm việc với UI/UX, thêm components mới

### 5. **DEPLOYMENT_OPERATIONS_GUIDE.md** 🚀
- **Mục đích**: Deployment và operations
- **Nội dung**: Azure deployment, CI/CD, monitoring, security
- **Khi nào dùng**: Deploy project, setup production environment

---

## 💬 **Cách Tham Chiếu Trong Chat**

### **🔥 Cách Tốt Nhất - Bắt Đầu Chat Session**
```
"Hãy đọc file PROJECT_OVERVIEW.md trong thư mục docs/ để hiểu tổng quan 
về project website Bánh xe đẩy HCM này, sau đó giúp tôi [công việc cụ thể]"
```

### **⚡ Tham Chiếu Nhanh Theo Context**

#### **Khi làm việc với Business Logic:**
```
"Dựa vào DATA_MODELS_BUSINESS_LOGIC.md, hãy giúp tôi thêm một category sản phẩm mới"
```

#### **Khi làm việc với UI/Components:**
```
"Theo COMPONENT_LIBRARY_UI_PATTERNS.md, hướng dẫn tôi customize design system"
```

#### **Khi cần hiểu kiến trúc:**
```
"Tham khảo TECHNICAL_ARCHITECTURE.md để giải thích cách component hierarchy hoạt động"
```

#### **Khi deploy/setup:**
```
"Theo DEPLOYMENT_OPERATIONS_GUIDE.md, hướng dẫn tôi deploy project lên Azure"
```

---

## 📋 **Templates Câu Hỏi Thông Dụng**

### **🚀 Bắt đầu session mới**
```
"Đây là project website Bánh xe đẩy HCM. Hãy đọc PROJECT_OVERVIEW.md để hiểu project, 
sau đó giúp tôi [mô tả công việc cần làm]"
```

### **🔧 Development Tasks**
```
"Dựa vào tài liệu trong docs/, hãy giúp tôi:
- Thêm một tính năng mới cho [trang/component]
- Fix bug ở [vị trí cụ thể] 
- Optimize performance cho [phần nào đó]"
```

### **🎨 UI/UX Tasks**
```
"Theo COMPONENT_LIBRARY_UI_PATTERNS.md và design system hiện có, 
giúp tôi tạo component [tên component] với [yêu cầu cụ thể]"
```

### **📊 Data/Business Tasks**
```
"Tham khảo DATA_MODELS_BUSINESS_LOGIC.md để hiểu business rules, 
sau đó giúp tôi [thêm/sửa/xóa] [dữ liệu/logic cụ thể]"
```

### **🚀 Deployment Tasks**
```
"Theo DEPLOYMENT_OPERATIONS_GUIDE.md, hướng dẫn tôi:
- Setup Azure deployment
- Configure CI/CD pipeline  
- Monitor performance"
```

---

## 🎯 **Scenarios Cụ Thể**

### **Scenario 1: Thêm sản phẩm mới**
```
"Hãy đọc PROJECT_OVERVIEW.md và DATA_MODELS_BUSINESS_LOGIC.md để hiểu 
cấu trúc data hiện tại, sau đó hướng dẫn tôi thêm 5 sản phẩm mới 
vào category 'Bánh xe y tế'"
```

### **Scenario 2: Tạo component mới**
```
"Dựa vào COMPONENT_LIBRARY_UI_PATTERNS.md để hiểu design patterns hiện có, 
giúp tôi tạo component ProductComparison để so sánh sản phẩm"
```

### **Scenario 3: Optimize SEO**
```
"Tham khảo PROJECT_OVERVIEW.md và DATA_MODELS_BUSINESS_LOGIC.md 
để hiểu SEO strategy hiện tại, giúp tôi optimize meta tags cho tất cả pages"
```

### **Scenario 4: Setup production**
```
"Theo DEPLOYMENT_OPERATIONS_GUIDE.md, hướng dẫn tôi setup production environment 
trên Azure với domain thietbicongnghiepvietanh.com"
```

---

## ⚠️ **Lưu Ý Quan Trọng**

### **✅ Nên làm:**
- Luôn mention file documentation cụ thể
- Nêu rõ công việc cần làm sau "sau đó"
- Sử dụng context phù hợp với task
- Đọc PROJECT_OVERVIEW.md trước khi bắt đầu

### **❌ Không nên:**
- Hỏi chung chung không nêu file tham khảo
- Bỏ qua context documentation có sẵn
- Yêu cầu tạo lại những gì đã có trong docs
- Không specify công việc cụ thể

---

## 🔄 **Workflow Khuyến Nghị**

### **Bước 1: Xác định loại task**
- Business logic → `DATA_MODELS_BUSINESS_LOGIC.md`
- UI/UX work → `COMPONENT_LIBRARY_UI_PATTERNS.md`  
- Technical issues → `TECHNICAL_ARCHITECTURE.md`
- Deployment → `DEPLOYMENT_OPERATIONS_GUIDE.md`
- Tổng quan → `PROJECT_OVERVIEW.md`

### **Bước 2: Tham chiếu file phù hợp**
```
"Hãy đọc [TÊN_FILE.md] để hiểu [context cần thiết]"
```

### **Bước 3: Nêu yêu cầu cụ thể**
```
"sau đó giúp tôi [mô tả chi tiết công việc]"
```

### **Bước 4: Follow-up nếu cần**
```
"Dựa vào [file khác] để [yêu cầu bổ sung]"
```

---

## 🎉 **Ví Dụ Hoàn Chỉnh**

```
"Đây là project website Bánh xe đẩy HCM. Hãy đọc PROJECT_OVERVIEW.md 
để hiểu tổng quan project, sau đó tham khảo COMPONENT_LIBRARY_UI_PATTERNS.md 
để hiểu design system hiện có. Giúp tôi tạo một landing page mới cho 
campaign khuyến mãi với hero section, product showcase và contact form, 
tuân thủ design patterns đã có."
```

---

**💡 Tip**: Copy các template trên và thay [phần trong ngoặc] bằng yêu cầu cụ thể của bạn!
