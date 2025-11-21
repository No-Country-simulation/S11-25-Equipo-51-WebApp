import { Injectable, Inject } from '@nestjs/common';
import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';
import { Express } from 'express';

@Injectable()
export class CloudinaryService {
  constructor(@Inject('CLOUDINARY') private readonly cloudinary) {}

  // Subir una sola imagen
  async uploadImage(file: Express.Multer.File, folder: string = 'pets'): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `petcare/${folder}`,
          resource_type: 'image',
        },
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (error) {
            reject(new Error(`Error uploading to Cloudinary: ${error.message}`));
          } else {
            resolve(result.secure_url);
          }
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  // Subir muchas imágenes
  async uploadMultipleImages(files: Express.Multer.File[], folder: string = 'pets'): Promise<string[]> {
    const uploadPromises = files.map(file => this.uploadImage(file, folder));
    return Promise.all(uploadPromises);
  }

  // Subir PDF o documento
  async uploadDocument(file: Express.Multer.File, folder: string = 'documents'): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `petcare/${folder}`,
          resource_type: 'auto', // Detecta automáticamente el tipo
        },
        (error: UploadApiErrorResponse, result: UploadApiResponse) => {
          if (error) {
            reject(new Error(`Error uploading document: ${error.message}`));
          } else {
            resolve(result.secure_url);
          }
        },
      );

      uploadStream.end(file.buffer);
    });
  }

  // Eliminar archivo por URL
  async deleteFile(url: string): Promise<void> {
    try {
      const publicId = this.extractPublicIdFromUrl(url);
      if (!publicId) {
        throw new Error('Could not extract public ID from URL');
      }
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      throw new Error(`Error deleting file: ${error.message}`);
    }
  }

  // Extraer public_id de la URL de Cloudinary
  private extractPublicIdFromUrl(url: string): string {
    const matches = url.match(/\/upload\/(?:v\d+\/)?([^\.]+)/);
    return matches ? matches[1] : '';
  }
}