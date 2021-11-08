export enum paths {
	home = '/home',
	characters = '/characters',
	comics = '/comics',
	stories = '/stories',
	search = '/search_query=',
	page = '&page=',
	comic = '&comic=',
	story = '&story=',
	format = '&format=',
}

export enum API {
	characters = 'https://gateway.marvel.com/v1/public/characters',
	comics = 'https://gateway.marvel.com/v1/public/comics',
	stories = 'https://gateway.marvel.com/v1/public/stories',
	limit = 'limit=',
	offset = 'offset=',
	search = 'nameStartsWith=',
	comic = 'comic=',
	story = 'story=',
	format = 'format=',
}
