import { InGoogleSheetsVehicleRequestRepository } from "../../infrastructure/repositories/InGoogleSheetsVehicleRequestRepository";
import { PlaywrightBrowserManager } from "../../infrastructure/playwright/PlaywrightBrowserManager";
import { CreateVehicleRequestUseCase } from "../useCases/CreateVehicleRequestUseCase";
import { VehicleRequestAutomation } from "../automations/VehicleRequestAutomation";

export function makeCreateVehicleRequestUseCase() {
  const repository = new InGoogleSheetsVehicleRequestRepository();
  const browser = new PlaywrightBrowserManager();
  const automation = new VehicleRequestAutomation(browser);

  return new CreateVehicleRequestUseCase(automation, repository);
}
