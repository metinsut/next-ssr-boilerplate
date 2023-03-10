import zod, { z } from "zod";

export const authSchema = zod.object({
  password: zod.string().min(6),
  email: zod.string().email(),
});

export type TRegister = z.infer<typeof authSchema>;
