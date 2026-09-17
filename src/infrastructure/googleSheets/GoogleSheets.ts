import path from "path";

import { GoogleAuth } from "google-auth-library";
import { google, sheets_v4 } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const credentials = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "credentials.json",
);

const credentialsPath = path.join(process.resourcesPath, "credentials.json");

export class GoogleSheets {
  private _sheets: sheets_v4.Sheets | null = null;

  sheets() {
    if (!this._sheets) {
      const auth = new GoogleAuth({
        keyFile: credentials || credentialsPath,
        scopes: SCOPES,
      });

      this._sheets = google.sheets({ version: "v4", auth });
    }

    return this._sheets;
  }
}
