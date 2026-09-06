# Certificates & Documents Directory

Store all certificate image thumbnails and document files in this folder for the fastest global CDN loading speed.

---

## Recommended Structure

```text
public/certificates/
├── web-dev-cert.webp         <-- Fast-loading thumbnail for the UI grid (WebP, < 100KB)
├── web-dev-cert.pdf          <-- Full downloadable / viewable PDF document
├── graphic-design-cert.webp
├── graphic-design-cert.pdf
├── ai-ml-cert.webp
├── ai-ml-cert.pdf
├── data-analytics-cert.webp
└── data-analytics-cert.pdf
```

---

## Best Practices for Ultra-Fast Loading

1. **Thumbnail Images (`.webp`)**:
   - Convert certificate images/scans to `.webp` format.
   - Recommended width: **800px – 1000px** (aspect ratio ~16:10 or 4:3).
   - Target file size: **under 100KB** per image.
   - Tool to convert: [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com).

2. **Full Documents (`.pdf`)**:
   - Store high-resolution certificates as compressed PDFs.
   - Keep PDF size under 1MB - 2MB for fast opening.

3. **Referencing in Code**:
   In `src/data/experience.ts`:
   ```typescript
   {
     id: "cert-frontend-master",
     title: "Web Development (Short Course)",
     issuer: "Frontend Master",
     imageUrl: "/certificates/web-dev-cert.webp", // Fast thumbnail
     fileUrl: "/certificates/web-dev-cert.pdf",   // Opens full PDF
     // ...
   }
   ```
