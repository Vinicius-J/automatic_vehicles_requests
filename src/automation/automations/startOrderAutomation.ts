import type { Page } from "playwright";

export async function startOrderAutomation(page: Page) {
  await page.locator("#sistema_titulo").click();
  await page.locator("#j_idt20").click();
  await page.locator(".fa.fa-truck").click();
  await page.locator(".fa.fa-calendar-check-o").click();
  await page.locator(".fa.fa-car").click();
}
