import { ipcMain } from "electron";
import { VehicleRequestSchema } from "../../schemas/VehicleRequestSchema";
import { makeCreateVehicleRequestUseCase } from "../../automation/factories/makeCreateVehicleRequestUseCase";
import { AppError } from "../../core/errors/AppError";

export const vehicleRequestIPC = () =>
  ipcMain.handle("vehicleRequestIPC", async (_, body) => {
    const zResult = VehicleRequestSchema.safeParse(body);
    if (!zResult.success) {
      return {
        isSuccessful: false,
        message: zResult.error.issues[0].message,
        result: null,
      };
    }

    try {
      const vehicleRequestUseCase = makeCreateVehicleRequestUseCase();
      const requestResult = await vehicleRequestUseCase.execute(zResult.data);
      return {
        isSuccessful: true,
        message: "Solicitações enviadas com sucesso",
        result: requestResult,
      };
    } catch (err) {
      if (err instanceof AppError || err instanceof Error) {
        return {
          isSuccessful: false,
          message: err.message,
          result: null,
        };
      }
      return {
        isSuccessful: false,
        message: "Erro interno",
        result: null,
      };
    }
  });
