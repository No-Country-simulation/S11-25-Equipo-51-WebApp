import { Injectable } from '@nestjs/common';
import { CreateNutritionRecordDto } from './dto/create-nutrition-record.dto';
import { UpdateNutritionRecordDto } from './dto/update-nutrition-record.dto';

@Injectable()
export class NutritionRecordsService {
  create(createNutritionRecordDto: CreateNutritionRecordDto) {
    return 'This action adds a new nutritionRecord';
  }

  findAll() {
    return `This action returns all nutritionRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutritionRecord`;
  }

  update(id: number, updateNutritionRecordDto: UpdateNutritionRecordDto) {
    return `This action updates a #${id} nutritionRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutritionRecord`;
  }
}
