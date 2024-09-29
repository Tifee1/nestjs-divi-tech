# Documentation

## How to Run the Project

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Tifee1/nestjs-divi-tech.git
cd nestjs-divi-tech
```

### 2. Install Dependencies

Use **npm** (or **yarn**) to install all required dependencies:

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the project root based on the provided `.env.example`:

```
DATABASE_URL="postgresql://<user>:<password>@localhost:5432/nest_db"
JWT_SECRET="your-jwt-secret"
```

Replace `<user>` and `<password>` with your PostgreSQL credentials.

### 4. Run PostgreSQL with Docker

Start the PostgreSQL container using Docker:

```bash
docker-compose up -d
```

This will set up the database on `localhost:5432`.

### 5. Prisma Migrations

Run Prisma migrations to set up the database schema:

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

### 6. Run the Application

Now, you can run the application in **development mode**:

```bash
npm run start:dev
```

The NestJS server will start at `http://localhost:3000`.

### 7. Access GraphQL Playground

Visit the GraphQL playground in your browser:

```
http://localhost:3000/graphql
```

You can now test the GraphQL API directly by sending queries and mutations.

### 8. Example GraphQL Mutations

- **Register a New User:**

```graphql
mutation {
  register(email: "user@example.com", password: "password123") {
    token
  }
}
```

- **Login with Email and Password:**

```graphql
mutation {
  login(email: "user@example.com", password: "password123") {
    token
  }
}
```

- **Login with Biometric Key:**

```graphql
mutation {
  biometricLogin(biometricKey: "unique-biometric-key") {
    token
  }
}
```
