import path from "path";

export const browserConfig: Electron.BrowserWindowConstructorOptions = {
  webPreferences: {
    contextIsolation: true,
    preload: path.join(__dirname, "..", "preloadElectron.js"),
  },
};
