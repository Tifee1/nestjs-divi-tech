import { ObjectType, Field } from '@nestjs/graphql';
import { User } from '../../users/users.model';

@ObjectType()
export class RegisterResponse {
  @Field(() => User)
  user: User;
}
