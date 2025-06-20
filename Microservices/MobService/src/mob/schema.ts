import { IsUUID, IsDateString, IsNumber} from 'class-validator'
import { Field, ID, InputType, ObjectType, } from 'type-graphql'


@ObjectType()
export class Mob {
  constructor(id: string, name: string, size: number, image?: string, description? : string) {
    this.id = id
    this.name = name
    this.size = size
    this.image = image 
    this.description = description 
  }
  @Field(() => ID)
  @IsUUID()
  id!: string

  @Field(() => String) 
  name!: string

  @Field(() => Number)
  @IsNumber()
  size!: number;

  @Field(() => String, { nullable: true }) 
  image?: string;            

  @Field(() => String, { nullable: true }) 
  description?: string;

}

@ObjectType()
export class DBMob {
  @Field(() => ID)
  id!: string

  @Field(() => Mob)
  data!: Mob
}

@InputType()
export class NewMob {

  @Field(() => String) 
  name!: string

  @Field(() => Number)
  @IsNumber()
  size!: number;

  @Field(() => String, { nullable: true }) 
  image?: string;            

  @Field(() => String, { nullable: true }) 
  description?: string;

}