import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUrlInput } from './dto/create-url.input';
import { Url as UrlDocument } from './schema/url.schema'
import { IUrlRepository } from './interface/url.repository.interface'

@Injectable()
export class UrlMongooseRepository implements IUrlRepository {
    constructor(
        @InjectModel(UrlDocument.name) private urlModel: Model<UrlDocument>
    ) { }

    async create(createUrlInput: CreateUrlInput): Promise<UrlDocument> {
        return this.urlModel.create(createUrlInput)
    }

    async findAll(): Promise<UrlDocument[]> {
        return this.urlModel.find().exec()
    }

    async findOne(path: string): Promise<UrlDocument | null> {
        return this.urlModel.findById(path).exec()
    }

    async remove(path: string): Promise<UrlDocument | null> {
        return this.urlModel
            .findByIdAndDelete(path)
            .exec()
    }

}