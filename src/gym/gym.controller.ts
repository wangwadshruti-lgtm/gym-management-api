import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { GymService } from './gym.service';
import { CreateGymDto } from './dto/create-gym.dto';

@Controller('gyms')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  @Get()
  getAllGyms() {
    return this.gymService.getAllGyms();
  }

  @Get(':id')
  getGymById(@Param('id', ParseIntPipe) id: number) {
    return this.gymService.getGymById(id);
  }

  @Post()
  addGym(@Body() createGymDto: CreateGymDto) {
    return this.gymService.addGym(createGymDto);
  }
}
