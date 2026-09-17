import { InGoogleSheetsVehicleRequestRepository } from "../../infrastructure/repositories/InGoogleSheetsVehicleRequestRepository";
import { BrowserManager } from "../../infrastructure/playwright/BrowserManager";
import { CreateVehicleRequestUseCase } from "../useCases/CreateVehicleRequestUseCase";
import { VehicleRequestAutomation } from "../automations/VehicleRequestAutomation";

export function makeCreateVehicleRequestUseCase() {
  const repository = new InGoogleSheetsVehicleRequestRepository();
  const browser = new BrowserManager();
  const automation = new VehicleRequestAutomation(browser);

  return new CreateVehicleRequestUseCase(automation, repository);
}
