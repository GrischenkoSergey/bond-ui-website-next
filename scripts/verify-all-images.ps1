# Comprehensive Image Verification Script (PowerShell)
# Verifies all images used in the Bond UI Website are present

Write-Host "🔍 Verifying all images for Bond UI Website..." -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

$MissingCount = 0
$VerifiedCount = 0

function Test-Image {
    param(
        [string]$Path,
        [string]$Description
    )
    
    if (Test-Path $Path) {
        Write-Host "✅ $Description" -ForegroundColor Green
        $script:VerifiedCount++
    }
    else {
        Write-Host "❌ MISSING: $Description" -ForegroundColor Red
        Write-Host "   Expected at: $Path" -ForegroundColor Yellow
        $script:MissingCount++
    }
}

# ============================================
# HEADER & FOOTER LOGOS
# ============================================
Write-Host "📋 Header & Footer Logos:" -ForegroundColor White
Test-Image "public/images/logowhite.webp" "Header Logo (White)"
Test-Image "public/images/logoblack.webp" "Header Logo (Black)"
Test-Image "public/images/logosmallwhite.webp" "Footer Logo (White)"
Test-Image "public/images/logosmallblack.webp" "Footer Logo (Black)"
Write-Host ""

# ============================================
# DESKTOP CAROUSEL IMAGES (7 slides)
# ============================================
Write-Host "🖥️  Desktop Carousel Images:" -ForegroundColor White
Test-Image "public/images/carousel/word1024x630start.webp" "Desktop Slide 1 - Start"
Test-Image "public/images/carousel/word1024x630q.webp" "Desktop Slide 2 - Function Keys"
Test-Image "public/images/carousel/word1024x630c2.webp" "Desktop Slide 3 - KDDM"
Test-Image "public/images/carousel/word1024x630d2.webp" "Desktop Slide 4 - QCB"
Test-Image "public/images/carousel/word1024x630n.webp" "Desktop Slide 5 - Flyout Menus"
Test-Image "public/images/carousel/word1024x630o.webp" "Desktop Slide 6 - QCB Management"
Test-Image "public/images/carousel/word1024x630p.webp" "Desktop Slide 7 - Color Themes"
Write-Host ""

# ============================================
# MOBILE CAROUSEL IMAGES (7 slides)
# ============================================
Write-Host "📱 Mobile Carousel Images:" -ForegroundColor White
Test-Image "public/images/carousel/word1024x630a.webp" "Mobile Slide 1 - Pull Down Menus"
Test-Image "public/images/carousel/word1024x630b.webp" "Mobile Slide 2 - Drop Down Menus"
Test-Image "public/images/carousel/word1024x630g.webp" "Mobile Slide 3 - KDDM"
Test-Image "public/images/carousel/word1024x630d2.webp" "Mobile Slide 4 - QCB"
Test-Image "public/images/carousel/word1024x630n.webp" "Mobile Slide 5 - Flyout Menus"
Test-Image "public/images/carousel/word1024x630o.webp" "Mobile Slide 6 - QCB Management"
Test-Image "public/images/carousel/word1024x630p.webp" "Mobile Slide 7 - Color Themes"
Write-Host ""

# ============================================
# SECTION CAROUSEL IMAGES (9 slides)
# ============================================
Write-Host "📑 Section Carousel Images:" -ForegroundColor White
Test-Image "public/images/word2a.webp" "Section Slide 1 - Pull Down Menus"
Test-Image "public/images/word1blue.webp" "Section Slide 2 - QCBs"
Test-Image "public/images/word1336i2.webp" "Section Slide 3 - KDDM"
Test-Image "public/images/word3a.webp" "Section Slide 4 - Dialogue Boxes"
Test-Image "public/images/advancedfind.avifs" "Section Slide 5 - Advanced Find"
Test-Image "public/images/qcbaddcommand2.avifs" "Section Slide 6 - QCB Add Command"
Test-Image "public/images/word5.webp" "Section Slide 7 - Font Selection"
Test-Image "public/images/word6.webp" "Section Slide 8 - Dialogue Boxes"
Test-Image "public/images/word7.webp" "Section Slide 9 - Insert Hyperlink"
Write-Host ""

# ============================================
# SECTION CAROUSEL THUMBNAILS
# ============================================
Write-Host "🖼️  Section Carousel Thumbnails:" -ForegroundColor White
Test-Image "public/images/word2a.webp" "Section Thumbnail 1"
Test-Image "public/images/word1blue.webp" "Section Thumbnail 2"
Test-Image "public/images/word1336i2.webp" "Section Thumbnail 3"
Test-Image "public/images/word3a.webp" "Section Thumbnail 4"
Test-Image "public/images/word6.webp" "Section Thumbnail 5"
Test-Image "public/images/qcbaddcommandsmall.webp" "Section Thumbnail 6"
Test-Image "public/images/word5.webp" "Section Thumbnail 7"
Test-Image "public/images/word6.webp" "Section Thumbnail 8"
Test-Image "public/images/word7.webp" "Section Thumbnail 9"
Write-Host ""

