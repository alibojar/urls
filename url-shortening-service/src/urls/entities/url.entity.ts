import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLURL } from 'graphql-scalars'

@ObjectType()
export class Url {
  @Field(() => GraphQLURL)
  originalURL: string

  @Field(() => String)
  path: string
}
