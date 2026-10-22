import path from "path";

import { GoogleAuth } from "google-auth-library";
import { google, sheets_v4 } from "googleapis";

import { CredentialsNotFound } from "../../core/errors/repositoryErrors/CredentialsNotFound";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const credentials = path.resolve(
  __dirname,
  "..",
  "..",
  "..",
  "credentials.json",
);

if (!credentials) throw new CredentialsNotFound();

class GoogleSheetsConnection {
  private _sheets: sheets_v4.Sheets | null = null;

  connectAtSpreadsheet() {
    if (!this._sheets) {
      const auth = new GoogleAuth({
        keyFile: credentials,
        scopes: SCOPES,
      });

      this._sheets = google.sheets({ version: "v4", auth });
    }

    return this._sheets;
  }
}

export default new GoogleSheetsConnection();
