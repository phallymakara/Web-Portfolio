#!/usr/bin/env bash
# Automated certificate thumbnail generator for macOS / Vite Portfolio
set -e

CERT_DIR="public/certificates"
THUMB_DIR="public/certificates/thumbnails"

mkdir -p "$THUMB_DIR"
TMP_DIR=$(mktemp -d)

echo "⚙️ Processing certificates in $CERT_DIR..."

COUNT=0
for pdf in "$CERT_DIR"/*.pdf; do
  [ -e "$pdf" ] || continue
  filename=$(basename "$pdf")
  base="${filename%.pdf}"
  target_thumb="$THUMB_DIR/${base}.jpg"

  # QuickLook generate 1000px preview
  qlmanage -t -s 1000 -o "$TMP_DIR" "$pdf" >/dev/null 2>&1
  
  gen_png="$TMP_DIR/${filename}.png"
  if [ -f "$gen_png" ]; then
    # Resize & optimize to high-quality JPEG
    sips -s format jpeg -s formatOptions 85 -Z 1000 "$gen_png" --out "$target_thumb" >/dev/null 2>&1
    rm -f "$gen_png"
    COUNT=$((COUNT + 1))
    echo "  ✓ Generated: $target_thumb"
  fi
done

rm -rf "$TMP_DIR"
echo "✅ Finished processing $COUNT certificate thumbnails in $THUMB_DIR"
