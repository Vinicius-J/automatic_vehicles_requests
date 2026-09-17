import "dotenv/config";

import { SpreadsheetsIdNotFound } from "../errors/repositoryErrors/SpreadsheetsIdNotFound";
import { UrlPageNotFound } from "../errors/browserErrors/UrlPageNotFound";

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
if (!SPREADSHEET_ID) throw new SpreadsheetsIdNotFound();

const URL_PAGE_REQUEST = process.env.URL_PAGE_REQUEST;
if (!URL_PAGE_REQUEST) throw new UrlPageNotFound();

export const env = {
  SPREADSHEET_ID,
  URL_PAGE_REQUEST,
};
