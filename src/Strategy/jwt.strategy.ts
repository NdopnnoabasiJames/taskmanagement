import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extracts the token from the Bearer token in the header
      secretOrKey: process.env.MY_JWT_SECRET,
    });
  }

  async validate(payload: { sub: string; email: string; role: string }) {
    return { userId: payload.sub, role: payload.role }; // Return the userId and role from the payload
  }
}
