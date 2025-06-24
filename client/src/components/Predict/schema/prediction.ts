import * as z from "zod";

export const predictionSchema = z.object({
  absolute_magnitude: z
    .number({ message: "Debe ser un número válido" })
    .min(0, "Debe ser mayor o igual a 0"),
  eccentricity: z
    .number({ message: "Debe ser un número válido" })
    .min(0, "Debe ser mayor o igual a 0")
    .max(1, "Debe ser menor o igual a 1"),
  semimajor_axis: z
    .number({ message: "Debe ser un número válido" })
    .min(0, "Debe ser mayor que 0"),
  perihelion: z
    .number({ message: "Debe ser un número válido" })
    .min(0, "Debe ser mayor o igual a 0"),
  inclination: z
    .number({ message: "Debe ser un número válido" })
    .min(0, "Debe ser mayor o igual a 0")
    .max(180, "Debe ser menor o igual a 180"),
  time_perihelion: z.number({ message: "Debe ser un número válido" }),
  moid_ld: z
    .number({ message: "Debe ser un número válido" })
    .min(0, "Debe ser mayor o igual a 0"),
});

export type PredictionFormData = z.infer<typeof predictionSchema>;
