import type { Page } from "playwright";

import {
  PassagerPageAutomation,
  PassagerFormRecord,
} from "../../core/interfaces/PassagerProtocol";

export async function fillPassagerFormAutomation(
  page: Page,
  passagerObj: PassagerPageAutomation,
): Promise<PassagerFormRecord> {
  const nrMissaoText = await page.locator("#formModalPassageiros\\:nrMissao");
  const nrMissionText = await nrMissaoText.textContent();
  passagerObj.nrMissao = nrMissionText!.split(" ")[3];
  await page
    .locator("#formModalPassageiros\\:itnrOrdem")
    .fill(passagerObj.itnrOrdem);
  await page.locator("#formModalPassageiros\\:btIncluirPass").click();
  await page
    .locator("#formModalPassageiros\\:cbAssociarPassageirosAvaliacao")
    .click();

  return {
    nrMissao: passagerObj.nrMissao,
    itnrOrder: passagerObj.itnrOrdem,
  };
}
