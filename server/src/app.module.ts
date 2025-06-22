import { Module } from '@nestjs/common';
import { MlModule } from './ml/ml.module';

@Module({
  imports: [MlModule],
  controllers: [],
  providers: [],
  exports: []

})
export class AppModule {}
