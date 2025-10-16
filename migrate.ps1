#!/usr/bin/env pwsh
# Migration Helper Script for Homepage Refactoring

param(
    [Parameter(Mandatory = $true)]
    [ValidateSet('test', 'activate', 'rollback', 'status')]
    [string]$Action
)

$homePath = "app/home"
$oldFile = "$homePath/page.tsx"
$newFile = "$homePath/page-new.tsx"
$backupFile = "$homePath/page-old.tsx"

function Show-Status {
    Write-Host "`n=== Migration Status ===" -ForegroundColor Cyan
    
    if (Test-Path $oldFile) {
        Write-Host "✓ Original file: $oldFile (active)" -ForegroundColor Green
    }
    
    if (Test-Path $newFile) {
        Write-Host "✓ New file: $newFile (ready)" -ForegroundColor Green
    }
    
    if (Test-Path $backupFile) {
        Write-Host "✓ Backup file: $backupFile" -ForegroundColor Yellow
    }
    
    Write-Host "`n=== New Structure Files ===" -ForegroundColor Cyan
    $requiredFiles = @(
        "$homePath/data/carousel-data.ts",
        "$homePath/config/homepage-config.ts",
        "$homePath/hooks/use-carousel.ts",
        "$homePath/components/DesktopCarousel.tsx",
        "$homePath/components/MobileCarousel.tsx",
        "$homePath/components/SectionCarousel.tsx",
        "$homePath/components/SectionCards.tsx",
        "$homePath/components/BuyNowBar.tsx"
    )
    
    $allPresent = $true
    foreach ($file in $requiredFiles) {
        if (Test-Path $file) {
            Write-Host "✓ $file" -ForegroundColor Green
        }
        else {
            Write-Host "✗ $file (missing)" -ForegroundColor Red
            $allPresent = $false
        }
    }
    
    if ($allPresent) {
        Write-Host "`n✓ All files present - ready to migrate!" -ForegroundColor Green
    }
    else {
        Write-Host "`n✗ Some files missing - migration not ready" -ForegroundColor Red
    }
}

function Test-NewStructure {
    Write-Host "`n=== Testing New Structure ===" -ForegroundColor Cyan
    
    if (!(Test-Path $newFile)) {
        Write-Host "✗ New file not found: $newFile" -ForegroundColor Red
        return
    }
    
    Write-Host "Creating backup of current file..." -ForegroundColor Yellow
    Copy-Item $oldFile $backupFile -Force
    
    Write-Host "Activating new structure..." -ForegroundColor Yellow
    Move-Item $oldFile "$homePath/page-original.tsx" -Force
    Move-Item $newFile $oldFile -Force
    
    Write-Host "`n✓ New structure activated!" -ForegroundColor Green
    Write-Host "→ Test your site now" -ForegroundColor Cyan
    Write-Host "→ Run 'npm run dev' if not already running" -ForegroundColor Cyan
    Write-Host "→ Run './migrate.ps1 rollback' to restore old version" -ForegroundColor Yellow
}

function Activate-NewStructure {
    Write-Host "`n=== Activating New Structure (Permanent) ===" -ForegroundColor Cyan
    
    if (Test-Path "$homePath/page-original.tsx") {
        Write-Host "Removing backup..." -ForegroundColor Yellow
        Remove-Item "$homePath/page-original.tsx" -Force
        
        Write-Host "`n✓ Migration complete!" -ForegroundColor Green
        Write-Host "✓ Old file removed" -ForegroundColor Green
        Write-Host "✓ New structure is now permanent" -ForegroundColor Green
    }
    elseif (!(Test-Path $newFile)) {
        Write-Host "✓ Already using new structure" -ForegroundColor Green
    }
    else {
        Write-Host "Run './migrate.ps1 test' first" -ForegroundColor Yellow
    }
}

function Rollback-Changes {
    Write-Host "`n=== Rolling Back Changes ===" -ForegroundColor Yellow
    
    if (Test-Path "$homePath/page-original.tsx") {
        Write-Host "Restoring original file..." -ForegroundColor Yellow
        Move-Item $oldFile $newFile -Force
        Move-Item "$homePath/page-original.tsx" $oldFile -Force
        
        if (Test-Path $backupFile) {
            Remove-Item $backupFile -Force
        }
        
        Write-Host "`n✓ Rollback complete!" -ForegroundColor Green
        Write-Host "✓ Original structure restored" -ForegroundColor Green
    }
    else {
        Write-Host "Nothing to rollback - original structure is active" -ForegroundColor Yellow
    }
}

# Main execution
switch ($Action) {
    'status' { Show-Status }
    'test' { Test-NewStructure }
    'activate' { Activate-NewStructure }
    'rollback' { Rollback-Changes }
}
