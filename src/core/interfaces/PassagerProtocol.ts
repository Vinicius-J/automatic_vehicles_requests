export interface PassageRequestProtocol {
  // formModalPassageiros:
  nrMissao: string; // informação para coletar
  itnrOrdem: string;
  btIncluirPass: null; // button
  cbAssociarPassageirosAvaliacao: null; // button
  listItnrOrdem: string[];
}

export interface PassagerPageAutomation {
  nrMissao: string;
  itnrOrdem: string;
  listItnrOrdem: string[];
}

export interface PassagerFormRecord {
  nrMissao: string;
  itnrOrder: string;
}
