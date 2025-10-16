#!/bin/sh

# Comprehensive Image Verification Script
# Verifies all images used in the Bond UI Website are present in the Docker container

set -e

echo "🔍 Verifying all images for Bond UI Website..."
echo "=================================================="
echo ""

MISSING_COUNT=0
VERIFIED_COUNT=0

check_image() {
    local path=$1
    local description=$2
    
    if [ -f "$path" ]; then
        echo "✅ $description"
        VERIFIED_COUNT=$((VERIFIED_COUNT + 1))
    else
        echo "❌ MISSING: $description"
        echo "   Expected at: $path"
        MISSING_COUNT=$((MISSING_COUNT + 1))
    fi
}

# ============================================
# HEADER & FOOTER LOGOS
# ============================================
echo "📋 Header & Footer Logos:"
check_image "public/images/logowhite.webp" "Header Logo (White)"
check_image "public/images/logoblack.webp" "Header Logo (Black)"
check_image "public/images/logosmallwhite.webp" "Footer Logo (White)"
check_image "public/images/logosmallblack.webp" "Footer Logo (Black)"
echo ""

# ============================================
# DESKTOP CAROUSEL IMAGES (7 slides)
# ============================================
echo "🖥️  Desktop Carousel Images:"
check_image "public/images/carousel/word1024x630start.webp" "Desktop Slide 1 - Start"
check_image "public/images/carousel/word1024x630q.webp" "Desktop Slide 2 - Function Keys"
check_image "public/images/carousel/word1024x630c2.webp" "Desktop Slide 3 - KDDM"
check_image "public/images/carousel/word1024x630d2.webp" "Desktop Slide 4 - QCB"
check_image "public/images/carousel/word1024x630n.webp" "Desktop Slide 5 - Flyout Menus"
check_image "public/images/carousel/word1024x630o.webp" "Desktop Slide 6 - QCB Management"
check_image "public/images/carousel/word1024x630p.webp" "Desktop Slide 7 - Color Themes"
echo ""

# ============================================
# MOBILE CAROUSEL IMAGES (7 slides)
# ============================================
echo "📱 Mobile Carousel Images:"
check_image "public/images/carousel/word1024x630a.webp" "Mobile Slide 1 - Pull Down Menus"
check_image "public/images/carousel/word1024x630b.webp" "Mobile Slide 2 - Drop Down Menus"
check_image "public/images/carousel/word1024x630g.webp" "Mobile Slide 3 - KDDM"
check_image "public/images/carousel/word1024x630d2.webp" "Mobile Slide 4 - QCB"
check_image "public/images/carousel/word1024x630n.webp" "Mobile Slide 5 - Flyout Menus"
check_image "public/images/carousel/word1024x630o.webp" "Mobile Slide 6 - QCB Management"
check_image "public/images/carousel/word1024x630p.webp" "Mobile Slide 7 - Color Themes"
echo ""

# ============================================
# SECTION CAROUSEL IMAGES (9 slides)
# ============================================
echo "📑 Section Carousel Images:"
check_image "public/images/word2a.webp" "Section Slide 1 - Pull Down Menus"
check_image "public/images/word1blue.webp" "Section Slide 2 - QCBs"
check_image "public/images/word1336i2.webp" "Section Slide 3 - KDDM"
check_image "public/images/word3a.webp" "Section Slide 4 - Dialogue Boxes"
check_image "public/images/advancedfind.avifs" "Section Slide 5 - Advanced Find"
check_image "public/images/qcbaddcommand2.avifs" "Section Slide 6 - QCB Add Command"
check_image "public/images/word5.webp" "Section Slide 7 - Font Selection"
check_image "public/images/word6.webp" "Section Slide 8 - Dialogue Boxes"
check_image "public/images/word7.webp" "Section Slide 9 - Insert Hyperlink"
echo ""

