import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response.dto';
import { RegisterResponse } from './dto/register-response.dto';
import { User } from '../users/users.model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => String)
  hello() {
    return 'Hello from AuthResolver!';
  }

  @Mutation(() => LoginResponse)
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Mutation(() => RegisterResponse)
  async register(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const user = await this.authService.register(email, password);
    return { user };
  }

  @Mutation(() => LoginResponse)
  async biometricLogin(@Args('biometricKey') biometricKey: string) {
    const user = await this.authService.validateBiometric(biometricKey);
    if (!user) {
      throw new Error('Invalid biometric key');
    }
    return this.authService.login(user);
  }
}
