import { IsOptional, IsString } from 'class-validator';

export class UpdateGymDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  location?: string;
}
