import { PartialType } from '@nestjs/swagger';
import { CreateNutritionRecordDto } from './create-nutrition-record.dto';

export class UpdateNutritionRecordDto extends PartialType(CreateNutritionRecordDto) { }
