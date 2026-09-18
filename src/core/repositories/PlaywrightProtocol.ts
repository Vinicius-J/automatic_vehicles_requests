import { Browser, Page } from "playwright";

export interface PlaywrightProtocol {
  openBrowser(): Promise<Browser>;
  openPage(urlPage: string): Promise<Page>;
  dispose(): Promise<void>;
}
