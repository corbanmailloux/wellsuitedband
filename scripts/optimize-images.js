const sharp = require('sharp');
const path = require('path');

async function optimizeImage(inputName, outputName, maxWidth, options = {}) {
    const inputPath = path.join(process.cwd(), 'public', 'images', inputName);
    const outputPath = path.join(process.cwd(), 'public', 'images', 'optimized', outputName);
    const baseName = outputName.replace(/\.[^.]+$/, '');
    const outputPathAvif = path.join(process.cwd(), 'public', 'images', 'optimized', `${baseName}.avif`);
    const outputExt = path.extname(outputName).toLowerCase();

    // AVIF encoding defaults. Backgrounds sit under a translucent overlay, so they
    // can be compressed harder without a visible quality loss.
    const avifQuality = options.avifQuality ?? 50;
    const avifEffort = options.avifEffort ?? 4;

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

        // Write AVIF first (smaller, modern format), then keep a matching fallback format.
        await pipeline.clone().avif({
            quality: avifQuality,
            effort: avifEffort
        }).toFile(outputPathAvif);

        if (outputExt === '.png') {
            await pipeline.clone().png({
                compressionLevel: 9,
                adaptiveFiltering: true
            }).toFile(outputPath);
        } else if (outputExt === '.webp') {
            await pipeline.clone().webp({
                quality: 80
            }).toFile(outputPath);
        } else {
            await pipeline.clone().jpeg({
                quality: 75,
                progressive: true
            }).toFile(outputPath);
        }

        console.log(`${baseName}.avif and ${outputName} optimized successfully!`);
    } catch (error) {
        console.error(`Error optimizing ${inputName}:`, error);
    }
}

async function optimizeAllImages() {
    // Landscape version - optimized for desktop. Compressed hard because it is
    // displayed under a 60% opacity overlay.
    await optimizeImage('background.jpg', 'background.jpg', 2048, { avifQuality: 40 });

    // Portrait version - optimized for mobile (this is the mobile LCP image).
    await optimizeImage('background-portrait.jpg', 'background-portrait.jpg', 1200, { avifQuality: 40 });

    // OpenGraph image - exact dimensions
    await optimizeImage('og-image.png', 'og-image.jpg', null, {
        width: 1200,
        height: 630,
    });

    // 404 page image
    await optimizeImage('tough_guys.jpg', 'tough_guys.jpg', 2048);

    // About page group photo
    await optimizeImage('group_for_about.jpg', 'group_for_about.jpg', 1200);

    // Cover Art. Source is 600x600.
    await optimizeImage('cover-wait-forever.jpg', 'cover-wait-forever.jpg', 600);

    // Brand logo optimized for homepage display and site icon usage.
    await optimizeImage('rebrand/brand-circle.png', 'brand-circle.png', 600);

    // Small site icons. Browsers and OSes fetch these for tab/home-screen icons,
    // so keep them tiny instead of serving the 600px brand logo.
    await generateIcon('rebrand/brand-circle.png', 'icon-192.png', 192);
    await generateIcon('rebrand/brand-circle.png', 'icon-512.png', 512);
    await generateIcon('rebrand/brand-circle.png', 'apple-touch-icon.png', 180);
}

async function generateIcon(inputName, outputName, size) {
    const inputPath = path.join(process.cwd(), 'public', 'images', inputName);
    const outputPath = path.join(process.cwd(), 'public', 'images', 'optimized', outputName);

    try {
        await sharp(inputPath)
            .resize(size, size, { fit: 'cover', position: 'center' })
            .png({ compressionLevel: 9, adaptiveFiltering: true })
            .toFile(outputPath);
        console.log(`${outputName} generated successfully!`);
    } catch (error) {
        console.error(`Error generating ${outputName}:`, error);
    }
}

optimizeAllImages();
