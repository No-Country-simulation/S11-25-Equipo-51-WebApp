import { Test, TestingModule } from '@nestjs/testing';
import { NutritionRecordsService } from './nutrition-records.service';

describe('NutritionRecordsService', () => {
  let service: NutritionRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionRecordsService],
    }).compile();

    service = module.get<NutritionRecordsService>(NutritionRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
