import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UrlsService } from './urls.service';
import { Url } from './entities/url.entity';
import { CreateUrlInput } from './dto/create-url.input';

@Resolver(() => Url)
export class UrlsResolver {
	constructor(private readonly urlsService: UrlsService) { }

	@Mutation(() => Url)
	createUrl(@Args('createUrlInput') createUrlInput: CreateUrlInput) {
		return this.urlsService.create(createUrlInput);
	}

	@Query(() => [Url], { name: 'urls' })
	findAll() {
		return this.urlsService.findAll();
	}

	@Query(() => Url, { name: 'url' })
	findOne(@Args('path', { type: () => String }) path: string) {
		return this.urlsService.findOne(path);
	}

	@Mutation(() => Url)
	removeUrl(@Args('path', { type: () => String }) path: string) {
		return this.urlsService.remove(path);
	}
}
