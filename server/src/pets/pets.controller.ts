import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ResponsePetDto } from './dto/response-pet.dto';
import { ApiOkResponse, ApiCreatedResponse, ApiQuery } from '@nestjs/swagger';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  // --------------------- CREATE ---------------------
  @Post()
  @ApiCreatedResponse({ type: ResponsePetDto })
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  // --------------------- FIND ALL BY OWNER ---------------------
  @Get()
  @ApiOkResponse({ type: ResponsePetDto, isArray: true })
  @ApiQuery({ name: 'ownerId', required: true, type: String })
  findAllByOwner(@Query('ownerId') ownerId: string) {
    return this.petsService.findAllByUser(ownerId);
  }

  // --------------------- FIND ONE ---------------------
  @Get(':id')
  @ApiOkResponse({ type: ResponsePetDto })
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  // --------------------- UPDATE ---------------------
  @Patch(':id')
  @ApiOkResponse({ type: ResponsePetDto })
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  // --------------------- DELETE ---------------------
  @Delete(':id')
  @ApiOkResponse({ type: ResponsePetDto })
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}