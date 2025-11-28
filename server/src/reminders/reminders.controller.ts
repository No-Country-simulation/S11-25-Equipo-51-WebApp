import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RemindersService } from './reminders.service';
import { CreateReminderDto } from './dto/create-reminder.dto';
import { UpdateReminderDto } from './dto/update-reminder.dto';
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiBadRequestResponse,
} from '@nestjs/swagger';

@ApiTags('Reminders')
@Controller('reminders')
export class RemindersController {
  constructor(private readonly remindersService: RemindersService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo recordatorio' })
  @ApiCreatedResponse({
    description: 'Recordatorio creado correctamente',
  })
  @ApiBadRequestResponse({
    description: 'Datos inválidos para crear el recordatorio',
  })
  create(@Body() createReminderDto: CreateReminderDto) {
    return this.remindersService.create(createReminderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los recordatorios' })
  @ApiOkResponse({
    description: 'Lista de recordatorios devuelta correctamente',
  })
  findAll() {
    return this.remindersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un recordatorio por su ID' })
  @ApiOkResponse({
    description: 'Recordatorio encontrado',
  })
  @ApiNotFoundResponse({
    description: 'Recordatorio no encontrado',
  })
  findOne(@Param('id') id: string) {
    return this.remindersService.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un recordatorio existente' })
  @ApiOkResponse({
    description: 'Recordatorio actualizado correctamente',
  })
  @ApiNotFoundResponse({
    description: 'Recordatorio no encontrado',
  })
  update(@Param('id') id: string, @Body() updateReminderDto: UpdateReminderDto) {
    return this.remindersService.update(id, updateReminderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un recordatorio' })
  @ApiOkResponse({
    description: 'Recordatorio eliminado correctamente',
  })
  @ApiNotFoundResponse({
    description: 'Recordatorio no encontrado',
  })
  remove(@Param('id') id: string) {
    return this.remindersService.remove(id);
  }
}
