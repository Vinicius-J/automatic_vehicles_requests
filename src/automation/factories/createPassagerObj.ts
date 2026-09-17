import { PassagerPageAutomation } from "../../core/interfaces/PassagerProtocol";
import { formModalPassageiros } from "../selectors/formModalPassageiros";

export const createPassagerObj = (
  itnrOrdem: string,
): PassagerPageAutomation => {
  return {
    ...formModalPassageiros,
    itnrOrdem,
  };
};
