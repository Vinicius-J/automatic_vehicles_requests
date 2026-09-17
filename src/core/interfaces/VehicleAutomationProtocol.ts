import { VehicleRequest } from "./VehicleProtocol";

export interface VehicleRequestAutomationProtocol {
  execute(
    input: VehicleRequestAutomationInput,
  ): Promise<VehicleRequestAutomationResult>;
}

export interface VehicleRequestAutomationInput {
  request: VehicleRequest;
  sarams: string[];
}

export interface VehicleRequestAutomationResult {
  records: VehicleAutomationRecord[];
}

export interface VehicleAutomationRecord {
  requestedAt: string;
  requestedTime: string;
  boardingDate: string;
  missionNumber: string;
  missionType: string;
  boardingTime: string;
}
