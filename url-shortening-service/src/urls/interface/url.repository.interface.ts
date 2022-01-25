import { CreateUrlInput } from '../dto/create-url.input';
import { Url as UrlDocument } from '../schema/url.schema';

export interface IUrlRepository {
  create(createUrlInput: CreateUrlInput): Promise<UrlDocument>
  findAll(): Promise<UrlDocument[]>
  findOne(path: string): Promise<UrlDocument|null>
  remove(path: string): Promise<UrlDocument|null>
}

export const IURL_REPOSITORY = 'IUrlRepository'
