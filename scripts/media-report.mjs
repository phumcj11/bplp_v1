#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, "local-import", "media-catalog.json");
const manifestPath = path.join(root, "public", "images", "processed", "manifest.json");
const reportPath = path.join(root, "MEDIA_SELECTION_REPORT.md");

const catalog = JSON.parse(await fs.readFile(catalogPath, "utf8"));
let manifest = { items: [] };

try {
  manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
} catch {
  // manifest may not exist before first process run
}

const manifestById = new Map(manifest.items.map((item) => [item.id, item]));

const selected = [];
const skipped = [];
const consentReview = [];
const heroCandidates = [];
const raftUnconfirmed = [];

for (const item of catalog.items) {
  const processed = manifestById.get(item.id);
  const entry = { ...item, processed: Boolean(processed) };

  if (processed) {
    selected.push(entry);
  } else {
    skipped.push({ ...entry, reason: "ยังไม่ได้ประมวลผล (รัน npm run media:process)" });
  }

  if (item.consentStatus !== "approved") {
    consentReview.push(entry);
  }

  if (
    item.id === "raft-exterior" &&
    item.consentStatus === "approved" &&
    !item.hasIdentifiablePeople
  ) {
    heroCandidates.push(entry);
  }

  if (item.category === "rafts" && !item.id.match(/^raft-a[1-4]/i)) {
    raftUnconfirmed.push(entry);
  }
}

const sectionByCategory = catalog.items.reduce((acc, item) => {
  acc[item.category] ??= [];
  acc[item.category].push(item.id);
  return acc;
}, {});

const lines = [
  "# Media Selection Report",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "## Summary",
  "",
  `- รูปใน catalog: **${catalog.items.length}**`,
  `- ประมวลผลแล้ว: **${selected.length}**`,
  `- ยังไม่ประมวลผล: **${skipped.length}**`,
  `- ต้องตรวจสอบสิทธิ์ (consent ≠ approved): **${consentReview.length}**`,
  "",
  "## Hero Candidates",
  "",
  heroCandidates.length
    ? heroCandidates.map((item) => `- \`${item.id}\` — ${item.alt}`).join("\n")
    : "- ยังไม่มีรูป Hero ที่ consentStatus = approved",
  "",
  "## รูปที่เลือกใช้",
  "",
  ...selected.map(
    (item) =>
      `- \`${item.id}\` (${item.category}) — consent: ${item.consentStatus}`,
  ),
  "",
  "## รูปที่ยังไม่พร้อม / ไม่เลือก",
  "",
  ...skipped.map((item) => `- \`${item.id}\` — ${item.reason}`),
  "",
  "## ต้องตรวจสอบสิทธิ์",
  "",
  ...consentReview.map(
    (item) =>
      `- \`${item.id}\` — ${item.consentStatus}, มีใบหน้า: ${item.hasIdentifiablePeople ? "ใช่" : "ไม่ชัด"}`,
  ),
  "",
  "## ไม่สามารถยืนยันประเภทแพ (A1–A4)",
  "",
  "- ไม่มีรูปที่ยืนยันประเภทแพได้ — ใช้ branded placeholder ใน Raft Selector",
  raftUnconfirmed.length
    ? raftUnconfirmed.map((item) => `- \`${item.id}\` ใช้เป็นภาพแพทั่วไปเท่านั้น`).join("\n")
    : "",
  "",
  "## แนะนำตาม Section",
  "",
  ...Object.entries(sectionByCategory).map(
    ([category, ids]) => `### ${category}\n\n${ids.map((id) => `- ${id}`).join("\n")}`,
  ),
  "",
  "## Google Drive ที่ยังต้อง Import",
  "",
  "โฟลเดอร์ [รีวิวลูกค้า](https://drive.google.com/drive/folders/1gKLQzbFqGbQA68b_XXol-EuGKAjjTQMF) มี JPEG ~28 รูป + MP4 1 ไฟล์",
  "",
  "นำไฟล์ที่ยังไม่มีใน catalog ไปที่ `local-import/unsorted/` แล้วจัดหมวดตาม `MEDIA_IMPORT_GUIDE.md`",
  "",
];

await fs.writeFile(reportPath, `${lines.join("\n")}\n`);
console.log(`report written to ${reportPath}`);
