document.querySelector("#info").textContent =
  `This app is using Chrome (v${window.versions.chrome()}), Node.js (v${window.versions.node()}), and Electron (v${window.versions.electron()})`;

const form = document.querySelector("#form-pedido");
const requestResult = document.querySelector("#request-result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  requestResult.style.color = "black";

  requestResult.textContent = "Vehicle request started...";

  const body = {
    startDay: document.querySelector("#startDay").value,
    lastDay: document.querySelector("#lastDay").value,
    txMaterial: document.querySelector("#txMaterial").value,
    itHoraEmbarque: document.querySelector("#itHoraEmbarque").value,
    txLogradouroDest: document.querySelector("#txLogradouroDest").value,
    nrLogradouroDest: document.querySelector("#nrLogradouroDest").value,
    txBairroDest: document.querySelector("#txBairroDest").value,
    estdest: document.querySelector("#estdest").value,
    ciddest: document.querySelector("#ciddest").value,
    itObservaçãoSolicMissao: document.querySelector("#itObservaçãoSolicMissao")
      .value,
  };

  const result = await window.backend.startVehicleRequest(body);

  if (result.isSuccessful) requestResult.style.color = "green";
  else requestResult.style.color = "red";

  requestResult.innerHTML = result.message;
});
