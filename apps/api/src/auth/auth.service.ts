import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly users: UsersService,
    private readonly jwt: JwtService,
  ) {}

  async register(email: string, password: string) {
    const existing = await this.users.findByEmail(email);
    if (existing) {
      throw new ConflictException('Un compte existe déjà avec cet email.');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await this.users.create(email, passwordHash);
    const accessToken = await this.signUser(user.id, user.email);
    return { accessToken, user };
  }

  async login(email: string, password: string) {
    const user = await this.users.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email ou mot de passe invalide.');
    }
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      throw new UnauthorizedException('Email ou mot de passe invalide.');
    }
    const accessToken = await this.signUser(user.id, user.email);
    return {
      accessToken,
      user: { id: user.id, email: user.email, createdAt: user.createdAt },
    };
  }

  private signUser(userId: string, email: string) {
    return this.jwt.signAsync({ sub: userId, email });
  }
}
