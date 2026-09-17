import { VehicleRequestDTO } from "../core/dto/VehicleRequestDTO";

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});

contextBridge.exposeInMainWorld("backend", {
  startVehicleRequest: (body: VehicleRequestDTO) => {
    return ipcRenderer.invoke("vehicleRequestIPC", body);
  },
});
