import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GymService } from './gym.service';

@Controller('gyms')
export class GymController {
  constructor(private readonly gymService: GymService) {}

  // GET /gyms
  @Get()
  getAllGyms() {
    return this.gymService.getAllGyms();
  }

  // GET /gyms/:id
  @Get(':id')
  getGymById(@Param('id', ParseIntPipe) id: number) {
    console.log('Requested Gym ID:', id);

    return this.gymService.getGymById(id);
  }

  // POST /gyms
  @Post()
  addGym(@Body() body: any) {
    console.log('Request Body:', body);

    return this.gymService.addGym(body);
  }
}
