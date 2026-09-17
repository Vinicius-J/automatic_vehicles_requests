import { AppError } from "../AppError";

export class SpreadsheetsNotFound extends AppError {
  constructor() {
    super("Planilhas não encontradas", 404);
  }
}
