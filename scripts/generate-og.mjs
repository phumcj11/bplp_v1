#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const heroWebp = path.join(
  root,
  "public/images/processed/hero/raft-exterior-1024.webp",
);
const heroFallback = path.join(root, "public/images/rafts/raft-exterior.png");
const outDir = path.join(root, "public/images/og");
const outFile = path.join(outDir, "og-share.jpg");

await fs.mkdir(outDir, { recursive: true });

let source = heroWebp;
try {
  await fs.access(heroWebp);
} catch {
  source = heroFallback;
}

const width = 1200;
const height = 630;

const base = await sharp(source)
  .resize(width, height, { fit: "cover", position: "centre" })
  .toBuffer();

const overlaySvg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#151515" stop-opacity="0.15"/>
      <stop offset="55%" stop-color="#151515" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#151515" stop-opacity="0.82"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#g)"/>
  <text x="64" y="120" fill="#ffffff" font-family="Arial, sans-serif" font-size="28" font-weight="700">บ้านพักล่องแพ</text>
  <text x="64" y="210" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="900">ทริปล่องแพ 2 วัน 1 คืน</text>
  <text x="64" y="280" fill="#f5f5f5" font-family="Arial, sans-serif" font-size="30" font-weight="600">เขื่อนศรีนครินทร์ • แพพักส่วนตัว</text>
  <rect x="64" y="320" width="360" height="72" rx="8" fill="#ff6b2c"/>
  <text x="92" y="368" fill="#ffffff" font-family="Arial, sans-serif" font-size="34" font-weight="800">เริ่มต้น 1,290.-/ท่าน</text>
</svg>`;

await sharp(base)
  .composite([{ input: Buffer.from(overlaySvg), top: 0, left: 0 }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(outFile);

console.log(`og image written to ${outFile}`);
