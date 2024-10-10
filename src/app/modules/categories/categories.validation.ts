import { z } from "zod";

export const catregoryValidationSchema = z
  .object({
    name: z.string(),
    image: z.string(),
  })
  .required();
