import { VehicleRequestProtocol } from "../../core/interfaces/VehicleProtocol";

export let formSolicViaturaMissao: VehicleRequestProtocol = {
  somOmViatura: "EPCAR",
  somTipoMissao: "Transporte de pessoal e material",
  txMaterial: "",

  txLogradouro: "Rua Santos Dumont",
  nrLogradouro: "149",
  txBairro: "São José",
  cidestaembarque: "Barbacena",
  dtEmbarque_input: "",
  itHoraEmbarque: "",

  txLogradouroDest: "",
  nrLogradouroDest: "",
  txBairroDest: "",
  estdest: "",
  ciddest: "",
  itObservaçãoSolicMissao: "",

  itORsaram: "999999",
  itTelefoneFixo: "3333333333",
  itCelular: "32999999999",
  itEmail: "fulano@email.com",
  btnCadastrarMissaoViatura: null,

  startDay: "",
  lastDay: "",
};
