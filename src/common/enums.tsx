export enum paths {
	home = '/home',
	page = '/page=',
	search = '/search_query=',
	characters = '/characters',
	comics = '/comics',
	stories = '/stories',
}

export enum API {
	characters = 'https://gateway.marvel.com/v1/public/characters',
	comics = 'https://gateway.marvel.com/v1/public/comics',
	stories = 'https://gateway.marvel.com/v1/public/stories',
	limit = 'limit=',
	offset = 'offset=',
	search = 'nameStartsWith='
}
