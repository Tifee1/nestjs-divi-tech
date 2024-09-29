import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(email: string, password: string): Promise<User> {
    return this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }

  async findByBiometricKey(biometricKey: string): Promise<User | null> {
    return this.prisma.user.findFirst({ where: { biometricKey } });
  }
}
