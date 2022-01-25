import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";

@Schema()
export class Url {
    @Prop({required: true, index: true})
    originalURL: string

    @Prop({index: true})
    path: string
}

export const UrlSchema = SchemaFactory.createForClass(Url)