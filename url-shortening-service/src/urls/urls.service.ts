import { Inject, Injectable } from '@nestjs/common';
import { CreateUrlInput } from './dto/create-url.input';
import { IUrlRepository } from './interface/url.repository.interface';
import { customAlphabet } from 'nanoid';


@Injectable()
export class UrlsService {
	nanoid

	constructor(@Inject('IUrlRepository') private repository: IUrlRepository) {
		const lowerAlphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';
		this.nanoid = customAlphabet(lowerAlphaNum, 8)	
	}

	create(createUrlInput: CreateUrlInput) {
		createUrlInput.path = this.nanoid()
		return this.repository.create(createUrlInput)
	}

	findAll() {
		return this.repository.findAll()
	}

	findOne(path: string) {
		return this.repository.findOne(path)
	}

	remove(path: string) {
		return this.repository.remove(path)
	}
}
