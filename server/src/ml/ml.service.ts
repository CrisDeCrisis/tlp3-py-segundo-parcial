import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PredictAsteroidDto } from './dto/predic-asteroid.dto';
import axios from 'axios';
import { PredictAsteroidResponse } from './interfaces/predict-asteroid.interface';

@Injectable()
export class MlService {

  async predictNeo(data: PredictAsteroidDto): Promise<PredictAsteroidResponse> {
    try {
      const response = await axios.post('http://localhost:8000/predict', data);
      return response.data;
    } catch (error) {
      throw new InternalServerErrorException('No se pudo obtener la predicción del modelo', error)
    }
  }
}
