import { IsEmail, IsNotEmpty } from 'class-validator';

export class BaseUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;
}