import { IsEmail, IsNotEmpty } from 'class-validator';
import { BaseUserDto } from './base-user.dto';

export class LoginDto extends BaseUserDto {
  @IsNotEmpty()
  password: string;
}
