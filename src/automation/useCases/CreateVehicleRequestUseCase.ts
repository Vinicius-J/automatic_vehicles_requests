import { VehicleRequestRepository } from "../../core/repositories/VehicleRequestRepository";

import { SaramsNotFound } from "../../core/errors/repositoryErrors/SaramsNotFound";
import {
  VehicleRequestAutomationProtocol,
  VehicleRequestAutomationResult,
} from "../../core/interfaces/VehicleAutomationProtocol";
import { VehicleRequest } from "../../core/interfaces/VehicleProtocol";

export class CreateVehicleRequestUseCase {
  constructor(
    private readonly automation: VehicleRequestAutomationProtocol,
    private readonly repository: VehicleRequestRepository,
  ) {}

  async execute(
    request: VehicleRequest,
  ): Promise<VehicleRequestAutomationResult> {
    const sarams = await this.repository.findSarams();
    if (!sarams) throw new SaramsNotFound();

    const automationResult = await this.automation.execute({ request, sarams });

    await this.repository.save(automationResult);

    return automationResult;
  }
}
