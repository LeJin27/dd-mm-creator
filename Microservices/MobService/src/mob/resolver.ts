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
import { Request } from "express"
import { MobService } from "./service";


@Resolver()
export class MobResolver {

  @Query(() => String)
  dummy(): string {
    return "OK";
  }

  @Authorized('user')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query(() => [Mob])
  async getAll(
    @Ctx() Request: Request
  ): Promise<Mob[]> {

    const user = Request.user?.id
    const mobs = await new MobService().getAll();
    return mobs;
  }
}



