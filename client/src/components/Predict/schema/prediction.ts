import * as z from "zod";

// Schema para formulario con strings
export const predictionFormSchema = z.object({
  absolute_magnitude: z
    .string()
    .min(1, "Este campo es requerido")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Debe ser un número válido mayor o igual a 0",
    }),
  eccentricity: z
    .string()
    .min(1, "Este campo es requerido")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 1,
      {
        message: "Debe ser un número válido entre 0 y 1",
      }
    ),
  semimajor_axis: z
    .string()
    .min(1, "Este campo es requerido")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Debe ser un número válido mayor que 0",
    }),
  perihelion: z
    .string()
    .min(1, "Este campo es requerido")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Debe ser un número válido mayor o igual a 0",
    }),
  inclination: z
    .string()
    .min(1, "Este campo es requerido")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 180,
      {
        message: "Debe ser un número válido entre 0 y 180",
      }
    ),
  time_perihelion: z
    .string()
    .min(1, "Este campo es requerido")
    .refine((val) => !isNaN(Number(val)), {
      message: "Debe ser un número válido",
    }),
  moid_ld: z
    .string()
    .min(1, "Este campo es requerido")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Debe ser un número válido mayor o igual a 0",
    }),
});

// Schema para datos que se envían al servidor
export const predictionSchema = z.object({
  absolute_magnitude: z.number().min(0),
  eccentricity: z.number().min(0).max(1),
  semimajor_axis: z.number().min(0),
  perihelion: z.number().min(0),
  inclination: z.number().min(0).max(180),
  time_perihelion: z.number(),
  moid_ld: z.number().min(0),
});

export type PredictionFormInputs = z.infer<typeof predictionFormSchema>;
export type PredictionFormData = z.infer<typeof predictionSchema>;
