#!/usr/bin/env node

/**
 * Diagnostic Script - Check Missing Mobile Slides
 * Verifies that all mobile carousel images exist and are accessible
 */

import { existsSync } from 'fs';
import { join } from 'path';

const mobileSlides = [
    "images/carousel/word1024x630a.webp",
    "images/carousel/word1024x630b.webp",
    "images/carousel/word1024x630g.webp",
    "images/carousel/word1024x630d2.webp",
    "images/carousel/word1024x630n.webp",  // Mobile Slide 5
    "images/carousel/word1024x630o.webp",  // Mobile Slide 6
    "images/carousel/word1024x630p.webp",
];

console.log('🔍 Checking Mobile Carousel Images...\n');

let allFound = true;

mobileSlides.forEach((imagePath, index) => {
    const fullPath = join('public', imagePath);
    const exists = existsSync(fullPath);

    const status = exists ? '✅' : '❌';
    const label = `Mobile Slide ${index + 1}`;

    console.log(`${status} ${label}: ${imagePath}`);

    if (!exists) {
        allFound = false;
        console.log(`   Missing: ${fullPath}`);
    }
});

console.log('\n' + '='.repeat(60));

if (allFound) {
    console.log('✅ All mobile carousel images found!');
    console.log('\nIf slides are missing in production, check:');
    console.log('1. Docker build logs');
    console.log('2. .next/standalone/public directory');
    console.log('3. File permissions in container');
    console.log('4. Case sensitivity issues (Linux vs Windows)');
} else {
    console.log('❌ Some mobile carousel images are missing!');
    console.log('\nPlease add the missing images to the public/images/carousel directory.');
}

console.log('='.repeat(60));
