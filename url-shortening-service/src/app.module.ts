import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { UrlsModule } from './urls/urls.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            playground: true, //this must come from a config variable
            autoSchemaFile: join(process.cwd(), 'generated/schema.gql'),
            sortSchema: true,
            debug: true, //this must come from a config variable
        }),
        MongooseModule.forRoot(process.env.MONGO_URL || 'mongodb://localhost:27017/shortened-urls'),
        UrlsModule,
    ],
})
export class AppModule { }
