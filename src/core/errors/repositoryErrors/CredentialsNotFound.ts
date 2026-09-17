import { AppError } from "../AppError";

export class CredentialsNotFound extends AppError {
  constructor() {
    super("Credenciais não encontradas", 404);
  }
}
