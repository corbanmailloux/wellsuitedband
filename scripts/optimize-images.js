const sharp = require('sharp');
const path = require('path');

async function optimizeBackgroundImage() {
    const inputPath = path.join(process.cwd(), 'public', 'images', 'background.jpg');
    const outputPath = path.join(process.cwd(), 'public', 'images', 'optimized', 'background.jpg');

    try {
        await sharp(inputPath)
            .resize(2048, null, { // limit max width while maintaining aspect ratio
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({
                quality: 80, // good balance between quality and file size
                progressive: true // better loading experience
            })
            .toFile(outputPath);

        console.log('Background image optimized successfully!');
    } catch (error) {
        console.error('Error optimizing image:', error);
    }
}

optimizeBackgroundImage();
