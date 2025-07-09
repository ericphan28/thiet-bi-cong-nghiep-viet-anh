# Next.js 15 Migration Notes

## ⚡ Breaking Change: Async Params

### **Vấn đề**
Next.js 15 yêu cầu `params` trong dynamic routes phải được xử lý như Promise.

### **Before (Next.js 14):**
```typescript
interface PageProps {
  params: {
    categoryId: string
  }
}

export default function Page({ params }: PageProps) {
  const category = data.find(c => c.id === params.categoryId)
  // ...
}
```

### **After (Next.js 15):**
```typescript
interface PageProps {
  params: Promise<{
    categoryId: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { categoryId } = await params
  const category = data.find(c => c.id === categoryId)
  // ...
}
```

### **✅ Đã sửa:**
- `app/san-pham/[categoryId]/page.tsx` - Updated to async params
- `generateMetadata` function - Updated to await params
- Page component - Changed to async and await params

### **📝 Lưu ý:**
- Tất cả dynamic routes trong Next.js 15 cần pattern này
- `generateStaticParams` không cần async nếu không fetch external data
- `generateMetadata` vẫn cần async khi sử dụng params

---
**Status:** ✅ Fixed - Build successful
