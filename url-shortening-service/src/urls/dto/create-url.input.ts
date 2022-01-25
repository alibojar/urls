import { InputType, Field, PartialType } from '@nestjs/graphql';
import { Url } from '../entities/url.entity';

@InputType()
export class CreateUrlInput extends PartialType(Url) {
  @Field(() => String, { description: 'URL to be shortened' })
  originalURL: string
}
