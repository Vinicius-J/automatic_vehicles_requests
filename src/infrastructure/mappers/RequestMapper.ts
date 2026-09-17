import { VehicleRequestAutomationResult } from "../../core/interfaces/VehicleAutomationProtocol";

export class RequestMapper {
  static toPersistence(result: VehicleRequestAutomationResult): string[][] {
    return result.records.map((record) => [
      record.requestedAt,
      record.requestedTime,
      record.boardingDate,
      record.missionNumber,
      record.missionType,
      record.boardingTime,
    ]);
  }
}
