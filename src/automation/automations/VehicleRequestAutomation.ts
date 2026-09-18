import { env } from "../../core/config/env";
import { UrlPageNotFound } from "../../core/errors/browserErrors/UrlPageNotFound";
import {
  VehicleAutomationRecord,
  VehicleRequestAutomationInput,
  VehicleRequestAutomationProtocol,
  VehicleRequestAutomationResult,
} from "../../core/interfaces/VehicleAutomationProtocol";
import { PlaywrightProtocol } from "../../core/repositories/PlaywrightProtocol";
import { createLoginObj } from "../factories/createLoginObj";
import { createPassagerObj } from "../factories/createPassagerObj";
import { createVehicleObj } from "../factories/createVehicleObj";
import { makeVehicleRequestWorkflow } from "../factories/makeVehicleRequestWorkflow";
import { calculateTotalRequests } from "../utils/calculateTotalRequests";
import { getNextItnOrder } from "../utils/getNextItnOrder";

export class VehicleRequestAutomation implements VehicleRequestAutomationProtocol {
  constructor(private readonly browser: PlaywrightProtocol) {}
  async execute({
    request,
    sarams,
  }: VehicleRequestAutomationInput): Promise<VehicleRequestAutomationResult> {
    try {
      const urlPage = env.URL_PAGE_REQUEST;
      if (!urlPage) throw new UrlPageNotFound();

      const page = await this.browser.openPage(urlPage);

      const loginObj = createLoginObj();
      const vehicleObj = createVehicleObj(request);

      const nextItnrOrdem = getNextItnOrder(sarams);
      const passagerObj = createPassagerObj(nextItnrOrdem());

      const totalRequest = calculateTotalRequests(
        request.startDay,
        request.lastDay,
      );

      const workflow = makeVehicleRequestWorkflow(
        page,
        loginObj,
        vehicleObj,
        passagerObj,
      );

      const arrVehicleRequestRecordRepository: VehicleRequestAutomationResult =
        {
          records: [],
        };

      const dateOfRequest = new Date();

      const vehicleRequestRecord: VehicleAutomationRecord = {
        requestedAt: dateOfRequest.toLocaleDateString("pt-br", {
          dateStyle: "short",
        }),
        requestedTime: dateOfRequest.toLocaleTimeString("pt-br", {
          timeStyle: "short",
        }),
        boardingDate: vehicleObj.dtEmbarque_input,
        missionNumber: passagerObj.nrMissao,
        missionType: vehicleObj.itObservaçãoSolicMissao,
        boardingTime: vehicleObj.itHoraEmbarque,
      };

      for (let requestCount = 1; requestCount <= totalRequest; requestCount++) {
        const vehicleWorkflowRecord = await workflow.start(requestCount);
        passagerObj.itnrOrdem = nextItnrOrdem();

        vehicleRequestRecord.boardingDate = vehicleWorkflowRecord.boardingDate;
        vehicleRequestRecord.missionNumber =
          vehicleWorkflowRecord.missionNumber;

        arrVehicleRequestRecordRepository.records.push({
          ...vehicleRequestRecord,
        });
      }

      return arrVehicleRequestRecordRepository;
    } finally {
      await this.browser.dispose();
    }
  }
}
