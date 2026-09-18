import { z } from "zod";

import { VehicleRequestSchema } from "../../schemas/VehicleRequestSchema";

export type VehicleRequestDTO = z.infer<typeof VehicleRequestSchema>;
