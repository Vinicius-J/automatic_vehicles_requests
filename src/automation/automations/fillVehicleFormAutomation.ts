import type { Page } from "playwright";
import {
  VehiclePageAutomation,
  VehicleFormRecord,
} from "../../core/interfaces/VehicleProtocol";
import { getNextRequestDate } from "../utils/getNextRequestDate";
import { AutomationTimeoutError } from "../../core/errors/automationErrors/AutomationTimeoutError";

export async function fillVehicleFormAutomation(
  page: Page,
  vehicleObj: VehiclePageAutomation,
  requestCount: number,
): Promise<VehicleFormRecord> {
  try {
    await page
      .locator("#formSolicViaturaMissao\\:somOmViatura")
      .selectOption(vehicleObj.somOmViatura);
    await page
      .locator("#formSolicViaturaMissao\\:somTipoMissao")
      .selectOption(vehicleObj.somTipoMissao);
    await page
      .locator("#formSolicViaturaMissao\\:txMaterial")
      .fill(vehicleObj.txMaterial);

    await page
      .locator("#formSolicViaturaMissao\\:txLogradouro")
      .fill(vehicleObj.txLogradouro);
    await page
      .locator("#formSolicViaturaMissao\\:nrLogradouro")
      .fill(vehicleObj.nrLogradouro);
    await page
      .locator("#formSolicViaturaMissao\\:txBairro")
      .fill(vehicleObj.txBairro);
    await page
      .locator("#formSolicViaturaMissao\\:cidestaembarque")
      .selectOption(vehicleObj.cidestaembarque);
    const dtEmbarque_input = getNextRequestDate(
      vehicleObj.dtEmbarque_input,
      requestCount,
    );
    await page
      .locator("#formSolicViaturaMissao\\:dtEmbarque_input")
      .fill(dtEmbarque_input);
    await page
      .locator("#formSolicViaturaMissao\\:itHoraEmbarque")
      .fill(vehicleObj.itHoraEmbarque);

    await page
      .locator("#formSolicViaturaMissao\\:txLogradouroDest")
      .fill(vehicleObj.txLogradouroDest);
    await page
      .locator("#formSolicViaturaMissao\\:nrLogradouroDest")
      .fill(vehicleObj.nrLogradouroDest);
    await page
      .locator("#formSolicViaturaMissao\\:txBairroDest")
      .fill(vehicleObj.txBairroDest);
    await page
      .locator("#formSolicViaturaMissao\\:estdest")
      .selectOption(vehicleObj.estdest);
    await page
      .locator("#formSolicViaturaMissao\\:ciddest")
      .selectOption(vehicleObj.ciddest);
    await page
      .locator("#formSolicViaturaMissao\\:itObservaçãoSolicMissao")
      .fill(vehicleObj.itObservaçãoSolicMissao);

    await page
      .locator("#formSolicViaturaMissao\\:itORsaram")
      .fill(vehicleObj.itORsaram);
    await page
      .locator("#formSolicViaturaMissao\\:itTelefoneFixo")
      .fill(vehicleObj.itTelefoneFixo);
    await page
      .locator("#formSolicViaturaMissao\\:itCelular")
      .fill(vehicleObj.itCelular);
    await page
      .locator("#formSolicViaturaMissao\\:itEmail")
      .fill(vehicleObj.itEmail);
    await page
      .locator("#formSolicViaturaMissao\\:btnCadastrarMissaoViatura")
      .click();

    return {
      boardingDate: dtEmbarque_input,
      boardingTime: vehicleObj.itHoraEmbarque,
      missionType: vehicleObj.itObservaçãoSolicMissao,
    };
  } catch (err) {
    throw new AutomationTimeoutError();
  }
}
