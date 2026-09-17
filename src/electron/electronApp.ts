import { app, BrowserWindow } from "electron";

import { browserConfig } from "./config/electronConfig";

import { vehicleRequestIPC } from "./ipc/VehicleRequestIPC";

class MyApp {
  private win: Electron.BrowserWindow | null;
  constructor() {
    this.win = null;
  }

  async createWindow() {
    this.win = new BrowserWindow(browserConfig);
    this.win.loadFile("./src/frontend/views/index.html");
  }

  init() {
    app.whenReady().then(() => {
      this.createWindow();
      vehicleRequestIPC();
      app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          this.createWindow();
        }
      });
    });

    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });
  }
}

const myApp = new MyApp();
myApp.init();
