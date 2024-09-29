import { HttpStatus, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { PrismaService } from '../prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // Add the useFactory option for custom error formatting
      formatError: (error) => {
        const originalError = error.extensions?.originalError as any;

        if (!originalError) {
          return {
            message: error.message,
            code: HttpStatus[error.extensions?.code as string],
          };
        }
        return {
          message: originalError.message,
          code: HttpStatus[error.extensions?.code as string],
        };
      },
    }),
    AuthModule,
    UsersModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
