import { AppError } from "../AppError";

export class SaramsNotFound extends AppError {
  constructor() {
    super("Sarams não encontrados", 404);
  }
}
