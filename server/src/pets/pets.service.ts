import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {

  constructor(private readonly prisma: PrismaService) {}

  // ------------------- CREATE -------------------
  async create(createPetDto: CreatePetDto) {
    return await this.prisma.pet.create({
      data: createPetDto,
    });
  }

  // ---------------------- FIND ALL BY USER ---------------------
  async findAllByUser(ownerId: string) {
    return await this.prisma.pet.findMany({
      where: { owner_id: ownerId },
      include: {
        health_records: true,
        nutrition_records: true,
        reminders: true,
      },
    });
  }

  // ---------------------- FIND ONE ----------------------
  async findOne(id: string) {
    const pet = await this.prisma.pet.findUnique({
      where: { id },
      include: {
        health_records: true,
        nutrition_records: true,
        reminders: true,
      },
    });

    if (!pet) {
      throw new NotFoundException('Pet not found');
    }

    return pet;
  }

  // ---------------------- UPDATE ----------------------
  async update(id: string, updatePetDto: UpdatePetDto) {
    return await this.prisma.pet.update({
      where: { id },
      data: updatePetDto,
    });
  }

  // ---------------------- DELETE ----------------------
  async remove(id: string) {
    return await this.prisma.pet.delete({
      where: { id },
    });
  }
}