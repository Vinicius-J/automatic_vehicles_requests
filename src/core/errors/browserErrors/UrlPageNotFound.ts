import { AppError } from "../AppError";

export class UrlPageNotFound extends AppError {
  constructor() {
    super("URL da página não encontrada", 404);
  }
}
