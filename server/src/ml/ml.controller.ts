import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { MlService } from './ml.service';
import { PredictAsteroidDto } from './dto/predic-asteroid.dto';
import { PredictAsteroidResponse } from './interfaces/predict-asteroid.interface';

@Controller('ml')
export class MlController {
  constructor(private readonly mlService: MlService) {}

  @Post('predict')
  @HttpCode(200)
  async predict(@Body() predictAsteroid: PredictAsteroidDto): Promise<PredictAsteroidResponse> {
    return this.mlService.predictNeo(predictAsteroid)
  }
}
