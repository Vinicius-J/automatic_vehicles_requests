import { AppError } from "../AppError";

export class SpreadsheetsTitleNotFound extends AppError {
  constructor() {
    super("Título de planilhas não encontrados", 404);
  }
}
