/**
 * Records the path, dimensions and a tiny blur placeholder of every photo in
 * public/WEBSITE for next/image (which resizes them on request).
 *
 * Usage: npm run photos
 *
 * Each sub-folder of public/WEBSITE is one portfolio category, named after the
 * folder (WEDDING → "Wedding", /portfolio/wedding). Photos get slugs
 * <category>-01, <category>-02…
 * Category order, descriptions, alt text and hero/featured picks live in src/content/photos.ts.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const sourceDir = path.join(publicDir, "WEBSITE");

const metaFile = path.join(root, "src/content/photo-meta.json");
const ogFile = path.join(root, "public/og-image.jpg");
const OG_SOURCE = "wedding-01";

const meta = {};
const folders = (await fs.readdir(sourceDir, { withFileTypes: true }))
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

for (const folder of folders) {
  const category = folder.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
  const files = (await fs.readdir(path.join(sourceDir, folder)))
    .filter((f) => /\.jpe?g$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  for (const [i, file] of files.entries()) {
    const slug = `${category}-${String(i + 1).padStart(2, "0")}`;
    const input = path.join(sourceDir, folder, file);

    const { width, height, orientation } = await sharp(input).metadata();
    const rotated = orientation >= 5; // EXIF 5–8 swap width and height

    const blur = await sharp(input)
      .rotate()
      .resize(16, 16, { fit: "inside" })
      .webp({ quality: 40 })
      .toBuffer();

    meta[slug] = {
      category,
      src: "/" + path.relative(publicDir, input).split(path.sep).map(encodeURIComponent).join("/"),
      width: rotated ? height : width,
      height: rotated ? width : height,
      blurDataURL: `data:image/webp;base64,${blur.toString("base64")}`,
    };
    console.log(`✓ ${slug} ← ${folder}/${file} (${width}×${height})`);

    if (slug === OG_SOURCE) {
      await sharp(input)
        .rotate()
        .resize(1200, 630, { fit: "cover", position: "attention" })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(ogFile);
      console.log("✓ og-image.jpg");
    }
  }
}

await fs.writeFile(metaFile, JSON.stringify(meta, null, 2) + "\n");
console.log(`\nIndexed ${Object.keys(meta).length} photos → src/content/photo-meta.json`);
