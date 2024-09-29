import { Resolver, Query } from '@nestjs/graphql';
import { User } from './users.model';

@Resolver(() => User)
export class UsersResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
