#!/usr/bin/env node
/**
 * Seed local-import/ from existing public/images PNGs listed in media-catalog.json.
 * Does not modify originals in public/images/.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "local-import", "media-catalog.json");

const catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));

for (const item of catalog.items) {
  const source = path.join(root, item.source.replace(/^public\//, "public/"));
  const target = path.join(root, item.importPath);
  await fs.mkdir(path.dirname(target), { recursive: true });

  try {
    await fs.access(source);
    await fs.copyFile(source, target);
    console.log(`seeded ${item.id}`);
  } catch {
    console.warn(`skip ${item.id}: missing ${item.source}`);
  }
}

console.log("local-import seed complete");