# ============================================
# SECTION CAROUSEL THUMBNAILS
# ============================================
echo "🖼️  Section Carousel Thumbnails:"
check_image "public/images/word2a.webp" "Section Thumbnail 1"
check_image "public/images/word1blue.webp" "Section Thumbnail 2"
check_image "public/images/word1336i2.webp" "Section Thumbnail 3"
check_image "public/images/word3a.webp" "Section Thumbnail 4"
check_image "public/images/word6.webp" "Section Thumbnail 5"
check_image "public/images/qcbaddcommandsmall.webp" "Section Thumbnail 6"
check_image "public/images/word5.webp" "Section Thumbnail 7"
check_image "public/images/word6.webp" "Section Thumbnail 8"
check_image "public/images/word7.webp" "Section Thumbnail 9"
echo ""

# ============================================
# OTHER PAGE IMAGES
# ============================================
echo "📄 Other Page Images:"
check_image "public/images/banner.webp" "Banner Image"
check_image "public/images/buynow1499.webp" "Buy Now $14.99"
check_image "public/images/buynow2499.webp" "Buy Now $24.99"
check_image "public/images/addindownload.webp" "Add-in Download"
check_image "public/images/footerback.webp" "Footer Background (Dark)"
check_image "public/images/footerbacklight.webp" "Footer Background (Light)"
echo ""

# ============================================
# ANIMATED GIFS
# ============================================
echo "🎬 Animated GIF Images:"
check_image "public/images/dialogueBox1.gif" "Dialogue Box 1 Animation"
check_image "public/images/dialogueBox2.gif" "Dialogue Box 2 Animation"
check_image "public/images/editcustom.gif" "Edit Custom Animation"
check_image "public/images/manual1.gif" "Manual 1 Animation"
check_image "public/images/manual2.gif" "Manual 2 Animation"
check_image "public/images/manual3.gif" "Manual 3 Animation"
check_image "public/images/multitoggle.gif" "Multi Toggle Animation"
echo ""

# ============================================
# SVG ICONS
# ============================================
echo "🎨 SVG Icons:"
check_image "public/images/3d-magnifier.svg" "3D Magnifier Icon"
echo ""

# ============================================
# SMALL/THUMBNAIL VARIANTS
# ============================================
echo "🔍 Small/Thumbnail Variants:"
check_image "public/images/carousel/word1024x630startsmall.webp" "Start Small"
check_image "public/images/carousel/word1024x630qsmall.webp" "Function Keys Small"
check_image "public/images/carousel/word1024x630c2small.webp" "KDDM Small"
check_image "public/images/carousel/word1024x630d2small.webp" "QCB Small"
check_image "public/images/carousel/word1024x630nsmall.webp" "Flyout Small"
check_image "public/images/carousel/word1024x630osmall.webp" "QCB Management Small"
check_image "public/images/carousel/word1024x630psmall.webp" "Color Themes Small"
check_image "public/images/word2asmall.webp" "Word2a Small"
check_image "public/images/word1bluesmall.webp" "Word1blue Small"
check_image "public/images/word1336i2small.webp" "Word1336i2 Small"
check_image "public/images/word3asmall.webp" "Word3a Small"
check_image "public/images/word5small.webp" "Word5 Small"
check_image "public/images/word6small.webp" "Word6 Small"
echo ""

# ============================================
# ADDITIONAL CAROUSEL IMAGES
# ============================================
echo "🔄 Additional Images:"
check_image "public/images/carousel/word1024x630d.webp" "Word D variant"
echo ""

# ============================================
# FAVICON
# ============================================
echo "🌐 Favicon:"
check_image "public/favicon.ico" "Favicon"
echo ""

# ============================================
# SUMMARY
# ============================================
echo "=================================================="
echo "📊 VERIFICATION SUMMARY"
echo "=================================================="
echo "✅ Verified: $VERIFIED_COUNT images"
echo "❌ Missing:  $MISSING_COUNT images"
echo ""

if [ $MISSING_COUNT -eq 0 ]; then
    echo "🎉 SUCCESS! All images are present and accounted for."
    exit 0
else
    echo "❌ FAILURE! $MISSING_COUNT image(s) missing."
    echo ""
    echo "🔧 To fix this issue:"
    echo "   1. Ensure all images exist in the source repository"
    echo "   2. Rebuild Docker image without cache:"
    echo "      docker build --no-cache -t bonduiwebsitenext:latest ."
    echo "   3. Check .dockerignore for exclusion patterns"
    echo "   4. Verify case sensitivity of filenames"
    exit 1
fi
