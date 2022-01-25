import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsResolver } from './urls.resolver';
import { IURL_REPOSITORY } from './interface/url.repository.interface';
import { UrlMongooseRepository } from './urls.mongoose.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Url as UrlDocument, UrlSchema } from './schema/url.schema';

@Module({
  providers: [
    UrlsResolver,
    UrlsService,
    {
      provide: IURL_REPOSITORY,
      useClass: UrlMongooseRepository
    }
  ],
  imports:[
    MongooseModule.forFeature([
      {
          name: UrlDocument.name,
          schema: UrlSchema
      }
    ])
  ]
})
export class UrlsModule {}
