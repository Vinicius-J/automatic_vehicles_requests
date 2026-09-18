import { AppError } from "../AppError";

export class LoginError extends AppError {
  constructor() {
    super("Falha ao realizar login", 401);
  }
}
