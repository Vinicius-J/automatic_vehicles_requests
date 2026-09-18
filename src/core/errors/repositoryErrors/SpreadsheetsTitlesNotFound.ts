import { AppError } from "../AppError";

export class SpreadsheetsTitleNotFound extends AppError {
  constructor() {
    super("Título de planilha não encontrado", 404);
  }
}
