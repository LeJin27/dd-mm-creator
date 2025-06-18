import {
  Query,
  Resolver,
  Mutation,
  Arg,
  Authorized,
  Ctx,
  Int
} from "type-graphql"
import { Mob } from "./schema";


@Resolver()
export class MobResolver {

  @Query(() => String)
  dummy(): string {
    return "OK";
  }

  @Authorized('user')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query(() => [Mob])
  getAll(): Mob[] {
    const dummyMob = {
  id: '50990564-ac2d-47b6-be71-f1f557878c0c',
  name: 'carrion_eater_B',
  image: 'random_image_url',
  size: 1,
  description: 'not null'
}
    return [dummyMob];
  }
}



