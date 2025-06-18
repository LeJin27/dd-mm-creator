import {
  Query,
  Resolver,
  Mutation,
  Arg,
  Authorized,
  Ctx,
  Int
} from "type-graphql"


@Resolver()
export class TemplateResolver {

  @Query(() => String)
  dummy(): string {
    return "OK";
  }
}



