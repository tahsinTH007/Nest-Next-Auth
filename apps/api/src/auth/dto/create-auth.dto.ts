import { IsEmail, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
