import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';

@Injectable()
export class GymService {
  private gyms = [
    {
      id: 1,
      name: 'Gold Gym',
      location: 'Pune',
    },
    {
      id: 2,
      name: 'Power Fitness',
      location: 'Mumbai',
    },
  ];

  getAllGyms() {
    return this.gyms;
  }

  getGymById(id: number) {
    return this.gyms.find((gym) => gym.id === id);
  }

  addGym(createGymDto: CreateGymDto) {
    const newGym = {
      id: this.gyms.length + 1,
      ...createGymDto,
    };

    this.gyms.push(newGym);

    return {
      message: 'Gym Added Successfully',
      data: newGym,
    };
  }
}
