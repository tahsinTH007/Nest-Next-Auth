import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  signup(createAuthDto: CreateAuthDto) {
    const existingUser = this.userService.findByEmail(createAuthDto.email);
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    return this.userService.create({
      name: createAuthDto.name,
      email: createAuthDto.email,
      password: createAuthDto.password,
    });
  }
}
