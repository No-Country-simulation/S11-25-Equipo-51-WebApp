import { Module } from '@nestjs/common';
import { NutritionRecordsService } from './nutrition-records.service';
import { NutritionRecordsController } from './nutrition-records.controller';

@Module({
  controllers: [NutritionRecordsController],
  providers: [NutritionRecordsService],
})
export class NutritionRecordsModule {}
