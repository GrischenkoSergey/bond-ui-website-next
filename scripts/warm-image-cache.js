#!/usr/bin/env node

/**
 * Image Cache Warmer
 * Pre-optimizes all images before production deployment
 * Run after build: node scripts/warm-image-cache.js
 */

import http from 'http';
import { readFileSync } from 'fs';
import { join } from 'path';

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOSTNAME || 'localhost';

// Images from carousel-data.ts to pre-warm
const imagesToWarm = [
    // Desktop carousel slides (7 slides)
    '/images/carousel/word1024x630start.webp',
    '/images/carousel/word1024x630q.webp',
    '/images/carousel/word1024x630c2.webp',
    '/images/carousel/word1024x630d2.webp',
    '/images/carousel/word1024x630n.webp',
    '/images/carousel/word1024x630o.webp',
    '/images/carousel/word1024x630p.webp',

    // Mobile carousel slides (7 slides)
    '/images/carousel/word1024x630a.webp',
    '/images/carousel/word1024x630b.webp',
    '/images/carousel/word1024x630g.webp',
    '/images/carousel/word1024x630d2.webp', // Already in desktop, but listed for completeness
    '/images/carousel/word1024x630n.webp',  // Already in desktop
    '/images/carousel/word1024x630o.webp',  // Already in desktop
    '/images/carousel/word1024x630p.webp',  // Already in desktop

    // Section carousel slides (9 slides)
    '/images/word2a.webp',
    '/images/word1blue.webp',
    '/images/word1336i2.webp',
    '/images/word3a.webp',
    '/images/word6.webp',
    '/images/qcbaddcommandsmall.webp',
    '/images/word5.webp',
    '/images/word7.webp',

    // Additional commonly used images
    '/images/addindownload.webp',
    '/images/banner.webp',
    '/images/buynow1499.webp',
    '/images/buynow2499.webp',
].filter((value, index, self) => self.indexOf(value) === index); // Remove duplicates

// Common sizes to pre-optimize (based on deviceSizes and imageSizes)
const sizes = [
    320, 420, 640, 750, 828, 1080, 1200, // Device sizes
];

// Image quality settings
const qualities = [75]; // Default Next.js quality

async function warmImageCache() {
    console.log('🔥 Starting Image Cache Warmer...\n');
    console.log(`Server: http://${HOST}:${PORT}`);

    // Filter out images that can't be optimized (GIF, AVIF, etc.)
    const optimizableImages = imagesToWarm.filter(img => {
        const ext = img.toLowerCase().split('.').pop();
        return ['webp', 'jpg', 'jpeg', 'png'].includes(ext);
    });

    console.log(`Images to warm: ${optimizableImages.length} (${imagesToWarm.length - optimizableImages.length} skipped)`);
    console.log(`Sizes per image: ${sizes.length}`);
    console.log(`Total requests: ${optimizableImages.length * sizes.length * qualities.length}\n`);

    let successCount = 0;
    let errorCount = 0;
    const startTime = Date.now();

    for (const imagePath of optimizableImages) {
        for (const width of sizes) {
            for (const quality of qualities) {
                // Build Next.js image optimization URL
                const url = `http://${HOST}:${PORT}/_next/image?url=${encodeURIComponent(imagePath)}&w=${width}&q=${quality}`;

                try {
                    await new Promise((resolve, reject) => {
                        const request = http.get(url, (res) => {
                            if (res.statusCode === 200) {
                                // Consume response data to complete request
                                res.on('data', () => { });
                                res.on('end', () => {
                                    successCount++;
                                    process.stdout.write(`\r✓ Warmed: ${successCount}/${optimizableImages.length * sizes.length * qualities.length} | Errors: ${errorCount}`);
                                    resolve();
                                });
                            } else {
                                errorCount++;
                                reject(new Error(`HTTP ${res.statusCode}`));
                            }
                        });

                        request.on('error', (err) => {
                            errorCount++;
                            reject(err);
                        });

                        // Timeout after 30 seconds
                        request.setTimeout(30000, () => {
                            request.destroy();
                            errorCount++;
                            reject(new Error('Timeout'));
                        });
                    });

                    // Small delay to avoid overwhelming the server
                    await new Promise(resolve => setTimeout(resolve, 50));

                } catch (error) {
                    process.stdout.write(`\r✗ Error warming ${imagePath} (${width}px): ${error.message}`);
                }
            }
        }
    }

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    console.log('\n\n🎉 Image Cache Warming Complete!');
    console.log(`✓ Success: ${successCount}`);
    console.log(`✗ Errors: ${errorCount}`);
    console.log(`⏱️  Duration: ${duration}s`);
    console.log('\n💡 All images are now cached and will load instantly for users!');
}

// Wait for server to be ready
async function waitForServer(maxAttempts = 30) {
    console.log('⏳ Waiting for server to be ready...');

    for (let i = 0; i < maxAttempts; i++) {
        try {
            await new Promise((resolve, reject) => {
                const request = http.get(`http://${HOST}:${PORT}`, (res) => {
                    resolve();
                });
                request.on('error', reject);
                request.setTimeout(2000, () => {
                    request.destroy();
                    reject(new Error('Timeout'));
                });
            });

            console.log('✓ Server is ready!\n');
            return true;
        } catch (error) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }

    throw new Error('Server did not start in time');
}

// Main execution
(async () => {
    try {
        await waitForServer();
        await warmImageCache();
        process.exit(0);
    } catch (error) {
        console.error('\n❌ Error:', error.message);
        console.error('\n💡 Make sure the server is running: pnpm start');
        process.exit(1);
    }
})();
