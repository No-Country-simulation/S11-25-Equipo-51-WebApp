import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Query, 
  UseInterceptors, 
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator 
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ResponsePetDto } from './dto/response-pet.dto';
import { ApiOkResponse, ApiCreatedResponse, ApiQuery, ApiConsumes, ApiBody } from '@nestjs/swagger';

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}



  // --------------------- CREATE ---------------------
  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiCreatedResponse({ type: ResponsePetDto })
  @UseInterceptors(FilesInterceptor('photo_urls', 10))
  @ApiBody({ type: CreatePetDto }) // ← Usa el DTO directamente
  createWithImages(
    @Body() createPetDto: CreatePetDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|webp)' }),
        ],
        fileIsRequired: false,
      }),
    )
    files: Express.Multer.File[],
  ) {
    return this.petsService.createWithImages(createPetDto, files || []);
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
  @Patch(':id/')
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ type: ResponsePetDto })
  @UseInterceptors(FilesInterceptor('photo_urls', 10))
  @ApiBody({ type: UpdatePetDto })
  updateWithImages(
    @Param('id') id: string,
    @Body() updatePetDto: UpdatePetDto,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|webp)' }),
        ],
        fileIsRequired: false,
      }),
    )
    files: Express.Multer.File[],
  ) {
    return this.petsService.updateWithImages(id, updatePetDto, files || []);
  }

  // --------------------- ADD IMAGES ---------------------
  @Post(':id/images')
  @ApiConsumes('multipart/form-data')
  @ApiOkResponse({ type: ResponsePetDto })
  @UseInterceptors(FilesInterceptor('images', 10))
  addImages(
    @Param('id') id: string,
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg|webp)' }),
        ],
        fileIsRequired: true,
      }),
    )
    files: Express.Multer.File[],
  ) {
    return this.petsService.addImages(id, files);
  }

  // --------------------- DELETE ---------------------
  @Delete(':id')
  @ApiOkResponse({ type: ResponsePetDto })
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}