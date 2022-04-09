## Description
NestJS App with
- Yarn
- TypesScript
- Postgres & Docker
- TypeORM
- GraphQL
- Migrations
- User entity

## Nest commands
```bash
# Install Nest
$ nest n nest-typeorm-users -p yarn -l TS -g

# Install TypeORM
$ yarn add @nestjs/typeorm typeorm@0.2

# Generate entity
$ nest g resource <entity>

# Generate project resources
$ yarn build
```

## Installation
```bash
$ yarn install
$ docker-compose up -d
$ npm run migration:run
```

## Running the app
```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Migration commands
```bash
# Create new empty migration
$ migration:create <migration_name>

# Generate new migration based on entity
$ migration:generate <migration_name> 

# Apply all cerated migrations
$ migration:run

# Rollback executed migrations. Migration files should be removed after rollback
$ migration:down
```

Clone git
```
$ git remote add origin git@github.com:username/new_repo
$ git push -u origin master
```

## Completed Tasks
- [ ] Setup Nest app
- [ ] Install TypeORM
- [ ] Setup Postgres with Docker
- [ ] Connect to Postgres
- [ ] Create User entity
- [ ] Create few migrations
- [ ] GraphQL
