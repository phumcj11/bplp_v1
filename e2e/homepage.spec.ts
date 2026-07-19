import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
});

test("เปิดหน้าแรกและไม่มี horizontal overflow", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "ทริปล่องแพ 2 วัน 1 คืน" })).toBeVisible();
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
});

test("mobile menu เปิดและปิดด้วย Escape", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop-1280");
  await page.getByRole("button", { name: "เปิดเมนู" }).click();
  await expect(page.getByRole("dialog", { name: "เมนูเว็บไซต์" })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog", { name: "เมนูเว็บไซต์" })).toBeHidden();
});

test("เลือกแพและเปิดกิจกรรม", async ({ page }) => {
  await page.getByRole("button", { name: "16–25 คน" }).click();
  await expect(page.getByRole("heading", { name: "แพ A4" })).toBeVisible();
  await page.getByRole("button", { name: /Water Park/ }).first().click();
  await expect(page.getByRole("dialog", { name: /Water Park/ })).toBeVisible();
  await page.keyboard.press("Escape");
});

test("FAQ และ validation แบบฟอร์มทำงาน", async ({ page }) => {
  const faq = page.getByRole("button", { name: "เด็กคิดราคาอย่างไร?" });
  await faq.click();
  await expect(page.getByText("กรุณาสอบถามทีมงาน", { exact: true }).first()).toBeVisible();
  await page.getByRole("button", { name: "ส่งคำขอเช็กวันว่าง" }).click();
  await expect(page.getByText("กรุณาเลือกวันที่ต้องการเข้าพัก")).toBeVisible();
});

test("sticky CTA ปรากฏหลัง hero บนมือถือ", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "desktop-1280" || testInfo.project.name === "tablet-768");
  await page.locator("#rafts").scrollIntoViewIfNeeded();
  await expect(page.getByRole("link", { name: "เช็กวันว่าง", exact: true }).last()).toBeVisible();
});

test("gallery filter ทำงาน", async ({ page }) => {
  await page.getByRole("heading", { name: "บรรยากาศจริงจากทริปลูกค้า" }).scrollIntoViewIfNeeded();
  await page.getByRole("tab", { name: "Water Park" }).click();
  await expect(
    page.getByRole("button", {
      name: "เปิดสวนน้ำเด็กพร้อมเครื่องเล่นที่ Ananta Resort",
    }),
  ).toBeVisible();
});

test("ไม่มี broken images ใน viewport แรก", async ({ page }) => {
  const heroPath = "/images/processed/hero/raft-exterior-1024.webp";
  const response = await page.request.get(heroPath);
  expect(response.ok()).toBeTruthy();

  await page.waitForFunction(() => {
    const hero = document.querySelector('[role="img"][aria-label*="แพพักสองชั้น"]');
    if (!hero) return false;
    const style = window.getComputedStyle(hero);
    return style.backgroundImage.includes("raft-exterior");
  });
});
