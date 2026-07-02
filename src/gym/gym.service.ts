import { Injectable } from '@nestjs/common';

@Injectable()
export class GymService {
  private gyms: {
    id: number;
    name: string;
    location: string;
  }[] = [
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

  addGym(gym: { name: string; location: string }) {
    const newGym = {
      id: this.gyms.length + 1,
      name: gym.name,
      location: gym.location,
    };

    this.gyms.push(newGym);

    return {
      message: 'Gym Added Successfully',
      data: newGym,
    };
  }
}
