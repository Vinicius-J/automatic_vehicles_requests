import { AppError } from "../AppError";

export class AutomationTimeoutError extends AppError {
  constructor() {
    super(`Tempo excedido ao aguardar elemento`, 408);
  }
}
