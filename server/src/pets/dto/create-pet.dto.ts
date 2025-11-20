import { IsString, IsOptional, IsNumber, IsUUID, IsArray, IsUrl, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePetDto {
  
  @ApiProperty({
    description: 'Nombre de la mascota',
    example: 'Luna',
  })
  @IsString()
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: 'Edad aproximada de la mascota (en años)',
    example: 3,
    required: false,
  })
  @IsOptional()
  @IsString()
  age?: string;

  @ApiProperty({
    description: 'Peso de la mascota en kilogramos',
    example: 12.5,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  weight?: number;

  @ApiProperty({
    description: 'Especie de la mascota (perro, gato, etc.)',
    example: 'perro',
  })
  @IsString()
  specie: string;

  @ApiProperty({
    description: 'Raza de la mascota',
    example: 'Labrador',
    required: false,
  })
  @IsOptional()
  @IsString()
  breed?: string;

  @ApiProperty({
    description: 'Lista de URLs de fotos de la mascota',
    example: ['https://misfotos.com/luna1.jpg'],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsUrl({}, { each: true })
  photo_urls?: string[];

  @ApiProperty({
    description: 'ID del usuario dueño de la mascota',
    example: '8b3e1a49-3f3b-452a-a374-4ccc99af4a13',
  })
  @IsUUID()
  owner_id: string;
}
