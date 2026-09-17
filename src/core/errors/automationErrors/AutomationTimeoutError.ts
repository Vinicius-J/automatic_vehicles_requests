import { AppError } from "../AppError";

export class AutomationTimeoutError extends AppError {
  constructor(elemento: string) {
    super(`Tempo excedido, aguardando elemento ${elemento}`, 408);
  }
}
