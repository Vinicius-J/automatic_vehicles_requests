import { AppError } from "../AppError";

export class SpreadsheetsIdNotFound extends AppError {
  constructor() {
    super("ID da planilha não encontrado", 404);
  }
}
