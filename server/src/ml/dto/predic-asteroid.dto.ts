// src/ml/dto/predict-asteroid.dto.ts
import { IsNumber } from 'class-validator';

export class PredictAsteroidDto {
  @IsNumber()
  absolute_magnitude: number;

  @IsNumber()
  eccentricity: number;

  @IsNumber()
  semimajor_axis: number;

  @IsNumber()
  perihelion: number;

  @IsNumber()
  inclination: number;

  @IsNumber()
  time_perihelion: number;

  @IsNumber()
  moid_ld: number;
}
