import { z } from "zod";

import { RequestSchema } from "../../schemas/RequestSchema";

export type VehicleRequestDTO = z.infer<typeof RequestSchema>;
