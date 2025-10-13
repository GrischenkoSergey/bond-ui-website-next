# Quick Fix: Sharp Missing in Production

## The Error

```
⨯ Error: 'sharp' is required to be installed in standalone mode for the image optimization to function correctly.
```

## Quick Fix Applied

### 1. Added Sharp to package.json ✅

```json
"sharp": "^0.33.5"
```

### 2. Updated Dockerfile ✅

Added system dependencies for sharp:
```dockerfile
RUN apk add --no-cache libc6-compat libstdc++ vips-dev
```

Copied sharp module to production:
```dockerfile
COPY --from=builder /app/node_modules/sharp ./node_modules/sharp
```

## Deploy Now

### Step 1: Install Dependencies
```powershell
pnpm install
```

### Step 2: Rebuild Docker Image
```powershell
docker build -t bonduiwebsitenext:latest .
```

### Step 3: Test Locally (Optional)
```powershell
docker run -p 3000:3000 bonduiwebsitenext:latest
```

Visit http://localhost:3000 - should work without errors

### Step 4: Push to Registry
```powershell
docker tag bonduiwebsitenext:latest gsergey23/bonduiwebsitenext:latest
docker push gsergey23/bonduiwebsitenext:latest
```

### Step 5: Deploy to Production

Pull and restart with new image.

## Verify It Works

✅ No console errors about sharp
✅ Images load correctly
✅ Image URLs show `/_next/image?url=...`
✅ Images served as WebP/AVIF format

## What Changed

| File | Change | Why |
|------|--------|-----|
| `package.json` | Added `sharp: ^0.33.5` | Required for image optimization |
| `Dockerfile` | Added Alpine packages | Sharp needs C++ libraries |
| `Dockerfile` | Copy sharp to runner | Standalone mode needs explicit copy |

## Files Modified

1. ✅ `package.json` - Added sharp dependency
2. ✅ `Dockerfile` - Added sharp support

---

**For detailed explanation, see:** `SHARP_IMAGE_OPTIMIZATION_FIX.md`