# ============================================
# OTHER PAGE IMAGES
# ============================================
Write-Host "📄 Other Page Images:" -ForegroundColor White
Test-Image "public/images/banner.webp" "Banner Image"
Test-Image "public/images/buynow1499.webp" "Buy Now `$14.99"
Test-Image "public/images/buynow2499.webp" "Buy Now `$24.99"
Test-Image "public/images/addindownload.webp" "Add-in Download"
Test-Image "public/images/footerback.webp" "Footer Background (Dark)"
Test-Image "public/images/footerbacklight.webp" "Footer Background (Light)"
Write-Host ""

# ============================================
# ANIMATED GIFS
# ============================================
Write-Host "🎬 Animated GIF Images:" -ForegroundColor White
Test-Image "public/images/dialogueBox1.gif" "Dialogue Box 1 Animation"
Test-Image "public/images/dialogueBox2.gif" "Dialogue Box 2 Animation"
Test-Image "public/images/editcustom.gif" "Edit Custom Animation"
Test-Image "public/images/manual1.gif" "Manual 1 Animation"
Test-Image "public/images/manual2.gif" "Manual 2 Animation"
Test-Image "public/images/manual3.gif" "Manual 3 Animation"
Test-Image "public/images/multitoggle.gif" "Multi Toggle Animation"
Write-Host ""

# ============================================
# SVG ICONS
# ============================================
Write-Host "🎨 SVG Icons:" -ForegroundColor White
Test-Image "public/images/3d-magnifier.svg" "3D Magnifier Icon"
Write-Host ""

# ============================================
# SMALL/THUMBNAIL VARIANTS
# ============================================
Write-Host "🔍 Small/Thumbnail Variants:" -ForegroundColor White
Test-Image "public/images/carousel/word1024x630startsmall.webp" "Start Small"
Test-Image "public/images/carousel/word1024x630qsmall.webp" "Function Keys Small"
Test-Image "public/images/carousel/word1024x630c2small.webp" "KDDM Small"
Test-Image "public/images/carousel/word1024x630d2small.webp" "QCB Small"
Test-Image "public/images/carousel/word1024x630nsmall.webp" "Flyout Small"
Test-Image "public/images/carousel/word1024x630osmall.webp" "QCB Management Small"
Test-Image "public/images/carousel/word1024x630psmall.webp" "Color Themes Small"
Test-Image "public/images/word2asmall.webp" "Word2a Small"
Test-Image "public/images/word1bluesmall.webp" "Word1blue Small"
Test-Image "public/images/word1336i2small.webp" "Word1336i2 Small"
Test-Image "public/images/word3asmall.webp" "Word3a Small"
Test-Image "public/images/word5small.webp" "Word5 Small"
Test-Image "public/images/word6small.webp" "Word6 Small"
Write-Host ""

# ============================================
# ADDITIONAL CAROUSEL IMAGES
# ============================================
Write-Host "🔄 Additional Images:" -ForegroundColor White
Test-Image "public/images/carousel/word1024x630d.webp" "Word D variant"
Write-Host ""

# ============================================
# FAVICON
# ============================================
Write-Host "🌐 Favicon:" -ForegroundColor White
Test-Image "public/favicon.ico" "Favicon"
Write-Host ""

# ============================================
# SUMMARY
# ============================================
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "📊 VERIFICATION SUMMARY" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "✅ Verified: $VerifiedCount images" -ForegroundColor Green
Write-Host "❌ Missing:  $MissingCount images" -ForegroundColor $(if ($MissingCount -eq 0) { "Green" } else { "Red" })
Write-Host ""

if ($MissingCount -eq 0) {
    Write-Host "🎉 SUCCESS! All images are present and accounted for." -ForegroundColor Green
    exit 0
}
else {
    Write-Host "❌ FAILURE! $MissingCount image(s) missing." -ForegroundColor Red
    Write-Host ""
    Write-Host "🔧 To fix this issue:" -ForegroundColor Yellow
    Write-Host "   1. Ensure all images exist in the source repository" -ForegroundColor Yellow
    Write-Host "   2. Rebuild Docker image without cache:" -ForegroundColor Yellow
    Write-Host "      docker build --no-cache -t bonduiwebsitenext:latest ." -ForegroundColor Yellow
    Write-Host "   3. Check .dockerignore for exclusion patterns" -ForegroundColor Yellow
    Write-Host "   4. Verify case sensitivity of filenames" -ForegroundColor Yellow
    exit 1
}
