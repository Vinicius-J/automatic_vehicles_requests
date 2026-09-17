import { Page } from "playwright";

import { LoginPageAutomation } from "../../core/interfaces/LoginProtocol";
import { VehiclePageAutomation } from "../../core/interfaces/VehicleProtocol";
import { PassagerPageAutomation } from "../../core/interfaces/PassagerProtocol";

import { startLoginAutomation } from "../automations/startLoginAutomation";
import { startOrderAutomation } from "../automations/startOrderAutomation";
import { fillVehicleFormAutomation } from "../automations/fillVehicleFormAutomation";
import { fillPassagerFormAutomation } from "../automations/fillPassagerFormAutomation";
import { VehicleWorkflowRecord } from "../../core/interfaces/VehicleWorkflowProtocol";

export class VehicleRequestWorkflow {
  private isLoggedIn: boolean = false;
  constructor(
    private readonly page: Page,
    private readonly loginObj: LoginPageAutomation,
    private readonly vehicleObj: VehiclePageAutomation,
    private readonly passagerObj: PassagerPageAutomation,
  ) {}

  async start(requestNumber: number): Promise<VehicleWorkflowRecord> {
    if (!this.isLoggedIn) await this.makeLogin();

    const vehicleRecord = await fillVehicleFormAutomation(
      this.page,
      this.vehicleObj,
      requestNumber,
    );

    const passagerRecord = await fillPassagerFormAutomation(
      this.page,
      this.passagerObj,
    );

    return {
      boardingDate: vehicleRecord.boardingDate,
      missionNumber: passagerRecord.nrMissao,
    };
  }

  async makeLogin(): Promise<void> {
    await startLoginAutomation(this.page, this.loginObj);
    await startOrderAutomation(this.page);
    this.isLoggedIn = true;
    return;
  }
}
