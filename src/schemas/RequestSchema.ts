import { z } from "zod";

export const RequestSchema = z
  .object({
    ciddest: z.string().trim().nonempty(),
    estdest: z.string().trim(),
    startDay: z.string().trim(),
    lastDay: z.string().trim().nonempty(),
    itHoraEmbarque: z.string().trim().nonempty(),
    itObservaçãoSolicMissao: z.string().trim().nonempty(),
    nrLogradouroDest: z.string().trim().nonempty(),
    txBairroDest: z.string().trim().nonempty(),
    txLogradouroDest: z.string().trim().nonempty(),
    txMaterial: z.string().trim().nonempty(),
  })
  .refine(
    (data) => {
      const startDay = new Date(data.startDay);
      const lastDay = new Date(data.lastDay);

      return startDay <= lastDay;
    },
    {
      message: "startDay cannot be greater than lastDay",
      path: ["lastDay"],
    },
  );
