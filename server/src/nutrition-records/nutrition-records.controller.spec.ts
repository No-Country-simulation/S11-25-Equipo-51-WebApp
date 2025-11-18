import { Test, TestingModule } from '@nestjs/testing';
import { NutritionRecordsController } from './nutrition-records.controller';
import { NutritionRecordsService } from './nutrition-records.service';

describe('NutritionRecordsController', () => {
  let controller: NutritionRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionRecordsController],
      providers: [NutritionRecordsService],
    }).compile();

    controller = module.get<NutritionRecordsController>(NutritionRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
