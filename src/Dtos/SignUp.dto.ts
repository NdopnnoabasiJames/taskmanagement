import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { BaseUserDto } from './base-user.dto';

export class CreateUserDto extends BaseUserDto {
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
