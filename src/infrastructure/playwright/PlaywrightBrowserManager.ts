import { Browser, chromium, Page } from "playwright";

import { BrowserProtocol } from "../../core/repositories/BrowserProtocol";

export class PlaywrightBrowserManager implements BrowserProtocol {
  private _browser: Browser | null = null;
  private _page: Page | null = null;

  async openBrowser() {
    if (!this._browser) {
      this._browser = await chromium.launch({ headless: false });
    }

    return this._browser;
  }

  async openPage(urlPage: string) {
    const browser = await this.openBrowser();
    if (!this._page) {
      this._page = await browser.newPage();
    }

    await this._page.goto(urlPage);

    return this._page;
  }

  async dispose() {
    if (!this._browser) return;
    if (!this._page) return;

    await this._page.close();
    this._page = null;

    await this._browser.close();
    this._browser = null;
  }
}
