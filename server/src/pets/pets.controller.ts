import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  // --------------------- CREATE ---------------------
  @Post(':ownerId')
  create(
    @Param('ownerId') ownerId: string,
    @Body() createPetDto: CreatePetDto,
  ) {
    return this.petsService.create(ownerId, createPetDto);
  }

  // --------------------- FIND ALL BY OWNER ---------------------
  @Get(':ownerId')
  findAllByOwner(@Param('ownerId') ownerId: string) {
    return this.petsService.findAllByUser(ownerId);
  }

  // --------------------- FIND ONE ---------------------
  @Get(':ownerId/:id')
  findOne(
    @Param('ownerId') ownerId: string,
    @Param('id') id: string,
  ) {
    return this.petsService.findOne(id, ownerId);
  }

  // --------------------- UPDATE ---------------------
  @Patch(':ownerId/:id')
  update(
    @Param('ownerId') ownerId: string,
    @Param('id') id: string,
    @Body() updatePetDto: UpdatePetDto,
  ) {
    return this.petsService.update(id, ownerId, updatePetDto);
  }

  // --------------------- DELETE ---------------------
  @Delete(':ownerId/:id')
  remove(
    @Param('ownerId') ownerId: string,
    @Param('id') id: string,
  ) {
    return this.petsService.remove(id, ownerId);
  }
}
