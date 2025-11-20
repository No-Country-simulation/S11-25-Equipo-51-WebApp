import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PetsService {


    constructor(private readonly prisma: PrismaService) {}


// ------------------- Create pet with ownerId -------------------
    async create(ownerId: string, createPetDto: CreatePetDto) {
    return await this.prisma.pet.create({
      data: {
        ...createPetDto,
      owner_id: ownerId
      }
    });
  }

// ----------------------Find all pets by userId---------------------

  async findAllByUser(ownerId: string) {
    return await this.prisma.pet.findMany({
      where: {
        owner_id: ownerId
      },
      include:{
        health_records: true,
        nutrition_records: true,
        reminders: true,
      },
    });
  }


  // ---------------------- Find one pet by id and ownerId ----------------------

  async findOne(id: string, ownerId: string) {
    const pet = await this.prisma.pet.findFirst({
      where: {
        id: id,
        owner_id: ownerId,

  },
   include:{
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


  // ---------------------- Update pet by id and ownerId ----------------------
 async update(id: string, ownerId:string, updatePetDto: UpdatePetDto) {
    await this.findOne(id, ownerId);


    return await this.prisma.pet.update({
      where: { id },
      data: updatePetDto,
    });
  }



  // ---------------------- Remove pet by id and ownerId ----------------------

  async remove(id: string, ownerId:string) {
    
    await this.findOne(id, ownerId);

    return await this.prisma.pet.delete({
      where: { id },
    });
  }
}
