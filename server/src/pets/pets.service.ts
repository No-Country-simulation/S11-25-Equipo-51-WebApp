import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class PetsService {

  constructor(private readonly prisma: PrismaService,
              private readonly cloudinaryService: CloudinaryService,
  ) {}



   // ------------------- CREATE  -------------------
  async createWithImages(createPetDto: CreatePetDto, files: Express.Multer.File[]) {
    let photo_urls: string[] = [];

    // Subir imágenes a Cloudinary si hay archivos
    if (files && files.length > 0) {
      photo_urls = await this.cloudinaryService.uploadMultipleImages(files, 'pets');
    }

    return await this.prisma.pet.create({
      data: {
        ...createPetDto,
        photo_urls, // Usar las URLs de Cloudinary
      },
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



  // ---------------------- UPDATE WITH IMAGES ----------------------
  async updateWithImages(id: string, updatePetDto: UpdatePetDto, files: Express.Multer.File[]) {
    let photo_urls: string[] = [];

    // Subir nuevas imágenes a Cloudinary
    if (files && files.length > 0) {
      photo_urls = await this.cloudinaryService.uploadMultipleImages(files, 'pets');
    }

    return await this.prisma.pet.update({
      where: { id },
      data: {
        ...updatePetDto,
        ...(files.length > 0 && { photo_urls }), // Solo actualiza si hay nuevas imágenes
      },
    });
  }

  // ---------------------- ADD IMAGES TO PET ----------------------
  async addImages(id: string, files: Express.Multer.File[]) {
    const pet = await this.findOne(id);
    
    // Subir nuevas imágenes
    const newPhotoUrls = await this.cloudinaryService.uploadMultipleImages(files, 'pets');
    
    // Combinar imágenes existentes con las nuevas
    return await this.prisma.pet.update({
      where: { id },
      data: {
        photo_urls: [...pet.photo_urls, ...newPhotoUrls],
      },
    });
  }

  // ---------------------- DELETE ----------------------
  async remove(id: string) {
    return await this.prisma.pet.delete({
      where: { id },
    });
  }
}