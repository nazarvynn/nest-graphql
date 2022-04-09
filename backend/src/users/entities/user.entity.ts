import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

ObjectType();
@Entity('users')
export class User {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  email: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field()
  @Column()
  createdAt: Date;

  @Field()
  @Column()
  updatedAt: Date;

  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
}
