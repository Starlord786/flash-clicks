import fs from 'fs';
import path from 'path';

// Note to user: If this fails to run, you will need to install sharp by running:
// npm install sharp
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'public', 'WEBSITE PHOTOS');
const outputDir = path.join(process.cwd(), 'public', 'OPTIMIZED_PHOTOS');

// Function to recursively find all images in a directory
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  
  const fileList = fs.readdirSync(dir);
  for (let file of fileList) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      // Only include common image formats
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

async function optimizeImages() {
  console.log('🔍 Scanning for images...');
  const allImages = getFiles(inputDir);
  
  if (allImages.length === 0) {
    console.log('No images found in public/WEBSITE PHOTOS');
    return;
  }

  console.log(`Found ${allImages.length} images. Starting compression...\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (let i = 0; i < allImages.length; i++) {
    const imgPath = allImages[i];
    
    // Calculate relative path to maintain folder structure
    const relativePath = path.relative(inputDir, imgPath);
    const destinationPath = path.join(outputDir, relativePath);
    const destinationDir = path.dirname(destinationPath);

    // Make sure destination folder exists
    if (!fs.existsSync(destinationDir)) {
      fs.mkdirSync(destinationDir, { recursive: true });
    }

    try {
      const stats = fs.statSync(imgPath);
      totalOriginalSize += stats.size;

      // Optimize image: resize max width to 1920 (HD) and convert to WEBP
      // You can change quality (0-100)
      const newFilePath = destinationPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      const info = await sharp(imgPath)
        .resize({ width: 1920, withoutEnlargement: true }) // Don't scale up small images
        .webp({ quality: 80 }) // 80 is a great balance between size and quality
        .toFile(newFilePath);

      totalNewSize += info.size;
      
      console.log(`✅ [${i+1}/${allImages.length}] Optimized: ${fileSize(stats.size)} -> ${fileSize(info.size)} | ${relativePath}`);
      
    } catch (err) {
      console.error(`❌ Failed to process ${relativePath}:`, err.message);
    }
  }

  console.log('\n🎉 ALL DONE!');
  console.log(`Original Total Size: ${fileSize(totalOriginalSize)}`);
  console.log(`New Total Size:      ${fileSize(totalNewSize)}`);
  console.log(`Space Saved:         ${fileSize(totalOriginalSize - totalNewSize)}`);
}

function fileSize(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

optimizeImages();
