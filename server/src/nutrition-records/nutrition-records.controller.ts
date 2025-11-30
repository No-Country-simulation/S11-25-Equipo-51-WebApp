import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
  ApiQuery
} from '@nestjs/swagger';
import { NutritionRecordsService } from './nutrition-records.service';
import { CreateNutritionRecordDto } from './dto/create-nutrition-record.dto';
import { UpdateNutritionRecordDto } from './dto/update-nutrition-record.dto';
import { ResponseNutritionRecordDto } from './dto/response-nutrition-record.dto';

@ApiTags('nutrition-records')
@Controller('nutrition-records')
export class NutritionRecordsController {
  constructor(private readonly nutritionRecordsService: NutritionRecordsService) { }

  // --------------------- CREATE ---------------------
  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo registro nutricional',
    description: 'Crea un nuevo registro nutricional para una mascota existente'
  })
  @ApiCreatedResponse({
    type: ResponseNutritionRecordDto,
    description: 'Registro nutricional creado exitosamente'
  })
  @ApiBadRequestResponse({ description: 'Datos de entrada inválidos' })
  @ApiNotFoundResponse({ description: 'Mascota no encontrada' })
  create(@Body() createNutritionRecordDto: CreateNutritionRecordDto) {
    return this.nutritionRecordsService.create(createNutritionRecordDto);
  }

  // --------------------- FIND ALL ---------------------
  @Get()
  @ApiOperation({
    summary: 'Obtener todos los registros nutricionales',
    description: 'Obtiene todos los registros nutricionales. Opcionalmente se puede filtrar por mascota usando el query parameter petId'
  })
  @ApiQuery({
    name: 'petId',
    required: false,
    type: String,
    description: 'UUID de la mascota para filtrar los registros'
  })
  @ApiOkResponse({
    type: ResponseNutritionRecordDto,
    isArray: true,
    description: 'Lista de registros nutricionales obtenida exitosamente'
  })
  findAll(@Query('petId') petId?: string) {
    return this.nutritionRecordsService.findAll(petId);
  }

  // --------------------- FIND BY PET ID ---------------------
  @Get('pet/:petId')
  @ApiOperation({
    summary: 'Obtener registros nutricionales de una mascota',
    description: 'Obtiene todos los registros nutricionales asociados a una mascota específica'
  })
  @ApiOkResponse({
    type: ResponseNutritionRecordDto,
    isArray: true,
    description: 'Registros nutricionales de la mascota obtenidos exitosamente'
  })
  @ApiNotFoundResponse({ description: 'Mascota no encontrada' })
  findByPetId(@Param('petId') petId: string) {
    return this.nutritionRecordsService.findByPetId(petId);
  }

  // --------------------- FIND ONE ---------------------
  @Get(':id')
  @ApiOperation({
    summary: 'Obtener un registro nutricional por ID',
    description: 'Obtiene un registro nutricional específico usando su UUID'
  })
  @ApiOkResponse({
    type: ResponseNutritionRecordDto,
    description: 'Registro nutricional obtenido exitosamente'
  })
  @ApiNotFoundResponse({ description: 'Registro nutricional no encontrado' })
  findOne(@Param('id') id: string) {
    return this.nutritionRecordsService.findOne(id);
  }

  // --------------------- UPDATE ---------------------
  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar un registro nutricional',
    description: 'Actualiza parcialmente un registro nutricional existente'
  })
  @ApiOkResponse({
    type: ResponseNutritionRecordDto,
    description: 'Registro nutricional actualizado exitosamente'
  })
  @ApiBadRequestResponse({ description: 'Datos de entrada inválidos' })
  @ApiNotFoundResponse({ description: 'Registro nutricional no encontrado' })
  update(@Param('id') id: string, @Body() updateNutritionRecordDto: UpdateNutritionRecordDto) {
    return this.nutritionRecordsService.update(id, updateNutritionRecordDto);
  }

  // --------------------- DELETE ---------------------
  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un registro nutricional',
    description: 'Elimina permanentemente un registro nutricional'
  })
  @ApiOkResponse({
    type: ResponseNutritionRecordDto,
    description: 'Registro nutricional eliminado exitosamente'
  })
  @ApiNotFoundResponse({ description: 'Registro nutricional no encontrado' })
  remove(@Param('id') id: string) {
    return this.nutritionRecordsService.remove(id);
  }
}
