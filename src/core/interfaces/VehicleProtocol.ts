export interface VehicleRequestProtocol {
  // formSolicViaturaMissao:
  somOmViatura: string;
  somTipoMissao: string;
  txMaterial: string;

  // boardingLocationData
  txLogradouro: string;
  nrLogradouro: string;
  txBairro: string;
  cidestaembarque: string;
  dtEmbarque_input: string;
  itHoraEmbarque: string;

  // destinationLocationData
  txLogradouroDest: string;
  nrLogradouroDest: string;
  txBairroDest: string;
  estdest: string;
  ciddest: string;
  itObservaçãoSolicMissao: string;

  // responsibleMilitaryData
  itORsaram: string;
  itTelefoneFixo: string;
  itCelular: string;
  itEmail: string;
  btnCadastrarMissaoViatura: null; // button

  startDay: string;
  lastDay: string;
}

export interface VehiclePageAutomation {
  somOmViatura: string;
  somTipoMissao: string;
  txMaterial: string;

  txLogradouro: string;
  nrLogradouro: string;
  txBairro: string;
  cidestaembarque: string;
  dtEmbarque_input: string;
  itHoraEmbarque: string;

  txLogradouroDest: string;
  nrLogradouroDest: string;
  txBairroDest: string;
  estdest: string;
  ciddest: string;
  itObservaçãoSolicMissao: string;

  itORsaram: string;
  itTelefoneFixo: string;
  itCelular: string;
  itEmail: string;
}

export interface VehicleRequest {
  ciddest: string;
  estdest: string;
  startDay: string;
  lastDay: string;
  itHoraEmbarque: string;
  itObservaçãoSolicMissao: string;
  nrLogradouroDest: string;
  txBairroDest: string;
  txLogradouroDest: string;
  txMaterial: string;
}

export interface VehicleFormRecord {
  boardingDate: string;
  boardingTime: string;
  missionType: string;
}
