// src/ml/dto/predict-asteroid.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class PredictAsteroidDto {
  @ApiProperty({ description:'Magnitud absoluta del asteroide' })
  @IsNumber()
  absolute_magnitude: number;

  @ApiProperty({ description:'Excentricidad orbital' })
  @IsNumber()
  eccentricity: number;

  @ApiProperty({ description:'Semieje mayor de la órbita' })
  @IsNumber()
  semimajor_axis: number;

  @ApiProperty({ description:'Distancia al perihielo' })
  @IsNumber()
  perihelion: number;

  @ApiProperty({ description:'Inclinación orbital' })
  @IsNumber()
  inclination: number;

  @ApiProperty({ description:'Tiempo de paso por perihelio' })
  @IsNumber()
  time_perihelion: number;

  @ApiProperty({ description:'Distancia mínima de intersección orbital con la Tierra' })
  @IsNumber()
  moid_ld: number;
}
