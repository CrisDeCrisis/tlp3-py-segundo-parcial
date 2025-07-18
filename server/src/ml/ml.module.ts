import { Module } from '@nestjs/common';
import { MlService } from './ml.service';
import { MlController } from './ml.controller';

@Module({
  controllers: [MlController],
  providers: [MlService],
})
export class MlModule {}
