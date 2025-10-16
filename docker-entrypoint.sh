#!/bin/sh

# Docker Entrypoint Script for Bond UI Website
# Warms image cache on container startup for instant first-load performance

echo "🚀 Starting Bond UI Website..."

# Start Next.js server in background
node server.js &
SERVER_PID=$!

echo "⏳ Waiting for server to be ready..."
sleep 3

# Warm image cache if script exists
if [ -f "scripts/warm-image-cache.js" ]; then
  echo "🔥 Warming image cache..."
  node scripts/warm-image-cache.js || echo "⚠️  Cache warming failed (non-critical)"
else
  echo "ℹ️  Cache warming script not found, skipping..."
fi

echo "✅ Server ready and cache warmed!"

# Keep server running in foreground
wait $SERVER_PID
