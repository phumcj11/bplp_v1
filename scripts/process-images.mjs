#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "local-import", "media-catalog.json");
const processedRoot = path.join(root, "public", "images", "processed");

const SIZE_PRESETS = {
  hero: [1920, 1280, 828],
  card: [1200, 800, 600],
  thumb: [400],
};

const catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));
const manifest = {
  generatedAt: new Date().toISOString(),
  items: [],
};

sharp.cache(false);

for (const item of catalog.items) {
  const inputPath = path.join(root, item.importPath);
  const outDir = path.join(processedRoot, item.outputDir);
  await fs.mkdir(outDir, { recursive: true });
  await fs.mkdir(path.join(processedRoot, "thumbnails"), { recursive: true });

  let input;
  try {
    input = sharp(inputPath, { failOn: "none" }).rotate();
  } catch (error) {
    console.warn(`skip ${item.id}: ${error.message}`);
    continue;
  }

  const meta = await input.metadata();
  if (!meta.width || !meta.height) {
    console.warn(`skip ${item.id}: unreadable dimensions`);
    continue;
  }

  const orientation =
    meta.width === meta.height
      ? "square"
      : meta.width > meta.height
        ? "landscape"
        : "portrait";

  const preset = item.preset ?? "card";
  const sizes = [...SIZE_PRESETS[preset], ...SIZE_PRESETS.thumb];
  const outputs = [];

  for (const targetWidth of sizes) {
    const width = Math.min(targetWidth, meta.width);
    const resized = sharp(inputPath, { failOn: "none" })
      .rotate()
      .resize({ width, withoutEnlargement: true });

    const resizedMeta = await resized.clone().metadata();
    const baseName = `${item.id}-${width}`;
    const webpPath = path.join(
      width === 400 ? path.join(processedRoot, "thumbnails") : outDir,
      `${baseName}.webp`,
    );
    const avifPath = webpPath.replace(/\.webp$/, ".avif");

    await resized
      .clone()
      .webp({ quality: width >= 1200 ? 82 : 78, effort: 4 })
      .toFile(webpPath);

    try {
      await sharp(inputPath, { failOn: "none" })
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: width >= 1200 ? 62 : 58, effort: 4 })
        .toFile(avifPath);
    } catch {
      // AVIF encoder may be unavailable on some platforms
    }

    outputs.push({
      width: resizedMeta.width ?? width,
      height: resizedMeta.height ?? Math.round((meta.height / meta.width) * width),
      webp: webpPath.replace(root, "").replace(/\\/g, "/"),
      avif: (await fs.stat(avifPath).then(() => true).catch(() => false))
        ? avifPath.replace(root, "").replace(/\\/g, "/")
        : null,
    });
  }

  manifest.items.push({
    id: item.id,
    category: item.category,
    outputDir: item.outputDir,
    orientation,
    originalWidth: meta.width,
    originalHeight: meta.height,
    consentStatus: item.consentStatus,
    hasIdentifiablePeople: item.hasIdentifiablePeople,
    outputs,
  });

  console.log(`processed ${item.id} (${meta.width}x${meta.height})`);
}

await fs.writeFile(
  path.join(processedRoot, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);

console.log(`manifest written with ${manifest.items.length} items`);
