#!/usr/bin/env node

/**
 * Script tạo sample images cho testing
 * Chạy: node scripts/generate-sample-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Cấu trúc thư mục và sample images
const imageStructure = {
  'hero': [
    { name: 'hero-main.jpg', url: 'https://picsum.photos/1920/1080?random=1', description: 'Hero banner chính' },
    { name: 'hero-mobile.jpg', url: 'https://picsum.photos/750/1334?random=2', description: 'Hero mobile' }
  ],
  'categories': [
    { name: 'banh-xe-tai-nhe.jpg', url: 'https://picsum.photos/400/400?random=10', description: 'Category icon - Tải nhẹ' },
    { name: 'banh-xe-tai-trung.jpg', url: 'https://picsum.photos/400/400?random=11', description: 'Category icon - Tải trung' },
    { name: 'banh-xe-tai-nang.jpg', url: 'https://picsum.photos/400/400?random=12', description: 'Category icon - Tải nặng' },
    { name: 'banh-xe-y-te.jpg', url: 'https://picsum.photos/400/400?random=13', description: 'Category icon - Y tế' },
    { name: 'xe-day-hang.jpg', url: 'https://picsum.photos/400/400?random=14', description: 'Category icon - Xe đẩy' }
  ],
  'products/banh-xe-tai-nhe': [
    { name: 'main.jpg', url: 'https://picsum.photos/800/800?random=20', description: 'Sản phẩm chính' },
    { name: 'detail-1.jpg', url: 'https://picsum.photos/800/800?random=21', description: 'Chi tiết 1' },
    { name: 'detail-2.jpg', url: 'https://picsum.photos/800/800?random=22', description: 'Chi tiết 2' }
  ],
  'products/banh-xe-tai-trung': [
    { name: 'main.jpg', url: 'https://picsum.photos/800/800?random=30', description: 'Sản phẩm chính' },
    { name: 'detail-1.jpg', url: 'https://picsum.photos/800/800?random=31', description: 'Chi tiết 1' }
  ],
  'products/xe-day-hang': [
    { name: 'main.jpg', url: 'https://picsum.photos/800/800?random=40', description: 'Xe đẩy chính' },
    { name: 'detail-1.jpg', url: 'https://picsum.photos/800/800?random=41', description: 'Chi tiết xe đẩy' }
  ],
  'process': [
    { name: 'step-1-consultation.jpg', url: 'https://picsum.photos/600/400?random=50', description: 'Tư vấn' },
    { name: 'step-2-selection.jpg', url: 'https://picsum.photos/600/400?random=51', description: 'Chọn sản phẩm' },
    { name: 'step-3-delivery.jpg', url: 'https://picsum.photos/600/400?random=52', description: 'Giao hàng' },
    { name: 'step-4-support.jpg', url: 'https://picsum.photos/600/400?random=53', description: 'Hỗ trợ' }
  ]
};

// Base path
const basePath = path.join(__dirname, '..', 'public', 'images');

// Download function
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filepath}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Main function
async function generateSampleImages() {
  console.log('🚀 Bắt đầu tạo sample images...\n');
  
  for (const [folder, images] of Object.entries(imageStructure)) {
    const folderPath = path.join(basePath, folder);
    
    // Tạo thư mục nếu chưa có
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(`📁 Tạo thư mục: ${folder}`);
    }
    
    // Download images
    for (const image of images) {
      const filepath = path.join(folderPath, image.name);
      
      try {
        await downloadImage(image.url, filepath);
        
        // Thêm delay để tránh rate limit
        await new Promise(resolve => setTimeout(resolve, 500));
        
      } catch (error) {
        console.error(`❌ Lỗi download ${image.name}:`, error.message);
      }
    }
  }
  
  console.log('\n🎉 Hoàn thành tạo sample images!');
  console.log('📋 Các file đã tạo:');
  
  // List created files
  Object.entries(imageStructure).forEach(([folder, images]) => {
    console.log(`\n📁 ${folder}/`);
    images.forEach(image => {
      console.log(`   - ${image.name} (${image.description})`);
    });
  });
  
  console.log('\n💡 Tip: Thay thế những ảnh này bằng ảnh thật của sản phẩm để có kết quả tốt nhất!');
}

// Chạy script
if (require.main === module) {
  generateSampleImages().catch(console.error);
}

module.exports = { generateSampleImages };
