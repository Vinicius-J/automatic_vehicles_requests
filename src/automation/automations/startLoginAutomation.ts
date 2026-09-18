import type { Page, WebError } from "playwright";
import { LoginPageAutomation } from "../../core/interfaces/LoginProtocol";
import { AutomationTimeoutError } from "../../core/errors/automationErrors/AutomationTimeoutError";

export async function startLoginAutomation(
  page: Page,
  login: LoginPageAutomation,
) {
  try {
    await page.locator("#details-button").click();
    await page.locator("#proceed-link").click();
    await page.locator("#username").fill(login.username);
    await page.locator("#password").fill(login.password);
    await page.locator(".btn.btn-primary.btn-lg.btn-block").click();
    await page.locator("#proceed-button").click();
  } catch (err) {
    throw new AutomationTimeoutError();
  }
}
