import { Page } from "playwright";
import { LoginPageAutomation } from "../../core/interfaces/LoginProtocol";
import { VehiclePageAutomation } from "../../core/interfaces/VehicleProtocol";
import { PassagerPageAutomation } from "../../core/interfaces/PassagerProtocol";
import { VehicleRequestWorkflow } from "../workflows/VehicleRequestWorkflow";

export function makeVehicleRequestWorkflow(
  page: Page,
  loginObj: LoginPageAutomation,
  vehicleObj: VehiclePageAutomation,
  passagerObj: PassagerPageAutomation,
) {
  return new VehicleRequestWorkflow(page, loginObj, vehicleObj, passagerObj);
}
