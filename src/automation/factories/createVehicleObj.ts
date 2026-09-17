import {
  VehiclePageAutomation,
  VehicleRequest,
} from "../../core/interfaces/VehicleProtocol";

import { formSolicViaturaMissao } from "../selectors/formSolicViaturaMissao";

export const createVehicleObj = (
  body: VehicleRequest,
): VehiclePageAutomation => {
  return {
    ...formSolicViaturaMissao,
    dtEmbarque_input: body.startDay,
    ciddest: body.ciddest,
    estdest: body.estdest,
    itHoraEmbarque: body.itHoraEmbarque,
    itObservaçãoSolicMissao: body.itObservaçãoSolicMissao,
    nrLogradouroDest: body.nrLogradouroDest,
    txBairroDest: body.txBairroDest,
    txLogradouroDest: body.txLogradouroDest,
    txMaterial: body.txMaterial,
  };
};
