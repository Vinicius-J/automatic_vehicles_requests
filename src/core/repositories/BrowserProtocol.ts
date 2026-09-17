import { Browser, Page } from "playwright";

export interface BrowserProtocol {
  openBrowser(): Promise<Browser>;
  openPage(urlPage: string): Promise<Page>;
  dispose(): Promise<void>;
}
