import { Module } from '@nestjs/common';
import { NutritionRecordsService } from './nutrition-records.service';
import { NutritionRecordsController } from './nutrition-records.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NutritionRecordsController],
  providers: [NutritionRecordsService],
  exports: [NutritionRecordsService],
})
export class NutritionRecordsModule { }
