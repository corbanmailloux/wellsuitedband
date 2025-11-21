const sharp = require('sharp');
const path = require('path');

async function optimizeImage(inputName, outputName, maxWidth, options = {}) {
    const inputPath = path.join(process.cwd(), 'public', 'images', inputName);
    const outputPath = path.join(process.cwd(), 'public', 'images', 'optimized', outputName);
    const baseName = outputName.replace(/\.[^.]+$/, '');
    const outputPathAvif = path.join(process.cwd(), 'public', 'images', 'optimized', `${baseName}.avif`);

    try {
        let pipeline = sharp(inputPath);

        if (options.width && options.height) {
            // Exact dimensions with cover fit
            pipeline = pipeline.resize(options.width, options.height, {
                fit: 'cover',
                position: 'center'
            });
        } else {
            // Max width while maintaining aspect ratio
            pipeline = pipeline.resize(maxWidth, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
        }

        // Apply any overlay text if provided
        if (options.overlayText) {
            // Create text overlay
            const textBuffer = await sharp({
                text: {
                    text: options.overlayText,
                    font: 'Arial',
                    fontSize: 48,
                    rgba: true
                }
            }).toBuffer();

            pipeline = pipeline.composite([
                { input: textBuffer, gravity: 'center' }
            ]);
        }

        // Write AVIF first (smaller, modern format), then keep JPEG fallback
        await pipeline.clone().avif({
            quality: 60
        }).toFile(outputPathAvif);

        await pipeline.clone().jpeg({
            quality: 80,
            progressive: true
        }).toFile(outputPath);

        console.log(`${baseName}.avif and ${outputName} optimized successfully!`);
    } catch (error) {
        console.error(`Error optimizing ${inputName}:`, error);
    }
}

async function optimizeAllImages() {
    // Landscape version - optimized for desktop
    await optimizeImage('background.jpg', 'background.jpg', 2048);

    // Portrait version - optimized for mobile
    await optimizeImage('background-portrait.jpg', 'background-portrait.jpg', 1200);

    // OpenGraph image - exact dimensions
    await optimizeImage('background.jpg', 'og-image.jpg', null, {
        width: 1200,
        height: 630,
    });

    // 404 page image
    await optimizeImage('tough_guys.jpg', 'tough_guys.jpg', 2048);

    // About page group photo
    await optimizeImage('group_for_about.jpg', 'group_for_about.jpg', 1200);
}

optimizeAllImages();
