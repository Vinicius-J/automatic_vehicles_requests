import { env } from "../../core/config/env";

import { GoogleSheets } from "../googleSheets/GoogleSheets";
import { VehicleRequestRepository } from "../../core/repositories/VehicleRequestRepository";

import { SpreadsheetsNotFound } from "../../core/errors/repositoryErrors/SpreadsheetsNotFound";
import { SpreadsheetsIdNotFound } from "../../core/errors/repositoryErrors/SpreadsheetsIdNotFound";

import { getSpreadsheetTitle } from "../utils/getSpreadsheetTitle";
import { SpreadsheetsTitleNotFound } from "../../core/errors/repositoryErrors/SpreadsheetsTitlesNotFound";
import { VehicleRequestAutomationResult } from "../../core/interfaces/VehicleAutomationProtocol";
import { RequestMapper } from "../mappers/RequestMapper";

export class InGoogleSheetsVehicleRequestRepository implements VehicleRequestRepository {
  private readonly sheets = new GoogleSheets().sheets();
  private readonly _SPREADSHEET_ID = env.SPREADSHEET_ID;

  constructor() {
    if (!this._SPREADSHEET_ID) throw new SpreadsheetsIdNotFound();
  }

  async save(records: VehicleRequestAutomationResult): Promise<void> {
    const values = RequestMapper.toPersistence(records);
    const range = await this.getLastSheetTitle();

    await this.sheets.spreadsheets.values.append({
      spreadsheetId: this._SPREADSHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
  }

  async findRequests(month?: number): Promise<string[][] | undefined> {
    const title = getSpreadsheetTitle(month);

    const _result = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this._SPREADSHEET_ID,
      range: `${title}!A2:F`,
    });

    const result = _result.data.values;

    if (!result) throw new SpreadsheetsNotFound();

    return result;
  }

  async findSarams(): Promise<string[] | undefined> {
    const _sarams = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this._SPREADSHEET_ID,
      range: "SARAMS!A2:B",
    });

    const sarams = _sarams.data.values;
    if (!sarams) return;

    const arrOrders = [];

    for (const order of sarams) arrOrders.push(order[1]);

    return arrOrders;
  }

  async getLastSheetTitle() {
    const metadata = await this.sheets.spreadsheets.get({
      spreadsheetId: this._SPREADSHEET_ID,
    });

    if (!metadata.data.sheets) throw new SpreadsheetsTitleNotFound();

    const lastSheetTitle =
      metadata.data.sheets[metadata.data.sheets.length - 1].properties?.title;

    const sheetTitle = getSpreadsheetTitle();

    if (lastSheetTitle === sheetTitle) return lastSheetTitle;

    await this.createNewSpreadsheets(sheetTitle);
    return sheetTitle;
  }

  async createNewSpreadsheets(title: string) {
    await this.sheets.spreadsheets.batchUpdate({
      spreadsheetId: this._SPREADSHEET_ID,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title,
              },
            },
          },
        ],
      },
    });
  }
}
