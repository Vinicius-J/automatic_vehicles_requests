import { env } from "../../core/config/env";

import GoogleSheetsConnection from "../googleSheets/GoogleSheetsConnection";
import { VehicleRequestRepository } from "../../core/repositories/VehicleRequestRepository";

import { SpreadsheetsNotFound } from "../../core/errors/repositoryErrors/SpreadsheetsNotFound";
import { SpreadsheetsIdNotFound } from "../../core/errors/repositoryErrors/SpreadsheetsIdNotFound";

import { getTableTitle } from "../utils/getTableTitle";
import { SpreadsheetsTitleNotFound } from "../../core/errors/repositoryErrors/SpreadsheetsTitlesNotFound";
import { VehicleRequestAutomationResult } from "../../core/interfaces/VehicleAutomationProtocol";
import { VehicleRequestMapper } from "../mappers/VehicleRequestMapper";

const spreadsheetId = env.SPREADSHEET_ID;
if (!spreadsheetId) throw new SpreadsheetsIdNotFound();

export class InGoogleSheetsVehicleRequestRepository implements VehicleRequestRepository {
  private readonly sheets = GoogleSheetsConnection.connectAtSpreadsheet();

  async save(records: VehicleRequestAutomationResult): Promise<void> {
    const values = VehicleRequestMapper.toPersistence(records);
    const range = await this.getLastTableTitle();

    await this.sheets.spreadsheets.values.append({
      spreadsheetId: spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
  }

  async findRequests(month?: number): Promise<string[][] | undefined> {
    const title = getTableTitle(month);

    const _result = await this.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: `${title}!A2:F`,
    });

    const result = _result.data.values;

    if (!result) throw new SpreadsheetsNotFound();

    return result;
  }

  async findSarams(): Promise<string[] | undefined> {
    const _sarams = await this.sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: "SARAMS!A2:B",
    });

    const sarams = _sarams.data.values;
    if (!sarams) return;

    const arrOrders = [];

    for (const order of sarams) arrOrders.push(order[1]);

    return arrOrders;
  }

  async getLastTableTitle() {
    const metadata = await this.sheets.spreadsheets.get({
      spreadsheetId: spreadsheetId,
    });

    if (!metadata.data.sheets) throw new SpreadsheetsTitleNotFound();

    const lastTableTitle =
      metadata.data.sheets[metadata.data.sheets.length - 1].properties?.title;

    const tableTitle = getTableTitle();

    if (lastTableTitle === tableTitle) return lastTableTitle;

    await this.createTable(tableTitle);
    return tableTitle;
  }

  async createTable(title: string) {
    await this.sheets.spreadsheets.batchUpdate({
      spreadsheetId: spreadsheetId,
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
