import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutritionRecordsService } from './nutrition-records.service';
import { CreateNutritionRecordDto } from './dto/create-nutrition-record.dto';
import { UpdateNutritionRecordDto } from './dto/update-nutrition-record.dto';

@Controller('nutrition-records')
export class NutritionRecordsController {
  constructor(private readonly nutritionRecordsService: NutritionRecordsService) {}

  @Post()
  create(@Body() createNutritionRecordDto: CreateNutritionRecordDto) {
    return this.nutritionRecordsService.create(createNutritionRecordDto);
  }

  @Get()
  findAll() {
    return this.nutritionRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutritionRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutritionRecordDto: UpdateNutritionRecordDto) {
    return this.nutritionRecordsService.update(+id, updateNutritionRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutritionRecordsService.remove(+id);
  }
}
