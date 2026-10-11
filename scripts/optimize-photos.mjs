/**
 * Resizes the original camera exports into web-ready JPEGs and records
 * their dimensions + a tiny blur placeholder for next/image.
 *
 * Usage: npm run photos -- /path/to/originals
 *
 * The slug → original filename mapping lives in scripts/photo-sources.json.
 * Captions, categories and alt text live in src/content/photos.ts.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = process.argv[2];
if (!sourceDir) {
  console.error("Usage: npm run photos -- /path/to/originals");
  process.exit(1);
}

const MAX_EDGE = 2400;
const outDir = path.join(root, "public/images/gallery");
const metaFile = path.join(root, "src/content/photo-meta.json");
const ogFile = path.join(root, "public/og-image.jpg");
const OG_SOURCE = "wedding-hotel-terrace";

const sources = JSON.parse(
  await fs.readFile(path.join(root, "scripts/photo-sources.json"), "utf8"),
);
await fs.mkdir(outDir, { recursive: true });

const meta = {};
for (const [slug, file] of Object.entries(sources)) {
  const input = path.join(sourceDir, file);
  const output = path.join(outDir, `${slug}.jpg`);

  const { width, height } = await sharp(input)
    .rotate()
    .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true, progressive: true })
    .toFile(output);

  const blur = await sharp(input)
    .rotate()
    .resize(16, 16, { fit: "inside" })
    .webp({ quality: 40 })
    .toBuffer();

  meta[slug] = {
    width,
    height,
    blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
  };
  console.log(`✓ ${slug} (${width}×${height})`);

  if (slug === OG_SOURCE) {
    await sharp(input)
      .rotate()
      .resize(1200, 630, { fit: "cover", position: "attention" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(ogFile);
    console.log("✓ og-image.jpg");
  }
}

await fs.writeFile(metaFile, JSON.stringify(meta, null, 2) + "\n");
console.log(`\nWrote ${Object.keys(meta).length} photos → public/images/gallery`);
