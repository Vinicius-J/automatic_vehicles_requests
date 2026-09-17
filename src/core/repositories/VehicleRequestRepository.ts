import { VehicleRequestAutomationResult } from "../interfaces/VehicleAutomationProtocol";

export interface VehicleRequestRepository {
  save(records: VehicleRequestAutomationResult): Promise<void>;
  findRequests(month?: number): Promise<string[][] | undefined>;
  findSarams(): Promise<string[] | undefined>;
}
