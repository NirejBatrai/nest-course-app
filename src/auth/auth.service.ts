import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthUser } from './entities/auth.entity';
import { RegisterDto } from './dto/register.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthUser)
    private readonly authUserModel: typeof AuthUser,
  ) {}

  async register(registerDto: RegisterDto) {
    const authuser = await this.authUserModel.findOne({
      where: { email: registerDto.email },
    });
    if (authuser) {
      throw new BadRequestException(
        'This email is already exsits. Please try again',
      );
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(registerDto.password, salt);

    const newUser = await this.authUserModel.create({
      username: registerDto.username,
      email: registerDto.email,
      password: hashPassword,
    });
    return newUser;
  }
}
