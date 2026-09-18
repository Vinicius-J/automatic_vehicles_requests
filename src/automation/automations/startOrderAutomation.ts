import type { Page } from "playwright";
import { AutomationTimeoutError } from "../../core/errors/automationErrors/AutomationTimeoutError";

export async function startOrderAutomation(page: Page) {
  try {
    await page.locator("#sistema_titulo").click();
    await page.locator("#j_idt20").click();
    await page.locator(".fa.fa-truck").click();
    await page.locator(".fa.fa-calendar-check-o").click();
    await page.locator(".fa.fa-car").click();
  } catch (err) {
    throw new AutomationTimeoutError();
  }
}
