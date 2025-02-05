import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MailModule } from '../mail/mail.module';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from 'src/schema/user.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      global:true,
      inject: [ConfigService],
      useFactory:(ConfigService:ConfigService) => ({
        secret: ConfigService.getOrThrow('JWT_SECRET'),
        signOptions: { expiresIn: '30m' }, //Token will last 30 minutes
      }),
    }),
    PassportModule,
    MailModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
