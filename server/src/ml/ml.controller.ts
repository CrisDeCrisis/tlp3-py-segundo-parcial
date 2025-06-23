import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { MlService } from './ml.service';
import { PredictAsteroidDto } from './dto/predic-asteroid.dto';
import { PredictAsteroidResponse } from './interfaces/predict-asteroid.interface';
import { ApiResponse } from '@nestjs/swagger';

@Controller('ml')
export class MlController {
  constructor(private readonly mlService: MlService) {}

  @Post('predict')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'Predicción de NEO', type: PredictAsteroidDto })
  async predict(@Body() predictAsteroid: PredictAsteroidDto): Promise<PredictAsteroidResponse> {
    return this.mlService.predictNeo(predictAsteroid)
  }

  @Get('metrics')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'Métricas del modelo' })
  async getMetrics(): Promise<any> {
    return this.mlService.getMetrics();
  }
}
