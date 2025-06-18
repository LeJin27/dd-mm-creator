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

  @Authorized('driver')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query(() => String)
  template(): string {
    return "AuthorizedTemplate";
  }
}



