const sharp = require('sharp');
const path = require('path');

async function optimizeImage(inputName, outputName, maxWidth) {
    const inputPath = path.join(process.cwd(), 'public', 'images', inputName);
    const outputPath = path.join(process.cwd(), 'public', 'images', 'optimized', outputName);

    try {
        await sharp(inputPath)
            .resize(maxWidth, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .jpeg({
                quality: 80,
                progressive: true
            })
            .toFile(outputPath);

        console.log(`${outputName} optimized successfully!`);
    } catch (error) {
        console.error(`Error optimizing ${inputName}:`, error);
    }
}

async function optimizeAllImages() {
    // Landscape version - optimized for desktop
    await optimizeImage('background.jpg', 'background.jpg', 2048);

    // Portrait version - optimized for mobile
    await optimizeImage('background-portrait.jpg', 'background-portrait.jpg', 1200);
}

optimizeAllImages();
